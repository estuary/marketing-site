import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import { normalizeConnector } from '../utils';
import Hero from '../components/Integration/Hero';
import ThreeQuickSteps from '../components/Integration/ThreeQuickSteps';
import Testimonials from '../components/Integration/Testimonials';
import EstuaryFlowVideo from '../components/Integration/EstuaryFlowVideo';
import RelatedIntegrations from '../components/Integration/RelatedIntegrations';
import RealTimeAndBatch from '../components/Integration/RealTimeAndBatch';
import DataopsMadeSimple from '../components/Integration/DataopsMadeSimple';
import IncreaseProductivity4x from '../components/Integration/IncreaseProductivity4x';
import Spend25xLess from '../components/Integration/Spend25xLess';
import SeeHowSection from '../components/SeeHowSection';
import OutboundLinkFilled from '../components/LinksAndButtons/OutboundLinkFilled';
import {
    Connector as GlobalConnectorType,
    dashboardRegisterUrl,
} from '../../shared';
import OpenHubspotModal from '../components/HubSpot/OpenModal';
import Faq from '../components/Integration/Faq';
import GettingStartedSection from '../components/GettingStartedSection';
import SuccessStories from '../components/Integration/SuccessStories';
import RelatedBlogPosts from '../components/Integration/RelatedBlogPosts';

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
    },
}: ConnectorProps) => {
    const source_mapped = normalizeConnector(source_connector);
    const dest_mapped = normalizeConnector(destination_connector);

    const hasRelatedArticles =
        sourceConnectorRelatedArticle?.nodes?.length > 0 ||
        sourceConnectorRelatedArticle?.nodes?.length > 0;

    return (
        <Layout>
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
            <ThreeQuickSteps
                sourceConnector={{
                    title: source_mapped?.title,
                }}
                destConnector={{
                    title: dest_mapped?.title,
                }}
            />
            <EstuaryFlowVideo />
            <RealTimeAndBatch />
            <Testimonials />
            <IncreaseProductivity4x />
            <Spend25xLess />
            <SuccessStories hasRelatedArticles={hasRelatedArticles} />
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
            <GettingStartedSection isDarkTheme />
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

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({
    data: {
        source: { connector: source_connector },
        destination: { connector: destination_connector },
    },
}) => {
    return (
        <Seo
            title={`${source_connector.title?.['en-US']} to ${destination_connector.title?.['en-US']} in Real-Time ETL & CDC`}
            description={`Move ${source_connector.title?.['en-US']} to ${destination_connector.title?.['en-US']} instantly or in batches with Estuary's real-time ETL & CDC integration. Free, no-code, and easy to set up. Try it now.`}
        />
    );
};

export const pageQuery = graphql`
    query ConnectorData(
        $source_id: PostGraphile_Flowid!
        $destination_id: PostGraphile_Flowid!
        $source_title: String!
        $destination_title: String!
    ) {
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
                    extension
                    publicURL
                }
                recommended
                connectorTagsByConnectorIdList {
                    protocol
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
                    extension
                    publicURL
                }
                recommended
                connectorTagsByConnectorIdList {
                    protocol
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
                        extension
                        publicURL
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
                        extension
                        publicURL
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
