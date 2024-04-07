import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Button, Container, ContainerImage, Content, Title, Wrapper } from './style';

const RealTime = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Title>
            Deliver <span>real-time</span> and <span>batch</span> data from DBs, SaaS, APIs, and more
          </Title>
          <Button target="_blank" href="https://dashboard.estuary.dev/register">
            Build Free Pipeline
          </Button>
        </Content>
        <ContainerImage>
          <StaticImage
            alt="Connection-1"
            src="../../../../images/lp-big-query/real-time/icons.png"
            width={520}
            height={240}
            quality={100}
          />
        </ContainerImage>
      </Container>
    </Wrapper>
  );
};

export default RealTime;
