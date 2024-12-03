import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import VerticalList from '../../VerticalList';
import { container } from './styles.module.less';

const ListOfUpdates = () => {
    const {
        allStrapiCompanyUpdatePost: { nodes: allCompanyUpdatePosts },
    } = useStaticQuery(graphql`
        query GetCompanyUpdatePosts {
            allStrapiCompanyUpdatePost {
                nodes {
                    title
                    publishedAt(formatString: "MMMM D, YYYY")
                    updatedAt(formatString: "MMMM D, YYYY")
                    machineReadablePublishDate: publishedAt(
                        formatString: "YYYY-MM-DD"
                    )
                    machineReadableUpdateDate: updatedAt(
                        formatString: "YYYY-MM-DD"
                    )
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
                    picture: hero {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FULL_WIDTH
                                    placeholder: BLURRED
                                    # aspectRatio: 2
                                    formats: [AUTO, WEBP, AVIF]
                                )
                                metaImg: gatsbyImageData(
                                    layout: FIXED
                                    width: 500
                                )
                            }
                        }
                    }
                    socialShareImage {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FULL_WIDTH
                                    placeholder: BLURRED
                                    # aspectRatio: 2
                                    formats: [AUTO, WEBP, AVIF]
                                )
                                metaImg: gatsbyImageData(
                                    layout: FIXED
                                    width: 500
                                )
                            }
                        }
                    }
                }
            }
        }
    `);

    const companyUpdatePostsWithPrefixedSlugs = allCompanyUpdatePosts.map(
        (post) => ({
            ...post,
            slug: `company-updates/${post.slug}/`,
        })
    );

    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical className={container}>
                <h2>THE LATEST PRODUCT UPDATES</h2>
                <VerticalList items={companyUpdatePostsWithPrefixedSlugs} />
            </Container>
        </section>
    );
};

export default ListOfUpdates;
