import { Link, graphql } from 'gatsby';
import { Alert, Divider } from '@mui/material';
import clsx from 'clsx';
import BigImageBackground from '../../components/BackgroundImages/BigImageBackground';
import { BlogPostCard } from '../../components/BlogPostCard';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import SearchInput from '../../components/SearchInput';
import FlowLogoVector from '../../components/FlowLogoVector';
import Grid from '../../components/Grid';
import { useSearch } from '../../hooks/useSearch';
import {
    container,
    blogsIndexTabBar,
    blogsIndexTabs,
    blogsIndexTab,
    blogsIndexTabActive,
    blogsIndexHeader,
    blogsIndexBody,
    blogsNav,
    flowLogoWrapper,
} from './styles.module.less';

interface BlogIndexProps {
    data: {
        allStrapiBlogPost: { nodes: any[] };
        localSearchPosts: { index: string; store: string[] };
    };
    pageContext: {
        blogPostIds: string[];
        tabCategories: Array<{ Type: string; Slug: string; Name: string }>;
        categoryTitle: string;
        categorySlug: string;
        pagination: {
            page: number;
            totalPages: number;
            nextPage?: string;
            prevPage?: string;
        };
    };
}

const BlogIndex = ({
    data,
    pageContext: {
        categorySlug,
        tabCategories: realTabCategories,
        pagination: { nextPage, prevPage },
    },
}: BlogIndexProps) => {
    const posts = data.allStrapiBlogPost.nodes;

    const tabCategories = [
        { Slug: '', Name: 'All', Type: 'category' },
        ...realTabCategories,
    ];

    const { query, results, handleQueryChange, noResults } = useSearch({
        indexJson: data.localSearchPosts.index,
        store: data.localSearchPosts.store,
        defaultItems: posts,
    });

    return (
        <Layout>
            <BigImageBackground>
                <div className={container}>
                    <div className={blogsIndexHeader}>
                        <h2>Blog</h2>
                        <p>
                            More about Estuary and related technologies,
                            straight from the team.
                        </p>
                        <p>
                            Our blog breaks down basic concepts and takes you
                            into the minds of our engineers. We also dig into
                            the business principles that guide our company and
                            allow us to build great solutions for yours.
                        </p>
                    </div>
                    <div className={flowLogoWrapper}>
                        <FlowLogoVector />
                    </div>
                </div>
                <div className={blogsIndexTabBar}>
                    <div className={blogsIndexTabs}>
                        {tabCategories.map((category) => (
                            <Link
                                key={category.Slug}
                                to={`/blog/${category.Slug}`}
                                className={clsx(
                                    blogsIndexTab,
                                    category.Slug === categorySlug
                                        ? blogsIndexTabActive
                                        : null
                                )}
                            >
                                {category.Name}
                            </Link>
                        ))}
                    </div>
                    <SearchInput
                        placeholder="Search Blog Posts"
                        handleQueryChange={handleQueryChange}
                    />
                </div>

                <Grid className={blogsIndexBody}>
                    {noResults ? (
                        <Alert severity="info">No blog posts found.</Alert>
                    ) : null}

                    {results.map((post, idx) => (
                        <BlogPostCard key={`${post.id}-${idx}`} {...post} />
                    ))}
                </Grid>
            </BigImageBackground>
            {query.length < 1 && (prevPage ?? nextPage) ? (
                <>
                    <Divider />
                    <div className={blogsNav}>
                        {prevPage ? (
                            <Link to={prevPage}>← Prev Page</Link>
                        ) : null}
                        <div style={{ flexGrow: 1 }} />
                        {nextPage ? (
                            <Link to={nextPage}>Next Page →</Link>
                        ) : null}
                    </div>
                </>
            ) : null}
        </Layout>
    );
};

export default BlogIndex;

export const Head = ({ pageContext }: BlogIndexProps) => {
    const { categorySlug, pagination } = pageContext;
    const currentPage = pagination.page;
    const pageNumber = currentPage + 1;
    const titlePrefix = 'Estuary Blog | ';

    const seoConfig = {
        'data-basics': {
            page1: {
                title: `${titlePrefix}Data Basics for Data Engineers`,
                description:
                    'Fundamental data concepts explained for engineers. Get started with data basics on the Estuary blog.',
            },
            pageN: {
                title: `${titlePrefix}Data Basics for Data Engineers - Page ${pageNumber}`,
                description: `Page ${pageNumber} of Data Basics. Continue exploring foundational data concepts and best practices for engineers.`,
            },
        },
        'data-engineering': {
            page1: {
                title: `${titlePrefix}Data Engineering Insights & Best Practices`,
                description:
                    'Deep dives and thought leadership on data engineering from the Estuary team. Explore tools, trends, and best practices.',
            },
            pageN: {
                title: `${titlePrefix}Data Engineering Insights - Page ${pageNumber}`,
                description: `Page ${pageNumber} of Data Engineering content. More insights, trends, and practical guides for data teams.`,
            },
        },
        'tutorial': {
            page1: {
                title: `${titlePrefix}Tutorials on Data Integration & Engineering`,
                description:
                    'Hands-on tutorials for real-time data integration and engineering use cases using Estuary and other tools.',
            },
            pageN: {
                title: `${titlePrefix}Tutorials on Data Integration - Page ${pageNumber}`,
                description: `Page ${pageNumber} of Tutorials. Continue learning real-time data integration through practical how-to articles.`,
            },
        },
    };

    const config = seoConfig[categorySlug] ?? {
        page1: {
            title: `${titlePrefix}Insights on Data Strategy and Engineering`,
            description:
                'Explore all Estuary blog posts covering data strategy, engineering insights, tutorials, and best practices.',
        },
        pageN: {
            title: `${titlePrefix}Insights on Data Strategy and Engineering - Page ${pageNumber}`,
            description: `Page ${pageNumber} of all Estuary blog posts. Discover more insights into data strategy and engineering best practices.`,
        },
    };

    const seoData = currentPage === 0 ? config.page1 : config.pageN;

    return (
        <>
            <Seo
                title={seoData.title}
                description={seoData.description}
                prevUrl={pagination.prevPage}
                nextUrl={pagination.nextPage}
            />
            <link
                rel="alternate"
                type="application/rss+xml"
                title="Estuary Blog RSS Feed"
                href="/blog/rss.xml"
            />
        </>
    );
};

export const pageQuery = graphql`
    # We need to pass in IDs because we do the filtering in gatsby-node.ts
    # because gatsby won't let us filter by elemMatch on multiple conditions
    # i.e type: "category" AND slug: "..."
    query BlogData($blogPostIds: [String]!) {
        site {
            siteMetadata {
                title
            }
        }
        localSearchPosts {
            index
            store
        }
        allStrapiBlogPost(
            filter: { id: { in: $blogPostIds } }
            sort: [{ publishedAt: DESC }]
        ) {
            nodes {
                title: Title
                slug: Slug
                updatedAt(formatString: "MMMM D, YYYY")
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
                                gatsbyImageData(layout: CONSTRAINED, width: 50)
                            }
                        }
                    }
                }
                hero: Hero {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                width: 400
                                placeholder: BLURRED
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
`;
