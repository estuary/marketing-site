import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const ImgSharpInline = ({ className, imgdata, alt }) => {
    const parsed = JSON.parse(imgdata)
    return (
        <GatsbyImage
            className={className}
            style={{ margin: "0 auto" }}
            image={parsed}
            alt={alt || "Blog Post Image"}
            loading="eager"
        />
    )
}

export default ImgSharpInline
