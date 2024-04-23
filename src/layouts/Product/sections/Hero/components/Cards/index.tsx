import React from 'react';

import { Container, Card, Title, Description, Divider } from './style';

const ProductHeroCards = () => {
  return (
    <Container>
      <Card $active>
        <Title>&#60;100ms DATA PIPELINES</Title>
        <Divider />
        <Description>
          Replicate every insert, update, and delete from the DB transaction log within 1 second.
        </Description>
      </Card>
      <Card>
        <Title>
          <span>100+</span> CONNECTORS
        </Title>
        <Divider />
        <Description>
          Access every source and destination you need by using Estuary connectors, BYOC, or importing OSS.
        </Description>
      </Card>
      <Card>
        <Title>
          <span>50%</span> LESS THAN BATCH ELT
        </Title>
        <Divider />
        <Description>Free up budget for the data team by spending less on data movement.</Description>
      </Card>
    </Container>
  );
};

export default ProductHeroCards;
