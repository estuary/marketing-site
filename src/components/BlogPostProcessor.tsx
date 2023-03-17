import { createElement, Fragment, useEffect, useState } from "react"
import rehypeHighlight from "rehype-highlight"
import unified from "unified"
import rehypeParse from "rehype-parse"
import rehypeReact from "rehype-react"
import rehypeSlug from "rehype-slug"
import rehypeToc from "rehype-toc"
import ImgSharpInline from "./ImgSharp"

export const ProcessedPost = ({ body }: { body: string }) => {
    const [Content, setContent] = useState<React.ReactElement>(null)

    useEffect(() => {
        unified()
            .data("settings", { fragment: true })
            .use(rehypeParse, { fragment: true })
            .use(rehypeHighlight, { detect: true })
            .use(rehypeSlug)
            .use(rehypeToc, {
                headings: ["h1", "h2"], // Only include <h1> and <h2> headings in the TOC
                cssClasses: {
                    toc: "page-outline", // Change the CSS class for the TOC
                    link: "page-link", // Change the CSS class for links in the TOC
                },
            })
            // @ts-ignore
            .use(rehypeReact, {
                createElement,
                Fragment,
                components: { "img-sharp-inline": ImgSharpInline },
            })
            .process(body)
            .then(file => {
                setContent(file.result)
            })
    }, [body])

    return Content
}
