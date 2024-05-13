import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { ConnectorIconWrapper, ConnectorsList, Container, Description, Title, Wrapper } from "./styles"

const SectionSeven = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          INNOVATE FASTER
        </Title>
        <Description>
          Innovate faster with a single data pipeline that decouples sources and destinations so you can share data across analytics, apps, and AI, and add or change systems, all without impacting others.
        </Description>
        <ConnectorsList>
          <ConnectorIconWrapper key="section-seven-amazon-redshift-logo">
            <StaticImage
              placeholder="none"
              alt="Amazon Redshift logo"
              src="../../../images/amazon-redshift-logo.png"
              layout="constrained"
            />
          </ConnectorIconWrapper>
          <ConnectorIconWrapper key="section-seven-databricks-logo">
            <StaticImage
              placeholder="none"
              alt="Databricks logo"
              src="../../../images/databricks-logo.png"
              layout="constrained"
            />
          </ConnectorIconWrapper>
          <ConnectorIconWrapper key="section-seven-elastic-logo">
            <StaticImage
              placeholder="none"
              alt="Elastic logo"
              src="../../../images/elastic-logo.png"
              layout="constrained"
            />
          </ConnectorIconWrapper>
          <ConnectorIconWrapper key="section-seven-google-storage-logo">
            <StaticImage
              placeholder="none"
              alt="Google Storage logo"
              src="../../../images/google-storage-logo.png"
              layout="constrained"
            />
          </ConnectorIconWrapper>
          <ConnectorIconWrapper key="section-seven-openai-logo">
            <StaticImage
              placeholder="none"
              alt="OpenAI logo"
              src="../../../images/openai-logo.png"
              layout="constrained"
            />
          </ConnectorIconWrapper>
          <ConnectorIconWrapper key="section-seven-rockset-logo">
            <StaticImage
              placeholder="none"
              alt="Rockset logo"
              src="../../../images/rockset-logo.png"
              layout="constrained"
            />
          </ConnectorIconWrapper>
          <ConnectorIconWrapper key="section-seven-pinecone-logo">
            <StaticImage
              placeholder="none"
              alt="Pinecone logo"
              src="../../../images/pinecone-logo.png"
              layout="constrained"
            />
          </ConnectorIconWrapper>
        </ConnectorsList>
      </Wrapper>
    </Container>
  )
}

export default SectionSeven
