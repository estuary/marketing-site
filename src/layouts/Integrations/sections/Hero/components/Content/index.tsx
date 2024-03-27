import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Button, Container, ContainerPreTitle, Description, LineBreak, Pretitle, Title, Topic, Topics } from './styles';

const Content = () => {
  return (
    <Container>
      <ContainerPreTitle>
        <StaticImage
          placeholder="none"
          alt="icon"
          src="../../../../../../images/lp-big-query/hero/icon.png"
          layout="constrained"
          width={40}
          height={40}
          quality={100}
        />
        <Pretitle>Real-time ETL & CDC</Pretitle>
      </ContainerPreTitle>
      <Title>
        <span>STREAM</span> INTRO BIGQUERY
        <LineBreak /> WITH YOUR <span>FREE</span> ACCOUNT
      </Title>
      <Description>
        Continously ingest and deliver both streaming and batch change data from 100s of sources using Estuary’s custom
        no-code connectors.
      </Description>
      <Topics>
        <Topic>
          <span>&#60;100ms</span> Data pipelines
        </Topic>
        <Topic>
          <span>300+</span> Connectors
        </Topic>
        <Topic>
          <span>2-5x</span> less than batch ELT
        </Topic>
      </Topics>
      <Button target="_blank" href="https://dashboard.estuary.dev/register">
        Try it free
      </Button>
    </Container>
  );
};

export default Content;
