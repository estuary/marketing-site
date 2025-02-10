import { graphql } from 'gatsby';
import Layout from '../../../components/Layout';
import Seo from '../../../components/seo';
import Hero from '../../../components/Solutions/Sections/Hero';
import Testimonial from '../../../components/Solutions/Sections/Testimonial';
import Highlights from '../../../components/Solutions/Sections/Highlights';
import Benefits from '../../../components/Solutions/Sections/Benefits';
import Capabilities from '../../../components/Solutions/Sections/Capabilities';
import KeyFeatures from '../../../components/Solutions/Sections/KeyFeatures';
import { SolutionTemplateProps } from '../shared';

const Solutions = ({ data: { solution } }: SolutionTemplateProps) => {
    return (
        <Layout>
            <Hero
                title={solution.hero.title}
                description={solution.hero.description}
                image={solution.hero.image}
            />
            <Testimonial data={solution.testimonial} />
            <Highlights data={solution.highlights} isDarkTheme />
            <Benefits data={solution.benefits} />
            <Capabilities data={solution.capabilities} isDarkTheme />
            <KeyFeatures data={solution.keyFeatures} />
        </Layout>
    );
};

export const Head = ({ data: { solution } }: SolutionTemplateProps) => {
    return (
        <Seo
            title={solution.metadata.title}
            description={solution.metadata.description}
        />
    );
};

export default Solutions;

export const pageQuery = graphql`
    query GetSolution($id: String!) {
        solution: strapiSolution(id: { eq: $id }) {
            slug
            metadata {
                title
                description
            }
            hero {
                title
                description
                image {
                    alternativeText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(quality: 100, placeholder: BLURRED)
                        }
                    }
                }
            }
            testimonial {
                sectionTitle: section_title {
                    highlightedText
                    normalText
                }
                description
                quote {
                    companyName
                    successStoryUrl
                    companyLogo {
                        alternativeText
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    quality: 100
                                    placeholder: BLURRED
                                )
                            }
                        }
                    }
                    text
                }
            }
            benefits {
                sectionTitle: section_title {
                    highlightedText
                    normalText
                }
                description
                benefitItems {
                    strapi_json_value
                }
                images {
                    alternativeText
                    localFile {
                        childrenImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
            highlights {
                sectionTitle: section_title {
                    highlightedText
                    normalText
                }
                description
                highlightItems {
                    strapi_json_value
                }
            }
            keyFeatures {
                sectionTitle: section_title {
                    highlightedText
                    normalText
                }
                description
                keyFeatureItems {
                    strapi_json_value
                }
            }
            capabilities {
                sectionTitle: section_title {
                    highlightedText
                    normalText
                }
                description
                capabilityItems {
                    strapi_json_value
                }
            }
        }
    }
`;
