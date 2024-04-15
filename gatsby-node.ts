import { copyLibFiles } from '@builder.io/partytown/utils';
import { GatsbyNode } from 'gatsby';
import { createRemoteFileNode } from 'gatsby-source-filesystem';
import pg from 'pg';
import { SUPABASE_CONNECTION_STRING } from './config';
import { normalizeConnector } from './src/utils';

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// Define the template for blog and blog post
const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
const blog = path.resolve(`./src/templates/blog.tsx`);
const comparisonTemplate = path.resolve(`./src/templates/product-comparison.tsx`);
const caseStudyTemplate = path.resolve(`./src/layouts/CaseStudy/index.tsx`);

const connector = path.resolve(`./src/templates/connector/index.tsx`);
const connection = path.resolve(`./src/templates/connection.tsx`);

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
    const { createPage, createRedirect } = actions;

    createRedirect({
        fromPath: `/blogs`,
        toPath: `/blog`,
    });

    // Get all strapi blog posts sorted by date
    const result = await graphql<{
        allStrapiBlogPost: {
            nodes: {
                updatedAt: any;
                Slug: string;
                id: string;
                tags: {
                    Name: string;
                    Slug: string;
                    Type: string;
                    IsTab: boolean;
                }[];
            }[];
        };
    }>(`
    {
      allStrapiBlogPost(sort: { publishedAt: DESC }, filter: { publishedAt: { ne: null } }) {
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
  `);

    const caseStudyPages = await graphql<{
        allStrapiCaseStudy: {
            nodes: {
                Slug: string;
                id: string;
            }[];
        };
    }>(`
    {
      allStrapiCaseStudy {
        nodes {
          id
          Slug
        }
      }
    }
  `);

    const allCaseStudies = caseStudyPages.data.allStrapiCaseStudy.nodes;

    allCaseStudies.forEach((node) => {
        createPage({
            path: `customers/${node.Slug}`,
            component: caseStudyTemplate,
            context: {
                id: node.id,
            },
        });
    });

    // Get all strapi comparison pages
    const comparisonPages = await graphql<{
        allStrapiProductComparisonPage: {
            nodes: {
                Slug: string;
                id: string;
            }[];
        };
    }>(`
    {
      allStrapiProductComparisonPage {
        nodes {
          id
          Slug
        }
      }
    }
  `);
    if (result.errors || comparisonPages.errors || caseStudyPages.errors) {
        reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors);
        return;
    }

    const allPosts = result.data.allStrapiBlogPost.nodes;
    const allComparisonPages = comparisonPages.data.allStrapiProductComparisonPage.nodes;

    allComparisonPages.forEach((node) => {
        createPage({
            path: node.Slug,
            component: comparisonTemplate,
            context: {
                id: node.id,
            },
        });
    });

    const categories: {
        [key: string]: {
            Type: string;
            Slug: string;
            Name: string;
            IsTab: string;
        };
    } = Object.assign(
        {},
        ...allPosts.flatMap((post) =>
            post.tags.filter((tag) => tag.Type === 'category').map((tag) => ({ [tag.Slug]: tag })),
        ),
    );

    const postsByCategory = [
        ...Object.keys(categories).map((category) =>
            allPosts.filter((post) => post.tags.some((tag) => tag.Slug === category)),
        ),
        // Let's not forget posts that have no category!
        allPosts.filter((post) => post.tags.every((tag) => tag.Type !== 'category')),
    ];

    const tabCategories = Object.values(categories)
        .filter((cat) => cat.IsTab)
        .sort((a, b) => (a.Slug === 'featured' ? -999999999 : a.Name.localeCompare(b.Name)));

    const blogPageSlug = (path, page) => (page > 0 ? `${path}/${page + 1}` : path);

    const createBlogPostPages = (postIds: string[], path: string, title: string, slug: string, pageSize = 30) => {
        const totalPages = Math.ceil(postIds.length / pageSize);
        for (let page = 0; page < totalPages; page += 1) {
            const pagePostIds = postIds.slice(page * pageSize, (page + 1) * pageSize);

            const calculatedPath = blogPageSlug(path, page);
            const prevPage = page > 0 ? blogPageSlug(path, page - 1) : null;
            const nextPage = page + 1 < totalPages ? blogPageSlug(path, page + 1) : null;

            createPage({
                path: calculatedPath,
                component: blog,
                context: {
                    blogPostIds: pagePostIds,
                    categoryTitle: title,
                    categorySlug: slug,
                    pagination: {
                        page,
                        totalPages,
                        nextPage,
                        prevPage,
                    },
                    tabCategories,
                },
            });
        }
    };

    for (const category of tabCategories) {
        createBlogPostPages(
            allPosts.filter((post) => post.tags.some((tag) => tag.Slug === category.Slug)).map((post) => post.id),
            `/blog/${category.Slug}`,
            category.Name,
            category.Slug,
        );
    }

    createBlogPostPages(
        allPosts.map((post) => post.id),
        '/blog',
        'All',
        '',
    );

    // Create blog posts pages
    // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
    // `context` is available in the template as a prop and as a variable in GraphQL

    for (const posts of postsByCategory) {
        if (posts.length > 0) {
            posts.forEach((post, index) => {
                const previousPostId = index === 0 ? null : posts[index - 1].id;
                const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

                createPage({
                    path: post.Slug,
                    component: blogPost,
                    context: {
                        id: post.id,
                        previousPostId,
                        nextPostId,
                        lastMod: post.updatedAt,
                    },
                });
            });
        }
    }

    const connectors = await graphql<{
        postgres: {
            allConnectors: {
                nodes: any[];
            };
        };
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
  `);

    const mapped_connectors = connectors.data.postgres.allConnectors.nodes
        .filter((connector) => connector?.connectorTagsByConnectorIdList?.length > 0)
        .map(normalizeConnector);

    for (const normalized_connector of mapped_connectors) {
        if (!normalized_connector.slug) {
            throw new Error(`Unable to figure out a slug for the connector with image: ${normalized_connector.imageName}`);
        } else {
            createPage({
                path: normalized_connector.slug,
                component: connector,
                context: {
                    id: normalized_connector.id,
                    type: normalized_connector.type,
                },
            });

            if (normalized_connector.type === 'capture')
                for (const destination_connector of mapped_connectors.filter((con) => con.type === 'materialization')) {
                    createPage({
                        path: `/integrations/${normalized_connector.slugified_name}-to-${destination_connector.slugified_name}`,
                        component: connection,
                        context: {
                            source_id: normalized_connector.id,
                            destination_id: destination_connector.id,
                        },
                    });
                }
        }
    }
};

// Hacky hack :(
// tl;dr `gatsby-source-pg` doesn't go through the normal gatsby `createNode` workflow.
// As a result, we can't look up the nodes for connectors in order to download their logo.
// You used to be able to call `createRemoteFileNode` inside `createResolvers`, but
// that breaks Gatsby invariants, see:
// https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v3-to-v4/#do-not-create-nodes-in-custom-resolvers
// So instead what we have to do is just know that we're going to want connector logos
// and query them all through a "side-channel" here, so that we can actually pass them through Gatsby's Sharp
// transformer. Then we can just attach a much simpler resolver to `PostGraphile_Connector` that just
// looks up that previously created and processed logo.
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
      type ConnectorLogo implements Node @dontInfer {
        connectorId: String!
        logoUrl: String!
        logo: File!
      }
    `;
    createTypes(typeDefs);
};

