import { graphql } from 'gatsby';
import Hero from '../../components/SuccessStoryPage/Hero';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import SectionsCarousel from '../../components/SuccessStoryPage/SectionsCarousel';
import logoUrl from '../../images/estuary.png';
import Seo from '../../components/seo';
import LinkOutlined from '../../components/LinksAndButtons/LinkOutlined';
import ChevronLeftIcon from '../../svgs/chevron-left.svg';
import ChevronRightIcon from '../../svgs/chevron-right.svg';

const SuccessStoryTemplate = ({
    data: { successStory, allSuccessStories },
}) => {
    const { title, description, logo, slug } = successStory;

    const allStories = allSuccessStories?.nodes || [];
    const currentIndex = allStories.findIndex((story) => story.slug === slug);

    const getPreviousStory = () => {
        if (allStories.length <= 1) return null;
        return currentIndex > 0
            ? allStories[currentIndex - 1]
            : allStories[allStories.length - 1];
    };

    const getNextStory = () => {
        if (allStories.length <= 1) return null;
        return currentIndex < allStories.length - 1
            ? allStories[currentIndex + 1]
            : allStories[0];
    };

    const previousStory = getPreviousStory();
    const nextStory = getNextStory();

    console.log('Previous story:', previousStory?.slug);
    console.log('Next story:', nextStory?.slug);

    const navigationLinks = (
        <>
            <LinkOutlined
                href={`/success-stories/${previousStory.slug}`}
                variant="secondary"
            >
                <ChevronLeftIcon />
                {previousStory.title}
            </LinkOutlined>
            <LinkOutlined
                href={`/success-stories/${nextStory.slug}`}
                variant="secondary"
            >
                {nextStory.title}
                <ChevronRightIcon />
            </LinkOutlined>
        </>
    );

    return (
        <Layout hasLightSections hasLightHeroSection>
            <PageHeader
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
                rightContent={navigationLinks}
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
        allSuccessStories: allStrapiCaseStudy(sort: { title: ASC }) {
            nodes {
                slug
                title
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
