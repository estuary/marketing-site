import { graphql } from 'gatsby';
import Seo from '../../../components/seo';
import Highlights from '../../../components/Solutions/Sections/Highlights';
import Benefits from '../../../components/Solutions/Sections/Benefits';
import Capabilities from '../../../components/Solutions/Sections/Capabilities';
import KeyFeatures from '../../../components/Solutions/Sections/KeyFeatures';
import { SolutionTemplateProps } from '../shared';
import SolutionPageLayout from '../solution-page-layout';
import Testimonial from '../../../components/Solutions/Sections/Testimonial';

const Solutions = ({ data: { solution } }: SolutionTemplateProps) => {
    return (
        <SolutionPageLayout solution={solution}>
            <Testimonial data={solution.testimonial} />
            <Highlights data={solution.highlights} isDarkTheme />
            <Benefits data={solution.benefits} />
            <Capabilities data={solution.capabilities} isDarkTheme />
            <KeyFeatures data={solution.keyFeatures} />
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
                primaryButton {
                    title
                    urlOrPath
                }
                secondaryButton {
                    title
                    urlOrPath
                }
            }
            testimonial {
                sectionTitle: section_title {
                    highlightedText
                    normalText
                    normalTextComesFirst
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
                    normalTextComesFirst
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
                    normalTextComesFirst
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
                    normalTextComesFirst
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
                    normalTextComesFirst
                }
                description
                capabilityItems {
                    strapi_json_value
                }
            }
            oneTitleThreeCards {
                sectionTitle: section_title {
                    highlightedText
                    normalText
                    normalTextComesFirst
                }
                description
                cardItems {
                    title
                    description
                }
            }
        }
    }
`;
