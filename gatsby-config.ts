/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

import path from 'path';
import { GatsbyConfig } from 'gatsby';
import lunr from 'lunr';
import { normalizeConnector } from './src/utils';
import { SUPABASE_CONNECTION_STRING } from './config';

// Disable multiple prepared statements because pgbouncer doesn't like 'em very much
process.env.POSTGRAPHILE_PREPARED_STATEMENT_CACHE_SIZE = '1';

const NO_MATCH_REGEX = '^/__no__match__$/';

const isProd = process.env.NODE_ENV === 'production';

const strapiConfig = {
    apiURL: isProd
        ? process.env.STRAPI_API_URL
        : process.env.STRAPI_API_URL_DEV,
    accessToken: isProd
        ? process.env.STRAPI_TOKEN
        : process.env.STRAPI_TOKEN_DEV,
    maxParallelRequests: 3,
    version: 4, // They now assume v5
    queryLimit: 30,
    collectionTypes: [
        'company-update-post',
        'connection',
        'connector',
        {
            singularName: 'case-study',
            queryParams: {
                fields: [
                    'id',
                    'title',
                    'slug',
                    'description',
                    'linkOneLiner',
                    'metaTitle',
                    'metaDescription',
                    'createdAt',
                    'updatedAt',
                    'publishedAt',
                ],
                populate: {
                    logo: {
                        fields: ['url', 'alternativeText'],
                    },
                    tags: {
                        fields: ['name', 'slug'],
                    },
                    keyMetrics: {
                        populate: '*',
                    },
                    challenges: {
                        populate: '*',
                    },
                    solution: {
                        populate: '*',
                    },
                    aiUseCase: {
                        populate: '*',
                    },
                    results: {
                        populate: '*',
                    },
                    whyEstuary: {
                        populate: '*',
                    },
                },
            },
        },
        {
            singularName: 'blog-post',
            queryParams: {
                fields: [
                    'id',
                    'Slug',
                    'Title',
                    'Description',
                    'Body',
                    'createdAt',
                    'updatedAt',
                    'publishedAt',
                ],
                populate: {
                    authors: { fields: ['id', 'Name', 'Slug'] },
                    Hero: {
                        fields: ['url', 'alternativeText'],
                    },
                    faq: {
                        fields: ['question', 'answer'],
                    },
                    RelatedPosts: {
                        fields: ['id', 'Title', 'Slug', 'updatedAt'],
                        populate: {
                            authors: {
                                fields: ['id', 'Name'],
                                populate: {
                                    Picture: {
                                        fields: ['url', 'alternativeText'],
                                    },
                                },
                            },
                            Hero: {
                                fields: ['url', 'alternativeText'],
                            },
                        },
                    },
                    relatedSuccessStories: {
                        fields: ['id', 'title', 'slug', 'description'],
                        populate: {
                            Logo: {
                                fields: ['url', 'alternativeText'],
                            },
                        },
                    },
                    tags: {
                        fields: ['Name', 'Slug', 'Type', 'IsTab'],
                    },
                },
            },
        },
        {
            singularName: 'author',
            queryParams: {
                fields: ['id', 'Name', 'Slug', 'bio', 'role'],
                populate: {
                    Picture: {
                        fields: ['url', 'alternativeText'],
                    },
                    Socials: {
                        fields: ['linked_in', 'twitter', 'other'],
                    },
                    blog_posts: {
                        fields: ['id', 'Title', 'Slug', 'updatedAt'],
                        populate: {
                            Hero: {
                                fields: ['url', 'alternativeText'],
                            },
                        },
                    },
                },
            },
        },
        {
            singularName: 'tag',
            queryParams: {
                fields: ['Name', 'Slug', 'Type', 'IsTab'],
                populate: {},
            },
        },
        {
            singularName: 'testimonial',
            queryParams: {
                populate: {
                    Name: '*',
                    Text: '*',
                    Logo: {
                        populate: '*',
                    },
                    Enabled: '*',
                    sortOrder: '*',
                    relatedSuccessStory: '*',
                    author: {
                        populate: {
                            name: '*',
                            role: '*',
                            avatar: {
                                populate: '*',
                            },
                        },
                    },
                },
            },
        },
        'vanity-logo',
        'job-posting',
        'employee',
        'podcast',
        {
            singularName: 'solution',
            queryParams: {
                populate: {
                    slug: '*',
                    metadata: {
                        populate: {
                            title: '*',
                            description: '*',
                            image: {
                                populate: '*',
                            },
                        },
                    },
                    hero: {
                        populate: {
                            title: '*',
                            description: '*',
                            image: {
                                populate: '*',
                            },
                            videoUrl: '*',
                            primaryButton: {
                                populate: {
                                    title: '*',
                                    urlOrPath: '*',
                                },
                            },
                            secondaryButton: {
                                populate: {
                                    title: '*',
                                    urlOrPath: '*',
                                },
                            },
                        },
                    },
                    testimonial: {
                        populate: {
                            'section-title': {
                                populate: {
                                    highlightedText: '*',
                                    normalText: '*',
                                    normalTextComesFirst: '*',
                                },
                            },
                            'description': {
                                populate: '*',
                            },
                            'quote': {
                                populate: {
                                    companyLogo: {
                                        populate: '*',
                                    },
                                    companyName: {
                                        populate: '*',
                                    },
                                    successStoryUrl: {
                                        populate: '*',
                                    },
                                    text: {
                                        populate: '*',
                                    },
                                },
                            },
                        },
                    },
                    benefits: {
                        populate: {
                            'section-title': {
                                populate: {
                                    highlightedText: '*',
                                    normalText: '*',
                                    normalTextComesFirst: '*',
                                },
                            },
                            'description': '*',
                            'benefitItems': {
                                populate: '*',
                            },
                            'images': {
                                populate: '*',
                            },
                        },
                    },
                    highlights: {
                        populate: {
                            'section-title': {
                                populate: {
                                    highlightedText: '*',
                                    normalText: '*',
                                    normalTextComesFirst: '*',
                                },
                            },
                            'description': '*',
                            'highlightItems': {
                                populate: '*',
                            },
                        },
                    },
                    capabilities: {
                        populate: {
                            'section-title': {
                                populate: {
                                    highlightedText: '*',
                                    normalText: '*',
                                    normalTextComesFirst: '*',
                                },
                            },
                            'description': '*',
                            'capabilityItems': {
                                populate: '*',
                            },
                        },
                    },
                    keyFeatures: {
                        populate: {
                            'section-title': {
                                populate: {
                                    highlightedText: '*',
                                    normalText: '*',
                                    normalTextComesFirst: '*',
                                },
                            },
                            'description': '*',
                            'keyFeatureItems': {
                                populate: '*',
                            },
                        },
                    },
                    oneTitleThreeCards: {
                        populate: {
                            'section-title': {
                                populate: {
                                    highlightedText: '*',
                                    normalText: '*',
                                    normalTextComesFirst: '*',
                                },
                            },
                            'cardItems': {
                                populate: {
                                    title: '*',
                                    description: '*',
                                },
                            },
                        },
                    },
                    carouselSection: {
                        populate: {
                            title: '*',
                            successStories: '*',
                            blogPosts: '*',
                        },
                    },
                    graphicSections: {
                        populate: {
                            'section-title': {
                                populate: {
                                    highlightedText: '*',
                                    normalText: '*',
                                    normalTextComesFirst: '*',
                                },
                            },
                            'description': '*',
                            'list': {
                                populate: {
                                    title: '*',
                                    items: {
                                        populate: '*',
                                    },
                                },
                            },
                            'sectionCta': {
                                populate: {
                                    link: {
                                        populate: {
                                            title: '*',
                                            urlOrPath: '*',
                                        },
                                    },
                                    type: {
                                        populate: '*',
                                    },
                                },
                            },
                            'graphic': {
                                populate: {
                                    title: '*',
                                    image: {
                                        fields: ['url', 'alternativeText'],
                                    },
                                    subtitles: {
                                        title: '*',
                                        color: '*',
                                    },
                                },
                            },
                            'cardItems': {
                                populate: '*',
                            },
                            'cardsTitle': {
                                populate: {
                                    highlightedText: '*',
                                    normalText: '*',
                                    normalTextComesFirst: '*',
                                },
                            },
                        },
                    },
                    buttonsSection: {
                        populate: {
                            'section-title': {
                                populate: {
                                    highlightedText: '*',
                                    normalText: '*',
                                    normalTextComesFirst: '*',
                                },
                            },
                            'description': '*',
                            'primaryButton': {
                                populate: {
                                    title: '*',
                                    urlOrPath: '*',
                                },
                            },
                            'secondaryButton': {
                                populate: {
                                    title: '*',
                                    urlOrPath: '*',
                                },
                            },
                        },
                    },
                },
            },
        },
        {
            singularName: 'comparison',
            queryParams: {
                populate: {
                    logo: {
                        populate: '*',
                    },
                    UseCases: {
                        populate: {
                            ODS_Replication: {
                                populate: '*',
                            },
                            Data_Integration: {
                                populate: '*',
                            },
                            Data_Migration: {
                                populate: '*',
                            },
                            Stream_Processing: {
                                populate: '*',
                            },
                            Operational_Analytics: {
                                populate: '*',
                            },
                            AI_Pipelines: {
                                populate: '*',
                            },
                            Apache_Iceberg_Support: {
                                populate: '*',
                            },
                        },
                    },
                    Connectors: {
                        populate: {
                            Third_Party: {
                                populate: '*',
                            },
                            Custom_SDK: {
                                populate: '*',
                            },
                            Admin_API: {
                                populate: '*',
                            },
                            Request_a_Connector: {
                                populate: '*',
                            },
                        },
                    },
                    Features: {
                        populate: {
                            ETL_Transforms: {
                                populate: '*',
                            },
                            ELT_Transforms: {
                                populate: '*',
                            },
                            Store_Replay: {
                                populate: '*',
                            },
                            Time_Travel: {
                                populate: '*',
                            },
                            Schema_Inference: {
                                populate: '*',
                            },
                            Data_Ops: {
                                populate: '*',
                            },
                            Snapshots: {
                                populate: '*',
                            },
                            easeOfUse: {
                                populate: '*',
                            },
                            deploymentOptions: {
                                populate: '*',
                            },
                            support: {
                                populate: '*',
                            },
                        },
                    },
                    Deployment: {
                        populate: {
                            Abilities: {
                                populate: '*',
                            },
                            Security: {
                                populate: {
                                    socTwo: {
                                        populate: '*',
                                    },
                                    hipaaCompliance: {
                                        populate: '*',
                                    },
                                },
                            },
                        },
                    },
                    Cost: {
                        populate: {
                            Vendor: {
                                populate: '*',
                            },
                            Data_Engineering: {
                                populate: '*',
                            },
                            Admin: {
                                populate: '*',
                            },
                        },
                    },
                    introductoryDetails: {
                        populate: {
                            Introduction: {
                                populate: '*',
                            },
                            Pros: {
                                populate: '*',
                            },
                            Cons: {
                                populate: '*',
                            },
                            Pricing: {
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
    //     Referer: 'https://your-site-domain/',
    //     // Authorization: 'Bearer eyJhabcdefg_replace_it_with_your_own_token',
    // },
};

const rehypeSelectors = {
    STRAPI_BLOG_POST_BODY_TEXTNODE: {
        extractor: (node) => node.Body,
        pluginOpts: {
            enableToc: false,
        },
    },
    STRAPI_COMPANY_UPDATE_POST_BODY_TEXTNODE: {
        extractor: (node) => node.body,
        pluginOpts: {
            enableToc: false,
        },
    },
    STRAPI_JOB_POSTING_DESCRIPTION_TEXTNODE: {
        extractor: (node) => node.Description,
        pluginOpts: { enableToc: false },
    },
};

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const gatsbyPluginLocalSearchSettings = {
    engine: 'lunr',
    ref: 'id',
    store: ['id', 'title', 'slug'],
};

lunr.tokenizer.separator = /\s+/;

const cfg: GatsbyConfig = {
    siteMetadata: {
        title: 'Estuary',
        description: 'Estuary',
        siteUrl: 'https://estuary.dev',
        siteName: 'Estuary',
        social: {
            twitter: 'estuary twitter',
        },
    },
    flags: {
        PRESERVE_FILE_DOWNLOAD_CACHE: true,
        PARALLEL_SOURCING: false,
        DEV_SSR: true,
    },
    // graphqlTypegen: true,
    plugins: [
        {
            resolve: 'gatsby-plugin-no-sourcemaps',
        },
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
                                `900`,
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
            resolve: 'gatsby-plugin-local-search',
            options: {
                // A unique name for the search index. This should be descriptive of
                // what the index contains. This is required.
                name: 'posts',

                // Set the search engine to create the index. This is required.
                // The following engines are supported: flexsearch, lunr
                engine: gatsbyPluginLocalSearchSettings.engine,

                // GraphQL query used to fetch all data for the search index. This is required.
                query: `
                {
                  allStrapiBlogPost {
                    nodes {
                      id
                      slug: Slug
                      title: Title
                      description: Description
                      publishedAt(formatString: "MMMM D, YYYY")
                      tags {
                        Name
                        Slug
                        Type
                      }
                      authors {
                        name: Name
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
                          }
                        }
                      }
                    }
                  }
                }
              `,

                // Field used as the reference value for each document.
                // Default: 'id'.
                ref: gatsbyPluginLocalSearchSettings.ref,

                // List of keys to index. The values of the keys are taken from the
                // normalizer function below.
                // Default: all fields
                index: [
                    'slug',
                    'title',
                    'description',
                    'searchable_tags',
                    'authorsText',
                ],

                // List of keys to store and make available in your UI. The values of
                // the keys are taken from the normalizer function below.
                // Default: all fields
                store: [
                    ...gatsbyPluginLocalSearchSettings.store,
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
                    const startTime = performance.now();
                    const response = data.allStrapiBlogPost.nodes.map(
                        (node) => ({
                            ...node,
                            searchable_tags: node.tags
                                .map((t) => t.Name)
                                .join(' '),
                            authorsText: node.authors
                                .map((a) => a.name)
                                .join(' '),
                        })
                    );

                    console.log(
                        `LunrSearch:normalizer:blog took ${Math.ceil(performance.now() - startTime)}ms`
                    );

                    return response;
                },
            },
        },
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                name: 'connectors',

                engine: gatsbyPluginLocalSearchSettings.engine,

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

                ref: gatsbyPluginLocalSearchSettings.ref,

                index: ['title', 'shortDescription', 'type'],

                // These match the response of normalizeConnector()
                store: [
                    ...gatsbyPluginLocalSearchSettings.store,
                    'externalUrl',
                    'imageName',
                    'shortDescription',
                    'longDescription',
                    'logoUrl',
                    'logo',
                    'recommended',
                    'type',
                ],

                normalizer: ({ data }) => {
                    const startTime = performance.now();
                    const response = data.postgres.allConnectors.nodes
                        .map((node) => {
                            return normalizeConnector(node);
                        })
                        .filter((connector) => {
                            return connector !== undefined;
                        });

                    console.debug(
                        `LunrSearch:normalizer:connector took ${Math.ceil(performance.now() - startTime)}ms`
                    );
                    return response;
                },
            },
        },
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                name: 'cases',
                engine: gatsbyPluginLocalSearchSettings.engine,
                query: `
                {
                  allStrapiCaseStudy(sort: { createdAt: DESC }) {
                    nodes {
                      id
                      slug
                      title
                      description
                      metaTitle
                      metaDescription
                      linkOneLiner
                      tags {
                        Name
                        Slug
                        Type
                      }
                      hero: logo {
                        alternativeText
                        localFile {
                          childImageSharp {
                            gatsbyImageData(
                              quality: 100
                              placeholder: BLURRED
                              height: 172
                              layout: FULL_WIDTH
                            )
                          }
                        }
                      }
                    }
                  }
                }
                `,
                ref: gatsbyPluginLocalSearchSettings.ref,

                index: [
                    'slug',
                    'title',
                    'description',
                    'metaTitle',
                    'metaDescription',
                    'searchable_tags',
                    'heroImgAltText',
                    'linkOneLiner',
                    'keyMetricsText',
                    'challengesText',
                    'solutionText',
                    'aiUseCaseText',
                    'resultsText',
                    'whyEstuaryText',
                ],

                store: [
                    ...gatsbyPluginLocalSearchSettings.store,
                    'tags',
                    'description',
                    'hero',
                ],

                normalizer: ({ data }) => {
                    const startTime = performance.now();
                    const stripHtml = (html: string) =>
                        (html || '').replace(/<[^>]+>/g, ' ');

                    const extractComponentText = (components: any[]) => {
                        if (!Array.isArray(components)) return '';
                        return components
                            .map((component) => {
                                switch (component.__component) {
                                    case 'case-study.highlighted-content':
                                        return `${component.title || ''} ${stripHtml(component.description?.data || '')} ${component.footnote || ''}`;
                                    case 'case-study.testimonial':
                                        return `${component.text || ''} ${component.author?.name || ''} ${component.author?.role || ''}`;
                                    case 'case-study.cards-group':
                                        return `${component.title || ''} ${(component.cards || []).map((card) => `${card.title || ''} ${stripHtml(card.description?.data || '')}`).join(' ')}`;
                                    case 'case-study.numbered-card':
                                        return `${component.title || ''} ${stripHtml(component.description?.data || '')}`;
                                    case 'case-study.about-card':
                                        return stripHtml(
                                            component.about?.data || ''
                                        );
                                    case 'case-study.goals-card':
                                        return stripHtml(
                                            component.goals?.data || ''
                                        );
                                    default:
                                        return '';
                                }
                            })
                            .join(' ');
                    };

                    const response = data.allStrapiCaseStudy.nodes.map(
                        (node) => {
                            return {
                                ...node,
                                searchable_tags: node.tags
                                    .map((t: { Name: string }) => t.Name)
                                    .join(' '),
                                heroImgAltText:
                                    node.hero?.alternativeText ?? '',
                                keyMetricsText: extractComponentText(
                                    node.keyMetrics
                                ),
                                challengesText: extractComponentText(
                                    node.challenges
                                ),
                                solutionText: extractComponentText(
                                    node.solution
                                ),
                                aiUseCaseText: extractComponentText(
                                    node.aiUseCase
                                ),
                                resultsText: extractComponentText(node.results),
                                whyEstuaryText: extractComponentText(
                                    node.whyEstuary
                                ),
                            };
                        }
                    );
                    console.debug(
                        `LunrSearch:normalizer:success-story took ${Math.ceil(performance.now() - startTime)}ms`
                    );
                    return response;
                },
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
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                    }
                  }
                }
              `,
                feeds: [
                    {
                        custom_namespaces: {
                            atom: 'http://www.w3.org/2005/Atom',
                        },
                        match: NO_MATCH_REGEX,
                        feed_url: 'https://estuary.dev/blog/rss.xml',
                        site_url: 'https://estuary.dev',
                        serialize: ({ query: { site, allStrapiBlogPost } }) => {
                            return allStrapiBlogPost.nodes.map((post) => {
                                const url = `${site.siteMetadata.siteUrl}/blog/${post.slug}`;
                                return {
                                    title: post.title,
                                    description: post.description,
                                    date: post.publishedAt,
                                    url,
                                    guid: url,
                                    custom_elements: [
                                        { 'atom:updated': post.updatedAt },
                                    ],
                                };
                            });
                        },
                        query: `
                            {
                                allStrapiBlogPost(
                                    filter: { publishedAt: { ne: null } }
                                    sort:   { publishedAt: DESC }
                                ) {
                                    nodes {
                                        title: Title
                                        slug:  Slug
                                        description: Description
                                        publishedAt(
                                            formatString: "YYYY-MM-DD[T]HH:mm:ssZ"
                                        )
                                        updatedAt(
                                            formatString: "YYYY-MM-DD[T]HH:mm:ssZ"
                                        )
                                    }
                                }
                            }
                        `,
                        output: '/blog/rss.xml',
                        title: 'Estuary Blog RSS Feed',
                    },
                ],
            },
        },
        `gatsby-plugin-provide-react`,
    ],
};

module.exports = cfg;
