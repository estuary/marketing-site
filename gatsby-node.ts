/* eslint-disable no-await-in-loop */
import pg from 'pg';
import { CreatePagesArgs, GatsbyNode } from 'gatsby';
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
const useCaseSolutionsTemplate = path.resolve(
    './src/templates/solutions/use-cases/index.tsx'
);
const industrySolutionsTemplate = path.resolve(
    './src/templates/solutions/industry/index.tsx'
);
const technologySolutionsTemplate = path.resolve(
    './src/templates/solutions/technology/index.tsx'
);
const companyUpdatesPostTemplate = path.resolve(
    './src/templates/company-update-post/index.tsx'
);
const blogTemplate = path.resolve('./src/templates/blog/index.tsx');

const successStoryTemplate = path.resolve(
    './src/templates/success-story/index.tsx'
);

const connectorTemplate = path.resolve('./src/templates/connector/index.tsx');
const connectionTemplate = path.resolve('./src/templates/connection.tsx');
const authorTemplate = path.resolve('./src/templates/author/index.tsx');
const comparisonTemplate = path.resolve('./src/templates/etl-tools/index.tsx');

type CreateHelperParams = Pick<
    CreatePagesArgs,
    'actions' | 'graphql' | 'reporter'
>;
type CreateHelper = (log: string, params: CreateHelperParams) => Promise<any>;

const QUERY_PANIC_MSG = 'GQL FAILURE LOADING :';
const validateDataExistence = (data: any[] | undefined, name: string) => {
    if (!Array.isArray(data) || data.length === 0) {
        throw new Error(`${name} array is either not an array or is empty.`);
    }
};

