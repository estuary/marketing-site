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
            .map(normalizeConnector)
            .filter((connector) => connector !== undefined) ?? [];

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
            slug: '/use-cases/data-movement/',
            metadata: {
                title: 'Real-Time Data Pipelines & CDC for Fast Integration | Estuary Flow',
                description:
                    "Estuary Flow's real-time data pipeline & CDC solutions simplify data movement for fast, seamless integration & high performance.",
            },
            sections: {
                hero: {
                    title: 'Data Movement',
                    description:
                        'The shortest path between your data and where it needs to be—real-time or not, your choice.',
                },
                testimonial: {
                    title: {
                        highlightedText: 'Effortless ETL and ELT',
                        normalText: 'for all your data pipelines',
                    },
                    description:
                        "Estuary Flow empowers businesses to automate data pipelines with ease. Whether you're leveraging a one-to-many ELT flow or traditional ETL, Flow's flexibility ensures your data is always where it needs to be, when you need it.",
                    quote: {
                        company: 'Connect&GO',
                        successStoryUrl: '/success-stories/connectngo/',
                        text: '“Connect&GO replaced its self-hosted batch solution with Estuary Flow, enabling real-time MySQL-to-Snowflake replication. This improved client visibility, boosted productivity 4x, and reduced costs 5x.”',
                    },
                },
                benefits: {
                    title: {
                        highlightedText: 'Reliability',
                        normalText: 'without maintenance',
                    },
                    description:
                        'Estuary Flow delivers enterprise-grade stability, requiring no ongoing maintenance or complex configurations. Designed for high availability, Flow the cloud for durability, so you can focus on building features, not troubleshooting pipelines.',
                    benefitItems: [
                        'Always-on architecture.',
                        'Automatic error recovery.',
                        'Zero operational overhead.',
                    ],
                },
                highlights: {
                    title: {
                        highlightedText: 'Real-Time Change',
                        normalText: 'Data Capture (CDC)',
                    },
                    description:
                        "Keep your data pipelines fast and reliable with Estuary's real-time CDC capabilities. Stream changes from transactional databases like PostgreSQL with second-level latency and zero data loss.",
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
                        'Effortless scaling.',
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
                        'Real-time transformations.',
                        'Declarative pipeline definitions for consistent results.',
                        'Supports business logic integration directly within the pipeline.',
                    ],
                },
            },
        },
        {
            slug: '/use-cases/data-lakes-warehouses/',
            metadata: {
                title: 'Modern Data Lake & Warehouse Integration | Estuary Flow',
                description:
                    "Modernize your data architecture with Estuary Flow's lake & warehouse integration solutions. Real-time & batch processing, ELT, and dbt Cloud support.",
            },
            sections: {
                hero: {
                    title: 'Data Lakes and Warehouses',
                    description:
                        "Feed your lakes and warehouses with data that's always fresh, never stale.",
                },
                testimonial: {
                    title: {
                        highlightedText: 'Maximize the Power',
                        normalText: 'of Your Data Lakes and Warehouses',
                    },
                    description:
                        'Integrate any data source to all major data warehouses with Estuary Flow. Our support for ELT and dbt cloud integration streamlines operations, giving your team the tools they need to transform and load data efficiently.',
                    quote: {
                        company: 'Flash Pack',
                        successStoryUrl: '/success-stories/flashpack/',
                        text: '“Flash Pack, a solo travel company, used Estuary to build a scalable, real-time data pipeline in two weeks, enabling reliable analytics with minimal engineering effort while reducing costs and complexity.”',
                    },
                },
                highlights: {
                    title: {
                        highlightedText: 'Real-Time and Batch',
                        normalText: 'Data Integration',
                    },
                    description:
                        'Estuary Flow supports real-time and batch workflows for smooth data movement into lakes and warehouses, powering both real-time analytics and historical reporting with adaptable pipelines.',
                    highlightItems: [
                        'Support for real-time and scheduled batch ingestion.',
                        'Low-latency updates keep your data warehouse current.',
                        'Unified pipelines simplify management across various workloads.',
                    ],
                },
                benefits: {
                    title: {
                        highlightedText: 'Native Warehouse Integration',
                        normalText: '',
                    },
                    description:
                        'Estuary Flow integrates natively with industry-leading data warehouses. Fabric, Snowflake, Databricks, or BigQuery - our platform makes connecting and managing your data straightforward.',
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
                        'Supercharge your data lake architecture with real-time streaming capabilities. Estuary Flow supports tableformats like Apache Iceberg, enabling businesses to build scalable lakehouses that combine the best of lakes and warehouses.',
                    capabilityItems: [
                        'Real-time writes to data lakes with schema evolution.',
                        'Support for Apache Iceberg and other modern lake formats.',
                        'Power both analytics and operational workloads from a single source.',
                    ],
                },
            },
        },
        {
            slug: '/use-cases/ai/',
            metadata: {
                title: 'Real-Time Data Pipelines for AI & Machine Learning | Estuary Flow',
                description:
                    "Power your AI/ML with Estuary Flow's real-time data pipelines. Stream data seamlessly, reduce latency, and accelerate model training and deployment for faster insights.",
            },
            sections: {
                hero: {
                    title: 'Artificial Intelligence',
                    description:
                        'Turn raw streams into AI-ready datasets without breaking a sweat.',
                },
                testimonial: {
                    title: {
                        highlightedText:
                            'Fuel AI with the Right Data, at the Right Time',
                        normalText: '',
                    },
                    description:
                        'Utilize Estuary Flow to consolidate and prepare data from sources like Salesforce, HubSpot, and Pinecone for AI and Retrieval-Augmented Generation (RAG) applications. Optimize your data flows for AI-driven workloads.',
                    quote: {
                        company: '',
                        successStoryUrl: '',
                        text: 'An AI-driven RAG app used Estuary Flow for real-time data processing and integrated with Pinecone for low-latency data retrieval, improving the accuracy and responsiveness of AI-generated responses.',
                    },
                },
                highlights: {
                    title: {
                        highlightedText: 'Real-Time Data',
                        normalText: 'for AI Workflows',
                    },
                    description:
                        'Estuary Flow ensures your AI models are always powered by the freshest data, enabling smarter decision-making and better predictions. Training, fine-tuning, or deploying AI models, Flow delivers the right data precisely when you need it.',
                    highlightItems: [
                        'Real-time data integration for AI pipelines.',
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
                keyFeatures: {
                    title: {
                        highlightedText: 'Broad Integration Ecosystem',
                        normalText: '',
                    },
                    description:
                        'Estuary Flow connects to a wide range of data sources, including Salesforce and HubSpot, to centralize and streamline your AI data preparation. Materialization connectors for specialized tools like Pinecone further simplify AI integration.',
                    keyFeatureItems: [
                        'Native connectors for CRM, marketing, and operational data.',
                        'Real-time transformation and enrichment for AI readiness.',
                        'Flexible architecture to support future AI tools and platforms.',
                    ],
                },
            },
        },
        {
            slug: '/use-cases/real-time-analytics/',
            metadata: {
                title: 'Real-Time Data Analytics for Modern Businesses | Estuary Flow',
                description:
                    "Get instant real-time insights with Estuary Flow's real-time analytics solutions. Seamlessly integrate data, leverage Kafka, and partner with Tinybird & StarTree for rapid analysis.",
            },
            sections: {
                hero: {
                    title: 'Real-time Analytics',
                    description:
                        "Because insights shouldn't wait for batch jobs to finish.",
                },
                testimonial: {
                    title: {
                        highlightedText:
                            'Turn Data into Actionable Insights in Real Time',
                        normalText: '',
                    },
                    description:
                        'Estuary Flow offers real-time analytics with seamless integration into trusted tools. The Kafka-compatible Dekaf API simplifies access to the Kafka ecosystem, while partnerships with Tinybird and StarTree enhance your ability to create powerful analytics platforms.',
                    quote: {
                        company: 'SocialHP',
                        successStoryUrl: '/success-stories/SocialHP/',
                        text: '“SocialHP leveraged Estuary to build a real-time CDC pipeline from Postgres to ElasticSearch in just two days, achieving second-level latency and enabling advanced analytics on their social media platform. Resolved performance and scalability challenges, while requiring no maintenance.”',
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
                        'Exactly-once delivery guarantees in operational environments.',
                        'Easy integration with partners such as Tinybird, StarTree, and SingleStore.',
                        'Efficient end-to-end real-time analytics pipelines with minimal effort.',
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
                        'Built-in schema evolution.',
                        'High-performance pipelines optimized for demanding analytics workloads.',
                    ],
                },
            },
        },
    ];

    const industrySolutions = [
        {
            slug: '/industry/finance/',
            metadata: {
                title: 'Financial Data Integration & Compliance | Estuary Flow',
                description:
                    'Struggling with slow, insecure financial data integration? Estuary Flow delivers real-time pipelines for secure transactions, risk analysis, and compliance reporting.',
            },
            sections: {
                hero: {
                    title: 'Finance',
                    description:
                        'Real-time precision for the numbers that keep your business moving.',
                },
                testimonial: {
                    title: {
                        highlightedText: 'Empowering Financial Institutions',
                        normalText: 'with Real-time Data Integration',
                    },
                    description:
                        'Estuary Flow enables banks, insurers, and financial firms to process high-velocity transactions and risk analytics with minimal latency. Achieve secure and fast data integration while maintaining compliance with industry regulations.',
                    quote: {
                        company: '',
                        successStoryUrl: '',
                        text: 'Estuary Flow enables financial institutions to streamline transactions, risk analytics, and fraud detection in real-time. Second-level latency pipelines or compliance-ready integrations, Flow provides the tools for modern finance.',
                    },
                },
                highlights: {
                    title: {
                        highlightedText: 'Streamlined',
                        normalText: 'Risk and Compliance',
                    },
                    description:
                        'Seamlessly integrate data to power predictive risk models and ensure compliance with industry regulations. Estuary Flow simplifies audit processes while keeping risk assessments up to date.',
                    highlightItems: [
                        'Automated audit logs and schema evolution.',
                        'Support for multi-source data aggregation and transformation.',
                        'Real-time and batch workflows for hybrid financial use cases.',
                    ],
                },
                capabilities: {
                    title: {
                        highlightedText: 'Scalable Solutions',
                        normalText: 'for Financial Growth',
                    },
                    description:
                        "Estuary Flow's flexible architecture adapts to evolving financial needs, handling increasing transaction volumes with ease. Optimize financial workflows and accelerate innovation for new products and services.",
                    capabilityItems: [
                        'High availability and fault-tolerant pipelines.',
                        'Compatibility with legacy and modern systems.',
                        'Hybrid and multi-cloud deployment support.',
                    ],
                },
                benefits: {
                    title: {
                        highlightedText: 'Unlocking Growth Potential',
                        normalText: 'with Real-time Data',
                    },
                    description:
                        "Estuary Flow's architecture adapts to evolving financial demands, making it a reliable solution for increasing transaction volumes while ensuring compliance and operational efficiency.",
                    benefitItems: [
                        'Fault-tolerant pipelines for uninterrupted operations.',
                        'Integrates with both legacy and modern systems.',
                        'Hybrid and multi-cloud options tailored to financial needs.',
                    ],
                },
                keyFeatures: {
                    title: {
                        highlightedText: 'Real-Time',
                        normalText: 'Financial Data Integration',
                    },
                    description:
                        'Estuary Flow empowers financial institutions to process high-velocity transactions and risk analytics with second-level latency. Our platform enables secure, real-time data pipelines for fraud detection, risk analysis, and compliance reporting.',
                    keyFeatureItems: [
                        'Reliable real-time updates for critical decisions.',
                        'End-to-end encryption and SOC 2 compliance.',
                        'Continuous data synchronization across diverse systems.',
                    ],
                },
            },
        },
        {
            slug: '/industry/supply-chain/',
            metadata: {
                title: 'Real-Time Supply Chain Data Integration | Estuary Flow',
                description:
                    'Struggling with supply chain visibility and delays? Estuary Flow provides real-time data integration for optimized logistics and faster decision-making.',
            },
            sections: {
                hero: {
                    title: 'Supply Chain and Logistics',
                    description:
                        'No more guesswork—keep your supply chain running on live data.',
                },
                testimonial: {
                    title: {
                        highlightedText: 'Optimize Your Supply Chain',
                        normalText: 'with Real-time Data',
                    },
                    description:
                        'Supply chain organizations rely on Estuary Flow to streamline logistics, track shipments, and optimize routes in real time. With real-time change data capture, logistics companies can make smarter, faster decisions to reduce costs and delays.',
                    quote: {
                        company: '',
                        successStoryUrl: '',
                        text: 'Estuary Flow empowers supply chain businesses to track inventory, shipments, and routes with real-time data integration, enabling cost-efficient and agile decision-making.',
                    },
                },
                highlights: {
                    title: {
                        highlightedText: 'Cost Reduction',
                        normalText: 'Through Smarter Decisions',
                    },
                    description:
                        'Harness real-time data to optimize logistics and reduce operational costs. Estuary Flow enables faster reactions to disruptions, ensuring supply chains remain agile and efficient.',
                    highlightItems: [
                        'Real-time change data capture for immediate insights.',
                        'Scalable pipelines for high-volume data streams.',
                        'Integration with ERP and logistics platforms for seamless workflows.',
                    ],
                },
                benefits: {
                    title: {
                        highlightedText: 'Smarter Decisions',
                        normalText: 'Powered by Real-time Data',
                    },
                    description:
                        'Estuary Flow allows supply chain operators to avoid disruptions, reduce delays, and optimize costs with instant access to actionable data.',
                    benefitItems: [
                        'Immediate visibility into key logistics metrics.',
                        'Handles growing global data streams with ease.',
                        'Automated updates across all operations systems.',
                    ],
                },
                keyFeatures: {
                    title: {
                        highlightedText: 'Real-Time Insights',
                        normalText: 'for Supply Chain Efficiency',
                    },
                    description:
                        'Estuary Flow empowers supply chain organizations to track shipments, manage inventory, and optimize routes in real time. Gain instant visibility into operations to reduce delays and improve decision-making.',
                    keyFeatureItems: [
                        'Real-time data for shipment tracking and route optimization.',
                        'Instant inventory updates and demand forecasting.',
                        'Low-latency pipelines for dynamic supply chain workflows.',
                    ],
                },
                capabilities: {
                    title: {
                        highlightedText: 'Scalable Solutions',
                        normalText: 'for Supply Chain Growth',
                    },
                    description:
                        'As supply chain operations scale, Estuary Flow provides the flexibility to manage growing data demands. From global logistics to regional distribution, our platform ensures high availability and reliable performance.',
                    capabilityItems: [
                        'Support for any cloud and hybrid deployments.',
                        'Automated schema evolution for fast-changing supply chain data.',
                        'End-to-end data security for compliance and reliability.',
                    ],
                },
            },
        },
        {
            slug: '/industry/marketing/',
            metadata: {
                title: 'Marketing Data Integration & Analytics | Estuary Flow',
                description:
                    'Stop guessing with your marketing campaigns. Estuary Flow provides real-time data integration for actionable insights and optimized marketing performance.',
            },
            sections: {
                hero: {
                    title: 'Marketing',
                    description:
                        'Your data, synced and ready for campaigns that actually convert.',
                },
                testimonial: {
                    title: {
                        highlightedText: 'Supercharge Marketing Efforts',
                        normalText: 'with Unified Data',
                    },
                    description:
                        'Estuary Flow helps marketing teams gain insights by integrating data from various platforms, including ad performance and customer interactions. With real-time updates, marketers can easily adjust campaigns on the fly.',
                    quote: {
                        company: 'SocialHP',
                        successStoryUrl: '/success-stories/SocialHP/',
                        text: "“Estuary delivered enterprise-grade analytics in days, transforming our platform's capabilities.” — Shane Iseminger, CTO, SocialHP",
                    },
                },
                highlights: {
                    title: {
                        highlightedText: 'Enhance Customer Engagement',
                        normalText: '',
                    },
                    description:
                        'Leverage real-time data to personalize and optimize customer journeys. Estuary Flow enables marketers to target the right audience, adjust strategies, and improve conversion rates with accurate, real-time insights.',
                    highlightItems: [
                        'Real-time data for audience segmentation and campaign targeting.',
                        'Integration with major marketing tools like Salesforce, HubSpot, and more.',
                        'Built-in transformations for enriching customer data.',
                    ],
                },
                capabilities: {
                    title: {
                        highlightedText: 'Scalable and Flexible',
                        normalText: 'Marketing Data Solutions',
                    },
                    description:
                        'As your marketing efforts grow, Estuary Flow scales with your needs, integrating new platforms and expanding data pipelines to support increasing marketing volumes.',
                    capabilityItems: [
                        'Seamless integration with existing marketing tech stack.',
                        'Scalable data flows to handle growing data volumes.',
                        'Built-in compliance and security features to protect customer data.',
                    ],
                },
                benefits: {
                    title: {
                        highlightedText:
                            'Adapting to Evolving Marketing Demands',
                        normalText: '',
                    },
                    description:
                        'Estuary Flow scales to support growing data needs while maintaining performance, empowering marketing teams to integrate new tools and platforms seamlessly.',
                    benefitItems: [
                        'Works with existing tech stacks, like HubSpot and Salesforce.',
                        'Handles growing customer and campaign data.',
                        'Ensures data security for marketing analytics with private deployments.',
                    ],
                },
                keyFeatures: {
                    title: {
                        highlightedText: 'Actionable Insights',
                        normalText: 'for Smarter Marketing',
                    },
                    description:
                        'Estuary Flow enables marketing teams to integrate data from various platforms for actionable insights, allowing real-time campaign adjustments.',
                    keyFeatureItems: [
                        'Real-time data integration from ad platforms, CRMs, and email tools.',
                        'Instant updates to optimize campaigns on the fly.',
                        'Support for both streaming and batch data flows.',
                    ],
                },
            },
        },
    ];

    const technologySolutions = [
        {
            slug: '/technology/private-deployments/',
            metadata: {
                title: 'Secure Data Integration with Private Deployments | Estuary Flow',
                description:
                    "Achieve secure, scalable data integration with Estuary Flow's private deployment model. Benefit from private VPCs, real-time data pipelines, and cost-efficient solutions.",
            },
            sections: {
                hero: {
                    title: 'Private Deployments',
                    description:
                        'Run faster pipelines behind your own walls—secure, private, yours.',
                },
                testimonial: {
                    title: {
                        highlightedText: 'Secure and Scalable Data Integration',
                        normalText: 'with Private Deployments',
                    },
                    description:
                        'Private Deployment provides a secure, high-performance solution for enterprises needing stringent data governance and control. Estuary Flow ensures that data processing remains within your trusted environment while maintaining real-time capabilities.',
                    quote: {
                        company: 'Prodege',
                        successStoryUrl: '/success-stories/prodege/',
                        text: 'Prodege built their data integration pipelines using Estuary Flow for Apache Iceberg using private deployments to ensure their data never leaves their secure environment.',
                    },
                },
                highlights: {
                    title: {
                        highlightedText: 'High-Performance Data Integration',
                        normalText: 'for Enterprise Environments',
                    },
                    description:
                        "Estuary Flow's Private Deployments provide low-latency, secure data processing within your enterprise's private networking environment, ensuring operational efficiency without compromising data security.",
                    highlightItems: [
                        'Real-time change data capture with low latency.',
                        'Seamless integration with private VPC and hybrid cloud architectures.',
                        'Optimized for enterprise-grade performance and reliability.',
                    ],
                },
                benefits: {
                    title: {
                        highlightedText:
                            'Empowering Enterprise Data Governance and Control',
                        normalText: '',
                    },
                    description:
                        'Estuary Flow ensures your data remains secure while delivering high-performance integration for even the most stringent enterprise requirements.',
                    benefitItems: [
                        'Fully private deployments within enterprise-controlled networks.',
                        'Scalable architecture for high-volume, real-time data pipelines.',
                        'Flexible pricing for optimized resource utilization.',
                    ],
                },
                keyFeatures: {
                    title: {
                        highlightedText:
                            'Build Secure and Scalable Data Pipelines',
                        normalText: 'with Private Deployments',
                    },
                    description:
                        "Estuary Flow's Private Deployment model allows enterprises to securely manage their data in private networks, ensuring efficient, reliable, and compliant data integration for organizations with strict governance needs.",
                    keyFeatureItems: [
                        'Fully isolated data processing within private VPCs.',
                        'Real-time and batch data integration capabilities.',
                        'Customizable deployment to fit enterprise infrastructure requirements.',
                    ],
                },
                capabilities: {
                    title: {
                        highlightedText: 'Flexible and Cost-Effective',
                        normalText: 'Deployment Options',
                    },
                    description:
                        "With Estuary Flow's BYOC model, enterprises can deploy in their preferred cloud environment while benefiting from flexible pricing and scalable architecture, tailored for complex and high-volume workloads.",
                    capabilityItems: [
                        'Flexible deployment in AWS, GCP, or Azure private networks.',
                        'Cost-efficient architecture optimized for enterprise-scale data processing.',
                        'Scalable solutions to support growing data and business needs.',
                    ],
                },
            },
        },
        {
            slug: '/technology/apache-iceberg/',
            metadata: {
                title: 'Modern Apache Iceberg Integration Solutions | Estuary Flow',
                description:
                    'Streamline Apache Iceberg integration with Estuary Flow. Enable real-time and batch data loading with REST catalog support and effortless platform integration.',
            },
            sections: {
                hero: {
                    title: 'Apache Iceberg',
                    description:
                        "Streaming into Iceberg tables that won't crack under pressure.",
                },
                testimonial: {
                    title: {
                        highlightedText: 'Streaming Lakehouse',
                        normalText: 'with Apache Iceberg',
                    },
                    description:
                        "Estuary Flow's Iceberg Materialization Connector supports streaming or batch data loads into Iceberg, with REST catalog support and integrations with platforms like Snowflake, Dremio and AWS Glue.",
                    quote: {
                        company: 'Prodege',
                        successStoryUrl: '/success-stories/prodege/',
                        text: 'Prodege adopted Estuary Flow for Apache Iceberg data integration to build a modern data lakehouse. Estuary Flow enabled the continuous loading of data into Iceberg tables, leveraging its native support for schema evolution and partitioning.',
                    },
                },
                highlights: {
                    title: {
                        highlightedText: 'Efficient Data Loads',
                        normalText: 'with Low Latency',
                    },
                    description:
                        "Accelerate your data pipeline with Estuary Flow's high-performance materialization capabilities, ensuring data is ingested and processed in real time or in batch without compromising on efficiency or scalability.",
                    highlightItems: [
                        'Support for real-time change data capture and batch processing.',
                        'Reliable, low-latency data movement into Iceberg tables.',
                        'Enhanced metadata management with REST catalog support.',
                    ],
                },
                benefits: {
                    title: {
                        highlightedText: 'Flexible and Efficient',
                        normalText: 'Iceberg Workflows',
                    },
                    description:
                        'From Snowflake to AWS Glue, Estuary Flow integrates smoothly with your Iceberg ecosystem, delivering scalable and reliable performance for all use cases.',
                    benefitItems: [
                        'Supports Snowflake, Dremio, AWS Glue, and more.',
                        'Combines streaming and batch capabilities seamlessly.',
                        'Optimized for high-volume data environments.',
                    ],
                },
                keyFeatures: {
                    title: {
                        highlightedText:
                            'Build a Future-Proof Streaming Lakehouse Architecture',
                        normalText: '',
                    },
                    description:
                        "Estuary Flow's Iceberg Materialization Connector allows seamless integration of real-time or batch data into Apache Iceberg, empowering you to build a robust, scalable streaming lakehouse architecture.",
                    keyFeatureItems: [
                        'Iceberg materialization for both streaming and batch workflows.',
                        'REST catalog support for streamlined metadata management.',
                        'Integration with Dremio, AWS Glue, Snowflake Unity Catalog, and more.',
                    ],
                },
                capabilities: {
                    title: {
                        highlightedText: 'Seamless Integration',
                        normalText: 'Across Your Data Ecosystem',
                    },
                    description:
                        'Estuary Flow integrates smoothly with major data platforms, ensuring your Iceberg-based lakehouse architecture fits seamlessly into your existing ecosystem and workflows.',
                    capabilityItems: [
                        'Compatibility with leading data platforms like Dremio, AWS Glue and Snowflake Iceberg tables.',
                        'Unified architecture for both streaming and batch data pipelines.',
                        'Scalable and flexible to accommodate growing data environments.',
                    ],
                },
            },
        },
        {
            slug: '/technology/netsuite/',
            metadata: {
                title: 'Maximize Efficiency with NetSuite Data Integration | Estuary Flow',
                description:
                    'Integrate NetSuite effortlessly with Estuary Flow. Real-time, low-latency data capture ensures reliable, scalable, and cost-effective data integration for high-volume operations.',
            },
            sections: {
                hero: {
                    title: 'Netsuite',
                    description:
                        'Unlock real-time analytics for your NetSuite data.',
                },
                testimonial: {
                    title: {
                        highlightedText: 'Easy Data Integration',
                        normalText: 'for NetSuite',
                    },
                    description:
                        "Estuary Flow's NetSuite capture connector offers scalable, reliable, and low-latency data integration, ensuring smooth and cost-effective data pipelines for organizations handling high volumes of financial transactions.",
                    quote: {
                        company: '',
                        successStoryUrl: '',
                        text: 'A leading fashion brand cut costs by 50% and achieved real-time analytics by switching to Estuary Flow, with help from an analytics consultancy. This transition simplified operations and enabled timely, data-driven decisions, allowing the brand to focus on growth and innovation.',
                    },
                },
                highlights: {
                    title: {
                        highlightedText: 'Reliable, High-Performance',
                        normalText: 'Data Flows',
                    },
                    description:
                        'With Estuary Flow, your NetSuite data pipelines run smoothly with zero data loss, ensuring accurate and real-time insights across all your business operations.',
                    highlightItems: [
                        'Consistent, reliable data movement from NetSuite with change data capture (CDC).',
                        'Real-time updates for financial reporting and analytics.',
                        'Proven reliability for mission-critical systems.',
                    ],
                },
                capabilities: {
                    title: {
                        highlightedText: 'Cost-Effective Scalability',
                        normalText: 'for High-Volume Operations',
                    },
                    description:
                        'Estuary Flow offers flexible pricing designed to support large-scale NetSuite integrations, making it a cost-effective solution for enterprises managing high-volume data environments.',
                    capabilityItems: [
                        'Scalable architecture to accommodate large transaction volumes.',
                        'Optimized pricing to ensure cost efficiency at scale.',
                        'Built to support complex enterprise requirements without compromising performance.',
                    ],
                },
                benefits: {
                    title: {
                        highlightedText: 'Powering Financial Insights',
                        normalText: 'with Scalable Integration',
                    },
                    description:
                        "Estuary Flow's architecture ensures consistent performance for mission-critical NetSuite integrations, with cost-effective and reliable solutions for growing enterprises.",
                    benefitItems: [
                        'Handles massive data transaction volumes.',
                        'Designed for efficiency in high-volume operations.',
                        'Ensures zero data loss and real-time reporting.',
                    ],
                },
                keyFeatures: {
                    title: {
                        highlightedText: 'Effortless Data Integration',
                        normalText: 'for NetSuite',
                    },
                    description:
                        "Estuary Flow's NetSuite capture connector delivers high-performance, low-latency data integration for seamless synchronization with your ERP system. Whether you're handling large volumes of financial transactions or scaling rapidly, our connector ensures efficient and reliable data flows.",
                    keyFeatureItems: [
                        'Enterprise-grade scalability for growing data demands.',
                        'Low-latency data capture and integration.',
                        'Cost-effective solutions for large-scale NetSuite operations.',
                    ],
                },
            },
        },
        {
            slug: '/technology/kafka/',
            metadata: {
                title: 'Effortless Kafka Data Integration with Dekaf | Estuary Flow',
                description:
                    "Estuary Flow's Dekaf simplifies Kafka integration. Consume real-time data effortlessly and reduce overhead with minimal latency, optimizing your data pipelines.",
            },
            sections: {
                hero: {
                    title: 'Kafka',
                    description:
                        'Keep Kafka fast, lean, and exactly-once—without the headaches.',
                },
                testimonial: {
                    title: {
                        highlightedText: 'Streamlined Data Integration',
                        normalText: 'with Kafka Compatibility',
                    },
                    description:
                        "With Dekaf, Estuary Flow makes it easy for tools to consume data using Kafka consumers. Leverage your existing Kafka infrastructure with Flow's robust and scalable data integration platform.",
                    quote: {
                        company: '',
                        successStoryUrl: '',
                        text: "A logistics company used Estuary Flow's Dekaf feature for real-time analytics, replacing a complex Kafka stack to reduce overhead, enhance data reliability, and optimize fleet management, resulting in quicker deliveries and higher customer satisfaction.",
                    },
                },
                highlights: {
                    title: {
                        highlightedText: 'Efficient Real-Time Data Streaming',
                        normalText: '',
                    },
                    description:
                        'Dekaf optimizes your real-time data architecture, enabling rapid data consumption with minimal latency. Perfect for services that rely on real-time insights, such as analytics platforms or monitoring tools.',
                    highlightItems: [
                        'Real-time data streaming with minimal latency for high-performance services.',
                        'Seamlessly connect to real-time data feeds with Kafka-based services.',
                    ],
                },
                capabilities: {
                    title: {
                        highlightedText:
                            'Leverage Existing Kafka Infrastructure',
                        normalText: '',
                    },
                    description:
                        'With Dekaf, you can easily integrate Estuary Flow into your Kafka ecosystem, empowering real-time services to consume data without the need for complex configurations or new infrastructure.',
                    capabilityItems: [
                        'Simple, out-of-the-box integration with existing Kafka consumers.',
                        'Maximize your Kafka investment by extending its real-time capabilities to new services.',
                    ],
                },
                benefits: {
                    title: {
                        highlightedText: 'Smarter Real-time Pipelines',
                        normalText: 'for Any Scale',
                    },
                    description:
                        "Replace traditional Kafka complexities with Estuary Flow's simplified, scalable architecture, delivering consistent performance for growing businesses.",
                    benefitItems: [
                        'Reduce the overhead of managing Kafka brokers.',
                        'Easily handles massive real-time data streams.',
                        'Adapts to enterprise-level demands effortlessly.',
                    ],
                },
                keyFeatures: {
                    title: {
                        highlightedText:
                            'Streamline Real-Time Data Integration',
                        normalText: 'with Kafka Compatibility',
                    },
                    description:
                        "Estuary Flow's Dekaf ensures seamless Kafka API compatibility, allowing services and tools to easily consume real-time data streams using existing Kafka consumers.",
                    keyFeatureItems: [
                        'Full Kafka API compatibility with Dekaf for smooth real-time data consumption.',
                        'Effortlessly consume real-time data with existing Kafka-based services and tools.',
                    ],
                },
            },
        },
    ];

    const solutionsUrlPrefix = '/solutions';

    await Promise.all([
        Promise.all(
            useCaseSolutions.map((useCaseSolution) =>
                createPage({
                    path: solutionsUrlPrefix + useCaseSolution.slug,
                    component: useCaseSolutionsTemplate,
                    context: { useCaseSolution },
                })
            )
        ),

        Promise.all(
            industrySolutions.map((industrySolution) =>
                createPage({
                    path: solutionsUrlPrefix + industrySolution.slug,
                    component: industrySolutionsTemplate,
                    context: { industrySolution },
                })
            )
        ),

        Promise.all(
            technologySolutions.map((technologySolution) =>
                createPage({
                    path: solutionsUrlPrefix + technologySolution.slug,
                    component: technologySolutionsTemplate,
                    context: { technologySolution },
                })
            )
        ),
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
