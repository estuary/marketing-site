import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"

const SectionFive = () => {
    const testimonials = useStaticQuery(graphql`
        {
            allStrapiTestimonial(sort: {SortOrder: DESC}, filter: {Enabled: {eq: true}}) {
                nodes {
                    name: Name
                    body: Text
                    enabled: Enabled
                    logo: Logo {
                        localFile {
                            svg {
                                content # SVG content optimized with SVGO
                            }
                            name
                            internal {
                                mediaType
                            }
                            childImageSharp {
                                gatsbyImageData(layout: FIXED, width: 30, placeholder: BLURRED)
                            }
                        }
                    }
                }
            }
        }
    `)
    return (
        <div className="section-five">
            <div className="section-five-wrapper">
                <div className="section-five-header-wrapper">
                    <p className="section-five-header-small">Testimonials</p>
                    <h2 className="section-five-header">What our customers say</h2>
                </div>
                <div className="section-five-tile-wrapper">
                    {testimonials.allStrapiTestimonial.nodes.map(node => (
                        <div key={node.name} className="section-five-tile">
                            <p className="section-five-tile-text">{node.body}</p>
                            <div className="section-five-logo-wrapper">
                                {node.logo.localFile.internal.mediaType === "image/svg+xml" ? <div style={{ width: 24 }} dangerouslySetInnerHTML={{ __html: node.logo.localFile.svg.content }} /> :
                                    <GatsbyImage
                                        alt={`${node.name} logo`}
                                        image={
                                            node.logo.localFile.childImageSharp
                                                .gatsbyImageData
                                        }
                                        loading="eager"

                                    />}
                                <p className="section-five-tile-logo-text">
                                    {node.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionFive
