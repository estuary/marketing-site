import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import TakeATourButtons from '../../../../components/TakeATourButtons';

import {
  Container,
  ContainerButton,
  ContainerContent,
  ContainerIcons,
  ContainerLeft,
  Description,
  EstuaryProductVideo,
  Title,
  VideoPreviewContainer,
  Wrapper
} from './styles';

import { estuaryProductFlowVideoUrl } from '../../../../../shared';
import useWindowExistence from '../../../../hooks/useWindowExistence';
import { ContainerIcon } from '../../../styles';

const TakeATour = () => {
  const hasWindow = useWindowExistence()

  return (
    <Wrapper>
      <Container>
        <ContainerLeft>
          {hasWindow && (
            <EstuaryProductVideo
              light={
                <VideoPreviewContainer>
                  <StaticImage
                    quality={100}
                    placeholder="none"
                    alt="estuary flow product video"
                    src="../../../../images/homepage-product-video.svg"
                    layout="constrained"
                    className="estuary-product-video-thumbnail"
                  />
                </VideoPreviewContainer>
              }
              url={estuaryProductFlowVideoUrl}
            />
          )}
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
