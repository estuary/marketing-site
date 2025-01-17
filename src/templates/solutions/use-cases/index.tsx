import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../../../components/Layout';
import Seo from '../../../components/seo';
import Hero from '../../../components/Solutions/Sections/Hero';
import Testimonial from '../../../components/Solutions/Sections/Testimonial';
import Highlights from '../../../components/Solutions/Sections/Highlights';
import Benefits from '../../../components/Solutions/Sections/Benefits';
import Capabilities from '../../../components/Solutions/Sections/Capabilities';
import KeyFeatures from '../../../components/Solutions/Sections/KeyFeatures';
import { TemplatePageProps } from '../shared';

interface SolutionProps {
    data: {
        solution: TemplatePageProps;
    };
}

const Solutions = ({ data: { solution } }: SolutionProps) => {
    return (
        <Layout>
            <Hero
                title={solution.hero.title}
                description={solution.hero.description}
                heroImage={
                    <StaticImage
                        src="../../../images/use-case-solutions-template/hero-image.png"
                        alt="Seamless data flow between systems for real-time integration"
                        quality={100}
                        placeholder="blurred"
                        loading="eager"
                    />
                }
            />
            <Testimonial data={solution.testimonial} />
            <Highlights
                data={solution.highlights}
                image={
                    <StaticImage
                        src="../../../images/use-case-solutions-template/estuary-solutions-highlights.png"
                        alt="Highly available and reliable cloud data pipeline architecture"
                        quality={100}
                        placeholder="blurred"
                    />
                }
            />
            <Benefits data={solution.benefits} />
            <Capabilities data={solution.capabilities} />
            <KeyFeatures data={solution.keyFeatures} />
        </Layout>
    );
};

export const Head = ({ data: { solution } }: SolutionProps) => {
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
