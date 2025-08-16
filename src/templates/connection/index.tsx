import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import { normalizeConnector } from '../../utils';
import Hero from '../../components/Integration/Hero';
import ThreeQuickSteps from '../../components/Integration/ThreeQuickSteps';
import ConnectorDetailsSection from '../../components/ConnectorDetailsSection';
import Testimonials from '../../components/TestimonialsSection';
import EstuaryFlowVideo from '../../components/Integration/EstuaryFlowVideo';
import RelatedIntegrations from '../../components/Integration/RelatedIntegrations';
import RealTimeAndBatch from '../../components/Integration/RealTimeAndBatch';
import DataopsMadeSimple from '../../components/Integration/DataopsMadeSimple';
import IncreaseProductivity4x from '../../components/Integration/IncreaseProductivity4x';
import Spend25xLess from '../../components/Integration/Spend25xLess';
import SeeHowSection from '../../components/SeeHowSection';
import OutboundLinkFilled from '../../components/LinksAndButtons/OutboundLinkFilled';
import {
    Connector as GlobalConnectorType,
    dashboardRegisterUrl,
} from '../../../shared';
import OpenHubspotModal from '../../components/HubSpot/OpenModal';
import Faq from '../../components/Integration/Faq';
import GettingStartedSection from '../../components/GettingStartedSection';
import SuccessStoriesSection from '../../components/SuccessStoriesSection';
import RelatedBlogPosts from '../../components/Integration/RelatedBlogPosts';
import { reactNodeToParagraphs } from '../../shared';
import { faqs } from '../../components/Integration/Faq/faqs';
import { layoutClassName } from './styles.module.less';

export interface ConnectorProps {
    data: {
        source: {
            connector: GlobalConnectorType;
        };
        destination: {
            connector: GlobalConnectorType;
        };
        sourceConnectorRelatedArticle: any;
        destinationConnectorRelatedArticle: any;
        sourceConnectorContent?: {
            id: string;
            slug: string;
            content?: {
                data?: {
                    content?: string;
                };
            };
        };
        destinationConnectorContent?: {
            id: string;
            slug: string;
            content?: {
                data?: {
                    content?: string;
                };
            };
        };
    };
    pageContext: {
        source_id: string;
        destination_id: string;
        source_title: string;
        destination_title: string;
    };
}

const Connector = ({
    data: {
        source: { connector: source_connector },
        destination: { connector: destination_connector },
        sourceConnectorRelatedArticle,
        destinationConnectorRelatedArticle,
        sourceConnectorContent,
        destinationConnectorContent,
    },
}: ConnectorProps) => {
    const source_mapped = normalizeConnector(source_connector);
    const dest_mapped = normalizeConnector(destination_connector);

    const hasRelatedArticles =
        sourceConnectorRelatedArticle?.nodes?.length > 0 ||
        sourceConnectorRelatedArticle?.nodes?.length > 0;

    const defaultSourceDescription = `The ${source_mapped?.title} capture connector in Estuary Flow enables you to stream data from your source system in real time, with minimal impact on performance. Using log-based Change Data Capture (CDC), Flow continuously ingests new and updated records without heavy bulk loads. Whether you need low-latency replication, hybrid cloud integration, or continuous analytics, Estuary Flow ensures your data is accurate, fresh, and always moving where it needs to go.`;
    const defaultDestDescription = `The ${dest_mapped?.title} materialization connector in Estuary Flow delivers data from your pipelines directly into your destination system — continuously and in real time. Using merge-based writes, Flow efficiently updates only changed records, ensuring your destination stays perfectly in sync without unnecessary reprocessing. Whether for analytics, AI, or operational use cases, Estuary Flow provides a reliable, cost-efficient way to keep ${dest_mapped?.title} up to date.`;

    return (
        <Layout mainClassName={!hasRelatedArticles ? layoutClassName : null}>
            <Hero
                sourceConnector={{
                    title: source_mapped?.title,
                    logo: source_mapped?.logo,
                    type: source_mapped?.type,
                }}
                destConnector={{
                    title: dest_mapped?.title,
                    logo: dest_mapped?.logo,
                    type: dest_mapped?.type,
                }}
            />
            <ConnectorDetailsSection
                isDarkTheme={false}
                connectors={[
                    {
                        title: source_mapped?.title,
                        logo: source_mapped?.logo,
                        connectorTagsByConnectorIdList:
                            source_mapped?.connectorTagsByConnectorIdList,
                    },
                    {
                        title: dest_mapped?.title,
                        logo: dest_mapped?.logo,
                        connectorTagsByConnectorIdList:
                            dest_mapped?.connectorTagsByConnectorIdList,
                    },
                ]}
                connectorStrapiContents={[
                    sourceConnectorContent?.content?.data?.content,
                    destinationConnectorContent?.content?.data?.content,
                ]}
                defaultDescriptions={[
                    defaultSourceDescription,
                    defaultDestDescription,
                ]}
            />
            <ThreeQuickSteps
                sourceConnector={{
                    title: source_mapped?.title,
                }}
                destConnector={{
                    title: dest_mapped?.title,
                }}
                isDarkTheme={true}
            />
            <EstuaryFlowVideo isDarkTheme={false} />
            <RealTimeAndBatch isDarkTheme={true} />
            <Testimonials isDarkTheme={false} />
            <IncreaseProductivity4x isDarkTheme={true} />
            <Spend25xLess />
            <SuccessStoriesSection isDarkTheme={true} />
            {hasRelatedArticles ? (
                <RelatedBlogPosts
                    relatedArticles={[
                        ...sourceConnectorRelatedArticle.nodes,
                        ...destinationConnectorRelatedArticle.nodes,
                    ]}
                    sourceConnectorSlugifiedTitle={
                        source_mapped?.slugified_name
                    }
                    destConnectorSlugifiedTitle={dest_mapped?.slugified_name}
                />
            ) : null}
            <Faq
                sourceConnector={{
                    title: source_mapped?.title,
                    shortDescription: source_mapped?.shortDescription,
                    longDescription: source_mapped?.longDescription,
                }}
            />
            <GettingStartedSection isDarkTheme={true} />
            <RelatedIntegrations
                sourceConnector={{
                    id: source_mapped?.id,
                    title: source_mapped?.title,
                    slugified_name: source_mapped?.slugified_name,
                }}
                destConnector={{
                    id: dest_mapped?.id,
                    title: dest_mapped?.title,
                    slugified_name: dest_mapped?.slugified_name,
                }}
            />
            <DataopsMadeSimple />
            <SeeHowSection
                buttons={
                    <>
                        <OutboundLinkFilled
                            href={dashboardRegisterUrl}
                            target="_blank"
                        >
                            Try Now
                        </OutboundLinkFilled>
                        <OpenHubspotModal
                            buttonLabel="Let Us Show You"
                            buttonId="integration-section-five-hubspot"
                            formId="698e6716-f38b-4bd5-9105-df9ba220e29b"
                        />
                    </>
                }
            />
        </Layout>
    );
};

