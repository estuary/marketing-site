import { graphql, useStaticQuery } from 'gatsby';

const useQuery = () => {
    const relatedPost = useStaticQuery(graphql`
        {
            allStrapiBlogPost(
                filter: {
                    tags: { elemMatch: { Name: { eq: "billing articles" } } }
                }
            ) {
                nodes {
                    title: Title
                    Slug
                    hero: Hero {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
            allStrapiProductComparisonPage(
                filter: { Published: {}, Slug: { eq: "vs-fivetran" } }
            ) {
                nodes {
                    their_name
                    Slug
                    logo: DescriptivePicture {
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
                    }
                }
            }
        }
    `);

    return { relatedPost };
};

export default useQuery;
