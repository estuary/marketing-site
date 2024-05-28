import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

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
import { DefaultWrapper } from '../../../../styles/wrappers';

const ProductHero = () => {
  return (
    <DefaultWrapper>
      <ContainerHeader>
        <ContainerImage>
          <StaticImage
            className="hero-image"
            src="../../../../images/lp-product/hero.png"
            alt="Screenshot of dashboard"
            layout="constrained"
            quality={80}
          />
        </ContainerImage>
        <ContainerContent>
          <Title>
            STREAMING OR BATCH, <span>FROM ONE PLATFORM</span>
          </Title>
          <Description>
            Capture and stream your database and API events into your apps, warehouse, and AI without managing any
            infra. Choose from hundreds of both batch and streaming connectors while maintaining full control of your
            data.
          </Description>
          <ContainerButton>
            <Button target="_blank" href="https://dashboard.estuary.dev/register">
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
