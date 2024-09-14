import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import SectionOne from './SectionOne';
import { Author } from './shared';

interface AuthorPageProps {
    data: {
        author: Author;
    };
}

const AuthorPage = ({
    data: {
        author: { name, role, bio, socials, picture },
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
            blog_posts {
                id
                Title
                Slug
                tags {
                    Name
                    Slug
                    Type
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
            }
            publishedAt(formatString: "MMMM D, YYYY")
        }
    }
`;
