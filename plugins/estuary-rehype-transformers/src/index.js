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

const LANG_RE = /hljs language-(.*)/;

const transform = async ({ htmlAst, htmlNode, getNode }, opts) => {
    const parentNode = await getNode(htmlNode.parent);
    const pluginOptions = opts[parentNode.internal.type];
    let processor = unified()
        .use(rehypeHighlight, { detect: true })
        .use(rehypeSlug)
        .use(() => (root) => {
            visit(root, (node, idx, parent) => {
                // Replace <p><img></p> with <img>
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

                // Clear out unneccesary "&nbsp"s inside <li>s
                if (
                    node.type === 'text' &&
                    node.value.trim().length === 0 &&
                    parent.type === 'element' &&
                    parent.tagName === 'li'
                ) {
                    parent.children.splice(idx, 1);
                    // Do not traverse `node`, continue at the node *now* at `idx`.
                    return [visit.SKIP, idx];
                }
                // Apply correct language tag classes to syntax blocks
                if (
                    node.type === 'element' &&
                    node.properties &&
                    node.properties.className !== undefined
                ) {
                    const match = (
                        node.properties.className instanceof Array
                            ? node.properties.className
                            : [node.properties.className]
                    )
                        .join(' ')
                        .match(LANG_RE);
                    if (match) {
                        node.children.unshift({
                            type: 'element',
                            tagName: 'div',
                            properties: {
                                className: ['language-tag'],
                            },
                            children: [
                                {
                                    type: 'text',
                                    value: match[1],
                                },
                            ],
                        });
                    }
                }
                return undefined;
            });
        });

    if (pluginOptions.enableToc) {
        processor = processor.use(rehypeToc, {
            headings: ['h1', 'h2', 'h3'], // Only include <h1> and <h2> headings in the TOC
            cssClasses: {
                toc: 'page-toc', // Change the CSS class for the TOC
                link: 'page-toc-link', // Change the CSS class for links in the TOC
            },
            customizeTOC(toc) {
                if (
                    !toc.children ||
                    toc.children.length < 1 ||
                    (toc.children.length === 1 &&
                        //@ts-ignore
                        (toc.children[0].children
                            ? toc.children[0].children.length === 0
                            : false))
                ) {
                    return false;
                }
                toc.children.unshift({
                    type: 'element',
                    tagName: 'h3',
                    children: [
                        {
                            type: 'text',
                            value: 'Table of Contents',
                        },
                    ],
                });

                return toc;
            },
        });
    }

    processor = processor.use(rehypeReact, {
        createElement,
        Fragment,
        components: { 'img-sharp-inline': ImgSharpInline },
    });

    const transformedAst = await processor.run(
        JSON.parse(JSON.stringify(htmlAst))
    );
    const reactElement = await processor.stringify(transformedAst);

    const reactText = renderToStaticMarkup(reactElement);

    const newHtmlAst = unified()
        .data('settings', { fragment: true })
        .use(rehypeParse, { fragment: true })
        .parse(reactText);

    Object.assign(htmlAst, newHtmlAst);

    return newHtmlAst;
};

export default transform;
