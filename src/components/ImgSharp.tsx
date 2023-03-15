import React from "react"
import Img from "gatsby-image"

const ImgSharpInline = ({ className, fluidimg, alt }) => (
    <Img
        className={className}
        fluid={fluidimg && JSON.parse(fluidimg)}
        alt={alt}
    />
)

export default ImgSharpInline
