import { Link, graphql } from 'gatsby';
import * as React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Divider } from '@mui/material';
import clsx from 'clsx';
import lunr, { type Index } from 'lunr';
import { useMemo } from 'react';
import BigImageBackground from '../../components/BackgroundImages/BigImageBackground';
import { BlogPostCard } from '../../components/BlogPostCard';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import FlowLogo from '../../svgs/flow-logo.svg';
import {
    container,
    blogsIndexTabBar,
    blogsIndexTabs,
    blogsIndexTab,
    blogsIndexTabActive,
    blogsIndexHeader,
    blogsIndexBody,
    blogsNav,
} from './styles.module.less';

interface BlogIndexProps {
    data: {
        allStrapiBlogPost: {
            nodes: any[];
        };
        localSearchPosts: {
            index: any;
            store: any;
        };
    };
    pageContext: {
        blogPostIds: String[];
        tabCategories: Array<{
            Type: String;
            Slug: string;
            Name: String;
        }>;
        categoryTitle: String;
        categorySlug: String;
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

    const index: Index = React.useMemo(
        () => lunr.Index.load(JSON.parse(data.localSearchPosts.index)),
        [data.localSearchPosts.index]
    );

    const [query, setQuery] = React.useState('');

    const results = useMemo(() => {
        const query_result = index.query((q) => {
            const terms = query.split(' ').filter((term) => term.length > 0);
            for (const term of terms) {
                q.term(term, {
                    wildcard: lunr.Query.wildcard.TRAILING,
                    boost: 10,
                });
                q.term(term, {
                    editDistance: Math.min(Math.max(0, term.length - 1), 3),
                });
            }
            return q;
        });
        return query_result.map((r) => data.localSearchPosts.store[r.ref]);
    }, [query, index, data.localSearchPosts.store]);

    const tabCategories = [
        { Slug: '', Name: 'All', Type: 'category' },
        ...realTabCategories,
    ];

    return (
        <Layout>
            <BigImageBackground>
                <div className={container}>
                    <div className={blogsIndexHeader}>
                        <div className="blog-post-header-vectors">
                            <FlowLogo className="blog-post-header-vector" />
                        </div>
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
                    <div className="blogs-index-search">
                        <SearchIcon className="blogs-index-input-adornment" />
                        <input
                            placeholder="Search Blog Posts"
                            type="text"
                            value={query}
                            onChange={(evt) => setQuery(evt.target.value)}
                        />
                    </div>
                </div>
                <div className={blogsIndexBody}>
                    {(query.length > 0 ? results : posts).map((post) => (
                        <BlogPostCard key={post.Slug} {...post} />
                    ))}
                </div>
            </BigImageBackground>
            {prevPage ?? nextPage ? (
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

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => {
    return (
        <Seo
            title="Blog"
            description="More about Estuary and related technologies, straight from the team. Our blog breaks down basic concepts and takes you into the minds of our engineers."
        />
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
                    link: Link
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