import { graphql } from 'gatsby';
import Highlights from '../../../components/Solutions/Sections/Highlights';
import Benefits from '../../../components/Solutions/Sections/Benefits';
import Capabilities from '../../../components/Solutions/Sections/Capabilities';
import KeyFeatures from '../../../components/Solutions/Sections/KeyFeatures';
import { SolutionTemplateProps } from '../shared';
import SolutionPageLayout from '../solution-page-layout';
import Testimonial from '../../../components/Solutions/Sections/Testimonial';
import SolutionTemplatePageHead from '../Head';

const UseCaseSolutions = ({ data: { solution } }: SolutionTemplateProps) => {
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

export const Head = SolutionTemplatePageHead;

export default UseCaseSolutions;

export const pageQuery = graphql`
    query GetUseCaseSolution($id: String!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        solution: strapiSolution(id: { eq: $id }) {
            slug
            metadata {
                title
                description
                image {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(quality: 100, placeholder: BLURRED)
                        }
                    }
                }
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
        }
    }
`;