const createLogoNodeId = (connectorId: string) => `ConnectorLogo-${connectorId}`;

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
    actions: { createNode },
    createNodeId,
    getCache,
    createContentDigest,
}) => {
    const pool = new pg.Pool({
        connectionString: SUPABASE_CONNECTION_STRING,
        connectionTimeoutMillis: 5 * 1000,
    });

    const connectors = await pool.query(
        'select connectors.id as id, connectors.logo_url as logo_url from public.connectors;',
    );

    for (const connector of connectors.rows) {
        const usUrl = connector.logo_url?.['en-US'];
        if (!usUrl) {
            return null;
        }
        const fileNode = await createRemoteFileNode({
            url: usUrl,
            createNode,
            createNodeId,
            getCache,
        });

        await createNode({
            connectorId: connector.id,
            logoUrl: usUrl,
            logo: fileNode,
            id: createNodeId(createLogoNodeId(connector.id)),
            internal: {
                type: 'ConnectorLogo',
                contentDigest: createContentDigest(fileNode),
            },
        });
    }
};

export const createResolvers: GatsbyNode['createResolvers'] = async ({ createResolvers, createNodeId }) => {
    createResolvers({
        PostGraphile_Connector: {
            logo: {
                type: 'File',
                async resolve(node, _, ctx) {
                    const { id } = node;
                    const logoNode = await ctx.nodeModel.findOne({
                        type: `ConnectorLogo`,
                        query: { filter: { connectorId: { eq: id } } },
                    });
                    return logoNode.logo;
                },
            },
        },
    });
};

export const onPreBuild = async () => {
    await copyLibFiles(path.join(__dirname, 'static', '~partytown'));
};
