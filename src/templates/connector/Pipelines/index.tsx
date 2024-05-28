import React from 'react';

import PipelinesTable from '../../../components/PipelinesTable';
import { Button, Container, Description, LineBreak, Title } from './style';
import { DefaultWrapper } from '../../../styles/wrappers';

const Pipelines = () => {
  return (
    <DefaultWrapper>
      <Container>
        <Title>
          PIPELINES AS <span>FAST</span> AS KAFKA, <LineBreak />
          <span>EASY</span> AS MANAGED ELT/ETL, <LineBreak />
          <span>CHEAPER</span> THAN BUILDING IT.
        </Title>
        <Description>Feature Comparison</Description>
        <PipelinesTable />
        <Button target="_blank" to="/vs-fivetran">
          Detailed Comparison
        </Button>
      </Container>
    </DefaultWrapper>
  );
};

export default Pipelines;
