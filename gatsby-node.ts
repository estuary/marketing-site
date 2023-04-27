import { GatsbyNode, graphql } from "gatsby"
import { createRemoteFileNode } from "gatsby-source-filesystem"
import { normalizeConnector } from "./src/utils"

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the template for blog and blog post
const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
const blog = path.resolve(`./src/templates/blog.tsx`)

const connector = path.resolve(`./src/templates/connector.tsx`)
const connection = path.resolve(`./src/templates/connection.tsx`)

export const createPages: GatsbyNode["createPages"] = async ({
    graphql,
    actions,
    reporter,
}) => {
    const { createPage, createRedirect } = actions

    createRedirect({
        fromPath: `/blogs`,
        toPath: `/blog`,
    })

    // Get all strapi blog posts sorted by date
    const result = await graphql<{
        allStrapiBlogPost: {
            nodes: {
                updatedAt: any
                Slug: string
                id: string
                tags: {
                    Name: string
                    Slug: string
                    Type: string
                    IsTab: boolean
                }[]
            }[]
        }
    }>(`
        {
            allStrapiBlogPost(filter: { publishedAt: { ne: null } }) {
                nodes {
                    updatedAt
                    Slug
                    id
                    tags {
                        Name
                        Slug
                        Type
                        IsTab
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

    const categories: {
        [key: string]: {
            Type: string
            Slug: string
            Name: string
            IsTab: string
        }
    } = Object.assign(
        {},
        ...allPosts.flatMap(post =>
            post.tags
                .filter(tag => tag.Type === "category")
                .map(tag => ({ [tag.Slug]: tag }))
        )
    )

    const postsByCategory = [
        ...Object.keys(categories).map(category =>
            allPosts.filter(post =>
                post.tags.some(tag => tag.Slug === category)
            )
        ),
        // Let's not forget posts that have no category!
        allPosts.filter(post =>
            post.tags.every(tag => tag.Type !== "category")
        ),
    ]

    const tabCategories = Object.values(categories)
        .filter(cat => cat.IsTab)
        .sort((a, b) =>
            a.Slug === "featured" ? -999999999 : a.Name.localeCompare(b.Name)
        )

    for (const category of tabCategories) {
        createPage({
            path: `blog/${category.Slug}`,
            component: blog,
            context: {
                blogPostIds: allPosts
                    .filter(post =>
                        post.tags.some(tag => tag.Slug === category.Slug)
                    )
                    .map(post => post.id),
                categoryTitle: category.Name,
                categorySlug: category.Slug,
                tabCategories,
            },
        })
    }

    createPage({
        path: "blog",
        component: blog,
        context: {
            blogPostIds: allPosts.map(post => post.id),
            categoryTitle: "All",
            categorySlug: "",
            tabCategories,
        },
    })

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
                        lastMod: post.updatedAt
                    },
                })
            })
        }
    }

    const connectors = await graphql<{
        postgres: {
            allConnectors: {
                nodes: any[]
            }
        }
    }>(`
        {
            postgres {
                allConnectors(orderBy: [RECOMMENDED_DESC, CREATED_AT_DESC]) {
                    nodes {
                        id
                        externalUrl
                        imageName
                        shortDescription
                        longDescription
                        title
                        logoUrl
                        recommended
                        connectorTagsByConnectorIdList {
                            protocol
                        }
                    }
                }
            }
        }
    `)

    const mapped_connectors =
        connectors.data.postgres.allConnectors.nodes.map(normalizeConnector)

    for (const normalized_connector of mapped_connectors) {
        if (!normalized_connector.slug) {
            throw new Error(
                `Unable to figure out a slug for the connector with image: ${normalized_connector.imageName}`
            )
        } else {
            createPage({
                path: normalized_connector.slug,
                component: connector,
                context: {
                    id: normalized_connector.id,
                    type: normalized_connector.type,
                },
            })

            for (const destination_connector of mapped_connectors) {
                createPage({
                    path: `/integrations/${normalized_connector.slugified_name}-to-${destination_connector.slugified_name}`,
                    component: connection,
                    context: {
                        source_id: normalized_connector.id,
                        destination_id: destination_connector.id,
                    },
                })
            }
        }
    }
}
