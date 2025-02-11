import { graphql } from 'gatsby';
import Seo from '../../../components/seo';
import Highlights from '../../../components/Solutions/Sections/Highlights';
import Benefits from '../../../components/Solutions/Sections/Benefits';
import Capabilities from '../../../components/Solutions/Sections/Capabilities';
import KeyFeatures from '../../../components/Solutions/Sections/KeyFeatures';
import { SolutionTemplateProps } from '../shared';
import SolutionPageLayout from '../solution-page-layout';

const IndustrySolutions = ({ data: { solution } }: SolutionTemplateProps) => {
    return (
        <SolutionPageLayout solution={solution}>
            <Benefits data={solution.benefits} isDarkTheme />
            <Capabilities data={solution.capabilities} />
            <KeyFeatures data={solution.keyFeatures} isDarkTheme />
            <Highlights data={solution.highlights} />
        </SolutionPageLayout>
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

export default IndustrySolutions;

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
                            gatsbyImageData(quality: 100, placeholder: BLURRED)
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
