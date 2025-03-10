import { createElement, Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import rehypeHighlight from 'rehype-highlight';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';
import { unified } from 'unified';
import * as visit from 'unist-util-visit';
import ImgSharpInline from './ImgSharp.jsx';

const LANG_RE = /hljs language\-(.*)/;

// Checks if a node is a GatsbyImage wrapper.
function isGatsbyImageWrapper(node) {
    if (node.tagName !== 'div' || !node.properties) return false;
    const hasDataAttr = node.properties['data-gatsby-image-wrapper'] !== undefined;

    const GatsbyImageWraperClassName = 'gatsby-image-wrapper';

    const hasGatsbyImageWraperClass =
        node.properties.className &&
        (Array.isArray(node.properties.className)
            ? node.properties.className.includes(GatsbyImageWraperClassName)
            : node.properties.className.includes(GatsbyImageWraperClassName));
    return hasDataAttr || hasGatsbyImageWraperClass;
}

// Recursively find the first <a> element in a node.
function findFirstAnchor(node) {
    let found = null;
    visit(node, 'element', (child) => {
        if (child.tagName === 'a') {
            found = child;
            return visit.EXIT;
        }
    });
    return found;
}

// Recursively unwrap any <a> elements, replacing them with their children.
function unwrapAnchors(node) {
    if (!node.children) return;
    node.children = node.children.flatMap((child) => {
        if (child.type === 'element' && child.tagName === 'a') {
            // First, process children of this anchor.
            unwrapAnchors(child);
            return child.children || [];
        } else {
            unwrapAnchors(child);
            return [child];
        }
    });
}

const transform = async ({ htmlAst, htmlNode, getNode }, opts) => {
    const parentNode = await getNode(htmlNode.parent);
    const pluginOptions = opts[parentNode.internal.type];

    // First Pass: Process content and render <img-sharp-inline>
    let processor = unified()
        .use(rehypeHighlight, { detect: true })
        .use(rehypeSlug)
        .use(() => (tree) => {
            visit(tree, (node, idx, parent) => {
                // Unwrap paragraphs that contain a single <img-sharp-inline>
                if (
                    node.type === 'element' &&
                    node.tagName === 'p' &&
                    node.children.length === 1 &&
                    node.children[0].type === 'element' &&
                    node.children[0].tagName === 'img-sharp-inline'
                ) {
                    parent.children.splice(idx, 1, ...node.children);
                    // Do not traverse `node`, continue at the node *now* at `idx`.
                    return [visit.SKIP, idx];
                }

                // Remove empty text nodes inside <li>
                if (
                    node.type === 'text' &&
                    node.value.trim() === '' &&
                    parent &&
                    parent.tagName === 'li'
                ) {
                    parent.children.splice(idx, 1);
                    // Do not traverse `node`, continue at the node *now* at `idx`.
                    return [visit.SKIP, idx];
                }

                // Inject language tag for syntax highlighting if needed.
                if (
                    node.type === 'element' &&
                    node.properties &&
                    node.properties.className !== undefined
                ) {
                    const match = (
                        Array.isArray(node.properties.className)
                            ? node.properties.className
                            : [node.properties.className]
                    )
                        .join(' ')
                        .match(LANG_RE);
                    if (match) {
                        node.children.unshift({
                            type: 'element',
                            tagName: 'div',
                            properties: { className: ['language-tag'] },
                            children: [{ type: 'text', value: match[1] }],
                        });
                    }
                }
            });
        });

    if (pluginOptions.enableToc) {
        processor = processor.use(rehypeToc, {
            headings: ['h1', 'h2', 'h3'],
            cssClasses: {
                toc: 'page-toc', // Change the CSS class for the TOC
                link: 'page-toc-link', // Change the CSS class for links in the TOC
            },
            customizeTOC(toc) {
                if (
                    !toc.children ||
                    toc.children.length < 1 ||
                    (toc.children.length === 1 &&
                        (toc.children[0].children
                            ? toc.children[0].children.length === 0
                            : false))
                ) {
                    return false;
                }
                toc.children.unshift({
                    type: 'element',
                    tagName: 'h3',
                    children: [{ type: 'text', value: 'Table of Contents' }],
                });
                return toc;
            },
        });
    }

    // Map <img-sharp-inline> to the ImgSharpInline component.
    processor = processor.use(rehypeReact, {
        createElement,
        Fragment,
        components: { 'img-sharp-inline': ImgSharpInline },
    });

    // Run the first pass and produce a React tree.
    const processedAst = await processor.run(JSON.parse(JSON.stringify(htmlAst)));
    const reactElement = processor.stringify(processedAst);
    const htmlString = renderToStaticMarkup(reactElement);

    // Second Pass: Parse HTML and lift the anchor
    let newHtmlAst = unified()
        .data('settings', { fragment: true })
        .use(rehypeParse, { fragment: true })
        .parse(htmlString);

    newHtmlAst = await unified()
        .use(() => (tree) => {
            visit(tree, 'element', (node, idx, parent) => {
                if (isGatsbyImageWrapper(node)) {
                    // If the parent is already an anchor, simply remove any nested anchors.
                    if (parent && parent.tagName === 'a') {
                        unwrapAnchors(node);
                        return;
                    }
                    // Look for an anchor anywhere inside this node.
                    const anchor = findFirstAnchor(node);
                    if (anchor) {
                        // Remove all anchors inside the image wrapper.
                        unwrapAnchors(node);
                        // Wrap the entire image wrapper in a new anchor using the found anchor's properties.
                        const newAnchor = {
                            type: 'element',
                            tagName: 'a',
                            properties: anchor.properties,
                            children: [node],
                        };
                        if (parent && typeof idx === 'number') {
                            parent.children[idx] = newAnchor;
                        }
                        return [visit.SKIP, idx];
                    }
                }
            });
        })
        .run(newHtmlAst);

    Object.assign(htmlAst, newHtmlAst);
    return newHtmlAst;
};

export default transform;