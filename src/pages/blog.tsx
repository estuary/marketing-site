import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allContentfulBlogPost.edges.map(e=>e.node)

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
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
                    <Link to={`/${post.slug}`} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.publishDate}</small>
                </header>
                <section>
                  {post.excerpt ? 
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.childMarkdownRemark.html
                    }}
                    itemProp="description"
                  /> : null}
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Blog" />

export const pageQuery = graphql`
  query BlogData {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          contentful_id
          title
          slug
          excerpt {
            childMarkdownRemark {
              html
            }
          }
          authors {
            name
            profilePic {
              gatsbyImageData(layout: CONSTRAINED)
            }
            link
          }
          heroImage {
            gatsbyImageData(layout: CONSTRAINED)
            # Further below in this doc you can learn how to use these response images
          }
        }
      }
    }
  }
`
