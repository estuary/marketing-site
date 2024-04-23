import React from 'react';

import ConnectorsLink from '../../../components/ConnectorsLink';
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
import { ConnectorType } from '../../../../shared';

type ChangeDataProps = {
  connector: {
    id: string;
    title: string;
    type: ConnectorType;
  };
};

const ChangeData = ({ connector: { id, title, type } }: ChangeDataProps) => {
  return (
    <Container>
      <ContainerImage>
        <Cards />
      </ContainerImage>
      <ContainerContent>
        <Title>
          <span>REAL-TIME</span>
          <LineBreak />
          HIGH THROUGHPUT
        </Title>
        <Description>
          Point a connector and replicate changes {type === 'capture' ? 'from' : 'to'} {title} in &#60;100ms with
          high-availability, high-throughput Change Data Capture. Or choose from 100s of batch and real-time connectors
          to move and transform data using ELT and ETL.
        </Description>
        <Topics>
          <Topic>
            <DoneIcon htmlColor="#5072EB" fontSize="medium" />
            <span>
              Ensure your {title} insights always reflect the latest data by connecting your databases to {title} with
              change data capture.
            </span>
          </Topic>
          <Topic>
            <DoneIcon htmlColor="#5072EB" fontSize="medium" />
            <span>Or connect critical SaaS apps to {title} with real-time data pipelines.</span>
          </Topic>
        </Topics>
        <ConnectorsLink defaultDestinationId={id} defaultSourceId={id} connectorType={type} />
        <Observation>
          <span>Don’t see a connector?</span>
          <a
            href="https://github.com/estuary/connectors/issues/new?assignees=&labels=new+connector&projects=&template=request-new-connector-form.yaml&title=Request+a+connector+to+%5Bcapture+from+%7C+materialize+to%5D+%5Byour+favorite+system%5D"
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
