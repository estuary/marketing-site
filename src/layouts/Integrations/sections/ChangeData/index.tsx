import React from 'react';

import ConnectorsLink from '../../../../components/ConnectorsLink';
import Cards from './components/Cards';

import {
  Container,
  ContainerContent,
  ContainerImage,
  Description,
  LineBreak,
  Observation,
  Title,
  Topic,
  Topics,
} from './style';

const ChangeData = () => {
  return (
    <Container>
      <ContainerImage>
        <Cards />
      </ContainerImage>
      <ContainerContent>
        <Title>
          <span>CHANGE DATA CAPTURE</span>
          <LineBreak /> REAL-TIME, HIGH THROUGHPUT
        </Title>
        <Description>
          Point a connector and replicate change events to BigQuery in &#60;100ms with high-availability,
          high-throughput Change Data Capture. Or choose from 100s of SaaS sources to ETL across streaming and
          historical data in-flight.
        </Description>
        <Topics>
          <Topic>
            Ensure your BigQuery insights always reflect the latest data by connecting your databases to BigQuery with
            change data capture.
          </Topic>
          <Topic>Or connect critical SaaS apps to BigQuery with real-time data pipelines.</Topic>
        </Topics>
        <ConnectorsLink />
        <Observation>
          Don’t see a connector? <a>Request it and we’ll make it in a week </a>
        </Observation>
      </ContainerContent>
    </Container>
  );
};

export default ChangeData;
