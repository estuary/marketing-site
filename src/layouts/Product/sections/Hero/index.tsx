import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Accordion from './components/Accordion';
import Cards from './components/Cards';

import {
    Container,
    ContainerHeader,
    ContainerImage,
    Title,
    ContainerButton,
    Button,
    ActionLink,
    Description,
    ContainerContent,
} from './style';

const ProductHero = () => {
    return (
        <Container>
            <ContainerHeader>
                <ContainerImage>
                    <StaticImage
                        placeholder="none"
                        src="../../../../images/lp-product/hero.png"
                        alt="Hero"
                        layout="constrained"
                    />
                </ContainerImage>
                <ContainerContent>
                    <Title>
                        STREAMING OR BATCH, <span>FROM ONE PLATFORM</span>
                    </Title>
                    <Description>
                        Capture and stream your database and API events into
                        your apps, warehouse, and AI without managing any infra.
                        Choose from hundreds of both batch and streaming
                        connectors while maintaining full control of your data.
                    </Description>
                    <ContainerButton>
                        <Button
                            target="_blank"
                            href="https://dashboard.estuary.dev/register"
                        >
                            Build a Pipeline
                        </Button>
                        <ActionLink target="_blank" to="/pricing">
                            View Pricing
                        </ActionLink>
                    </ContainerButton>
                    <Accordion />
                </ContainerContent>
            </ContainerHeader>
            <Cards />
        </Container>
    );
};

export default ProductHero;
