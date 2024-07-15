import { graphql } from 'gatsby';
import React from 'react';
import {
    SectionEight,
    SectionFive,
    SectionFour,
    SectionNine,
    SectionOne,
    SectionSeven,
    SectionSix,
    SectionThree,
    SectionTwo,
} from '../components/Integration';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { normalizeConnector } from '../utils';

export interface ConnectorProps {
    data: {
        source: {
            connector: any;
        };
        destination: {
            connector: any;
        };
    };
    pageContext: {
        source_id: string;
        destination_id: string;
    };
}

const Connector = ({
    data: {
        source: { connector: source_connector },
        destination: { connector: destination_connector },
    },
}: ConnectorProps) => {
    const source_mapped = normalizeConnector(source_connector);
    const dest_mapped = normalizeConnector(destination_connector);

    return (
        <Layout>
            <SectionOne
                sourceConnector={{
                    title: source_mapped.title,
                    logo: source_mapped.logo,
                }}
                destConnector={{
                    title: dest_mapped.title,
                    logo: dest_mapped.logo,
                }}
            />
            <SectionTwo
                title={source_mapped.title}
                logo={source_mapped.logo}
                longDescription={source_mapped.longDescription}
                shortDescription={source_mapped.shortDescription}
            />
            <SectionThree
                title={dest_mapped.title}
                logo={dest_mapped.logo}
                longDescription={dest_mapped.longDescription}
                shortDescription={dest_mapped.shortDescription}
            />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
            <SectionNine />
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
                }
                recommended
                connectorTagsByConnectorIdList {
                    protocol
                }
            }
        }
    }
`;
