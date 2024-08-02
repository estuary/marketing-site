import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
    Connector,
    ConnectorsGroup,
    ConnectorsGroupsRightWrapper,
    HiddenLogoTitle,
    LogoWrapper,
} from '../styles';
import AiIcon from '../../../svgs/android-brain.svg';
import OpsIcon from '../../../svgs/ops.svg';
import AnalyticsIcon from '../../../svgs/pie-chart.svg';
import ConnectorsType from '../ConnectorsType';
import { DiagramConnectorsProps } from '../types';

const DiagramDestinationConnectors = ({
    hasTooltips = false,
}: DiagramConnectorsProps) => {
    return (
        <ConnectorsGroupsRightWrapper className="connectors-groups">
            <ConnectorsGroup className="spacing-right">
                <ConnectorsType
                    title="Analytics"
                    description="Load data at any speed into data warehouses and lakes from real-time to hour+ intervals as in-place updates and hard deletes or append-only change data history."
                    hasTooltips={hasTooltips}
                    icon={<AnalyticsIcon className="icon" color="#5072EB" />}
                />
                <Connector to="/destination/snowflake">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Snowflake logo"
                            src="../../../images/logos/snowflake.png"
                            layout="constrained"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Snowflake</HiddenLogoTitle>
                </Connector>
                <Connector to="/destination/bigquery">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Google BigQuery logo"
                            src="../../../images/logos/bigquery.png"
                            layout="constrained"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Google Bigquery</HiddenLogoTitle>
                </Connector>
                <Connector to="/destination/redshift">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Redshift logo"
                            src="../../../images/logos/redshift.png"
                            layout="constrained"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Amazon Redshift</HiddenLogoTitle>
                </Connector>
            </ConnectorsGroup>
            <ConnectorsGroup className="spacing-right">
                <ConnectorsType
                    title="Ops"
                    description="Stream in real-time to SQL or NoSQL, OLAP, time series, or ElasticSearch databases."
                    hasTooltips={hasTooltips}
                    icon={<OpsIcon className="icon" color="#5072EB" />}
                />
                <Connector to="/destination/elasticsearch">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="ElasticSearch logo"
                            src="../../../images/logos/elastic-search.png"
                            layout="constrained"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Elastic</HiddenLogoTitle>
                </Connector>
                <Connector to="/destination/mongodb">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="MongoDB logo"
                            src="../../../images/logos/mongo-db.png"
                            layout="constrained"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>MongoDB</HiddenLogoTitle>
                </Connector>
                <Connector to="/destination/dynamodb">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Amazon DynamoDB logo"
                            src="../../../images/logos/dynamo-db.png"
                            layout="constrained"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Amazon DynamoDB</HiddenLogoTitle>
                </Connector>
            </ConnectorsGroup>
            <ConnectorsGroup className="spacing-right">
                <ConnectorsType
                    title="AI"
                    description="Build AI pipelines that load vector databases for RAG and invoke chabots like ChatGPT or use other LLM models in real-time."
                    hasTooltips={hasTooltips}
                    icon={<AiIcon className="icon" color="#5072EB" />}
                />
                <Connector to="/destination/pinecone">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Pinecone logo"
                            src="../../../images/logos/pinecone.png"
                            layout="constrained"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Pinecone</HiddenLogoTitle>
                </Connector>
                <Connector to="/destination/pinecone">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Open AI logo"
                            src="../../../images/logos/openai.png"
                            layout="constrained"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Open AI</HiddenLogoTitle>
                </Connector>
                <Connector to="/destination/databricks">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Databricks logo"
                            src="../../../images/logos/databricks.png"
                            layout="constrained"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Databricks</HiddenLogoTitle>
                </Connector>
            </ConnectorsGroup>
        </ConnectorsGroupsRightWrapper>
    );
};

export default DiagramDestinationConnectors;
