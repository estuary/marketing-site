import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ConnectorPage } from "../components/ConnectorPage"

export interface ConnectorProps {
    data: {
        source: {
            connector: any
        }
        destination: {
            connector: any
        }
    }
    pageContext: {
        source_id: string
        destination_id: string
    }
}

const Connector = ({
    data: {
        source: { connector: source_connector },
        destination: { connector: destination_connector },
    },
    pageContext,
}: ConnectorProps) => {
    return (
        <Layout headerTheme="light">
            <ConnectorPage
                source_connector={source_connector}
                dest_connector={destination_connector}
            />
        </Layout>
    )
}

export default Connector

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
            title={`${source_connector.title?.["en-US"]} to ${destination_connector.title?.["en-US"]}`}
            description={`Estuary helps move data from ${source_connector.title?.["en-US"]} to ${destination_connector.title?.["en-US"]} in minutes with millisecond latency.`}
        />
    )
}

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
`
