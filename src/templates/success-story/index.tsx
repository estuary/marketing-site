import { graphql } from 'gatsby';
import Wrapper from './Wrapper';
import Hero from './Sections/Hero';
import SuccessStoryHead from './Head';
import SectionsCarousel from './SectionsCarousel';

const SuccessStoryTemplate = ({ data: { successStory } }) => {
    const { title, description, logo } = successStory;

    return (
        <Wrapper successStoryTitle={title}>
            <Hero
                title={title}
                description={description}
                image={logo?.localFile}
            />
            <SectionsCarousel successStory={successStory} />
        </Wrapper>
    );
};

export default SuccessStoryTemplate;

export const Head = SuccessStoryHead;

export const pageQuery = graphql`
    query SuccessStoryQueryById($id: String!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        successStory: strapiCaseStudy(id: { eq: $id }) {
            metaTitle
            metaDescription
            slug
            title
            description
            linkOneLiner
            logo {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                        metaImg: gatsbyImageData(
                            layout: FIXED
                            width: 1200
                            height: 630
                        )
                    }
                }
            }
            keyMetrics {
                ... on STRAPI__COMPONENT_CASE_STUDY_HIGHLIGHTED_CONTENT {
                    __typename
                    title
                    description {
                        data {
                            description
                        }
                    }
                    footnote
                    numberedCards {
                        number
                        title
                        description {
                            data {
                                description
                            }
                        }
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_TESTIMONIAL {
                    __typename
                    text
                    author {
                        name
                        role
                        avatar {
                            localFile {
                                publicURL
                            }
                        }
                    }
                    relatedSuccessStory {
                        title
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_ABOUT_CARD {
                    __typename
                    about {
                        data {
                            about
                        }
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_INDUSTRY_CARD {
                    __typename
                    industry {
                        data {
                            industry
                        }
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_GOALS_CARD {
                    __typename
                    goals {
                        data {
                            goals
                        }
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_LOCATION_CARD {
                    __typename
                    location {
                        data {
                            location
                        }
                    }
                }
            }
            challenges {
                ... on STRAPI__COMPONENT_CASE_STUDY_HIGHLIGHTED_CONTENT {
                    __typename
                    title
                    description {
                        data {
                            description
                        }
                    }
                    footnote
                    numberedCards {
                        number
                        title
                        description {
                            data {
                                description
                            }
                        }
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_TESTIMONIAL {
                    __typename
                    text
                    author {
                        name
                        role
                        avatar {
                            localFile {
                                publicURL
                            }
                        }
                    }
                    relatedSuccessStory {
                        title
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_NUMBERED_CARD {
                    __typename
                    number
                    title
                    description {
                        data {
                            description
                        }
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_LIST {
                    __typename
                    title
                    items {
                        strapi_json_value
                    }
                }
            }
            solution {
                ... on STRAPI__COMPONENT_CASE_STUDY_HIGHLIGHTED_CONTENT {
                    __typename
                    title
                    description {
                        data {
                            description
                        }
                    }
                    footnote
                    numberedCards {
                        number
                        title
                        description {
                            data {
                                description
                            }
                        }
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_TESTIMONIAL {
                    __typename
                    text
                    author {
                        name
                        role
                        avatar {
                            localFile {
                                publicURL
                            }
                        }
                    }
                    relatedSuccessStory {
                        title
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_CARD {
                    __typename
                    title
                    description {
                        data {
                            description
                        }
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_IMAGE {
                    __typename
                    logo {
                        localFile {
                            publicURL
                        }
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_NUMBERED_CARD {
                    __typename
                    number
                    title
                    description {
                        data {
                            description
                        }
                    }
                }
            }
            aiUseCase {
                ... on STRAPI__COMPONENT_CASE_STUDY_HIGHLIGHTED_CONTENT {
                    __typename
                    title
                    description {
                        data {
                            description
                        }
                    }
                    footnote
                    numberedCards {
                        number
                        title
                        description {
                            data {
                                description
                            }
                        }
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_TESTIMONIAL {
                    __typename
                    text
                    author {
                        name
                        role
                        avatar {
                            localFile {
                                publicURL
                            }
                        }
                    }
                    relatedSuccessStory {
                        title
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_CARD {
                    __typename
                    title
                    description {
                        data {
                            description
                        }
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_IMAGE {
                    __typename
                    logo {
                        localFile {
                            publicURL
                        }
                    }
                }
            }
            results {
                ... on STRAPI__COMPONENT_CASE_STUDY_HIGHLIGHTED_CONTENT {
                    __typename
                    title
                    description {
                        data {
                            description
                        }
                    }
                    footnote
                    numberedCards {
                        number
                        title
                        description {
                            data {
                                description
                            }
                        }
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_TESTIMONIAL {
                    __typename
                    text
                    author {
                        name
                        role
                        avatar {
                            localFile {
                                publicURL
                            }
                        }
                    }
                    relatedSuccessStory {
                        title
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_CARD {
                    __typename
                    title
                    description {
                        data {
                            description
                        }
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_LIST {
                    __typename
                    title
                    items {
                        strapi_json_value
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_IMAGE {
                    __typename
                    logo {
                        localFile {
                            publicURL
                        }
                    }
                }
            }
            whyEstuary {
                ... on STRAPI__COMPONENT_CASE_STUDY_HIGHLIGHTED_CONTENT {
                    __typename
                    title
                    description {
                        data {
                            description
                        }
                    }
                    footnote
                    numberedCards {
                        number
                        title
                        description {
                            data {
                                description
                            }
                        }
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_TESTIMONIAL {
                    __typename
                    text
                    author {
                        name
                        role
                        avatar {
                            localFile {
                                publicURL
                            }
                        }
                    }
                    relatedSuccessStory {
                        title
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_CARD {
                    __typename
                    title
                    description {
                        data {
                            description
                        }
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_LIST {
                    __typename
                    title
                    items {
                        strapi_json_value
                    }
                }
                ... on STRAPI__COMPONENT_CASE_STUDY_IMAGE {
                    __typename
                    logo {
                        localFile {
                            publicURL
                        }
                    }
                }
            }
        }
    }
`;
