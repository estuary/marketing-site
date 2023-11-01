import * as React from "react"
import { Link, graphql } from "gatsby"
import StickyBox from "react-sticky-box"

import dayjs from "dayjs"
import reltime from "dayjs/plugin/relativeTime"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"
import { GatsbyImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image"
import { ProcessedPost } from "../components/BlogPostProcessor"
import FlowLogo from "../svgs/flow-logo.svg"
import logoUrl from "../images/combination-mark__multi-blue.png"
import { useEffect, useState } from "react"
import { PopularArticles } from "../components/BlogPopularArticles"
import { RenderToc } from "../components/BlogPostToc"
import { CaseStudyPostCard } from "../components/CaseStudyPostCard"

dayjs.extend(reltime)

const CaseStudyTemplate = ({ data: { caseStudy, relatedStudies } }) => {
    console.log(relatedStudies)
    const [windowWidth, setWindowWidth] = useState(
        typeof window === "undefined" ? 1500 : window.innerWidth
    )

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        // Event listener for window resize
        window.addEventListener("resize", handleResize)

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <Layout headerTheme="light">
            <article
                className="case-study-post-root"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <h2 className="case-study-header">Case Study</h2>

                    <div className="case-study-logo">
                        {caseStudy.Logo ? (
                            <GatsbyImage
                                alt={caseStudy.Title}
                                image={
                                    caseStudy.Logo.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                                loading="eager"
                            />
                        ) : null}
                    </div>
                    <h2 className="case-study-title">
                        {caseStudy && caseStudy.Description}
                    </h2>
                </header>

                {caseStudy.body && (
                    <section className="blog-post-content">
                        <ProcessedPost
                            body={caseStudy.body.data.childHtmlRehype.html}
                        />
                    </section>
                )}
            </article>
            <div className="case-study-related-wrapper">
                <h2 className="case-study-related-header">
                    More of Our Exemplary Work
                </h2>
                {relatedStudies.nodes.slice(0, 3).map(study => (
                    <CaseStudyPostCard {...study} />
                ))}
            </div>
        </Layout>
    )
}

export const Head = ({
    data: {
        caseStudy,
        site: {
            siteMetadata: { siteUrl },
        },
    },
}) => {
    return (
        <>
            <Seo
                title={caseStudy.Title}
                description={caseStudy.Description ?? ""}
                url={`${siteUrl}/customers/${caseStudy.Slug}`}
                image={
                    caseStudy.Logo &&
                    `${siteUrl}${caseStudy.Logo.localFile.childImageSharp.meta_img.src}`
                }
            />
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": `${siteUrl}/customers/${caseStudy.Slug}`,
                    },
                    headline: caseStudy.Title,
                    description: caseStudy.Description ?? "",
                    image:
                        caseStudy.Logo &&
                        `${siteUrl}${caseStudy.Logo.localFile.childImageSharp.meta_img.src}`,
                    publisher: {
                        "@type": "Organization",
                        name: "Estuary",
                        logo: {
                            "@type": "ImageObject",
                            url: `${siteUrl}${logoUrl}`,
                        },
                    },
                    datePublished: caseStudy.machineReadablePublishDate,
                })}
            </script>
        </>
    )
}

export default CaseStudyTemplate

export const pageQuery = graphql`
    query CaseStudyQueryById($id: String!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        caseStudy: strapiCaseStudy(id: { eq: $id }) {
            body: Body {
                data {
                    Body
                    childHtmlRehype {
                        html
                    }
                }
            }
            Description
            Slug
            Logo {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                        meta_img: fixed(width: 500) {
                            src
                        }
                    }
                }
            }
            Title
            machineReadablePublishDate: publishedAt(formatString: "YYYY-MM-DD")
        }
        relatedStudies: allStrapiCaseStudy(filter: { id: { ne: $id } }) {
            nodes {
                body: Body {
                    data {
                        Body
                        childHtmlRehype {
                            html
                        }
                    }
                }
                Description
                Slug
                Logo {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: FULL_WIDTH
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                            meta_img: fixed(width: 500) {
                                src
                            }
                        }
                    }
                }
                Title
            }
        }
    }
`
