import { useMediaQuery, useTheme } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import {
    AmazonKinesisLogoWrapper,
    AmazonRedshiftLogoWrapper,
    AmazonS3LogoWrapper,
    ApacheKafkaLogoWrapper,
    AzureBlobStorageLogoWrapper,
    Container,
    DatabricksLogoWrapper,
    ElasticLogoWrapper,
    FlowImageWrapper,
    GoogleBigQueryLogoWrapper,
    GoogleStorageLogoWrapper,
    Header,
    HttpWebhookLogoWrapper,
    HubspotLogoWrapper,
    MySQLLogoWrapper,
    NetsuiteLogoWrapper,
    OpenAiLogoWrapper,
    OracleLogoWrapper,
    PineconeLogoWrapper,
    PostgresLogoWrapper,
    RocksetLogoWrapper,
    SalesforceLogoWrapper,
    SnowflakeLogoWrapper,
    Step,
    StepDescription,
    StepIcon,
    StepOneIcon,
    StepThreeIcon,
    StepTitle,
    StepTwoIcon,
    Steps,
    Subtitle,
    TimescaleLogoWrapper,
    Title,
} from './styles';

const SectionTwo = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(768));

    return (
        <Container>
            <Header>
                <Title>
                    <span>Move </span>
                    <span>and </span>
                    <span>transform </span>
                    <span>
                        data in real-time with the only platform built for{' '}
                    </span>
                    <span>ops</span>
                    <span>, </span>
                    <span>analytics</span>
                    <span>, and </span>
                    <span>AI</span>
                </Title>
                <Subtitle>
                    Capture, transform, and materialize with millisecond latency
                    using ETL and ELT data integration, for an exact view of
                    your data that powers analytics and operations.
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
                            Use 100s of no-code connectors for streaming CDC,
                            real-time, or batch.
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
                            Stream and store in your own storage, then replay
                            any time.
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
                            Load data at different speeds into many destinations
                            for analytics, ops, and AI.
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
                <OracleLogoWrapper
                    to="/source/oracle-flashback"
                    aria-label="Oracle source"
                />
                <MySQLLogoWrapper
                    to="/source/mysql"
                    aria-label="MySQL source"
                />
                <PostgresLogoWrapper
                    to="/source/postgres"
                    aria-label="Postgres source"
                />
                <AmazonS3LogoWrapper
                    to="/source/s"
                    aria-label="Amazon S3 source"
                />
                <GoogleStorageLogoWrapper
                    to="/source/gcs"
                    aria-label="Google Storage source"
                />
                <AzureBlobStorageLogoWrapper
                    to="/source/azure-blob-storage"
                    aria-label="Azure source"
                />
                <NetsuiteLogoWrapper
                    to="/source/netsuite-v"
                    aria-label="Netsuite source"
                />
                <HubspotLogoWrapper
                    to="/source/hubspot"
                    aria-label="HubSpot source"
                />
                <SalesforceLogoWrapper
                    to="/source/salesforce"
                    aria-label="Salesforce source"
                />
                <HttpWebhookLogoWrapper
                    to="/source/http-ingest"
                    aria-label="Webhook source"
                />
                <AmazonKinesisLogoWrapper
                    to="/source/kinesis"
                    aria-label="Amazon Kinesis source"
                />
                <ApacheKafkaLogoWrapper
                    to="/source/kafka"
                    aria-label="Apache Kafka source"
                />
                <SnowflakeLogoWrapper
                    to="/destination/snowflake"
                    aria-label="Snowflake destination"
                />
                <GoogleBigQueryLogoWrapper
                    to="/destination/bigquery"
                    aria-label="Google BigQuery destination"
                />
                <AmazonRedshiftLogoWrapper
                    to="/destination/redshift"
                    aria-label="Amazon Redshift destination"
                />
                <ElasticLogoWrapper
                    to="/destination/elasticsearch"
                    aria-label="Elastic destination"
                />
                <TimescaleLogoWrapper
                    to="/destination/timescaledb"
                    aria-label="Timescale destination"
                />
                <RocksetLogoWrapper
                    to="/destination/rockset"
                    aria-label="Rockset destination"
                />
                <PineconeLogoWrapper
                    to="/destination/pinecone"
                    aria-label="Pinecone destination"
                />
                <OpenAiLogoWrapper
                    to="/destination/pinecone"
                    aria-label="Pinecone destination"
                />
                <DatabricksLogoWrapper
                    to="/destination/databricks"
                    aria-label="Databricks destination"
                />
            </FlowImageWrapper>
        </Container>
    );
};

export default SectionTwo;
