import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import Tabs from '../../Tabs';
import Container from '../../Container';
import LogoAndPath from './LogoAndPath';
import {
    AmazonRedshiftLogoWrapper,
    Connectors,
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
    TabContent,
    TabFooterText,
    TabImageWrapper,
    TabsWrapper,
    TextWrapper,
} from './styles';

const TheSameData = () => {
    return (
        <DefaultWrapperDarkBlue>
            <Container isReverseColumnOnMobile>
                <TextWrapper>
                    <IconsWrapper>
                        <IconWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Analytics - pie chart"
                                src="../../../svgs/pie-chart.svg"
                            />
                        </IconWrapper>
                        <IconWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Ops"
                                src="../../../svgs/ops.svg"
                            />
                        </IconWrapper>
                        <IconWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="AI - artificial intelligence"
                                src="../../../svgs/android-brain.svg"
                            />
                        </IconWrapper>
                    </IconsWrapper>
                    <h2>
                        THE SAME DATA ACROSS <span>ANALYTICS, OPS,</span> AND{' '}
                        <span>AI</span>
                    </h2>
                    <p>
                        Add data from your sources into collections. Then reuse
                        that data for any destinations in real-time or batch.
                    </p>
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
                                                    height={128}
                                                    quality={100}
                                                />
                                                <ElasticLogoWrapper
                                                    to="/destination/elasticsearch"
                                                    aria-label="Elastic destination"
                                                    className="trio-group-logo"
                                                />
                                                <MongoDBLogoWrapper
                                                    to="/destination/mongodb"
                                                    aria-label="MongoDB destination"
                                                    className="trio-group-logo"
                                                />
                                                <DynamoDBLogoWrapper
                                                    to="/destination/dynamodb"
                                                    aria-label="Amazon DynamoDB destination"
                                                    className="trio-group-logo"
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
                                            <LogoAndPath tab="ai" />
                                            <Connectors $tab="ai">
                                                <StaticImage
                                                    placeholder="none"
                                                    alt="AI Connectors"
                                                    src="../../../images/product-page/section-five/ai-connectors.png"
                                                    height={128}
                                                />
                                                <PineconeLogoWrapper
                                                    to="/destination/pinecone"
                                                    aria-label="Pinecone destination"
                                                    className="trio-group-logo"
                                                />
                                                <OpenAiLogoWrapper
                                                    to="/destination/pinecone"
                                                    aria-label="Pinecone destination"
                                                    className="trio-group-logo"
                                                />
                                                <DatabricksAILogoWrapper
                                                    to="/destination/databricks"
                                                    aria-label="Databricks destination"
                                                    className="trio-group-logo"
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

export default TheSameData;