const createSuccessStories: CreateHelper = async (
    name,
    { actions: { createPage }, graphql, reporter }
) => {
    const startTime = performance.now();
    console.log(`Creation:Start:${name}`);

    const successStoryPages = await graphql<{
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
    if (successStoryPages.errors) {
        reporter.panicOnBuild(
            `${QUERY_PANIC_MSG} ${name}`,
            successStoryPages.errors
        );
        return;
    }

    const allSuccessStories = successStoryPages.data?.allStrapiCaseStudy.nodes;
    validateDataExistence(allSuccessStories, name);

    allSuccessStories?.forEach((node) => {
        createPage({
            path: `success-stories/${node.Slug}`,
            component: successStoryTemplate,
            context: {
                id: node.id,
            },
        });
    });

    console.log(
        `Creation:Finish:${name} took ${Math.ceil(performance.now() - startTime)}ms`
    );
};

const createVendorCompare: CreateHelper = async (
    name,
    { actions: { createPage }, graphql, reporter }
) => {
    const startTime = performance.now();
    console.log(`Creation:Start:${name}`);

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
    if (comparisonVendors.errors) {
        reporter.panicOnBuild(
            `${QUERY_PANIC_MSG} ${name}`,
            comparisonVendors.errors
        );
        return;
    }

    const vendors = comparisonVendors.data?.allStrapiComparison.nodes;
    validateDataExistence(vendors, name);

    // Loop and process what we got (ignore blogs cause that is big and handled down below)
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

    console.log(
        `Creation:Finish:${name} took ${Math.ceil(performance.now() - startTime)}ms`
    );
};

const createBlogs: CreateHelper = async (
    name,
    { actions: { createPage }, graphql, reporter }
) => {
    const startTime = performance.now();
    console.log(`Creation:Start:${name}`);

    // Get all strapi blog posts sorted by date
    const blogPostsQuery = await graphql<{
        allStrapiBlogPost: {
            nodes: {
                createdAt: any;
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
                    createdAt
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
    if (blogPostsQuery.errors) {
        reporter.panicOnBuild(
            `${QUERY_PANIC_MSG} ${name}`,
            blogPostsQuery.errors
        );
        return;
    }

    const allBlogPosts = blogPostsQuery.data?.allStrapiBlogPost.nodes ?? [];
    validateDataExistence(allBlogPosts, name);

    const categories: {
        [key: string]: {
            Type: string;
            Slug: string;
            Name: string;
            IsTab: string;
        };
    } = Object.assign(
        {},
        ...allBlogPosts.flatMap((post) =>
            post.tags
                .filter((tag) => tag.Type === 'category')
                .map((tag) => ({ [tag.Slug]: tag }))
        )
    );

    const postsByCategory = [
        ...Object.keys(categories).map((category) =>
            allBlogPosts.filter((post) =>
                post.tags.some((tag) => tag.Slug === category)
            )
        ),
        // Let's not forget posts that have no category!
        allBlogPosts.filter((post) =>
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
            allBlogPosts
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
        allBlogPosts.map((post) => post.id),
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

                    // Snag the original slug
                    const oldPath = post.Slug;

                    // Build out new one and add slash (1 post slug already ends with slash)
                    const newPath = `/blog/${oldPath}${oldPath.endsWith('/') ? '' : '/'}`;

                    // If something is new make sure that the slug is allowed
                    //  and does not clash with blog category
                    if (
                        tabCategories.find(
                            ({ Slug }) =>
                                Slug.toUpperCase() === oldPath.toUpperCase()
                        )
                    ) {
                        throw new Error(
                            `Blog post has slug that would overlap with search tabs: ${post.id}`
                        );
                    }

                    // console.debug(`blogPost:redirect`, newPath);

                    createPage({
                        path: newPath,
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
    console.log(
        `Creation:Finish:${name} took ${Math.ceil(performance.now() - startTime)}ms`
    );
};

const createConnectors: CreateHelper = async (
    name,
    { actions: { createPage }, graphql, reporter }
) => {
    const startTime = performance.now();
    console.log(`Creation:Start:${name}`);

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
    if (connectors.errors) {
        reporter.panicOnBuild(`${QUERY_PANIC_MSG} ${name}`, connectors.errors);
        return;
    }

    const mapped_connectors =
        connectors.data?.postgres.allConnectors.nodes
            .filter((conn) => conn?.connectorTagsByConnectorIdList?.length > 0)
            .map(normalizeConnector)
            .filter((connector) => connector !== undefined) ?? [];

    validateDataExistence(mapped_connectors, name);

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
    console.log(
        `Creation:Finish:${name} took ${Math.ceil(performance.now() - startTime)}ms`
    );
};

const createAuthors: CreateHelper = async (
    name,
    { actions: { createPage }, graphql, reporter }
) => {
    const startTime = performance.now();
    console.log(`Creation:Start:${name}`);

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

    if (authors.errors) {
        reporter.panicOnBuild(`${QUERY_PANIC_MSG} ${name}`, authors.errors);
        return;
    }

    const allAuthorsData = authors.data?.allStrapiAuthor.nodes ?? [];
    validateDataExistence(allAuthorsData, name);

    for (const author of allAuthorsData) {
        createPage({
            path: getAuthorPathBySlug(author.slug),
            component: authorTemplate,
            context: {
                id: author.id,
            },
        });
    }
    console.log(
        `Creation:Finish:${name} took ${Math.ceil(performance.now() - startTime)}ms`
    );
};

const createCompanyPosts: CreateHelper = async (
    name,
    { actions: { createPage }, graphql, reporter }
) => {
    const startTime = performance.now();
    console.log(`Creation:Start:${name}`);

    const companyUpdatePostsQuery = await graphql<{
        allStrapiCompanyUpdatePost: {
            nodes: {
                slug: string;
                id: string;
            }[];
        };
    }>(`
        {
            allStrapiCompanyUpdatePost {
                nodes {
                    slug
                    id
                }
            }
        }
    `);

    if (companyUpdatePostsQuery.errors) {
        reporter.panicOnBuild(
            `${QUERY_PANIC_MSG} ${name}`,
            companyUpdatePostsQuery.errors
        );
        return;
    }

    const allCompanyUpdatePosts =
        companyUpdatePostsQuery.data?.allStrapiCompanyUpdatePost.nodes ?? [];
    validateDataExistence(allCompanyUpdatePosts, name);

    allCompanyUpdatePosts.forEach((post) => {
        createPage({
            path: `company-updates/${post.slug}`,
            component: companyUpdatesPostTemplate,
            context: {
                id: post.id,
            },
        });
    });
    console.log(
        `Creation:Finish:${name} took ${Math.ceil(performance.now() - startTime)}ms`
    );
};

const createSolutions: CreateHelper = async (
    name,
    { actions: { createPage }, graphql, reporter }
) => {
    const startTime = performance.now();
    console.log(`Creation:Start:${name}`);

    const solutionsQuery = await graphql<{
        allStrapiSolution: {
            nodes: {
                slug: string;
                id: string;
            }[];
        };
    }>(`
        {
            allStrapiSolution {
                nodes {
                    slug
                    id
                }
            }
        }
    `);

    if (solutionsQuery.errors) {
        reporter.panicOnBuild(
            `${QUERY_PANIC_MSG} ${name}`,
            solutionsQuery.errors
        );
        return;
    }

    const allSolutions = solutionsQuery.data?.allStrapiSolution.nodes ?? [];
    validateDataExistence(allSolutions, name);

    const useCaseSolutions = allSolutions.filter((solution) =>
        solution.slug.includes('/use-cases/')
    );
    const industrySolutions = allSolutions.filter((solution) =>
        solution.slug.includes('/industry/')
    );
    const technologySolutions = allSolutions.filter((solution) =>
        solution.slug.includes('/technology/')
    );

    const solutionsUrlPrefix = '/solutions';
    await Promise.all([
        Promise.all(
            useCaseSolutions.map((useCaseSolution) =>
                createPage({
                    path: `${solutionsUrlPrefix}${useCaseSolution.slug}`,
                    component: useCaseSolutionsTemplate,
                    context: { id: useCaseSolution.id },
                })
            )
        ),

        Promise.all(
            industrySolutions.map((industrySolution) =>
                createPage({
                    path: `${solutionsUrlPrefix}${industrySolution.slug}`,
                    component: industrySolutionsTemplate,
                    context: { id: industrySolution.id },
                })
            )
        ),

        Promise.all(
            technologySolutions.map((technologySolution) =>
                createPage({
                    path: `${solutionsUrlPrefix}${technologySolution.slug}`,
                    component: technologySolutionsTemplate,
                    context: { id: technologySolution.id },
                })
            )
        ),
    ]);
    console.log(
        `Creation:Finish:${name} took ${Math.ceil(performance.now() - startTime)}ms`
    );
};

export const createPages: GatsbyNode['createPages'] = async ({
    graphql,
    actions,
    reporter,
}) => {
    const createHelperParams: CreateHelperParams = {
        actions,
        graphql,
        reporter,
    };

    await Promise.all([
        createConnectors('connectors', createHelperParams),
        createBlogs('blog posts', createHelperParams),
        createAuthors('authors', createHelperParams),
        createCompanyPosts('company posts', createHelperParams),
        createSolutions('solutions', createHelperParams),
        createSuccessStories('success stories', createHelperParams),
        createVendorCompare('vendor compare', createHelperParams),
    ]);
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
    // console.log('sourceNodes:start');
    const pool = new pg.Pool({
        connectionString: SUPABASE_CONNECTION_STRING,
        connectionTimeoutMillis: 8000,
        max: 1,
        allowExitOnIdle: true,
    });

    // Make sure we know if there is an error
    pool.on('error', (err: any, client: any) =>
        console.error('sourceNodes:postgres:error', { err, client })
    );

    const connectors = await pool.query(
        'select connectors.id as id, connectors.logo_url as logo_url from public.connectors;'
    );

    let createdCount = 0;
    for (const conn of connectors.rows) {
        const usUrl = conn.logo_url?.['en-US'];

        if (usUrl) {
            const fileNode = await createRemoteFileNode({
                url: usUrl,
                createNode,
                createNodeId,
                getCache,
            });

            // console.log('sourceNodes:creating connector logo', conn.id);

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

            createdCount += 1;
        } else {
            console.log('sourceNodes:missing  connector logo', conn.id);
        }
    }

    await pool.end();

    console.log('sourceNodes:', {
        completed: `${createdCount}/${connectors.rowCount}`,
    });
};

export const createResolvers: GatsbyNode['createResolvers'] = async ({
    createResolvers: createResolversParam,
}) => {
    // console.log('createResolvers:start');
    createResolversParam({
        PostGraphile_Connector: {
            logo: {
                type: 'File',
                async resolve(node, _, ctx) {
                    const { id } = node;

                    // console.log('resolvePostGraphileConnector:logo:find', id);

                    const logoNode = await ctx.nodeModel.findOne({
                        type: 'ConnectorLogo',
                        query: { filter: { connectorId: { eq: id } } },
                    });

                    if (logoNode?.logo) {
                        // console.log(
                        //     'resolvePostGraphileConnector:logo:returning',
                        //     {
                        //         url1: logoNode?.logoUrl,
                        //         url2: logoNode?.logo.url,
                        //         logo_relativePath: logoNode?.logo.relativePath,
                        //     }
                        // );

                        return logoNode.logo;
                    }

                    console.log(
                        'resolvePostGraphileConnector:logo:missing',
                        id
                    );
                    return null;
                },
            },
        },
    });
    // console.log('createResolvers:done');
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
