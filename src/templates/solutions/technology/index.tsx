import { graphql } from 'gatsby';
import Seo from '../../../components/seo';
import Highlights from '../../../components/Solutions/Sections/Highlights';
import Benefits from '../../../components/Solutions/Sections/Benefits';
import Capabilities from '../../../components/Solutions/Sections/Capabilities';
import KeyFeatures from '../../../components/Solutions/Sections/KeyFeatures';
import { SolutionTemplateProps } from '../shared';
import SolutionPageLayout from '../solution-page-layout';
import Testimonial from '../../../components/Solutions/Sections/Testimonial';
import OneTitleThreeCards from '../../../components/Solutions/Sections/OneTitleThreeCards';
import CarouselSection from '../../../components/Solutions/Sections/CarouselSection';
import GraphicSection from '../../../components/Solutions/Sections/GraphicSection';

const TechnologySolutions = ({ data: { solution } }: SolutionTemplateProps) => {
    return (
        <SolutionPageLayout solution={solution}>
            {solution.slug.includes(
                '/technology/real-time-snowflake-streaming' // TODO: Use the slug or the id?
            ) ? (
                <>
                    <OneTitleThreeCards data={solution.oneTitleThreeCards} />
                    <CarouselSection data={solution.carouselSection} />
                    <GraphicSection data={solution.graphicSections[0]} />
                    <GraphicSection
                        data={solution.graphicSections[1]}
                        isDarkTheme
                        isGraphicOnTheLeft
                    />
                    <GraphicSection
                        data={solution.graphicSections[2]}
                        isGraphicTitleCentralized
                    />
                    <Capabilities data={solution.capabilities} />
                </>
            ) : (
                <>
                    <Testimonial data={solution.testimonial} />
                    <Benefits data={solution.benefits} isDarkTheme />
                    <Capabilities data={solution.capabilities} />
                    <KeyFeatures data={solution.keyFeatures} isDarkTheme />
                    <Highlights data={solution.highlights} />
                </>
            )}
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

export default TechnologySolutions;

export const pageQuery = graphql`
    query GetTechnologySolution($id: String!) {
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
            carouselSection {
                sectionTitle: section_title {
                    highlightedText
                    normalText
                    normalTextComesFirst
                }
                description
                successStories {
                    id
                    slug: Slug
                    title: Title
                    description: Description
                    hero: Logo {
                        alternativeText
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
                blogPosts {
                    id
                    slug: Slug
                    title: Title
                    description: Description
                    hero: Hero {
                        alternativeText
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
            graphicSections {
                id
                sectionTitle: section_title {
                    highlightedText
                    normalText
                    normalTextComesFirst
                }
                description
                list {
                    title
                    items {
                        text {
                            data {
                                text
                            }
                        }
                    }
                }
                graphic {
                    title
                    image {
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
                    subtitles {
                        name
                        color
                    }
                }
                cardItems {
                    strapi_json_value
                }
                cardsTitle {
                    highlightedText
                    normalText
                    normalTextComesFirst
                }
            }
        }
    }
`;