export default Connector;

export const Head = ({
    data: {
        source: { connector: source_connector },
        destination: { connector: destination_connector },
    },
}) => {
    const source_mapped = normalizeConnector(source_connector);

    const sourceConnectorFaqs = (
        source_mapped ? faqs(source_mapped) : []
    ).filter((faq) => faq != null);

    return (
        <>
            <Seo
                title={`${source_mapped?.title} to ${destination_connector.title?.['en-US']} in Real-Time ETL & CDC`}
                description={`Move ${source_mapped?.title} to ${destination_connector.title?.['en-US']} instantly or in batches with Estuary's real-time ETL & CDC integration. Free, no-code, and easy to set up. Try it now.`}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        'mainEntity': sourceConnectorFaqs.map(
                            ({ question, answer }) => ({
                                '@type': 'Question',
                                'name': question,
                                'acceptedAnswer': {
                                    '@type': 'Answer',
                                    'text': reactNodeToParagraphs(answer),
                                },
                            })
                        ),
                    }),
                }}
            />
        </>
    );
};

export const pageQuery = graphql`
    query ConnectorData(
        $source_id: PostGraphile_Flowid!
        $destination_id: PostGraphile_Flowid!
        $source_title: String!
        $destination_title: String!
    ) {
        sourceConnectorContent: strapiConnector(slug: { eq: $source_title }) {
            id
            slug
            content {
                data {
                    content
                }
            }
        }
        destinationConnectorContent: strapiConnector(
            slug: { eq: $destination_title }
        ) {
            id
            slug
            content {
                data {
                    content
                }
            }
        }
        source: postgres {
            connector: connectorById(id: $source_id) {
                id
                externalUrl
                imageName
                shortDescription
                longDescription
                title
                logoUrl
                logo {
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED
                            placeholder: NONE
                            quality: 95
                        )
                    }
                }
                recommended
                connectorTagsByConnectorIdList {
                    protocol
                    documentationUrl
                }
            }
        }
        destination: postgres {
            connector: connectorById(id: $destination_id) {
                id
                externalUrl
                imageName
                shortDescription
                longDescription
                title
                logoUrl
                logo {
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED
                            placeholder: NONE
                            quality: 95
                        )
                    }
                }
                recommended
                connectorTagsByConnectorIdList {
                    protocol
                    documentationUrl
                }
            }
        }
        sourceConnectorRelatedArticle: allStrapiBlogPost(
            sort: { publishedAt: DESC }
            filter: { tags: { elemMatch: { Slug: { eq: $source_title } } } }
            limit: 1
        ) {
            nodes {
                id
                slug: Slug
                hero: Hero {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                width: 600
                                height: 340
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                    alternativeText
                }
                authors {
                    name: Name
                    picture: Picture {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: CONSTRAINED
                                    placeholder: BLURRED
                                    quality: 100
                                )
                            }
                        }
                    }
                }
                title: Title
                tags {
                    name: Name
                    slug: Slug
                    type: Type
                    isTab: IsTab
                }
            }
        }
        destinationConnectorRelatedArticle: allStrapiBlogPost(
            sort: { publishedAt: DESC }
            filter: {
                tags: { elemMatch: { Slug: { eq: $destination_title } } }
            }
            limit: 1
        ) {
            nodes {
                id
                slug: Slug
                hero: Hero {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                width: 600
                                height: 340
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                    alternativeText
                }
                authors {
                    name: Name
                    picture: Picture {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: CONSTRAINED
                                    placeholder: BLURRED
                                    quality: 100
                                )
                            }
                        }
                    }
                }
                title: Title
                tags {
                    name: Name
                    slug: Slug
                    type: Type
                    isTab: IsTab
                }
            }
        }
    }
`;
