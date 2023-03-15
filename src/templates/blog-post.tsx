import * as React from "react"
import { Link, graphql } from "gatsby"

import dayjs from "dayjs"
import reltime from "dayjs/plugin/relativeTime"
import rehypeReact from "rehype-react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import ImgSharpInline from "../components/ImgSharp"

dayjs.extend(reltime)

const renderAst = new rehypeReact({
    Fragment: React.Fragment,
    createElement: React.createElement,
    // @ts-ignore
    components: { "img-sharp-inline": ImgSharpInline },
}).Compiler

const HeroImage = ({ image, title }) => (
    <div style={{ display: "grid" }}>
        {/* You can use a GatsbyImage component if the image is dynamic */}
        <GatsbyImage
            style={{
                gridArea: "1/1",
                // You can optionally force an aspect ratio for the generated image
                // aspectRatio: "3 / 1",
                maxHeight: "300px",
            }}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
            image={image}
        />
        <div
            style={{
                // By using the same grid area for both, they are stacked on top of each other
                gridArea: "1/1",
                position: "relative",
                // This centers the other elements inside the hero component
                placeItems: "center",
                display: "grid",
            }}
        >
            {/* Any content here will be centered in the component */}
            <h1
                style={{
                    textAlign: "center",
                    color: "white",
                    textShadow: "0px 0px 2px black",
                }}
            >
                {title}
            </h1>
        </div>
    </div>
)

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
    return (
        <Layout>
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <HeroImage
                        image={
                            post.hero.localFile.childImageSharp.gatsbyImageData
                        }
                        title={post.title}
                    />
                    <br />
                    <Bio authors={post.authors} />
                    {post.publicationDate && (
                        <p>{dayjs(post.publicationDate).fromNow()}</p>
                    )}
                </header>
                <section>
                    {post.body &&
                        renderAst(post.body.data.childHtmlRehype.htmlAst)}
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
            publicationDate: publishedAt
            #   excerpt {
            #     excerpt
            #   }
            body: Body {
                data {
                    Body
                    childHtmlRehype {
                        htmlAst
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
