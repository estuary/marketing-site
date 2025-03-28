import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
    getIntegrationSlug,
    Connector,
    getSlugifiedText,
} from '../../../../../shared';
import { normalizeConnector } from '../../../../utils';
import InternalLink from '../../../InternalLink';
import { Connectors } from '../../shared';
import { container } from './styles.module.less';

const RelatedIntegrationLinks = ({
    sourceConnector,
    destConnector,
}: Connectors) => {
    const {
        postgres: {
            allConnectors: { nodes: connectorNodes },
        },
        // We are fetching the first 45 connectors because in the first 45 has 10 with
        // protocol equal to "materialization".
    } = useStaticQuery(graphql`
        {
            postgres {
                allConnectors(first: 45) {
                    nodes {
                        id
                        imageName
                        title
                        connectorTagsByConnectorIdList(
                            condition: { protocol: "materialization" }
                        ) {
                            protocol
                        }
                    }
                }
            }
        }
    `);

    const mapped_connectors: Connector[] = connectorNodes
        .filter(
            (connector) => connector?.connectorTagsByConnectorIdList?.length > 0
        )
        .map(normalizeConnector)
        .filter((connector) => connector !== undefined)
        .filter(
            (connector) =>
                ![sourceConnector.id, destConnector.id].includes(connector?.id)
        );

    return (
        <div className={container}>
            {mapped_connectors.map((connector) =>
                sourceConnector.title ? (
                    <InternalLink // TODO: Replace this all InternalLink instances with Next.js Link component
                        id={`${getSlugifiedText(sourceConnector.title['en-US'])}-to-${getSlugifiedText(connector.title['en-US'])}-link/related-integrations-section/integration-page`}
                        key={`related-integration-link-${connector.id}`}
                        href={`${getIntegrationSlug(sourceConnector.slugified_name, connector.slugified_name)}`}
                        target="_blank"
                    >
                        {sourceConnector.title} to {connector.title}
                    </InternalLink>
                ) : null
            )}
        </div>
    );
};

export default RelatedIntegrationLinks;
