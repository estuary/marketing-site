import * as visit from "unist-util-visit";
import { createElement, Fragment } from "react"
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import rehypeToc from "rehype-toc"
import rehypeParse from "rehype-parse"
import rehypeReact from "rehype-react"
import ImgSharpInline from "./ImgSharp"
import { unified } from "unified";

let LANG_RE = /hljs language\-(.*)/;

const transform = async ({ htmlAst, htmlNode, getNode }, opts) => {
    const parentNode = await getNode(htmlNode.parent)
    const pluginOptions = opts[parentNode.internal.type]
    let processor = unified()
        .use(rehypeHighlight, { detect: true })
        .use(rehypeSlug)
        .use(() => root => {
            visit(root, (node, idx, parent) => {
                // Replace <p><img></p> with <img>
                if (
                    node.type === "element" &&
                    node.tagName === "p" &&
                    node.children.length === 1 &&
                    node.children[0].type === "element" &&
                    node.children[0].tagName === "img-sharp-inline"
                ) {
                    parent.children.splice(idx, 1, ...node.children)
                    // Do not traverse `node`, continue at the node *now* at `idx`.
                    return [visit.SKIP, idx]
                }

                // Clear out unneccesary "&nbsp"s inside <li>s
                if(
                    node.type === "text" &&
                    node.value.trim().length === 0 &&
                    parent.type === "element" &&
                    parent.tagName === "li"
                ) {
                    parent.children.splice(idx, 1)
                    // Do not traverse `node`, continue at the node *now* at `idx`.
                    return [visit.SKIP, idx]                   
                }
                // Apply correct language tag classes to syntax blocks
                if (
                    node.type === "element" &&
                    node.properties?.className !== undefined
                ) {
                    let match = (node.properties.className instanceof Array ? node.properties.className : [node.properties.className])
                        .join(" ")
                        .match(LANG_RE)
                    if (match) {
                        node.children.unshift({
                            type: "element",
                            tagName: "div",
                            properties: {
                                className: ["language-tag"],
                            },
                            children: [
                                {
                                    type: "text",
                                    value: match[1],
                                },
                            ],
                        })
                    }
                }
            })
        });

    processor = processor.use(rehypeReact,
        {
            createElement,
            Fragment,
            components: { "img-sharp-inline": ImgSharpInline },
        }
    )

    const transformedAst = await processor.run(JSON.parse(JSON.stringify(htmlAst)));
    let reactElement = await processor.stringify(transformedAst)

    let reactText = renderToStaticMarkup(reactElement)

    const newHtmlAst = unified()
            .data("settings", { fragment: true })
            .use(rehypeParse, { fragment: true })
            .parse(reactText)

    Object.assign(htmlAst, newHtmlAst)

    return newHtmlAst
};

export default transform;