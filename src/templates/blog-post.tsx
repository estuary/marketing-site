import * as React from "react"
import { Link, graphql } from "gatsby"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"
import { GatsbyImage } from "gatsby-plugin-image"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { gatsbyImageData } = node.data.target
      if (!gatsbyImageData) {
        // asset is not an image
        return <span>???</span>
      }
      return <GatsbyImage image={gatsbyImageData} alt="test" />
    },
  },
}

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
        }}
      >
        {title}
      </h1>
    </div>
  </div>
)

const BlogPostTemplate = ({
  data: { previous, next, site, post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <HeroImage
            image={post.heroImage.gatsbyImageData}
            title={post.title}
          />
          <br />
          <Bio authors={post.authors} />
          <p>{post.publicationDate}</p>
        </header>
        <section>
          {post.body && renderRichText(post.body, richTextOptions)}
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
  return <Seo title={post.title} description={post.excerpt.excerpt} />
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousId: String, $nextId: String) {
    site {
      siteMetadata {
        title
      }
    }
    post: contentfulBlogPost(id: { eq: $id }) {
      contentful_id
      title
      excerpt {
        excerpt
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            # You'll need to query contentful_id in each reference
            contentful_id
            __typename
            gatsbyImageData
          }
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
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
        # Further below in this doc you can learn how to use these response images
      }
    }
    previous: contentfulBlogPost(id: { eq: $previousId }) {
      contentful_id
      title
      authors {
        name
        profilePic {
          gatsbyImageData(layout: CONSTRAINED)
        }
        link
      }
    }
    next: contentfulBlogPost(id: { eq: $nextId }) {
      contentful_id
      title
      authors {
        name
        profilePic {
          gatsbyImageData(layout: CONSTRAINED)
        }
        link
      }
    }
  }
`
