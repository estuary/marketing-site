import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Connector, ConnectorsList, Container, Description, Link, Title, Wrapper } from "./styles"

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
          <Connector key="section-seven-amazon-redshift-logo">
            <Link to="/destination/redshift">
              <StaticImage
                placeholder="none"
                alt="Amazon Redshift logo"
                src="../../../images/amazon-redshift-logo.png"
                layout="constrained"
              />
            </Link>
          </Connector>
          <Connector key="section-seven-databricks-logo">
            <Link to="/destination/databricks">
              <StaticImage
                placeholder="none"
                alt="Databricks logo"
                src="../../../images/databricks-logo.png"
                layout="constrained"
              />
            </Link>
          </Connector>
          <Connector key="section-seven-elastic-logo">
            <Link to="/destination/elasticsearch">
              <StaticImage
                placeholder="none"
                alt="Elastic logo"
                src="../../../images/elastic-logo.png"
                layout="constrained"
              />
            </Link>
          </Connector>
          <Connector key="section-seven-google-storage-logo">
            <Link to="/source/gcs">
              <StaticImage
                placeholder="none"
                alt="Google Storage logo"
                src="../../../images/google-storage-logo.png"
                layout="constrained"
              />
            </Link>
          </Connector>
          <Connector key="section-seven-openai-logo">
            <Link to="/destination/pinecone">
              <StaticImage
                placeholder="none"
                alt="OpenAI logo"
                src="../../../images/openai-logo.png"
                layout="constrained"
              />
            </Link>
          </Connector>
          <Connector key="section-seven-rockset-logo">
            <Link to="/destination/rockset">
              <StaticImage
                placeholder="none"
                alt="Rockset logo"
                src="../../../images/rockset-logo.png"
                layout="constrained"
              />
            </Link>
          </Connector>
          <Connector key="section-seven-pinecone-logo">
            <Link to="/destination/pinecone">
              <StaticImage
                placeholder="none"
                alt="Pinecone logo"
                src="../../../images/pinecone-logo.png"
                layout="constrained"
              />
            </Link>
          </Connector>
        </ConnectorsList>
      </Wrapper>
    </Container >
  )
}

export default SectionSeven
