import { graphql } from 'gatsby';
import BlogPostPopupModal from '../../components/BlogPostPopupModal';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import logoUrl from '../../images/estuary.png';
import { getAuthorSeoJson } from '../../../shared';
import BlogPost from '../../components/BlogPost';

const BlogPostTemplate = ({ data: { post } }) => {
    return (
        <Layout hasLightSections>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        title: 'Home',
                        href: '/',
                    },
                    {
                        title: 'Blog',
                        href: '/blog',
                    },
                    {
                        title: post.title,
                    },
                ]}
            />
            <BlogPost post={post} hasPopularArticlesSection hasBodyCtaBanner />
            <BlogPostPopupModal />
        </Layout>
    );
};

export const Head = ({
    data: {
        post,
        site: {
            siteMetadata: { siteUrl },
        },
    },
}) => {
    const mappedAuthors = post.authors.map((author) =>
        getAuthorSeoJson(author, siteUrl)
    );

    const postTags = post.tags
        .filter((tag) => tag.type === 'tag')
        .map((t) => t.name);

    const ogImage = post.hero
        ? `${siteUrl}${post.hero.localFile.childImageSharp.metaImg.images.fallback.src}`
        : undefined;

    return (
        <>
            <Seo
                title={post.title}
                description={post.description ?? ''}
                url={`${siteUrl}/blog/${post.slug}`}
                image={ogImage}
            />
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    'mainEntityOfPage': {
                        '@type': 'WebPage',
                        '@id': `${siteUrl}/${post.slug}`,
                    },
                    'headline': post.title,
                    'description': post.description ?? '',
                    'image': ogImage,
                    'author':
                        post.authors.length > 1
                            ? mappedAuthors
                            : mappedAuthors[0],
                    'keywords': postTags,
                    'publisher': {
                        '@type': 'Organization',
                        'name': 'Estuary',
                        'logo': {
                            '@type': 'ImageObject',
                            'url': `${siteUrl}${logoUrl}`,
                        },
                    },
                    'datePublished': post.machineReadablePublishDate,
                    'dateModified': post.machineReadableUpdateDate,
                })}
            </script>
            <link
                rel="alternate"
                type="application/rss+xml"
                title="Estuary Blog RSS Feed"
                href="/blog/rss.xml"
            />
            {post?.faq?.length > 0 ? (
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        'mainEntity': post.faq.map(({ question, answer }) => ({
                            '@type': 'Question',
                            'name': question,
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': answer,
                            },
                        })),
                    })}
                </script>
            ) : null}
        </>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($id: String!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        post: strapiBlogPost(id: { eq: $id }) {
            title: Title
            publishedAt(formatString: "MMMM D, YYYY")
            updatedAt(formatString: "MMMM D, YYYY")
            machineReadablePublishDate: publishedAt(
                formatString: "YYYY-MM-DD[T]HH:mm:ssZ"
            )
            machineReadableUpdateDate: updatedAt(
                formatString: "YYYY-MM-DD[T]HH:mm:ssZ"
            )
            description: Description
            slug: Slug
            body: Body {
                data {
                    Body
                    childHtmlRehype {
                        html
                        tableOfContents
                    }
                    childMarkdownRemark {
                        fields {
                            readingTime {
                                text
                            }
                        }
                    }
                }
            }
            faq {
                question
                answer
            }
            authors {
                id
                name: Name
                slug: Slug
                picture: Picture {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                placeholder: BLURRED
                                quality: 100
                            )
                            fixedImg: gatsbyImageData(layout: FIXED, width: 60)
                        }
                    }
                }
                role
                bio {
                    data {
                        bio
                    }
                }
                socials: Socials {
                    linked_in
                    twitter
                    other
                }
            }
            hero: Hero {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            # aspectRatio: 2
                            formats: [AUTO, WEBP, AVIF]
                        )
                        metaImg: gatsbyImageData(layout: FIXED, width: 500)
                        # Further below in this doc you can learn how to use these response images
                    }
                }
            }
            tags: tags {
                name: Name
                type: Type
            }
            relatedPosts: RelatedPosts(sort: { publishedAt: DESC }) {
                id
                title: Title
                slug: Slug
                authors {
                    id
                    name: Name
                    picture: Picture {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: CONSTRAINED
                                    placeholder: BLURRED
                                    quality: 100
                                )
                                fixedImg: gatsbyImageData(
                                    layout: FIXED
                                    width: 60
                                )
                            }
                        }
                    }
                }
                hero: Hero {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: FULL_WIDTH
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
            }
        }
    }
`;
