import { graphql } from 'gatsby';
import dayjs from 'dayjs';
import reltime from 'dayjs/plugin/relativeTime';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import logoUrl from '../../images/estuary.png';
import BlogPost from '../../components/BlogPost';

dayjs.extend(reltime);

const CompanyUpdatePostTemplate = ({ data: { post } }) => {
    const postWithPrefixedSlug = {
        ...post,
        slug: `company-updates/${post.slug}/`,
    };

    return (
        <Layout>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        title: 'Home',
                        href: '/',
                    },
                    {
                        title: 'Company Updates',
                        href: '/company-updates',
                    },
                    {
                        title: post.title,
                    },
                ]}
            />
            <BlogPost post={postWithPrefixedSlug} />
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
    const ogImage = post.socialShareImage
        ? `${siteUrl}${post.socialShareImage.localFile.childImageSharp.metaImg.images.fallback.src}`
        : undefined;

    return (
        <>
            <Seo
                title={post.title}
                description={post.description ?? ''}
                url={`${siteUrl}/${post.slug}`}
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
                    'author': 'Estuary',
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
        </>
    );
};

export default CompanyUpdatePostTemplate;

export const pageQuery = graphql`
    query CompanyUpdatePostById($id: String!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        post: strapiCompanyUpdatePost(id: { eq: $id }) {
            title
            publishedAt(formatString: "MMMM D, YYYY")
            updatedAt(formatString: "MMMM D, YYYY")
            machineReadablePublishDate: publishedAt(formatString: "YYYY-MM-DD")
            machineReadableUpdateDate: updatedAt(formatString: "YYYY-MM-DD")
            description
            slug
            body {
                data {
                    body
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
            hero {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                alternativeText
            }
            socialShareImage {
                localFile {
                    childImageSharp {
                        metaImg: gatsbyImageData(layout: FIXED, width: 500)
                    }
                }
            }
        }
    }
`;
