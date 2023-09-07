import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material"
import { useStaticQuery, graphql, Link } from "gatsby"
import React, { useMemo, useState } from "react"
import { normalizeConnector } from "../utils"
import { GatsbyImage } from "gatsby-plugin-image"

export const ConnectorsLink = ({
    defaultSource,
    defaultDestination,
}: {
    defaultSource?: string
    defaultDestination?: string
}) => {
    const {
        postgres: {
            allConnectors: { nodes: connectors },
        },
    } = useStaticQuery(graphql`
        query ConnectorsForLink {
            postgres {
                allConnectors(orderBy: [RECOMMENDED_DESC, CREATED_AT_DESC]) {
                    nodes {
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
        }
    `)
    const [captureConnectors, materializationConnectors] = useMemo(() => {
        let mapped: ReturnType<typeof normalizeConnector>[] =
            connectors.map(normalizeConnector)

        return [
            mapped.filter(connector => connector.type === "capture"),
            mapped.filter(connector => connector.type === "materialization"),
        ]
    }, [connectors])

    const [sourceId, setSourceId] = useState<string>(defaultSource)
    const [destinationId, setDestinationId] =
        useState<string>(defaultDestination)

    const destinationHref = useMemo(() => {
        if (sourceId && destinationId) {
            return `/integrations/${
                captureConnectors.find(c => c.id === sourceId)?.slugified_name
            }-to-${
                materializationConnectors.find(c => c.id === destinationId)
                    ?.slugified_name
            }`
        } else {
            return "#"
        }
    }, [captureConnectors, materializationConnectors, sourceId, destinationId])
    return (
        <div className="connectors-link-wrapper">
            <FormControl className="connector-link-form-control" fullWidth>
                <InputLabel>Sources</InputLabel>
                <Select
                    label="Sources"
                    value={sourceId}
                    onChange={evt => setSourceId(evt.target.value)}
                    variant="outlined"
                >
                    {captureConnectors.map(c => (
                        <MenuItem
                            key={c.id}
                            value={c.id}
                            classes={{ root: "connectors-link-menu-item" }}
                        >
                            <GatsbyImage
                                image={c.logo?.childImageSharp?.gatsbyImageData}
                                alt={`${c.title} Logo`}
                                className="connectors-link-menu-img"
                                loading="eager"
                            />
                            {c.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className="connector-link-form-control" fullWidth>
                <InputLabel>Destinations</InputLabel>
                <Select
                    label="Destinations"
                    value={destinationId}
                    onChange={evt => setDestinationId(evt.target.value)}
                    variant="outlined"
                >
                    {materializationConnectors.map(c => (
                        <MenuItem
                            key={c.id}
                            value={c.id}
                            classes={{ root: "connectors-link-menu-item" }}
                        >
                            <GatsbyImage
                                image={c.logo?.childImageSharp?.gatsbyImageData}
                                alt={`${c.title} Logo`}
                                className="connectors-link-menu-img"
                                loading="eager"
                            />
                            {c.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Link className="connector-link-button" to={destinationHref}>
                Details
            </Link>
        </div>
    )
}
