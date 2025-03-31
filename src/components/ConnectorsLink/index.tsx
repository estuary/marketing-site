import { graphql, useStaticQuery } from 'gatsby';
import { useMemo, useState } from 'react';
import { normalizeConnector } from '../../utils';

import { ConnectorType } from '../../../shared';
import XvsYFilter from '../XvsYFilter';

type ConnectorsLinkProps = {
    defaultSourceId?: string;
    defaultDestinationId?: string;
    connectorType?: ConnectorType;
    direction?: 'row' | 'column';
};

const ConnectorsLink = ({
    defaultSourceId,
    defaultDestinationId,
    connectorType,
    direction,
}: ConnectorsLinkProps) => {
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
    `);
    const [captureConnectors, materializationConnectors] = useMemo(() => {
        const mapped: ReturnType<typeof normalizeConnector>[] = connectors
            .map(normalizeConnector)
            .filter((connector) => connector !== undefined);

        return [
            mapped.filter((connector) => connector.type === 'capture'),
            mapped.filter((connector) => connector.type === 'materialization'),
        ];
    }, [connectors]);

    const [sourceId, setSourceId] = useState<string>(
        connectorType === 'capture' ? defaultSourceId ?? '' : ''
    );
    const [destinationId, setDestinationId] = useState<string>(
        connectorType === 'materialization' ? defaultDestinationId ?? '' : ''
    );

    const detailsHref = useMemo(() => {
        if (sourceId && destinationId) {
            return `/integrations/${captureConnectors.find((c) => c.id === sourceId)?.slugified_name}-to-${
                materializationConnectors.find((c) => c.id === destinationId)
                    ?.slugified_name
            }/`;
        } else {
            return '#';
        }
    }, [captureConnectors, materializationConnectors, sourceId, destinationId]);

    const handleSourceChange = (value) => setSourceId(value);
    const handleDestinationChange = (value) => setDestinationId(value);

    const sourceSelectItems = captureConnectors.map((c) => ({
        id: c.id,
        image: c.logo ? c.logo.childImageSharp.gatsbyImageData : null,
        title: c.title,
    }));

    const destinationSelectItems = materializationConnectors.map((c) => ({
        id: c.id,
        image: c.logo ? c.logo.childImageSharp.gatsbyImageData : null,
        title: c.title,
    }));

    return (
        <XvsYFilter
            xSelect={{
                label: 'Sources',
                value: sourceId,
                onChange: handleSourceChange,
                items: sourceSelectItems,
            }}
            ySelect={{
                label: 'Destinations',
                value: destinationId,
                onChange: handleDestinationChange,
                items: destinationSelectItems,
            }}
            button={{
                title: 'Details',
                href: detailsHref,
            }}
            direction={direction}
        />
    );
};

export default ConnectorsLink;
