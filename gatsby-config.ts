/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

import path from 'path';
import { GatsbyConfig } from 'gatsby';
import { normalizeConnector } from './src/utils';

import { SUPABASE_CONNECTION_STRING } from './config';

// Disable multiple prepared statements because pgbouncer doesn't like 'em very much
process.env.POSTGRAPHILE_PREPARED_STATEMENT_CACHE_SIZE = '1';

const strapiConfig = {
    apiURL: process.env.STRAPI_API_URL,
    accessToken: process.env.STRAPI_TOKEN,
    collectionTypes: [
        'blog-post',
        'tag',
        'author',
        'connection',
        'connector',
        'testimonial',
        'vanity-logo',
        'job-posting',
        'product-comparison-page',
        'comparison',
        'employee',
        'comparison',
        'podcast',
        {
            singularName: 'case-study',
            queryParams: {
                populate: {
                    Logo: {
                        populate: '*',
                    },
                    About: {
                        populate: {
                            Topics: {
                                populate: '*',
                            },
                        },
                    },
                },
            },
        },
    ],
    singleTypes: [],
    // remoteFileHeaders: {
    //     /**
    //      * Customized request headers
    //      * For http request with a image or other files need authorization
    //      * For expamle: Fetch a CDN file which has a security config when gatsby building needs
    //      */
    //     Referer: "https://your-site-domain/",
    //     // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
    // },
};

