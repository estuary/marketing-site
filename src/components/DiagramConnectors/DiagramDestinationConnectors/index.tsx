import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import {
    connectorsGroup,
    connectorsGroupsRightWrapper,
    spacingRight,
    icon,
} from '../styles.module.less';
import AiIcon from '../../../svgs/android-brain.svg';
import OpsIcon from '../../../svgs/ops.svg';
import AnalyticsIcon from '../../../svgs/pie-chart.svg';
import ConnectorsType from '../ConnectorsType';
import { DiagramConnectorsProps } from '../types';
import ConnectorLink from '../ConnectorLink';

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
                <ConnectorLink
                    connectorId="snowflake"
                    connectorName="Snowflake"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Snowflake logo"
                            src="../../../images/logos/snowflake.png"
                            loading="eager"
                        />
                    }
                    to="/destination/snowflake"
                />
                <ConnectorLink
                    connectorId="google-bigquery"
                    connectorName="Google Bigquery"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Google BigQuery logo"
                            src="../../../images/logos/bigquery.png"
                            loading="eager"
                        />
                    }
                    to="/destination/bigquery"
                />
                <ConnectorLink
                    connectorId="amazon-redshift"
                    connectorName="Amazon Redshift"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Redshift logo"
                            src="../../../images/logos/redshift.png"
                            loading="eager"
                        />
                    }
                    to="/destination/redshift"
                />
            </div>
            <div className={clsx(connectorsGroup, spacingRight)}>
                <ConnectorsType
                    title="Ops"
                    description="Stream in real-time to SQL or NoSQL, OLAP, time series, or ElasticSearch databases."
                    hasTooltips={hasTooltips}
                    icon={<OpsIcon className={icon} color="var(--blue)" />}
                />
                <ConnectorLink
                    connectorId="elastic"
                    connectorName="Elastic"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="ElasticSearch logo"
                            src="../../../images/logos/elastic-search.png"
                            loading="eager"
                        />
                    }
                    to="/destination/elasticsearch"
                />
                <ConnectorLink
                    connectorId="mongodb"
                    connectorName="MongoDB"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="MongoDB logo"
                            src="../../../images/logos/mongo-db.png"
                            loading="eager"
                        />
                    }
                    to="/destination/mongodb"
                />
                <ConnectorLink
                    connectorId="amazon-dynamodb"
                    connectorName="Amazon DynamoDB"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Amazon DynamoDB logo"
                            src="../../../images/logos/dynamo-db.png"
                            loading="eager"
                        />
                    }
                    to="/destination/dynamodb"
                />
            </div>
            <div className={clsx(connectorsGroup, spacingRight)}>
                <ConnectorsType
                    title="AI"
                    description="Build AI pipelines that load vector databases for RAG and invoke chabots like ChatGPT or use other LLM models in real-time."
                    hasTooltips={hasTooltips}
                    icon={<AiIcon className={icon} color="var(--blue)" />}
                />
                <ConnectorLink
                    connectorId="pinecone"
                    connectorName="Pinecone"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Pinecone logo"
                            src="../../../images/logos/pinecone.png"
                            loading="eager"
                        />
                    }
                    to="/destination/pinecone"
                />
                <ConnectorLink
                    connectorId="openai"
                    connectorName="Open AI"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Open AI logo"
                            src="../../../images/logos/openai.png"
                            loading="eager"
                        />
                    }
                    to="/destination/pinecone"
                />
                <ConnectorLink
                    connectorId="databricks"
                    connectorName="Databricks"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Databricks logo"
                            src="../../../images/logos/databricks.png"
                            loading="eager"
                        />
                    }
                    to="/destination/databricks"
                />
            </div>
        </div>
    );
};

export default DiagramDestinationConnectors;
