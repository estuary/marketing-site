import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import { getAuthorSeoJson } from '../../../shared';
import SectionOne from './SectionOne';
import { Author } from './shared';
import SectionTwo from './SectionTwo';

interface AuthorPageProps {
    data: {
        author: Author;
    };
}

const AuthorPage = ({
    data: {
        author: { name, role, bio, socials, picture, blogPosts },
    },
}: AuthorPageProps) => {
    return (
        <Layout>
            <SectionOne
                author={{
                    name,
                    role,
                    bio,
                    socials,
                    picture,
                }}
            />
            <SectionTwo
                author={{
                    name,
                    blogPosts,
                }}
            />
        </Layout>
    );
};

export default AuthorPage;

export const Head = ({
    data: {
        author,
        site: {
            siteMetadata: { siteUrl },
        },
    },
}) => {
    const seoJson = getAuthorSeoJson(author, siteUrl);

    return (
        <>
            <Seo title={author.name} description={seoJson.description} />
            <script type="application/ld+json">
                {JSON.stringify(seoJson)}
            </script>
        </>
    );
};

export const pageQuery = graphql`
    query AuthorById($id: String!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        author: strapiAuthor(id: { eq: $id }) {
            id
            name: Name
            picture: Picture {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            width: 208
                            height: 208
                            placeholder: BLURRED
                        )
                        fixedImg: gatsbyImageData(layout: FIXED, width: 60)
                    }
                }
            }
            slug: Slug
            socials: Socials {
                linked_in
                twitter
                other
            }
            bio {
                data {
                    bio
                }
            }
            role
            blogPosts: blog_posts {
                id
                title: Title
                slug: Slug
                tags {
                    name: Name
                    slug: Slug
                    type: Type
                }
                updatedAt(formatString: "MMMM D, YYYY")
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
                        }
                    }
                    alternativeText
                }
                body: Body {
                    data {
                        childMarkdownRemark {
                            fields {
                                readingTime {
                                    text
                                }
                            }
                        }
                    }
                }
                authors {
                    name: Name
                    role
                    picture: Picture {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: CONSTRAINED
                                    placeholder: BLURRED
                                    quality: 100
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`;
