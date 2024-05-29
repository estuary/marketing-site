import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { DefaultWrapper } from '../../../../styles/wrappers';
import Accordion from './components/Accordion';
import Cards from './components/Cards';
import {
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
        <DefaultWrapper>
            <ContainerHeader>
                <ContainerImage>
                    <StaticImage
                        placeholder="none"
                        src="../../../../images/lp-product/hero.png"
                        alt="Screenshot of dashboard"
                        layout="constrained"
                        loading="eager"
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
        </DefaultWrapper>
    );
};

export default ProductHero;
