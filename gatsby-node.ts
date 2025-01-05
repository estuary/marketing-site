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
const useCaseSolutionsTemplate = path.resolve(
    './src/templates/use-case-solutions/index.tsx'
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
    const blogPostsQuery = await graphql<{
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

    const allSuccessStories = successStoryPages.data?.allStrapiCaseStudy.nodes;

    validateDataExistence(allSuccessStories, 'Success stories');

    allSuccessStories?.forEach((node) => {
        createPage({
            path: `success-stories/${node.Slug}`,
            component: successStoryTemplate,
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

    if (blogPostsQuery.errors) {
        reporter.panicOnBuild(
            'There was an error loading your blog posts.',
            blogPostsQuery.errors
        );
        return;
    }
    if (comparisonVendors.errors) {
        reporter.panicOnBuild(
            'There was an error loading your comparison vendors.',
            comparisonVendors.errors
        );
        return;
    }
    if (successStoryPages.errors) {
        reporter.panicOnBuild(
            'There was an error loading your success stories.',
            successStoryPages.errors
        );
        return;
    }

    const allBlogPosts = blogPostsQuery.data?.allStrapiBlogPost.nodes ?? [];

    validateDataExistence(allBlogPosts, 'Blog posts');
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
            'There was an error loading your company update posts.',
            companyUpdatePostsQuery.errors
        );
        return;
    }

    const allCompanyUpdatePosts =
        companyUpdatePostsQuery.data?.allStrapiCompanyUpdatePost.nodes ?? [];

    validateDataExistence(allCompanyUpdatePosts, 'Company update posts');

    allCompanyUpdatePosts.forEach((post) => {
        createPage({
            path: `company-updates/${post.slug}`,
            component: companyUpdatesPostTemplate,
            context: {
                id: post.id,
            },
        });
    });

    const useCaseSolutions = [
        {
            slug: '/solutions/use-cases/data-movement',
            sections: {
                hero: {
                    title: 'Data Movement',
                },
                testimonial: {
                    title: {
                        highlightedText: 'Effortless ETL and ELT',
                        normalText: 'for all your data pipelines',
                    },
                    description:
                        "Estuary Flow empowers businesses to execute data pipelines with ease. Whether you're leveraging a one-to-many ELT flow or traditional ETL, our platform's flexibility ensures your data is always where it needs to be, in real-time or batch mode.",
                    quote: {
                        author: {
                            name: 'Tony Tushar',
                            role: 'Principal Data Consultant, Soli & Co',
                        },
                        text: "“Estuary is a very productive product with a great pricing model given the current climate that we're in. I think a lot of cost-conscious data practitioners could benefit from giving it a try.”",
                    },
                },
                benefits: {
                    title: {
                        highlightedText: 'Reliability',
                        normalText: 'without maintenance',
                    },
                    description:
                        'Estuary Flow delivers enterprise-grade stability, requiring no ongoing maintenance or complex configurations. Designed for high availability, our platform leverages the cloud for durability, so you can focus on building features, not troubleshooting pipelines.',
                    benefitItems: [
                        'Always-on architecture.',
                        'Minimal operational overhead.',
                        'Automatic error recovery.',
                    ],
                },
                highlights: {
                    title: {
                        highlightedText: 'Real-Time Change',
                        normalText: 'Data Capture (CDC)',
                    },
                    description:
                        "Keep your data pipelines fast and reliable with Estuary's real-time CDC capabilities. Stream changes from transactional databases like PostgreSQL directly to analytics platforms like Elasticsearch, ensuring second-level latency and zero data loss.",
                    highlightItems: [
                        'Streams inserts, updates, and deletes in real time.',
                        'Guarantees data consistency across source and destination.',
                        'Scales effortlessly to handle high-velocity data.',
                    ],
                },
                capabilities: {
                    title: {
                        highlightedText: 'Built for Growth',
                        normalText: '',
                    },
                    description:
                        "As your business scales, so does Estuary Flow. Whether you're expanding your data volumes or integrating new features, our platform evolves with your needs, ensuring consistent performance at any scale.",
                    capabilityItems: [
                        'Effortless scaling for growing datasets and users.',
                        'Real-time analytics enable faster feature rollouts.',
                        'Flexible integrations with modern data ecosystems.',
                    ],
                },
                keyFeatures: {
                    title: {
                        highlightedText: 'Transformations',
                        normalText: 'Made Simple',
                    },
                    description:
                        'Simplify your data workflows with built-in transformation capabilities. Estuary Flow supports SQL and TypeScript transformations, empowering teams to reshape data on the fly for analytics or reporting.',
                    keyFeatureItems: [
                        'Real-time transformations at the source or destination.',
                        'Declarative pipeline definitions for consistent results.',
                        'Supports business logic integration directly within the pipeline.',
                    ],
                },
            },
        },
        {
            slug: '/solutions/use-cases/data-lakes-warehouses',
            sections: {
                hero: {
                    title: 'Data Lakes and Warehouses',
                },
                testimonial: {
                    title: {
                        highlightedText: 'Maximize the Power',
                        normalText: 'of Your Data Lakes and Warehouses',
                    },
                    description:
                        'Integrate Estuary Flow seamlessly with all major data warehouses to enable real-time and batch data flows. Our support for ELT and dbt cloud integration streamlines operations, giving your team the tools they need to transform and load data efficiently.',
                    quote: {
                        author: {
                            name: 'Tony Tushar',
                            role: 'Principal Data Consultant, Soli & Co',
                        },
                        text: "“Estuary is a very productive product with a great pricing model given the current climate that we'''re in. I think a lot of cost-conscious data practitioners could benefit from giving it a try.”",
                    },
                },
                highlights: {
                    title: {
                        highlightedText: 'Real-Time and Batch',
                        normalText: 'Data Integration',
                    },
                    description:
                        'Estuary Flow bridges the gap between real-time and batch workflows, enabling seamless data movement into lakes and warehouses. Power real-time analytics and historical reporting with unified pipelines that adapt to your needs.',
                    highlightItems: [
                        'Support for both real-time streams and scheduled batch ingestion.',
                        'Low-latency updates to ensure your data warehouse is always current.',
                        'Unified pipelines for simplified management across diverse workloads.',
                    ],
                },
                benefits: {
                    title: {
                        highlightedText: 'Native Warehouse Integration',
                        normalText: '',
                    },
                    description:
                        "Estuary Flow integrates natively with industry-leading data warehouses, ensuring compatibility and optimized performance. Whether you're using Snowflake, Databricks, or BigQuery, our platform makes connecting and managing your data straightforward.",
                    benefitItems: [
                        'Optimized connectors for major cloud data warehouses.',
                        'Real-time ingestion to support time-sensitive analytics.',
                        'Simplified ELT workflows for scalable transformations.',
                    ],
                },
                keyFeatures: {
                    title: {
                        highlightedText: 'Streamlined ELT',
                        normalText: 'with dbt Cloud',
                    },
                    description:
                        'Leverage dbt Cloud directly within your data pipelines to transform raw data into actionable insights. Estuary Flow ensures efficient ELT workflows, reducing complexity and increasing agility.',
                    keyFeatureItems: [
                        'Declarative transformations using dbt models.',
                        'Automated integration with dbt Cloud for seamless deployments.',
                        'Real-time pipeline updates trigger transformations immediately.',
                    ],
                },
                capabilities: {
                    title: {
                        highlightedText: 'Data Lakes Made Real-Time',
                        normalText: '',
                    },
                    description:
                        'Supercharge your data lake architecture with real-time streaming capabilities. Estuary Flow supports data lake formats like Apache Iceberg, enabling businesses to build scalable lakehouses that combine the best of lakes and warehouses.',
                    capabilityItems: [
                        'Real-time writes to data lakes with schema evolution.',
                        'Support for Apache Iceberg and other modern lake formats.',
                        'Power both analytics and operational workloads from a single source.',
                    ],
                },
            },
        },
        {
            slug: '/solutions/use-cases/ai',
            sections: {
                hero: {
                    title: 'Artificial Intelligence',
                },
                testimonial: {
                    title: {
                        highlightedText: 'Fuel AI and Machine Learning',
                        normalText: 'with the Right Data, at the Right Time',
                    },
                    description:
                        'Harness the power of Estuary Flow to unify and prepare data from various sources for AI and Retrieval-Augmented Generation (RAG) applications. With built-in connectors for leading platforms like Salesforce, HubSpot, and Pinecone, your data flows are fully optimized for AI-driven workloads.',
                    quote: {
                        author: {
                            name: 'Tony Tushar',
                            role: 'Principal Data Consultant, Soli & Co',
                        },
                        text: "“Estuary is a very productive product with a great pricing model given the current climate that we're in. I think a lot of cost-conscious data practitioners could benefit from giving it a try.”",
                    },
                },
                highlights: {
                    title: {
                        highlightedText: 'Real-Time Data',
                        normalText: 'for AI Workflows',
                    },
                    description:
                        "Estuary Flow ensures your AI models are always powered by the freshest data, enabling smarter decision-making and better predictions. Whether you're training, fine-tuning, or deploying AI models, our platform delivers the right data precisely when you need it.",
                    highlightItems: [
                        'Continuous real-time data integration for AI and machine learning pipelines.',
                        'Seamless synchronization of data sources to eliminate lag.',
                        'Supports high-velocity data for time-sensitive AI applications.',
                    ],
                },
                capabilities: {
                    title: {
                        highlightedText: 'Optimized',
                        normalText: 'for Retrieval-Augmented Generation (RAG)',
                    },
                    description:
                        'Power RAG applications with real-time, unified data pipelines. Estuary Flow integrates effortlessly with vector databases like Pinecone, ensuring your AI systems can access and retrieve the most relevant information in milliseconds.',
                    capabilityItems: [
                        'Direct materialization to vector databases for RAG workflows.',
                        'Low-latency data feeds to enhance query accuracy and speed.',
                        'Reliable updates ensure AI models use the latest data.',
                    ],
                },
                benefits: {
                    title: {
                        highlightedText: 'AI-Ready Data Preparation',
                        normalText: '',
                    },
                    description:
                        'With Estuary Flow, data preparation for AI becomes effortless. Built-in transformations and schema evolution allow you to align incoming data with your model requirements, minimizing preprocessing time.',
                    benefitItems: [
                        'Declarative transformations using SQL and TypeScript.',
                        'Automated schema evolution for evolving AI datasets.',
                        'Unified pipelines for consistent, high-quality data ingestion.',
                    ],
                },
            },
        },
        {
            slug: '/solutions/use-cases/real-time-analytics',
            sections: {
                hero: {
                    title: 'Real Time Analytics',
                },
                testimonial: {
                    title: {
                        highlightedText: '',
                        normalText:
                            'Turn Data into Actionable Insights in Real Time',
                    },
                    description:
                        'Estuary Flow enables real-time analytics by allowing seamless integration with the tools you trust. With the Kafka-compatible Dekaf API, Flow makes it easy to tap into the Kafka ecosystem. Our partnerships with Tinybird and StarTree further enhance your ability to build powerful real-time analytics platforms.',
                    quote: {
                        author: {
                            name: 'Tony Tushar',
                            role: 'Principal Data Consultant, Soli & Co',
                        },
                        text: "“Estuary is a very productive product with a great pricing model given the current climate that we're in. I think a lot of cost-conscious data practitioners could benefit from giving it a try.”",
                    },
                },
                highlights: {
                    title: {
                        highlightedText: 'Real-Time Analytics',
                        normalText: 'Made Simple',
                    },
                    description:
                        'Estuary Flow delivers instant insights by enabling real-time data integration across your analytics stack. With second-level latency, your dashboards and analytics tools are always powered by up-to-date information, ensuring faster decision-making.',
                    highlightItems: [
                        'Seamless real-time data delivery for instant analytics.',
                        'Support for complex aggregations and event-driven insights.',
                        'Works with existing tools to minimize disruption and maximize ROI.',
                    ],
                },
                capabilities: {
                    title: {
                        highlightedText: 'Kafka Compatibility',
                        normalText: '',
                    },
                    description:
                        "Leverage the power of Kafka without the operational overhead. Estuary Flow's Kafka-compatible Dekaf API allows you to seamlessly integrate with the Kafka ecosystem, providing the flexibility to stream data to and from existing Kafka-based systems.",
                    capabilityItems: [
                        'Kafka API compatibility for data consumers.',
                        'Simplified setup with no brokers to manage.',
                        'Effortless scaling for high-throughput use cases.',
                    ],
                },
                benefits: {
                    title: {
                        highlightedText: 'Enhanced Real-Time Analytics',
                        normalText: 'with Key Partnerships',
                    },
                    description:
                        "Estuary Flow integrates with leading platforms like Tinybird and StarTree to supercharge your real-time analytics capabilities. Whether you're building interactive dashboards or event-driven applications, our partnerships provide powerful solutions tailored to your needs.",
                    benefitItems: [
                        'Accelerated query performance with Tinybird for real-time aggregation and visualization.',
                        'Seamless integration with StarTree for personalized analytics and anomaly detection.',
                        'End-to-end real-time analytics pipelines with minimal development effort.',
                    ],
                },
                keyFeatures: {
                    title: {
                        highlightedText: 'Powerful Data Flow Control',
                        normalText: '',
                    },
                    description:
                        "Gain full control over your data streams with Estuary Flow's advanced features. Real-time transformations, filtering, and schema evolution ensure your analytics pipelines are both flexible and robust.",
                    keyFeatureItems: [
                        'Real-time filtering and transformation using SQL or TypeScript.',
                        'Built-in schema evolution for seamless integration with changing datasets.',
                        'High-performance pipelines optimized for demanding analytics workloads.',
                    ],
                },
            },
        },
    ];

    for (const useCaseSolution of useCaseSolutions) {
        createPage({
            path: useCaseSolution.slug,
            component: useCaseSolutionsTemplate,
            context: {
                useCaseSolution,
            },
        });
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
