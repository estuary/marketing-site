import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Card from '../Card';

import { Container, ContainerCards } from './style';

const TheAutomationCards = () => {
    const imageData = useStaticQuery(graphql`
        query {
            imageData: file(
                relativePath: { eq: "connector-template/the-automation-bg.png" }
            ) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 695) {
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
                    title="Automated Schema Drift"
                    description="Ensure that your destination matches your source, even if you change primary keys."
                    $reverseDesktop
                >
                    <StaticImage
                        alt="icon-1"
                        src="../../../../../images/connector-template/icon-1.png"
                    />
                </Card>
                <Card
                    title="Automated Backfills"
                    description="Automatically backfill data and transition to streaming mode."
                >
                    <StaticImage
                        alt="icon-2"
                        src="../../../../../images/connector-template/icon-2.png"
                    />
                </Card>
                <Card
                    title="Streaming Storage"
                    description="Optionally connect your own cloud storage for cost-effective change history."
                    $reverseDesktop
                >
                    <StaticImage
                        alt="icon-3"
                        src="../../../../../images/connector-template/icon-3.png"
                    />
                </Card>
            </ContainerCards>
            <ContainerCards>
                <Card
                    title="Exactly Once"
                    description="Idempotent pipelines provide assurance that your numbers are exactly correct."
                    $reverse
                    $reverseDesktop
                >
                    <StaticImage
                        alt="icon-4"
                        src="../../../../../images/connector-template/icon-4.png"
                    />
                </Card>
                <Card
                    title="Cleaned Data"
                    description="Captured data is de-duped and stored in your cloud "
                    $reverse
                >
                    <StaticImage
                        alt="icon-5"
                        src="../../../../../images/connector-template/icon-5.png"
                    />
                </Card>
                <Card
                    title="Share Data"
                    description="Seamlessly share data with any other Estuary account enabling cross-provider data access."
                    $reverse
                    $reverseDesktop
                >
                    <StaticImage
                        alt="icon-6"
                        src="../../../../../images/connector-template/icon-6.png"
                    />
                </Card>
            </ContainerCards>
        </Container>
    );
};

export default TheAutomationCards;