const rehypeSelectors = {
    STRAPI_BLOG_POST_BODY_TEXTNODE: {
        extractor: (node) => node.Body,
        pluginOpts: {
            enableToc: false,
        },
    },
    STRAPI_JOB_POSTING_DESCRIPTION_TEXTNODE: {
        extractor: (node) => node.Description,
        pluginOpts: { enableToc: false },
    },
    STRAPI_CASE_STUDY_BODY_TEXTNODE: {
        extractor: (node) => node.Body,
        pluginOpts: {
            enableToc: false,
        },
    },
    STRAPI_CASE_STUDY_SIDECONTENT_TEXTNODE: {
        extractor: (node) => node.SideContent,
        pluginOpts: {
            enableToc: false,
        },
    },
    STRAPI__COMPONENT_CASE_STUDY_CASE_STUDY_ABOUT_DESCRIPTION_TEXTNODE: {
        extractor: (node) => node.Description,
        pluginOpts: {
            enableToc: false,
        },
    },
};

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const cfg: GatsbyConfig = {
    siteMetadata: {
        title: 'Estuary',
        description: 'Estuary',
        siteUrl: 'https://estuary.dev',
        social: {
            twitter: 'estuary twitter',
        },
    },
    flags: {
        PARALLEL_SOURCING: true,
        DEV_SSR: true,
    },
    // graphqlTypegen: true,
    plugins: [
        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            family: `Inter`,
                            variants: [
                                `200`,
                                `300`,
                                `400`,
                                `500`,
                                `600`,
                                `700`,
                            ],
                        },
                    ],
                },
                formats: ['woff2', 'woff'],
                useMinify: true,
                usePreload: true,
                usePreconnect: true,
            },
        },
        {
            resolve: 'gatsby-plugin-preconnect',
            options: {
                domains: ['https://hs-banner.com', 'https://hs-scripts.com'],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/images`,
                name: 'blog_images',
            },
        },
        {
            resolve: 'gatsby-source-strapi',
            options: strapiConfig,
        },
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                query: `
              {
                site {
                  siteMetadata {
                    siteUrl
                  }
                }
                allSitePage {
                  nodes {
                    path
                    pageContext
                  }
                }
              }
              `,
                serialize: ({ path: serializePath, pageContext }) => {
                    return {
                        url: serializePath,
                        lastmod: pageContext?.lastMod,
                    };
                },
            },
        },
        'gatsby-plugin-robots-txt',
        'gatsby-transformer-inline-svg',
        'gatsby-plugin-image',
        // `gatsby-plugin-svgr-svgo`,
        {
            resolve: 'gatsby-transformer-rehype',
            options: {
                // Condition for selecting an existing GrapghQL node (optional)
                // If not set, the transformer operates on file nodes.
                filter: (node) =>
                    Object.keys(rehypeSelectors).includes(node.internal.type),
                // Only needed when using filter (optional, default: node.html)
                // Source location of the html to be transformed
                source: (node) =>
                    rehypeSelectors[node.internal.type].extractor(node),
                // Additional fields of the sourced node can be added here (optional)
                // These fields are then available on the htmlNode on `htmlNode.context`
                contextFields: [],
                // Fragment mode (optional, default: true)
                fragment: true,
                // Space mode (optional, default: `html`)
                space: 'html',
                // EmitParseErrors mode (optional, default: false)
                emitParseErrors: true,
                // Verbose mode (optional, default: false)
                verbose: true,
                // Plugins configs (optional but most likely you need one)
                plugins: [
                    {
                        resolve: '@draftbox-co/gatsby-rehype-inline-images',
                        // all options are optional and can be omitted
                        pluginOptions: {
                            // all images larger are scaled down to maxWidth (default: maxWidth = imageWidth)
                            // maxWidth: 2000,
                            // disable, if you need to save memory
                            useImageCache: true,
                            quality: 100,
                        },
                    },
                    {
                        // Can't use require.resolve
                        // https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#requireresolve
                        resolve: path.resolve(
                            './plugins/estuary-rehype-transformers'
                        ),
                        pluginOptions: Object.assign(
                            {},
                            ...Object.entries(rehypeSelectors).map(
                                ([k, { pluginOpts }]) => ({ [k]: pluginOpts })
                            )
                        ),
                    },
                ],
            },
        },
        'gatsby-plugin-less',
        {
            resolve: 'gatsby-plugin-styled-components',
            // https://styled-components.com/docs/tooling#babel-plugin
            options: {
                ssr: false, // We need this to prevent mismatch errors
                transpileTemplateLiterals: false, // Setting to false just to be safe - think we can remove in future
                displayName: process.env.NODE_ENV !== 'production', // Good to enable when debugging - but should not be needed for production
                fileName: true, // We want to use the file in the style name
                preprocess: false,
                meaninglessFileNames: ['index', 'styles'], // Having these two files names in the class name isn't too valuable
            },
        },
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                // A unique name for the search index. This should be descriptive of
                // what the index contains. This is required.
                name: 'posts',

                // Set the search engine to create the index. This is required.
                // The following engines are supported: flexsearch, lunr
                engine: 'lunr',

                // Provide options to the engine. This is optional and only recommended
                // for advanced users.
                //
                // Note: Only the flexsearch engine supports options.
                // engineOptions: "default",

                // GraphQL query used to fetch all data for the search index. This is required.
                query: `
                {
                    allStrapiBlogPost{
                        nodes {
                            id
                            title: Title
                            slug: Slug
                            publishedAt(formatString: "MMMM D, YYYY")
                            tags: tags {
                                Name
                                Slug
                                Type
                            }
                            authors {
                                name: Name
                                picture: Picture {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData(layout: CONSTRAINED, width: 50, placeholder: BLURRED)
                                        }
                                    }
                                }
                            }
                            hero: Hero {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(
                                            layout: CONSTRAINED
                                            placeholder: BLURRED
                                            width: 400
                                            aspectRatio: 1.7
                                            formats: [AUTO, WEBP, AVIF]
                                        )
                                        # Further below in this doc you can learn how to use these response images
                                    }
                                }
                            }
                        }
                    }
                }
              `,

                // Field used as the reference value for each document.
                // Default: 'id'.
                ref: 'id',

                // List of keys to index. The values of the keys are taken from the
                // normalizer function below.
                // Default: all fields
                index: ['title', 'searchable_tags'],

                // List of keys to store and make available in your UI. The values of
                // the keys are taken from the normalizer function below.
                // Default: all fields
                store: [
                    'id',
                    'title',
                    'slug',
                    'publishedAt',
                    'tags',
                    'authors',
                    'hero',
                ],

                // Function used to map the result from the GraphQL query. This should
                // return an array of items to index in the form of flat objects
                // containing properties to index. The objects must contain the `ref`
                // field above (default: 'id'). This is required.
                normalizer: ({ data }) => {
                    const allNodes = data.allStrapiBlogPost.nodes;
                    const mappedNodes = allNodes.map((node) => ({
                        ...node,
                        searchable_tags: node.tags.map((t) => t.Name).join(' '),
                    }));
                    // eslint-disable-next-line no-debugger
                    debugger;
                    return mappedNodes;
                },
            },
        },
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                // A unique name for the search index. This should be descriptive of
                // what the index contains. This is required.
                name: 'connectors',

                // Set the search engine to create the index. This is required.
                // The following engines are supported: flexsearch, lunr
                engine: 'lunr',

                // Provide options to the engine. This is optional and only recommended
                // for advanced users.
                //
                // Note: Only the flexsearch engine supports options.
                // engineOptions: "default",

                // GraphQL query used to fetch all data for the search index. This is
                // required.
                query: `
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
              `,

                // Field used as the reference value for each document.
                // Default: 'id'.
                ref: 'id',

                // List of keys to index. The values of the keys are taken from the
                // normalizer function below.
                // Default: all fields
                index: ['title', 'shortDescription', 'type'],

                // List of keys to store and make available in your UI. The values of
                // the keys are taken from the normalizer function below.
                // Default: all fields
                store: [
                    'id',
                    'externalUrl',
                    'imageName',
                    'shortDescription',
                    'longDescription',
                    'title',
                    'logoUrl',
                    'logo',
                    'recommended',
                    'type',
                    'slug',
                ],

                // Function used to map the result from the GraphQL query. This should
                // return an array of items to index in the form of flat objects
                // containing properties to index. The objects must contain the `ref`
                // field above (default: 'id'). This is required.
                normalizer: ({ data }) =>
                    data.postgres.allConnectors.nodes.map(normalizeConnector),
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /svgs/, // See below to configure properly
                },
            },
        },
        {
            resolve: 'gatsby-source-pg',
            options: {
                connectionString: SUPABASE_CONNECTION_STRING,
                schema: 'public',
                //   refetchInterval: 60, // Refetch data every 60 seconds
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://estuary.dev`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-reading-time`],
            },
        },
        // {
        //   resolve: `gatsby-plugin-feed`,
        //   options: {
        //     query: `
        //       {
        //         site {
        //           siteMetadata {
        //             title
        //             description
        //             siteUrl
        //             site_url: siteUrl
        //           }
        //         }
        //       }
        //     `,
        //     feeds: [
        //       {
        //         serialize: ({ query: { site, allMarkdownRemark } }) => {
        //           return allMarkdownRemark.nodes.map(node => {
        //             return Object.assign({}, node.frontmatter, {
        //               description: node.excerpt,
        //               date: node.frontmatter.date,
        //               url: site.siteMetadata.siteUrl + node.fields.slug,
        //               guid: site.siteMetadata.siteUrl + node.fields.slug,
        //               custom_elements: [{ "content:encoded": node.html }],
        //             })
        //           })
        //         },
        //         query: `{
        //           allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
        //             nodes {
        //               excerpt
        //               html
        //               fields {
        //                 slug
        //               }
        //               frontmatter {
        //                 title
        //                 date
        //               }
        //             }
        //           }
        //         }`,
        //         output: "/rss.xml",
        //         title: "Gatsby Starter Blog RSS Feed",
        //       },
        //     ],
        //   },
        // },
    ],
};

module.exports = cfg;
