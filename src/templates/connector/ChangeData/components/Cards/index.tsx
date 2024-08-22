import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Card from '../Card';

import { Container, ContainerCards } from './style';

const TheAutomationCards = ({ $reverseDesktop = false }) => {
    const imageData = useStaticQuery(graphql`
        query {
            imageData: file(
                relativePath: { eq: "lp-connector/change-data/background.png" }
            ) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 378) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    `);

    return (
        <Container
            fluid={imageData.imageData.childImageSharp.fluid}
            fadeIn={false}
            critical={true}
        >
            <ContainerCards>
                <Card
                    title="HIGH THROUGHPUT"
                    description="Distributed event-driven architecture enable boundless scaling with exactly-once semantics."
                    $reverseDesktop
                >
                    <StaticImage
                        alt="icon-2"
                        src="../../../../../images/lp-connector/change-data/icon-02.png"
                    />
                </Card>
                <Card
                    title="DURABLE REPLICATION"
                    description="Cloud storage backed CDC w/ heart beats ensures reliability, even if your destination is down."
                    $reverseDesktop
                >
                    <StaticImage
                        alt="icon-3"
                        src="../../../../../images/lp-connector/change-data/icon-03.png"
                    />
                </Card>
            </ContainerCards>
            <ContainerCards
                $reverseDesktop={$reverseDesktop}
                $isBottomCard={true}
            >
                <Card
                    title="REAL-TIME INGESTION"
                    description="Capture and relay every  insert, update, and delete in milliseconds."
                    $reverseDesktop
                >
                    <StaticImage
                        alt="icon-1"
                        src="../../../../../images/lp-connector/change-data/icon-01.png"
                    />
                </Card>
            </ContainerCards>
        </Container>
    );
};

export default TheAutomationCards;
