import { graphql } from 'gatsby';
import React from 'react';
import { ConnectorType } from '../../../shared';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { normalizeConnector } from '../../utils';
import ChangeData from './ChangeData';
import Hero from './Hero';
import Pipelines from './Pipelines';
import RealTime from './RealTime';
import TakeATour from './TakeATour';
import { BreadcrumbsWrapper } from './styles';

export interface ConnectorProps {
    data: {
        postgres: {
            connector: any;
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
    },
}: ConnectorProps) => {
    const mappedConnector = normalizeConnector(connector);

    return (
        <Layout>
            <BreadcrumbsWrapper>
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
            </BreadcrumbsWrapper>
            <article itemScope itemType="http://schema.org/Article">
                <Hero
                    connector={{
                        title: mappedConnector?.title,
                        logo: mappedConnector?.logo?.childImageSharp
                            ?.gatsbyImageData,
                        type: mappedConnector?.type,
                    }}
                />
                <ChangeData
                    connector={{
                        id: mappedConnector?.id,
                        title: mappedConnector?.title,
                        type: mappedConnector?.type,
                    }}
                />
                <Pipelines />
                <RealTime />
                <TakeATour />
                {/*<TheAutomation />*/}
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

    const [title, description] = React.useMemo(() => {
        switch (connectorType) {
            case 'capture':
                return [
                    `Move ${mappedConnector?.title} to Any Destination, Real-time ETL & CDC`,
                    `Effortlessly move ${mappedConnector.title} data to any destination in real-time or batch with Estuary's no-code ETL & CDC platform. Free and easy to use. Get started now.`,
                ];
            default:
                return [
                    `Load Data to ${mappedConnector?.title} in Real-time ETL & CDC`,
                    `Stream or batch load data to ${mappedConnector?.title} instantly with Estuary's free, no-code ETL & CDC platform. Easy setup, real-time results. Sign up for free today.`,
                ];
        }
    }, [connectorType, mappedConnector?.title]);

    return <Seo title={title} description={description} />;
};

export const pageQuery = graphql`
    query ConnectorData($id: PostGraphile_Flowid!) {
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
                }
            }
        }
    }
`;
