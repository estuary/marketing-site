import * as React from "react"
import { Link, graphql } from "gatsby"

import dayjs from "dayjs"
import reltime from "dayjs/plugin/relativeTime"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"
import { GatsbyImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image"
import { ProcessedPost } from "../components/BlogPostProcessor"
import FlowLogo from "../svgs/flow-logo.svg"

dayjs.extend(reltime)

const BlogPostTemplate = ({ data: { previous, next, post }, pageContext }) => {
    const postTags = post.tags.filter(tag => tag.type === "tag")
    return (
        <Layout headerTheme="light">
            <div className="blog-post-header-vectors">
                <FlowLogo
                    className="blog-post-header-vector"
                    style={{
                        zIndex: 1,
                    }}
                />
            </div>

            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <h1
                        style={{
                            textAlign: "left",
                            color: "black",
                        }}
                    >
                        {post.title}
                    </h1>
                    <Bio authors={post.authors} />
                    <span className="blog-post-date">{post.publishedAt}</span>

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
                </header>
                <section>
                    {post.body && (
                        <ProcessedPost
                            body={post.body.data.childHtmlRehype.html}
                        />
                    )}
                </section>
                {postTags?.length > 0 ? (
                    <section>
                        <p>
                            Keywords: {postTags.map(tag => tag.name).join(", ")}
                        </p>
                    </section>
                ) : null}
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
                        {previous && previous.slug !== post.slug && (
                            <Link to={`/${previous.slug}`} rel="prev">
                                ←<li>{previous.title}</li>
                            </Link>
                        )}
                        {next && next.slug !== post.slug && (
                            <Link to={`/${next.slug}`} rel="next">
                                <li>{next.title}</li>→
                            </Link>
                        )}
                    </ul>
                </nav>
            </article>
        </Layout>
    )
}

export const Head = ({ data: { post } }) => {
    return <Seo title={post.title} description={post.description ?? ""} />
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug(
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        post: strapiBlogPost(id: { eq: $id }) {
            title: Title
            publishedAt(formatString: "MMMM D, YYYY")
            description: Description
            slug: Slug
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
                            gatsbyImageData(
                                layout: CONSTRAINED
                                placeholder: BLURRED
                            )
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
