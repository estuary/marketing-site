import { InputLabel, Select } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useMemo, useState } from 'react';
import { normalizeConnector } from '../../utils';

import { ConnectorType } from '../../../shared';
import { Button, Form, Image, Menu, Wrapper } from './style';

type ConnectorsLinkProps = {
  defaultSourceId?: string;
  defaultDestinationId?: string;
  connectorType?: ConnectorType;
}

export const ConnectorsLink = ({ defaultSourceId, defaultDestinationId, connectorType }: ConnectorsLinkProps) => {
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
                gatsbyImageData(layout: CONSTRAINED, placeholder: NONE, quality: 95)
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
      .filter((connector) => connector?.connectorTagsByConnectorIdList?.length > 0)
      .map(normalizeConnector);

    return [
      mapped.filter((connector) => connector.type === 'capture'),
      mapped.filter((connector) => connector.type === 'materialization'),
    ];
  }, [connectors]);

  const [sourceId, setSourceId] = useState<string>(connectorType === 'capture' ? defaultSourceId : '');
  const [destinationId, setDestinationId] = useState<string>(connectorType === 'materialization' ? defaultDestinationId : '');

  const detailsHref = useMemo(() => {
    if (sourceId && destinationId) {
      return `/integrations/${captureConnectors.find((c) => c.id === sourceId)?.slugified_name}-to-${materializationConnectors.find((c) => c.id === destinationId)?.slugified_name
        }`;
    } else {
      return '#';
    }
  }, [captureConnectors, materializationConnectors, sourceId, destinationId]);

  return (
    <Wrapper>
      <Form fullWidth>
        <InputLabel>Sources</InputLabel>
        <Select
          label="Sources"
          value={sourceId}
          onChange={(evt) => setSourceId(evt.target.value)}
          variant="outlined"
        >
          {captureConnectors.map((c) => (
            <Menu key={c.id} value={c.id}>
              <Image image={c.logo?.childImageSharp?.gatsbyImageData} alt={`${c.title} Logo`} loading="eager" />
              {c.title}
            </Menu>
          ))}
        </Select>
      </Form>
      <Form fullWidth>
        <InputLabel>Destinations</InputLabel>
        <Select
          label="Destinations"
          value={destinationId}
          onChange={(evt) => setDestinationId(evt.target.value)}
          variant="outlined"
        >
          {materializationConnectors.map((c) => (
            <Menu key={c.id} value={c.id}>
              <Image image={c.logo?.childImageSharp?.gatsbyImageData} alt={`${c.title} Logo`} loading="eager" />
              {c.title}
            </Menu>
          ))}
        </Select>
      </Form>
      <Button to={detailsHref}>Details</Button>
    </Wrapper>
  );
};

export default ConnectorsLink;
