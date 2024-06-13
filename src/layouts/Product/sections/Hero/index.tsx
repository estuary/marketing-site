import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { DefaultWrapperDarkBlue } from '../../../../styles/wrappers';
import Card from './Card';
import {
    ButtonsContainer,
    Cards,
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
            <Cards>
                <Card
                    title="SEE OVERVIEW"
                    description="Learn how to build a pipeline in minutes."
                    isActive
                    icon={
                        <StaticImage
                            src="../../../../svgs/product-page/record-outlined.svg"
                            alt="Watch a video to build a pipeline in minutes"
                        />
                    }
                />
                <Card
                    title="QUICKSTART"
                    description="Create a free account and use a tutorial for a pipeline."
                    icon={
                        <StaticImage
                            src="../../../../svgs/product-page/sign-up-outlined.svg"
                            alt="Register now and learn how to create a pipeline with our tutorial"
                        />
                    }
                />
                <Card
                    title="JOIN COMMUNITY"
                    description="Connect with others, and ask the experts."
                    icon={
                        <StaticImage
                            src="../../../../svgs/product-page/slack-outlined.svg"
                            alt="Join the Estuary community and receive support from experts"
                            style={{ color: '#5072EB' }}
                        />
                    }
                />
            </Cards>
        </DefaultWrapperDarkBlue>
    );
};

export default ProductHero;
