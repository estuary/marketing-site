import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import Tabs from '../../Tabs';
import LogoAndPath from './LogoAndPath';
import {
    AmazonRedshiftLogoWrapper,
    Connectors,
    Container,
    DatabricksAILogoWrapper,
    DatabricksLogoWrapper,
    DynamoDBLogoWrapper,
    ElasticLogoWrapper,
    GoogleBigQueryLogoWrapper,
    IconWrapper,
    IconsWrapper,
    MongoDBLogoWrapper,
    OpenAiLogoWrapper,
    PineconeLogoWrapper,
    SnowflakeLogoWrapper,
    Subtitle,
    TabContent,
    TabFooterText,
    TabImageWrapper,
    TabsWrapper,
    TextWrapper,
    Title,
} from './styles';

const SectionFive = () => {
    return (
        <DefaultWrapperDarkBlue>
            <Container>
                <TextWrapper>
                    <IconsWrapper>
                        <IconWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Analytics - pie chart"
                                src="../../../svgs/pie-chart.svg"
                                layout="constrained"
                                loading="lazy"
                            />
                        </IconWrapper>
                        <IconWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Ops"
                                src="../../../svgs/ops.svg"
                                layout="constrained"
                                loading="lazy"
                            />
                        </IconWrapper>
                        <IconWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="AI - artificial intelligence"
                                src="../../../svgs/android-brain.svg"
                                layout="constrained"
                                loading="lazy"
                            />
                        </IconWrapper>
                    </IconsWrapper>
                    <Title>
                        THE SAME DATA ACROSS <span>ANALYTICS, OPS,</span> AND{' '}
                        <span>AI</span>
                    </Title>
                    <Subtitle>
                        Add data from your sources into collections. Then reuse
                        that data for any destinations in real-time or batch.
                    </Subtitle>
                </TextWrapper>
                <TabsWrapper>
                    <Tabs
                        tabs={[
                            {
                                label: 'Analytics',
                                content: (
                                    <TabContent>
                                        <TabImageWrapper>
                                            <LogoAndPath tab="analytics" />
                                            <Connectors $tab="analytics">
                                                <StaticImage
                                                    placeholder="none"
                                                    alt="Analytics Connectors"
                                                    src="../../../images/product-page/section-five/analytics-connectors.png"
                                                    layout="constrained"
                                                    loading="lazy"
                                                />
                                                <GoogleBigQueryLogoWrapper
                                                    to="/destination/bigquery"
                                                    aria-label="Google BigQuery destination"
                                                />
                                                <DatabricksLogoWrapper
                                                    to="/destination/databricks"
                                                    aria-label="Databricks destination"
                                                />
                                                <AmazonRedshiftLogoWrapper
                                                    to="/destination/redshift"
                                                    aria-label="Amazon Redshift destination"
                                                />
                                                <SnowflakeLogoWrapper
                                                    to="/destination/snowflake"
                                                    aria-label="Snowflake destination"
                                                />
                                            </Connectors>
                                        </TabImageWrapper>
                                        <TabFooterText>
                                            Load into BigQuery, Databricks,
                                            Redshift or Snowflake for analytics.
                                        </TabFooterText>
                                    </TabContent>
                                ),
                            },
                            {
                                label: 'Ops',
                                content: (
                                    <TabContent>
                                        <TabImageWrapper>
                                            <LogoAndPath tab="ops" />
                                            <Connectors $tab="ops">
                                                <StaticImage
                                                    placeholder="none"
                                                    alt="Ops Connectors"
                                                    src="../../../images/product-page/section-five/ops-connectors.png"
                                                    layout="constrained"
                                                    loading="lazy"
                                                    height={128}
                                                    quality={100}
                                                />
                                                <ElasticLogoWrapper
                                                    to="/destination/elasticsearch"
                                                    aria-label="Elastic destination"
                                                />
                                                <MongoDBLogoWrapper
                                                    to="/destination/mongodb"
                                                    aria-label="MongoDB destination"
                                                />
                                                <DynamoDBLogoWrapper
                                                    to="/destination/dynamodb"
                                                    aria-label="Amazon DynamoDB destination"
                                                />
                                            </Connectors>
                                        </TabImageWrapper>
                                        <TabFooterText>
                                            Stream into SQL or NoSQL databases,
                                            high-performance OLAP, or
                                            Elasticsearch for operations.
                                        </TabFooterText>
                                    </TabContent>
                                ),
                            },
                            {
                                label: 'AI',
                                content: (
                                    <TabContent>
                                        <TabImageWrapper>
                                            <LogoAndPath tab="ops" />
                                            <Connectors $tab="ops">
                                                <StaticImage
                                                    placeholder="none"
                                                    alt="AI Connectors"
                                                    src="../../../images/product-page/section-five/ai-connectors.png"
                                                    layout="constrained"
                                                    loading="lazy"
                                                    height={128}
                                                />
                                                <PineconeLogoWrapper
                                                    to="/destination/pinecone"
                                                    aria-label="Pinecone destination"
                                                />
                                                <OpenAiLogoWrapper
                                                    to="/destination/pinecone"
                                                    aria-label="Pinecone destination"
                                                />
                                                <DatabricksAILogoWrapper
                                                    to="/destination/databricks"
                                                    aria-label="Databricks destination"
                                                />
                                            </Connectors>
                                        </TabImageWrapper>
                                        <TabFooterText>
                                            Build pipelines that vectorize and
                                            load data into databases, or call
                                            ChatGPT for AI.
                                        </TabFooterText>
                                    </TabContent>
                                ),
                            },
                        ]}
                    />
                </TabsWrapper>
            </Container>
        </DefaultWrapperDarkBlue>
    );
};

export default SectionFive;
