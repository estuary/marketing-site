import { graphql } from 'gatsby';
import Hero from '../../components/SuccessStoryPage/Hero';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/Breadcrumbs';
import SectionsCarousel from '../../components/SuccessStoryPage/SectionsCarousel';
import logoUrl from '../../images/estuary.png';
import Seo from '../../components/seo';

const SuccessStoryTemplate = ({ data: { successStory } }) => {
    const { title, description, logo } = successStory;

    return (
        <Layout hasLightSections hasLightHeroSection>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        title: 'Home',
                        href: '/',
                    },
                    {
                        title: 'Success Stories',
                        href: '/success-stories',
                    },
                    {
                        title,
                    },
                ]}
            />
            <article itemScope itemType="http://schema.org/Article">
                <Hero
                    title={title}
                    description={description}
                    image={logo?.localFile}
                />
                <SectionsCarousel successStory={successStory} />
            </article>
        </Layout>
    );
};

export default SuccessStoryTemplate;

export const Head = ({
    data: {
        successStory,
        site: {
            siteMetadata: { siteUrl },
        },
    },
}) => {
    return (
        <>
            <Seo
                title={successStory.metaTitle}
                description={successStory.metaDescription}
                url={`${siteUrl}/success-stories/${successStory.slug}`}
                image={
                    successStory.Logo
                        ? `${siteUrl}${successStory.Logo.localFile.childImageSharp.metaImg.images.fallback.src}`
                        : undefined
                }
            />
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Article',
                    'mainEntityOfPage': {
                        '@type': 'WebPage',
                        '@id': `${siteUrl}/success-stories/${successStory.slug}`,
                    },
                    'headline': successStory.Title,
                    'description': successStory.Description ?? '',
                    'image':
                        successStory.Logo &&
                        `${siteUrl}${successStory.Logo.localFile.childImageSharp.metaImg.images.fallback.src}`,
                    'publisher': {
                        '@type': 'Organization',
                        'name': 'Estuary',
                        'logo': {
                            '@type': 'ImageObject',
                            'url': `${siteUrl}${logoUrl}`,
                        },
                    },
                    'datePublished': successStory.machineReadablePublishDate,
                })}
            </script>
        </>
    );
};

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
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                            width: 259
                            height: 54
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
