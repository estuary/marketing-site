import * as React from "react"
import { Link, graphql, PageProps, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const BlogIndex = ({ data }) => {
    const posts = data.allStrapiBlogPost.nodes

    return (
        <Layout>
            <div className="blogs-index-wrapper">
                <div className="blogs-index-header-wrapper">
                    <div className="blogs-index-header">
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
                        <h2>Blog</h2>
                        <p>
                            More about Estuary and related technologies,
                            straight from the team.
                        </p>
                        <p>
                            Our blog breaks down basic concepts and takes you
                            into the minds of our engineers. We also dig into
                            the business principles that guide our company and
                            allow us to build great solutions for yours.
                        </p>
                    </div>
                </div>
                <div className="blogs-index-body">
                    <ol style={{ listStyle: `none` }}>
                        {posts.map(post => {
                            const title = post.title
                            return (
                                <li key={post.slug}>
                                    <article
                                        className="post-list-item"
                                        itemScope
                                        itemType="http://schema.org/Article"
                                    >
                                        <header>
                                            <h2>
                                                <Link
                                                    to={`/${post.slug}`}
                                                    itemProp="url"
                                                >
                                                    <span itemProp="headline">
                                                        {title}
                                                    </span>
                                                </Link>
                                            </h2>
                                            <small>{post.publishDate}</small>
                                        </header>
                                        <section>
                                            {post.excerpt ? (
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: post.excerpt
                                                            .childMarkdownRemark
                                                            .html,
                                                    }}
                                                    itemProp="description"
                                                />
                                            ) : null}
                                        </section>
                                    </article>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </Layout>
    )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ data: { post } }) => {
    return <Seo title={"Blog"} description={"Estuary Blog"} />
}

export const pageQuery = graphql`
    query BlogData {
        site {
            siteMetadata {
                title
            }
        }
        allStrapiBlogPost {
            nodes {
                title: Title
                slug: Slug
                # excerpt {
                #     childMarkdownRemark {
                #         html
                #     }
                # }
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
        }
    }
`
