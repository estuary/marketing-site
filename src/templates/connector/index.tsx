import { graphql } from 'gatsby';
import { useMemo } from 'react';
import { ConnectorType } from '../../../shared';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import { normalizeConnector } from '../../utils';
import ConnectorDetailsSection from '../../components/ConnectorDetailsSection';
import ChangeData from './ChangeData';
import Hero from './Hero';
import Pipelines from './Pipelines';
import RealTime from './RealTime';

export interface ConnectorProps {
    data: {
        postgres: {
            connector: any;
        };
        connectorContent?: {
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
        id: string;
        type: ConnectorType;
    };
    //future work if someone wants to parametrize the source and destination images
    connectorImageSource: {
        source: any;
    };
    connectorImageDestination: {
        destination: any;
    };
}

const Connector = ({
    data: {
        postgres: { connector },
        connectorContent,
    },
}: ConnectorProps) => {
    const mappedConnector = normalizeConnector(connector);

    if (!mappedConnector) {
        return null;
    }

    const defaultDescription =
        mappedConnector.type.toLowerCase() === 'capture'
            ? `The ${mappedConnector.title} capture connector in Estuary Flow enables you to stream data from your source system in real time, with minimal impact on performance. Using log-based Change Data Capture (CDC), Flow continuously ingests new and updated records without heavy bulk loads. Whether you need low-latency replication, hybrid cloud integration, or continuous analytics, Estuary Flow ensures your data is accurate, fresh, and always moving where it needs to go.`
            : `The ${mappedConnector.title} materialization connector in Estuary Flow delivers data from your pipelines directly into your destination system — continuously and in real time. Using merge-based writes, Flow efficiently updates only changed records, ensuring your destination stays perfectly in sync without unnecessary reprocessing. Whether for analytics, AI, or operational use cases, Estuary Flow provides a reliable, cost-efficient way to keep ${mappedConnector.title} up to date.`;

    return (
        <Layout hasLightSections>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        title: 'Home',
                        href: '/',
                    },
                    {
                        title: 'Product',
                        href: '/product',
                    },
                    {
                        title: 'Connectors',
                        href: '/integrations',
                    },
                    {
                        title: mappedConnector.title,
                    },
                ]}
            />
            <article itemScope itemType="http://schema.org/Article">
                <Hero
                    connector={{
                        title: mappedConnector.title,
                        logo: mappedConnector.logo,
                        type: mappedConnector.type,
                    }}
                />
                <ConnectorDetailsSection
                    isDarkTheme={false}
                    connectors={[
                        {
                            title: mappedConnector.title,
                            logo: mappedConnector.logo,
                            type: mappedConnector.type,
                            connectorTagsByConnectorIdList:
                                mappedConnector.connectorTagsByConnectorIdList,
                        },
                    ]}
                    connectorStrapiContents={[
                        connectorContent?.content?.data?.content,
                    ]}
                    defaultDescriptions={[defaultDescription]}
                />
                <ChangeData
                    connector={{
                        id: mappedConnector.id,
                        title: mappedConnector.title,
                        type: mappedConnector.type,
                    }}
                />
                <Pipelines />
                <RealTime />
                {/*<TakeATour />*/}
            </article>
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
    pageContext: { type: connectorType },
    data: {
        postgres: { connector },
    },
}) => {
    const mappedConnector = normalizeConnector(connector);

    const [title, description] = useMemo(() => {
        if (!mappedConnector) {
            return ['Connector', 'Connector details'];
        }

        switch (connectorType) {
            case 'capture':
                return [
                    `Move ${mappedConnector.title} to Any Destination, Real-time ETL & CDC`,
                    `Effortlessly move ${mappedConnector.title} data to any destination in real-time or batch with Estuary's no-code ETL & CDC platform. Free and easy to use. Get started now.`,
                ];
            default:
                return [
                    `Load Data to ${mappedConnector.title} in Real-time ETL & CDC`,
                    `Stream or batch load data to ${mappedConnector.title} instantly with Estuary's free, no-code ETL & CDC platform. Easy setup, real-time results. Sign up for free today.`,
                ];
        }
    }, [connectorType, mappedConnector]);

    return <Seo title={title} description={description} />;
};

// TODO: I think shortDescription, longDescription, logoUrl are not being used here on this page. Check this.
export const pageQuery = graphql`
    query ConnectorData($id: PostGraphile_Flowid!, $slugified_name: String!) {
        connectorContent: strapiConnector(slug: { eq: $slugified_name }) {
            id
            slug
            content {
                data {
                    content
                }
            }
        }
        postgres {
            connector: connectorById(id: $id) {
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
                            quality: 100
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
    }
`;
