import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import clsx from 'clsx';
import {
    connector,
    connectorsGroup,
    connectorsGroupsLeftWrapper,
    logoWrapper,
    spacingLeft,
    icon,
} from '../styles.module.less';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import BatchIcon from '../../../svgs/batch.svg';
import RealTimeIcon from '../../../svgs/metric-latency.svg';
import SaasIcon from '../../../svgs/saas.svg';
import ConnectorsType from '../ConnectorsType';
import { DiagramConnectorsProps } from '../types';

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
                <Link className={connector} to="/source/oracle-flashback">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Oracle logo"
                            src="../../../images/logos/oracle.png"
                            loading="eager"
                        />
                    </div>
                    <span>Oracle</span>
                </Link>
                <Link className={connector} to="/source/mysql">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="MySQL logo"
                            src="../../../images/logos/my-sql.png"
                            loading="eager"
                        />
                    </div>
                    <span>MySQL</span>
                </Link>
                <Link className={connector} to="/source/postgres">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Postgre SQL logo"
                            src="../../../images/logos/postgre-sql.png"
                            loading="eager"
                        />
                    </div>
                    <span>Postgre SQL</span>
                </Link>
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
                <Link className={connector} to="/source/s">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Amazon S3 logo"
                            src="../../../images/logos/amazon-s3.png"
                            loading="eager"
                        />
                    </div>
                    <span>Amazon S3</span>
                </Link>
                <Link className={connector} to="/source/gcs">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Google Cloud Storage logo"
                            src="../../../images/logos/google-cloud-storage.png"
                            loading="eager"
                        />
                    </div>
                    <span>GCS</span>
                </Link>
                <Link className={connector} to="/source/azure-blob-storage">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Azure Blob Storage logo"
                            src="../../../images/logos/azure-blob-storage.png"
                            loading="eager"
                        />
                    </div>
                    <span>ABS</span>
                </Link>
                <ConnectorsType
                    title="Batch"
                    description="Real-time support for messaging, APIs,
              WebSockets as streaming data."
                    hasTooltips={hasTooltips}
                    icon={<BatchIcon className={icon} color="var(--blue)" />}
                />
            </div>
            <div className={clsx(connectorsGroup, spacingLeft)}>
                <Link className={connector} to="/source/netsuite-v2">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Netsuite logo"
                            src="../../../images/logos/netsuite.png"
                            loading="eager"
                        />
                    </div>
                    <span>Netsuite</span>
                </Link>
                <Link className={connector} to="/source/hubspot">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Hubspot logo"
                            src="../../../images/logos/hubspot.png"
                            loading="eager"
                        />
                    </div>
                    <span>HubSpot</span>
                </Link>
                <Link className={connector} to="/source/salesforce">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Salesforce logo"
                            src="../../../images/logos/salesforce.png"
                            loading="eager"
                        />
                    </div>
                    <span>Salesforce</span>
                </Link>
                <ConnectorsType
                    title="SaaS"
                    description="Extract exactly once from files, apps, and
              other sources as a stream."
                    hasTooltips={hasTooltips}
                    icon={<SaasIcon className={icon} color="var(--blue)" />}
                />
            </div>
            <div className={clsx(connectorsGroup, spacingLeft)}>
                <Link className={connector} to="/source/google-pubsub">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Google Cloud Pub Sub logo"
                            src="../../../images/logos/google-cloud-pub-sub.png"
                            loading="eager"
                        />
                    </div>
                    <span>Google PubSub</span>
                </Link>
                <Link className={connector} to="/source/kinesis">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="AWS Kinesis logo"
                            src="../../../images/logos/aws-kinesis.png"
                            loading="eager"
                        />
                    </div>
                    <span>Amazon Kinesis</span>
                </Link>
                <Link className={connector} to="/source/kafka">
                    <div className={logoWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Apache Kafka logo"
                            src="../../../images/logos/apache-kafka.png"
                            loading="eager"
                        />
                    </div>
                    <span>Apache Kafka</span>
                </Link>
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
