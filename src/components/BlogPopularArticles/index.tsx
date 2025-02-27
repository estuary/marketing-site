import { graphql, useStaticQuery } from 'gatsby';
import Card from '../Grid/Card';
import Grid from '../Grid';
import { BlogPostType } from '../../../shared';

export const PopularArticles = () => {
    const { popularArticles } = useStaticQuery(graphql`
        query GetPopularArticles {
            popularArticles: allStrapiBlogPost(
                sort: { publishedAt: DESC }
                filter: { tags: { elemMatch: { Name: { eq: "popular" } } } }
            ) {
                nodes {
                    updatedAt(formatString: "MMMM D, YYYY")
                    slug: Slug
                    id
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
                    }
                    title: Title
                    tags {
                        name: Name
                        slug: Slug
                        type: Type
                        isTab: IsTab
                    }
                }
            }
        }
    `);

    return (
        <Grid>
            {popularArticles?.nodes?.map((article: BlogPostType) => (
                <Card key={article.id} data={article} footerTag="Article" />
            ))}
        </Grid>
    );
};
