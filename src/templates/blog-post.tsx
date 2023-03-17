import * as React from "react"
import { Link, graphql } from "gatsby"

import dayjs from "dayjs"
import reltime from "dayjs/plugin/relativeTime"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"
import { GatsbyImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image"
import { ProcessedPost } from "../components/BlogPostProcessor"

dayjs.extend(reltime)

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
    return (
        <Layout>
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <div className="blog-post-header-vectors">
                        <StaticImage
                            placeholder="none"
                            alt="estuary logo top"
                            src="../images/estuary-top-logo-vector-2.svg"
                            className="blog-post-header-vector"
                            layout="constrained"
                            style={{
                                zIndex: 1,
                            }}
                        />
                        <StaticImage
                            placeholder="none"
                            alt="estuary logo bottom"
                            src="../images/estuary-top-logo-vector-1.svg"
                            className="blog-post-header-vector"
                            layout="constrained"
                        />
                    </div>
                    <span className="blog-post-date">{post.publishedAt}</span>
                    <h1
                        style={{
                            textAlign: "center",
                            color: "black",
                        }}
                    >
                        {post.title}
                    </h1>
                    <Bio authors={post.authors} />

                    <GatsbyImage
                        alt=""
                        image={
                            post.hero.localFile.childImageSharp.gatsbyImageData
                        }
                    />
                </header>
                <section>
                    {post.body && (
                        <ProcessedPost
                            body={post.body.data.childHtmlRehype.html}
                        />
                    )}
                </section>
            </article>
            <nav className="blog-post-nav">
                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                    }}
                >
                    <li>
                        {previous && previous.slug !== post.slug && (
                            <Link to={previous.slug} rel="prev">
                                ← {previous.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && next.slug !== post.slug && (
                            <Link to={next.slug} rel="next">
                                {next.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </Layout>
    )
}

export const Head = ({ data: { post } }) => {
    return <Seo title={post.title} description={post.excerpt?.excerpt ?? ""} />
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($id: String!, $previousId: String, $nextId: String) {
        post: strapiBlogPost(id: { eq: $id }) {
            title: Title
            publishedAt(formatString: "MMMM D, YYYY")
            body: Body {
                data {
                    Body
                    childHtmlRehype {
                        html
                    }
                }
            }
            authors {
                name: Name
                picture: Picture {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED)
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
                            formats: [AUTO, WEBP, AVIF]
                        )
                        # Further below in this doc you can learn how to use these response images
                    }
                }
            }
        }
        previous: strapiBlogPost(id: { eq: $previousId }) {
            title: Title
            authors {
                name: Name
                picture: Picture {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                    }
                }
                link: Link
            }
        }
        next: strapiBlogPost(id: { eq: $nextId }) {
            title: Title
            authors {
                name: Name
                picture: Picture {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                    }
                }
                link: Link
            }
        }
    }
`
