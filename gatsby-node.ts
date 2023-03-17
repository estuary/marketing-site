/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the template for blog post
const blogPost = path.resolve(`./src/templates/blog-post.tsx`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage, createRedirect } = actions
    
    createRedirect({
        fromPath: `/blogs`,
        toPath: `/blog`,
      })

    // Get all markdown blog posts sorted by date
    const result = await graphql(`
        {
            allStrapiBlogPost(filter: { publishedAt: { ne: null } }) {
                nodes {
                    Slug
                    id
                    tags {
                        Name
                        Slug
                        Type
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            result.errors
        )
        return
    }

    const allPosts = result.data.allStrapiBlogPost.nodes

    const categories = new Set(
        allPosts.flatMap(post =>
            post.tags
                .filter(tag => tag.Type === "category")
                .map(tag => tag.Slug)
        )
    )

    const postsByCategory = [...categories].map(category =>
        allPosts.filter(post => post.tags.some(tag => tag.Slug === category))
    )

    // Create blog posts pages
    // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
    // `context` is available in the template as a prop and as a variable in GraphQL

    for (const posts of postsByCategory) {
        if (posts.length > 0) {
            posts.forEach((post, index) => {
                const previousPostId = index === 0 ? null : posts[index - 1].id
                const nextPostId =
                    index === posts.length - 1 ? null : posts[index + 1].id

                createPage({
                    path: post.Slug,
                    component: blogPost,
                    context: {
                        id: post.id,
                        previousPostId,
                        nextPostId,
                    },
                })
            })
        }
    }
}
