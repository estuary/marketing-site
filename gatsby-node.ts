/* eslint-disable no-await-in-loop */
import pg from 'pg';
import { GatsbyNode } from 'gatsby';
import { createRemoteFileNode } from 'gatsby-source-filesystem';
import { SUPABASE_CONNECTION_STRING } from './config';
import { normalizeConnector } from './src/utils';
import { getAuthorPathBySlug, getComparisonSlug, Vendor } from './shared';

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

// TODO: replace this to ES6 import when gatsby release conversion from commonJS to ES6
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// Define the template for blog and blog post
const blogPostTemplate = path.resolve('./src/templates/blog-post/index.tsx');
const blogTemplate = path.resolve('./src/templates/blog/index.tsx');

const caseStudyTemplate = path.resolve('./src/layouts/CaseStudy/index.tsx');

const connectorTemplate = path.resolve('./src/templates/connector/index.tsx');
const connectionTemplate = path.resolve('./src/templates/connection.tsx');

const authorTemplate = path.resolve('./src/templates/author/index.tsx');

const comparisonTemplate = path.resolve('./src/templates/etl-tools/index.tsx');

export const createPages: GatsbyNode['createPages'] = async ({
    graphql,
    actions,
    reporter,
}) => {
    const { createPage, createRedirect } = actions;

    const validateDataExistence = (data: any[] | undefined, name: string) => {
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error(
                `${name} array is either not an array or is empty.`
            );
        }
    };

    createRedirect({
        fromPath: '/blogs',
        toPath: '/blog',
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
            allStrapiBlogPost(
                sort: { publishedAt: DESC }
                filter: { publishedAt: { ne: null } }
            ) {
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

    const allCaseStudies = caseStudyPages.data?.allStrapiCaseStudy.nodes;

    validateDataExistence(allCaseStudies, 'Case Studies');

    allCaseStudies?.forEach((node) => {
        createPage({
            path: `customers/${node.Slug}`,
            component: caseStudyTemplate,
            context: {
                id: node.id,
            },
        });
    });

    const comparisonVendors = await graphql<{
        allStrapiComparison: {
            nodes: Partial<Vendor>[];
        };
    }>(`
        {
            allStrapiComparison(sort: { slugKey: ASC }) {
                nodes {
                    id
                    slugKey
                }
            }
        }
    `);

    const vendors = comparisonVendors.data?.allStrapiComparison.nodes;

    if (vendors) {
        vendors.forEach((xVendor, i) => {
            vendors.slice(i + 1).forEach((yVendor) => {
                if (xVendor.slugKey && yVendor.slugKey) {
                    createPage({
                        path: `/${getComparisonSlug(
                            xVendor.slugKey,
                            yVendor.slugKey
                        )}`,
                        component: comparisonTemplate,
                        context: {
                            xVendorId: xVendor.id,
                            yVendorId: yVendor.id,
                            estuaryVendorId:
                                'd829928c-c473-5421-ac0a-f03c45b14993',
                        },
                    });
                }
            });
        });
    }

    if (result.errors || comparisonVendors.errors || caseStudyPages.errors) {
        reporter.panicOnBuild(
            'There was an error loading your blog posts',
            result.errors
        );
        return;
    }

    const allPosts = result.data?.allStrapiBlogPost.nodes ?? [];

    validateDataExistence(allPosts, 'Posts');
    validateDataExistence(vendors, 'Comparison Pages');

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
            post.tags
                .filter((tag) => tag.Type === 'category')
                .map((tag) => ({ [tag.Slug]: tag }))
        )
    );

    const postsByCategory = [
        ...Object.keys(categories).map((category) =>
            allPosts.filter((post) =>
                post.tags.some((tag) => tag.Slug === category)
            )
        ),
        // Let's not forget posts that have no category!
        allPosts.filter((post) =>
            post.tags.every((tag) => tag.Type !== 'category')
        ),
    ];

    const tabCategories = Object.values(categories)
        .filter((cat) => cat.IsTab)
        .sort((a, b) =>
            a.Slug === 'featured' ? -999999999 : a.Name.localeCompare(b.Name)
        );

    const blogPageSlug = (pathStr, page) =>
        page > 0 ? `${pathStr}/${page + 1}` : pathStr;

    const createBlogPostPages = (
        postIds: string[],
        pathStr: string,
        title: string,
        slug: string,
        pageSize = 30
    ) => {
        const totalPages = Math.ceil(postIds.length / pageSize);
        for (let page = 0; page < totalPages; page += 1) {
            const pagePostIds = postIds.slice(
                page * pageSize,
                (page + 1) * pageSize
            );

            const calculatedPath = blogPageSlug(pathStr, page);
            const prevPage = page > 0 ? blogPageSlug(pathStr, page - 1) : null;
            const nextPage =
                page + 1 < totalPages ? blogPageSlug(pathStr, page + 1) : null;

            createPage({
                path: calculatedPath,
                component: blogTemplate,
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
            allPosts
                .filter((post) =>
                    post.tags.some((tag) => tag.Slug === category.Slug)
                )
                .map((post) => post.id),
            `/blog/${category.Slug}`,
            category.Name,
            category.Slug
        );
    }

    createBlogPostPages(
        allPosts.map((post) => post.id),
        '/blog',
        'All',
        ''
    );

    // Create blog posts pages
    // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
    // `context` is available in the template as a prop and as a variable in GraphQL

    for (const posts of postsByCategory) {
        if (posts.length > 0) {
            posts.forEach((post, index) => {
                if (!post.Slug) {
                    throw new Error(
                        `Unable to figure out a slug for the post with id: ${post.id}`
                    );
                } else {
                    const previousPostId =
                        index === 0 ? null : posts[index - 1].id;
                    const nextPostId =
                        index === posts.length - 1 ? null : posts[index + 1].id;

                    createPage({
                        path: post.Slug,
                        component: blogPostTemplate,
                        context: {
                            id: post.id,
                            previousPostId,
                            nextPostId,
                            lastMod: post.updatedAt,
                        },
                    });
                }
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

    const mapped_connectors =
        connectors.data?.postgres.allConnectors.nodes
            .filter((conn) => conn?.connectorTagsByConnectorIdList?.length > 0)
            .map(normalizeConnector) ?? [];

    validateDataExistence(mapped_connectors, 'Connectors');

    for (const normalized_connector of mapped_connectors) {
        if (!normalized_connector.slug) {
            throw new Error(
                `Unable to figure out a slug for the connector with image: ${normalized_connector.imageName}`
            );
        } else {
            createPage({
                path: normalized_connector.slug,
                component: connectorTemplate,
                context: {
                    id: normalized_connector.id,
                    type: normalized_connector.type,
                },
            });

            if (normalized_connector.type === 'capture') {
                for (const destination_connector of mapped_connectors.filter(
                    (con) => con.type === 'materialization'
                )) {
                    createPage({
                        path: `/integrations/${normalized_connector.slugified_name}-to-${destination_connector.slugified_name}`,
                        component: connectionTemplate,
                        context: {
                            source_id: normalized_connector.id,
                            destination_id: destination_connector.id,
                        },
                    });
                }
            }
        }
    }

    const authors = await graphql<{
        allStrapiAuthor: {
            nodes: any[];
        };
    }>(`
        {
            allStrapiAuthor {
                nodes {
                    id
                    slug: Slug
                }
            }
        }
    `);

    if (authors.data?.allStrapiAuthor.nodes) {
        for (const author of authors.data.allStrapiAuthor.nodes) {
            createPage({
                path: getAuthorPathBySlug(author.slug),
                component: authorTemplate,
                context: {
                    id: author.id,
                },
            });
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

const createLogoNodeId = (connectorId: string) =>
    `ConnectorLogo-${connectorId}`;

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
        'select connectors.id as id, connectors.logo_url as logo_url from public.connectors;'
    );

    for (const conn of connectors.rows) {
        const usUrl = conn.logo_url?.['en-US'];

        if (usUrl) {
            const fileNode = await createRemoteFileNode({
                url: usUrl,
                createNode,
                createNodeId,
                getCache,
            });

            await createNode({
                connectorId: conn.id,
                logoUrl: usUrl,
                logo: fileNode,
                id: createNodeId(createLogoNodeId(conn.id)),
                internal: {
                    type: 'ConnectorLogo',
                    contentDigest: createContentDigest(fileNode),
                },
            });
        }
    }

    await pool.end();
};

export const createResolvers: GatsbyNode['createResolvers'] = async ({
    createResolvers: createResolversParam,
}) => {
    createResolversParam({
        PostGraphile_Connector: {
            logo: {
                type: 'File',
                async resolve(node, _, ctx) {
                    const { id } = node;

                    const logoNode = await ctx.nodeModel.findOne({
                        type: 'ConnectorLogo',
                        query: { filter: { connectorId: { eq: id } } },
                    });

                    if (logoNode?.logo) {
                        return logoNode.logo;
                    }

                    return null;
                },
            },
        },
    });
};

export const onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
    if (['build-javascript', 'develop'].includes(stage)) {
        const config = getConfig();
        const miniCssExtractPlugin = config.plugins.find(
            (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
        );
        if (miniCssExtractPlugin) {
            miniCssExtractPlugin.options.ignoreOrder = true;
        }
        actions.replaceWebpackConfig(config);
    }
};
