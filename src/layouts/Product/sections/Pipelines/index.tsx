import React from 'react';

import PipelinesTable from '../../../../components/PipelinesTable';
import { Container, Button, LineBreak, Title, Description } from './style';

const Pipelines = () => {
  return (
    <Container>
      <Title>
        PIPELINES AS <span>FAST</span> AS KAFKA, <LineBreak />
        <span>EASY</span> AS MANAGED ELT/ETL, <LineBreak />
        <span>CHEAPER</span> THAN BUILDING IT.
      </Title>
      <Description>Feature Comparison</Description>
      <PipelinesTable />
      <Button target="_blank" to="/vs-fivetran">
        View Comparison Pages
      </Button>
    </Container>
  );
};

export default Pipelines;
