import { createElement, Fragment, useEffect, useMemo, useState } from "react"
import rehypeHighlight from "rehype-highlight"
import unified from "unified"
import rehypeParse from "rehype-parse"
import rehypeReact from "rehype-react"
import rehypeSlug from "rehype-slug"
import rehypeToc from "rehype-toc"
import { SKIP, visit } from "unist-util-visit"
import ImgSharpInline from "./ImgSharp"
import { Root } from "rehype-parse/lib"

let LANG_RE = /hljs language\-(.*)/

export const ProcessedPost = ({
    body,
    enableToc = true,
}: {
    body: string
    enableToc?: boolean
}) => {
    const Content: React.ReactElement = useMemo(() => {
        let parser = unified()
            .data("settings", { fragment: true })
            .use(rehypeParse, { fragment: true })
            .use(rehypeHighlight, { detect: true })
            .use(() => root => {
                visit(root as Root, (node, idx, parent) => {
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
                        return [SKIP, idx]
                    }

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
            })
            .use(rehypeSlug)

        if (enableToc) {
            parser = parser.use(rehypeToc, {
                headings: ["h1", "h2", "h3"], // Only include <h1> and <h2> headings in the TOC
                cssClasses: {
                    toc: "page-toc", // Change the CSS class for the TOC
                    link: "page-toc-link", // Change the CSS class for links in the TOC
                },
                customizeTOC(toc) {
                    if (
                        toc.children?.length < 1 ||
                        (toc?.children.length === 1 &&
                            //@ts-ignore
                            toc.children[0]?.children?.length === 0)
                    ) {
                        return false
                    }
                    toc.children.unshift({
                        type: "element",
                        tagName: "h3",
                        children: [
                            {
                                type: "text",
                                value: "Table of Contents",
                            },
                        ],
                    } as any)

                    return toc
                },
            })
        }
        return parser
            .use(rehypeReact, {
                createElement,
                Fragment,
                components: { "img-sharp-inline": ImgSharpInline },
            })
            .processSync(body).result as any
    }, [body, enableToc])

    return Content
}
