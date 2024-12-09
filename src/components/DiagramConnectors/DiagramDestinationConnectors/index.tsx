import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import clsx from 'clsx';
import {
    connector,
    connectorsGroup,
    connectorsGroupsRightWrapper,
    spacingRight,
    logoWrapper,
    icon,
} from '../styles.module.less';
import AiIcon from '../../../svgs/android-brain.svg';
import OpsIcon from '../../../svgs/ops.svg';
import AnalyticsIcon from '../../../svgs/pie-chart.svg';
import ConnectorsType from '../ConnectorsType';
import { DiagramConnectorsProps } from '../types';

const DiagramDestinationConnectors = ({
    hasTooltips = false,
    connectorsGroupsClassName,
}: DiagramConnectorsProps) => {
    return (
        <div
            className={clsx(
                connectorsGroupsRightWrapper,
                connectorsGroupsClassName
            )}
        >
            <div className={clsx(connectorsGroup, spacingRight)}>
                <ConnectorsType
                    title="Analytics"
                    description="Load data at any speed into data warehouses and lakes from real-time to hour+ intervals as in-place updates and hard deletes or append-only change data history."
                    hasTooltips={hasTooltips}
                    icon={
                        <AnalyticsIcon className={icon} color="var(--blue)" />
                    }
                />
                <Link className={connector} to="/destination/snowflake">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Snowflake logo"
                            src="../../../images/logos/snowflake.png"
                            loading="eager"
                        />
                    </div>
                    <span>Snowflake</span>
                </Link>
                <Link className={connector} to="/destination/bigquery">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Google BigQuery logo"
                            src="../../../images/logos/bigquery.png"
                            loading="eager"
                        />
                    </div>
                    <span>Google Bigquery</span>
                </Link>
                <Link className={connector} to="/destination/redshift">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Redshift logo"
                            src="../../../images/logos/redshift.png"
                            loading="eager"
                        />
                    </div>
                    <span>Amazon Redshift</span>
                </Link>
            </div>
            <div className={clsx(connectorsGroup, spacingRight)}>
                <ConnectorsType
                    title="Ops"
                    description="Stream in real-time to SQL or NoSQL, OLAP, time series, or ElasticSearch databases."
                    hasTooltips={hasTooltips}
                    icon={<OpsIcon className={icon} color="var(--blue)" />}
                />
                <Link className={connector} to="/destination/elasticsearch">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="ElasticSearch logo"
                            src="../../../images/logos/elastic-search.png"
                            loading="eager"
                        />
                    </div>
                    <span>Elastic</span>
                </Link>
                <Link className={connector} to="/destination/mongodb">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="MongoDB logo"
                            src="../../../images/logos/mongo-db.png"
                            loading="eager"
                        />
                    </div>
                    <span>MongoDB</span>
                </Link>
                <Link className={connector} to="/destination/dynamodb">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Amazon DynamoDB logo"
                            src="../../../images/logos/dynamo-db.png"
                            loading="eager"
                        />
                    </div>
                    <span>Amazon DynamoDB</span>
                </Link>
            </div>
            <div className={clsx(connectorsGroup, spacingRight)}>
                <ConnectorsType
                    title="AI"
                    description="Build AI pipelines that load vector databases for RAG and invoke chabots like ChatGPT or use other LLM models in real-time."
                    hasTooltips={hasTooltips}
                    icon={<AiIcon className={icon} color="var(--blue)" />}
                />
                <Link className={connector} to="/destination/pinecone">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Pinecone logo"
                            src="../../../images/logos/pinecone.png"
                            loading="eager"
                        />
                    </div>
                    <span>Pinecone</span>
                </Link>
                <Link className={connector} to="/destination/pinecone">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Open AI logo"
                            src="../../../images/logos/openai.png"
                            loading="eager"
                        />
                    </div>
                    <span>Open AI</span>
                </Link>
                <Link className={connector} to="/destination/databricks">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Databricks logo"
                            src="../../../images/logos/databricks.png"
                            loading="eager"
                        />
                    </div>
                    <span>Databricks</span>
                </Link>
            </div>
        </div>
    );
};

export default DiagramDestinationConnectors;
