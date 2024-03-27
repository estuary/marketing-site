import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import TakeATourButtons from '../../../../components/TakeATourButtons';

import {
  Container,
  ContainerButton,
  ContainerContent,
  ContainerIcons,
  ContainerImage,
  ContainerLeft,
  Description,
  Title,
  Wrapper,
} from './styles';

const TakeATour = () => {
  return (
    <Wrapper>
      <Container>
        <ContainerLeft>
          <ContainerImage>
            <StaticImage
              alt="Laptop"
              src="../../../../images/lp-big-query/take-a-tour/video.png"
              layout="constrained"
            />
          </ContainerImage>
        </ContainerLeft>
        <ContainerContent>
          <ContainerIcons>
            <StaticImage
              alt="Connection-1"
              src="../../../../images/lp-product/connector-1.png"
              width={80}
              height={80}
              quality={100}
            />
            <StaticImage
              alt="connector-2"
              src="../../../../images/lp-product/connector-2.png"
              width={80}
              height={80}
              quality={100}
            />
            <StaticImage
              alt="connector-3"
              src="../../../../images/lp-product/connector-3.png"
              width={80}
              height={80}
              quality={100}
            />
          </ContainerIcons>
          <Title>TAKE A TOUR</Title>
          <Description>Learn more about how estuary can help with real-time replication.</Description>
          <ContainerButton>
            <TakeATourButtons />
          </ContainerButton>
        </ContainerContent>
      </Container>
    </Wrapper>
  );
};

export default TakeATour;
