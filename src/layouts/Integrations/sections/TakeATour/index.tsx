import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

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

import { ContainerIcon } from '../../../styles';

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
            <ContainerIcon>
              <StaticImage
                alt="Microsoft Logo"
                src="../../../../images/microsoft-logo.png"
                width={46}
                height={46}
                quality={100}
              />
            </ContainerIcon>
            <ContainerIcon>
              <StaticImage
                alt="AWS Logo"
                src="../../../../images/aws-logo.png"
                width={46}
                height={46}
                quality={100}
              />
            </ContainerIcon>
            <ContainerIcon>
              <StaticImage
                alt="Google Cloud Logo"
                src="../../../../images/google-cloud-logo.png"
                width={46}
                height={46}
                quality={100}
              />
            </ContainerIcon>
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
