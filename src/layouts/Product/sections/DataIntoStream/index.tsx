import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import { Button, Container, ContainerContent, ContainerImage, ContainerTopics, Title, Topic, Wrapper } from "./styles"

const DataIntoStream = () => {
    return (
        <Container>
            <Wrapper>
                <ContainerImage>
                    <StaticImage
                        placeholder="none"
                        alt="take a tour"
                        src="../../../../images/lp-product/take-a-tour.png"
                        layout="constrained"
                    />
                </ContainerImage>
                <ContainerContent>
                    <Title>TURN YOUR DATABASE INTO <span>A STREAM</span></Title>
                    <ContainerTopics>
                        <Topic>Always-on Change Data Capture (CDC) that replicates in real-time with exactly-once semantics, backed by cloud storage;</Topic>
                        <Topic>Deliver every insert, update, and delete in milliseconds as either a change log or fully reduced view in your destination system;</Topic>
                        <Topic>No topic and resource management - just configure a connector and go;</Topic>
                        <Topic>Capture once, use again and again. Add destinations without putting any additional load on your database.</Topic>
                    </ContainerTopics>
                    <Button target="_blank" href="https://dashboard.estuary.dev/register">
                        Build free Pipeline
                    </Button>
                </ContainerContent>
            </Wrapper>
        </Container>
    )
}

export default DataIntoStream