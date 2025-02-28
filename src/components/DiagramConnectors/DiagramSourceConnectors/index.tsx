import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import {
    connectorsGroup,
    connectorsGroupsLeftWrapper,
    spacingLeft,
    icon,
} from '../styles.module.less';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import BatchIcon from '../../../svgs/batch.svg';
import RealTimeIcon from '../../../svgs/metric-latency.svg';
import SaasIcon from '../../../svgs/saas.svg';
import ConnectorsType from '../ConnectorsType';
import { DiagramConnectorsProps } from '../types';
import ConnectorLink from '../ConnectorLink';

const DiagramSourceConnectors = ({
    hasTooltips = false,
    connectorsGroupsClassName,
}: DiagramConnectorsProps) => {
    return (
        <div
            className={clsx(
                connectorsGroupsLeftWrapper,
                connectorsGroupsClassName
            )}
        >
            <div className={clsx(connectorsGroup, spacingLeft)}>
                <ConnectorLink
                    connectorId="oracle"
                    connectorName="Oracle"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Oracle logo"
                            src="../../../images/logos/oracle.png"
                            loading="eager"
                        />
                    }
                    to="/source/oracle-flashback"
                />
                <ConnectorLink
                    connectorId="mysql"
                    connectorName="MySQL"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="MySQL logo"
                            src="../../../images/logos/my-sql.png"
                            loading="eager"
                        />
                    }
                    to="/source/mysql"
                />
                <ConnectorLink
                    connectorId="postgresql"
                    connectorName="Postgre SQL"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Postgre SQL logo"
                            src="../../../images/logos/postgre-sql.png"
                            loading="eager"
                        />
                    }
                    to="/source/postgres"
                />
                <ConnectorsType
                    title="Streaming CDC"
                    description="The only real-time log-based data capture
              with incremental snapshots as a combined
              real-time data stream."
                    hasTooltips={hasTooltips}
                    icon={
                        <SingleDataflowIcon
                            className={icon}
                            color="var(--blue)"
                        />
                    }
                />
            </div>
            <div className={clsx(connectorsGroup, spacingLeft)}>
                <ConnectorLink
                    connectorId="amazon-s3"
                    connectorName="Amazon S3"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Amazon S3 logo"
                            src="../../../images/logos/amazon-s3.png"
                            loading="eager"
                        />
                    }
                    to="/source/s"
                />
                <ConnectorLink
                    connectorId="gcs"
                    connectorName="GCS"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Google Cloud Storage logo"
                            src="../../../images/logos/google-cloud-storage.png"
                            loading="eager"
                        />
                    }
                    to="/source/gcs"
                />
                <ConnectorLink
                    connectorId="abs"
                    connectorName="ABS"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Azure Blob Storage logo"
                            src="../../../images/logos/azure-blob-storage.png"
                            loading="eager"
                        />
                    }
                    to="/source/azure-blob-storage"
                />
                <ConnectorsType
                    title="Batch"
                    description="Real-time support for messaging, APIs,
              WebSockets as streaming data."
                    hasTooltips={hasTooltips}
                    icon={<BatchIcon className={icon} color="var(--blue)" />}
                />
            </div>
            <div className={clsx(connectorsGroup, spacingLeft)}>
                <ConnectorLink
                    connectorId="netsuite"
                    connectorName="Netsuite"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Netsuite logo"
                            src="../../../images/logos/netsuite.png"
                            loading="eager"
                        />
                    }
                    to="/source/netsuite-v2"
                />
                <ConnectorLink
                    connectorId="hubSpot"
                    connectorName="HubSpot"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Hubspot logo"
                            src="../../../images/logos/hubspot.png"
                            loading="eager"
                        />
                    }
                    to="/source/hubspot"
                />
                <ConnectorLink
                    connectorId="salesforce"
                    connectorName="Salesforce"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Salesforce logo"
                            src="../../../images/logos/salesforce.png"
                            loading="eager"
                        />
                    }
                    to="/source/salesforce"
                />
                <ConnectorsType
                    title="SaaS"
                    description="Extract exactly once from files, apps, and
              other sources as a stream."
                    hasTooltips={hasTooltips}
                    icon={<SaasIcon className={icon} color="var(--blue)" />}
                />
            </div>
            <div className={clsx(connectorsGroup, spacingLeft)}>
                <ConnectorLink
                    connectorId="google-pubsub"
                    connectorName="Google PubSub"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Google Cloud Pub Sub logo"
                            src="../../../images/logos/google-cloud-pub-sub.png"
                            loading="eager"
                        />
                    }
                    to="/source/google-pubsub"
                />
                <ConnectorLink
                    connectorId="amazon-kinesis"
                    connectorName="Amazon Kinesisb"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="AWS Kinesis logo"
                            src="../../../images/logos/aws-kinesis.png"
                            loading="eager"
                        />
                    }
                    to="/source/kinesis"
                />
                <ConnectorLink
                    connectorId="apache-kafka"
                    connectorName="Apache Kafka"
                    image={
                        <StaticImage
                            placeholder="none"
                            alt="Apache Kafka logo"
                            src="../../../images/logos/apache-kafka.png"
                            loading="eager"
                        />
                    }
                    to="/source/kafka"
                />
                <ConnectorsType
                    title="Real-time"
                    description="Real-time and batch extraction from leading
              SaaS vendors with native connectors built
              for speed and scale."
                    hasTooltips={hasTooltips}
                    icon={<RealTimeIcon className={icon} color="var(--blue)" />}
                />
            </div>
        </div>
    );
};

export default DiagramSourceConnectors;
