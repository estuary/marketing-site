import * as React from "react"
import unified from "unified"
import rehypeParse from "rehype-parse"
import rehypeReact from "rehype-react"
import ImgSharpInline from "../../plugins/estuary-rehype-transformers/src/ImgSharp"

export const ProcessedPost = ({
    body,
}: {
    body: string
}) => {
    // return (JSON.stringify(body,null,4))
    return <div dangerouslySetInnerHTML={{__html: body}}></div>
}
