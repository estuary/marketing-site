import { useMediaQuery, useTheme } from '@mui/material';
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { AmazonKinesisLogoWrapper, AmazonRedshiftLogoWrapper, AmazonS3LogoWrapper, ApacheKafkaLogoWrapper, AzureBlobStorageLogoWrapper, Container, DatabricksLogoWrapper, ElasticLogoWrapper, FlowImageWrapper, GoogleBigQueryLogoWrapper, GoogleStorageLogoWrapper, Header, HttpWebhookLogoWrapper, HubspotLogoWrapper, MySQLLogoWrapper, NetsuiteLogoWrapper, OpenAiLogoWrapper, OracleLogoWrapper, PineconeLogoWrapper, PostgresLogoWrapper, RocksetLogoWrapper, SalesforceLogoWrapper, SnowflakeLogoWrapper, Step, StepDescription, StepIcon, StepOneIcon, StepThreeIcon, StepTitle, StepTwoIcon, Steps, Subtitle, TimescaleLogoWrapper, Title } from "./styles";

const SectionTwo = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(768));

    return (
        <Container>
            <Header>
                <Title>
                    <span>
                        Move{" "}
                    </span>
                    <span>
                        and{" "}
                    </span>
                    <span>
                        transform{" "}
                    </span>
                    <span>
                        data with the only CDC platform built for{" "}
                    </span>
                    <span>
                        ops
                    </span>
                    <span>
                        ,{" "}
                    </span>
                    <span>
                        analytics
                    </span>
                    <span>
                        , and{" "}
                    </span>
                    <span>
                        AI
                    </span>
                </Title>
                <Subtitle>
                    Capture, transform, and materialize in real-time for an exact view of your data and every change that powers analytics and operations.
                </Subtitle>
            </Header>
            <Steps>
                <Step>
                    <StepIcon>
                        <StepOneIcon />
                    </StepIcon>
                    <div>
                        <StepTitle>
                            <span>01</span>Capture
                        </StepTitle>
                        <StepDescription>
                            Use 100s of no-code connectors for streaming CDC, real-time, or batch.
                        </StepDescription>
                    </div>
                </Step>

                <Step>
                    <StepIcon>
                        <StepTwoIcon />
                    </StepIcon>
                    <div>
                        <StepTitle>
                            <span>02</span>Stream-store-replay
                        </StepTitle>
                        <StepDescription>
                            Stream and store in your own storage, then replay any time.
                        </StepDescription>
                    </div>
                </Step>

                <Step>
                    <StepIcon>
                        <StepThreeIcon />
                    </StepIcon>
                    <div>
                        <StepTitle>
                            <span>03</span>Materialize
                        </StepTitle>
                        <StepDescription>
                            Load data at different speeds into many destinations for analytics, ops, and AI.
                        </StepDescription>
                    </div>
                </Step>
            </Steps>
            <FlowImageWrapper>
                {isMobile ? (
                    <StaticImage
                        placeholder="none"
                        alt="dataflow graphic"
                        src="../../../images/flow-mobile.png"
                        layout="constrained"
                        quality={100}
                    />
                ) : (
                    <StaticImage
                        placeholder="none"
                        alt="dataflow graphic"
                        src="../../../images/flow-desktop.png"
                        layout="constrained"
                        quality={100}
                    />
                )}
                <OracleLogoWrapper to="/source/oracle" />
                <MySQLLogoWrapper to="/source/mysql" />
                <PostgresLogoWrapper to="/source/postgres" />
                <AmazonS3LogoWrapper to="/source/s" />
                <GoogleStorageLogoWrapper to="/source/gcs" />
                <AzureBlobStorageLogoWrapper to="/source/azure-blob-storage" />
                <NetsuiteLogoWrapper to="/source/netsuite-v" />
                <HubspotLogoWrapper to="/source/hubspot" />
                <SalesforceLogoWrapper to="/source/salesforce" />
                <HttpWebhookLogoWrapper to="/source/http-ingest" />
                <AmazonKinesisLogoWrapper to="/source/kinesis" />
                <ApacheKafkaLogoWrapper to="/source/kafka" />
                <SnowflakeLogoWrapper to="/destination/snowflake" />
                <GoogleBigQueryLogoWrapper to="/destination/bigquery" />
                <AmazonRedshiftLogoWrapper to="/destination/redshift" />
                <ElasticLogoWrapper to="/destination/elasticsearch" />
                <TimescaleLogoWrapper to="/destination/timescaledb" />
                <RocksetLogoWrapper to="/destination/rockset" />
                <PineconeLogoWrapper to="/destination/pinecone" />
                <OpenAiLogoWrapper to="/destination/pinecone" />
                <DatabricksLogoWrapper to="/destination/databricks" />
            </FlowImageWrapper>
        </Container>
    )
}

export default SectionTwo
