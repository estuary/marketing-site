import { graphql } from 'gatsby';
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
import ButtonsSection from '../../../components/Solutions/Sections/ButtonsSection';
import SolutionTemplatePageHead from '../Head';

const TechnologySolutions = ({ data: { solution } }: SolutionTemplateProps) => {
    const {
        oneTitleThreeCards,
        carouselSection,
        graphicSections = [],
        buttonsSection,
        testimonial,
        benefits,
        keyFeatures,
        highlights,
        capabilities,
    } = solution;

    const hasSnowflakeSections =
        oneTitleThreeCards &&
        carouselSection &&
        graphicSections.length > 0 &&
        buttonsSection;

    return (
        <SolutionPageLayout solution={solution}>
            {hasSnowflakeSections ? (
                <>
                    <OneTitleThreeCards
                        data={oneTitleThreeCards}
                        isSnowflakeSolution={true}
                    />
                    <CarouselSection data={carouselSection} />
                    <GraphicSection data={graphicSections[0]} />
                    <GraphicSection
                        data={graphicSections[1]}
                        isDarkTheme
                        isGraphicOnTheLeft
                    />
                    <GraphicSection
                        data={graphicSections[2]}
                        isGraphicTitleCentralized
                    />
                    <Capabilities data={capabilities} isDarkTheme />
                    <ButtonsSection data={buttonsSection} />
                </>
            ) : (
                <>
                    <Testimonial data={testimonial} />
                    <Benefits data={benefits} isDarkTheme />
                    <Capabilities data={capabilities} />
                    <KeyFeatures data={keyFeatures} isDarkTheme />
                    <Highlights data={highlights} />
                </>
            )}
        </SolutionPageLayout>
    );
};

export const Head = SolutionTemplatePageHead;

export default TechnologySolutions;

export const pageQuery = graphql`
    query GetTechnologySolution($id: String!) {
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
                videoUrl
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
                cardItems {
                    title
                    description
                }
            }
            carouselSection {
                title
                successStories {
                    id
                    slug: Slug
                    title: Title
                    description: Description
                    hero: Logo {
                        alternativeText
                        localFile {
                            childImageSharp {
                                gatsbyImageData(placeholder: BLURRED)
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
                                gatsbyImageData(placeholder: BLURRED)
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
                sectionCta {
                    link {
                        title
                        urlOrPath
                    }
                    type
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
            buttonsSection {
                sectionTitle: section_title {
                    highlightedText
                    normalText
                    normalTextComesFirst
                }
                description
                primaryButton {
                    title
                    urlOrPath
                }
                secondaryButton {
                    title
                    urlOrPath
                }
            }
        }
    }
`;
