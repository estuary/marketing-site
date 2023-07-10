import { createElement, Fragment, useMemo } from "react"
import unified from "unified"
import rehypeParse from "rehype-parse"
import rehypeReact from "rehype-react"
import ImgSharpInline from "./ImgSharp"

export const ProcessedPost = ({
    body,
    enableToc = true,
}: {
    body: string
    enableToc?: boolean
}) => {
    const Content: React.ReactElement = useMemo(() => {
        return unified()
            .data("settings", { fragment: true })
            .use(rehypeParse, { fragment: true })
            .use(rehypeReact, {
                createElement,
                Fragment,
                components: { "img-sharp-inline": ImgSharpInline },
            })
            .processSync(body).result as any
    }, [body, enableToc])

    return Content
}
