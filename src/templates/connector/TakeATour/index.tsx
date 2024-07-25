import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { estuaryProductFlowVideoUrl } from '../../../../shared';
import useWindowExistence from '../../../hooks/useWindowExistence';
import { DefaultWrapperDark } from '../../../styles/wrappers';
import { ContainerIcon } from '../styles';
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
} from './styles';
import TakeATourButtons from './TakeATourButtons';

const TakeATour = () => {
    const imageData = useStaticQuery(graphql`
        query {
            imageData: file(
                relativePath: { eq: "lp-connector/take-a-tour/background.png" }
            ) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 547) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    `);

    const hasWindow = useWindowExistence();

    return (
        <DefaultWrapperDark>
            <Container>
                <ContainerLeft
                    fluid={imageData.imageData.childImageSharp.fluid}
                    fadeIn={false}
                    critical={true}
                >
                    {hasWindow ? (
                        <EstuaryProductVideo
                            light={
                                <VideoPreviewContainer>
                                    <StaticImage
                                        quality={90}
                                        placeholder="none"
                                        alt="estuary flow product video"
                                        src="../../../images/homepage-product-video.svg"
                                        layout="constrained"
                                        className="estuary-product-video-thumbnail"
                                    />
                                </VideoPreviewContainer>
                            }
                            url={estuaryProductFlowVideoUrl}
                        />
                    ) : null}
                </ContainerLeft>
                <ContainerContent>
                    <ContainerIcons>
                        <ContainerIcon>
                            <StaticImage
                                alt="Microsoft Logo"
                                src="../../../images/microsoft-logo.png"
                                width={46}
                                height={46}
                                quality={100}
                            />
                        </ContainerIcon>
                        <ContainerIcon>
                            <StaticImage
                                alt="AWS Logo"
                                src="../../../images/aws-logo.png"
                                width={46}
                                height={46}
                                quality={100}
                            />
                        </ContainerIcon>
                        <ContainerIcon>
                            <StaticImage
                                alt="Google Cloud Logo"
                                src="../../../images/google-cloud-logo.png"
                                width={46}
                                height={46}
                                quality={100}
                            />
                        </ContainerIcon>
                    </ContainerIcons>
                    <Title>TAKE A TOUR</Title>
                    <Description>
                        Learn more about how Estuary can help with real-time
                        replication.
                    </Description>
                    <ContainerButton>
                        <TakeATourButtons />
                    </ContainerButton>
                </ContainerContent>
            </Container>
        </DefaultWrapperDark>
    );
};

export default TakeATour;
