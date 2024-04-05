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

import DoneIcon from '@mui/icons-material/Done';

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
            <DoneIcon htmlColor="#5072EB" fontSize="medium" />
            <span>
              Ensure your BigQuery insights always reflect the latest data by connecting your databases to BigQuery with
              change data capture.
            </span>
          </Topic>
          <Topic>
            <DoneIcon htmlColor="#5072EB" fontSize="medium" />
            <span>
              Or connect critical SaaS apps to BigQuery with real-time data pipelines.
            </span>
          </Topic>
        </Topics>
        <ConnectorsLink />
        <Observation>
          <span>
            Don’t see a connector?
          </span>
          <a
            href="https://github.com/estuary/connectors/issues/new?assignees=&labels=new+connector&t[…]5Bcapture+from+%7C+materialize+to%5D+%5Byour+favorite+system%5D"
            target="_blank"
          >
            Request and our team will get back to you in 24 hours
          </a>
        </Observation>
      </ContainerContent>
    </Container>
  );
};

export default ChangeData;
