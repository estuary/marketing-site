import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import { Button, Container, ContainerContent, ContainerImage, ContainerTopics, Description, Title, Topic, Wrapper } from "./styles"

const UnifiedDataStack = () => {
    return (
        <Container>
            <Wrapper>
                <ContainerImage>
                    <StaticImage
                        placeholder="none"
                        alt="take a tour"
                        src="../../../../images/lp-product/data-stream.png"
                        layout="constrained"
                    />
                </ContainerImage>
                <ContainerContent>
                    <Title>UNIFIED DATA STACK FOR, <span>ANALYTICS, OPERATIONS AND AI PIPELINES</span></Title>
                    <Description>Empower your whole team around a unified view of your data for seamless analytics, data products and AI pipelines.</Description>
                    <ContainerTopics>
                        <Topic>No-code analytics pipelines or build from a CLI;</Topic>
                        <Topic>Powerful, millisecond latency data products with streaming sql and typescript transformations;</Topic>
                        <Topic>Real-time generative AI pipelines;</Topic>
                        <Topic>Which are all idempotent, real-time, production-grade and SOC2 certified.</Topic>
                    </ContainerTopics>
                    <Button target="_blank" href="https://dashboard.estuary.dev/register">
                        Learn more
                    </Button>
                </ContainerContent>
            </Wrapper>
        </Container>
    )
}

export default UnifiedDataStack