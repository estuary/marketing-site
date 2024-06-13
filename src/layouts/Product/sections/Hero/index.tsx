import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { DefaultWrapperDarkBlue } from '../../../../styles/wrappers';
import Cards from './Cards';
import {
    ButtonsContainer,
    Container,
    ContainerContent,
    Description,
    ImageContainer,
    PrimaryButton,
    SecondaryButton,
    Title,
} from './style';

const ProductHero = () => {
    return (
        <DefaultWrapperDarkBlue>
            <Container>
                <ContainerContent>
                    <Title>ESTUARY FLOW</Title>
                    <Description>
                        Estuary Flow is the only platform built for change data
                        capture (CDC) that lets you capture, transform, and
                        materialize data in real-time and batch for analytics,
                        ops, and AI - in minutes, with millisecond latency.
                    </Description>
                    <ButtonsContainer>
                        <PrimaryButton
                            target="_blank"
                            href="https://dashboard.estuary.dev/register"
                        >
                            Build a Pipeline
                        </PrimaryButton>
                        <SecondaryButton
                            buttonLabel="Contact Us"
                            buttonId="product-page-section-one-hubspot"
                        />
                    </ButtonsContainer>
                </ContainerContent>
                <ImageContainer>
                    <StaticImage
                        src="../../../../images/real-time-graphic.png"
                        alt="Real-time graphic"
                        placeholder="none"
                        loading="eager"
                        layout="constrained"
                    />
                </ImageContainer>
            </Container>
            <Cards />
        </DefaultWrapperDarkBlue>
    );
};

export default ProductHero;
