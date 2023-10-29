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

dayjs.extend(reltime)

const CaseStudyPostTemplate = ({ data: { previous, next, post }, pageContext }) => {
    const postTags = post.tags.filter(tag => tag.type === "tag")
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

    const tocBody = (
        <>
            <RenderToc items={post.body.data.childHtmlRehype.tableOfContents} />
            <div className="popular-articles">
                <PopularArticles />
            </div>

            <div className="sidebar-cta">
                <h3>Start streaming your data for free</h3>
                <Link
                    to="https://dashboard.estuary.dev/register"
                    className="pipeline-link"
                >
                    Build a Pipeline
                </Link>
            </div>
        </>
    )

    return (
        <Layout headerTheme="light">
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <div className="header-info">
                        <span className="blog-post-date">
                            {post.publishedAt}
                        </span>
                        <h1>{post.title}</h1>
                        <Bio authors={post.authors} />
                    </div>
                    <div className="hero-image">
                        {post.hero ? (
                            <GatsbyImage
                                alt={post.title}
                                image={
                                    post.hero.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                                loading="eager"
                            />
                        ) : null}
                    </div>
                </header>
                <div className="post-description">
                    {post && post.description}
                </div>
                {post.body && (
                    <section className="blog-post-content">
                        {windowWidth > 767 ? (
                            <StickyBox
                                offsetBottom={16}
                                offsetTop={16}
                                className="post-sidebar"
                            >
                                {tocBody}
                            </StickyBox>
                        ) : (
                            tocBody
                        )}

                        <ProcessedPost
                            body={post.body.data.childHtmlRehype.html}
                        />
                    </section>
                )}
                {windowWidth <= 767 && (
                    <div className="popular-articles mobile-only">
                        <PopularArticles />
                    </div>
                )}
                <div className="sidebar-cta mobile-only">
                    <h3>Start streaming your data for free</h3>
                    <Link
                        to="https://dashboard.estuary.dev/register"
                        className="pipeline-link"
                    >
                        Build a Pipeline
                    </Link>
                </div>
            </article>
        </Layout>
    )
}

export const Head = ({
    data: {
        post,
        site: {
            siteMetadata: { siteUrl },
        },
    },
}) => {
    const mappedAuthors = post.authors.map(author => ({
        name: author.name,
        url: author.link,
        image: author.picture && {
            "@type": "ImageObject",
            url: `${siteUrl}/${author.picture.localFile.childImageSharp.fixed.src}`,
        },
    }))

    const postTags = post.tags
        .filter(tag => tag.type === "tag")
        .map(t => t.name)
    return (
        <>
            <Seo
                title={post.title}
                description={post.description ?? ""}
                url={`${siteUrl}/${post.slug}`}
                image={
                    post.hero &&
                    `${siteUrl}${post.hero.localFile.childImageSharp.meta_img.src}`
                }
            />
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": `${siteUrl}/${post.slug}`,
                    },
                    headline: post.title,
                    description: post.description ?? "",
                    image:
                        post.hero &&
                        `${siteUrl}${post.hero.localFile.childImageSharp.meta_img.src}`,
                    author:
                        post.authors.length > 1
                            ? mappedAuthors
                            : mappedAuthors[0],
                    keywords: postTags,
                    publisher: {
                        "@type": "Organization",
                        name: "Estuary",
                        logo: {
                            "@type": "ImageObject",
                            url: `${siteUrl}${logoUrl}`,
                        },
                    },
                    datePublished: post.machineReadablePublishDate,
                })}
            </script>
        </>
    )
}

export default CaseStudyPostTemplate

export const pageQuery = graphql`
    query CaseStudyPostBySlug(
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        post: strapiBlogPost(id: { eq: $id }) {
            title: Title
            publishedAt(formatString: "MMMM D, YYYY")
            machineReadablePublishDate: publishedAt(formatString: "YYYY-MM-DD")
            description: Description
            slug: Slug
            body: Body {
                data {
                    Body
                    childHtmlRehype {
                        html
                        tableOfContents
                    }
                }
            }
            authors {
                name: Name
                picture: Picture {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                placeholder: BLURRED
                                quality: 100
                            )
                            fixed(width: 60) {
                                src
                            }
                        }
                    }
                }
                link: Link
            }
            hero: Hero {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            # aspectRatio: 2
                            formats: [AUTO, WEBP, AVIF]
                        )
                        meta_img: fixed(width: 500) {
                            src
                        }
                        # Further below in this doc you can learn how to use these response images
                    }
                }
            }
            tags: tags {
                name: Name
                type: Type
            }
        }
        previous: strapiBlogPost(id: { eq: $previousPostId }) {
            title: Title
            slug: Slug
            authors {
                name: Name
                picture: Picture {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                placeholder: BLURRED
                            )
                        }
                    }
                }
                link: Link
            }
        }
        next: strapiBlogPost(id: { eq: $nextPostId }) {
            title: Title
            slug: Slug
            authors {
                name: Name
                picture: Picture {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                placeholder: BLURRED
                            )
                        }
                    }
                }
                link: Link
            }
        }
    }
`
