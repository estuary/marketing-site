import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
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
            <SectionTwo authorBlogPosts={blogPosts} />
        </Layout>
    );
};

export default AuthorPage;

// TODO: Add the SEO Head here - Review the title and description with Sourabh.

export const pageQuery = graphql`
    query AuthorById($id: String!) {
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
                            # Further below in this doc you can learn how to use these response images
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
                    link: Link
                }
            }
        }
    }
`;
