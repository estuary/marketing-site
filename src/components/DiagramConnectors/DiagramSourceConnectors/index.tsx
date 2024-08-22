import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
    Connector,
    ConnectorsGroup,
    ConnectorsGroupsLeftWrapper,
    HiddenLogoTitle,
    LogoWrapper,
} from '../styles';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import BatchIcon from '../../../svgs/batch.svg';
import RealTimeIcon from '../../../svgs/metric-latency.svg';
import SaasIcon from '../../../svgs/saas.svg';
import ConnectorsType from '../ConnectorsType';
import { DiagramConnectorsProps } from '../types';

const DiagramSourceConnectors = ({
    hasTooltips = false,
}: DiagramConnectorsProps) => {
    return (
        <ConnectorsGroupsLeftWrapper className="connectors-groups">
            <ConnectorsGroup className="spacing-left">
                <Connector to="/source/oracle-flashback">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Oracle logo"
                            src="../../../images/logos/oracle.png"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Oracle</HiddenLogoTitle>
                </Connector>
                <Connector to="/source/mysql">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="MySQL logo"
                            src="../../../images/logos/my-sql.png"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>MySQL</HiddenLogoTitle>
                </Connector>
                <Connector to="/source/postgres">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Postgre SQL logo"
                            src="../../../images/logos/postgre-sql.png"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Postgre SQL</HiddenLogoTitle>
                </Connector>
                <ConnectorsType
                    title="Streaming CDC"
                    description="The only real-time log-based data capture
              with incremental snapshots as a combined
              real-time data stream."
                    hasTooltips={hasTooltips}
                    icon={
                        <SingleDataflowIcon className="icon" color="#5072EB" />
                    }
                />
            </ConnectorsGroup>
            <ConnectorsGroup className="spacing-left">
                <Connector to="/source/s">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Amazon S3 logo"
                            src="../../../images/logos/amazon-s3.png"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Amazon S3</HiddenLogoTitle>
                </Connector>
                <Connector to="/source/gcs">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Google Cloud Storage logo"
                            src="../../../images/logos/google-cloud-storage.png"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>GCS</HiddenLogoTitle>
                </Connector>
                <Connector to="/source/azure-blob-storage">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Azure Blob Storage logo"
                            src="../../../images/logos/azure-blob-storage.png"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>ABS</HiddenLogoTitle>
                </Connector>
                <ConnectorsType
                    title="Batch"
                    description="Real-time support for messaging, APIs,
              WebSockets as streaming data."
                    hasTooltips={hasTooltips}
                    icon={<BatchIcon className="icon" color="#5072EB" />}
                />
            </ConnectorsGroup>
            <ConnectorsGroup className="spacing-left">
                <Connector to="/source/netsuite-v">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Netsuite logo"
                            src="../../../images/logos/netsuite.png"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Netsuite</HiddenLogoTitle>
                </Connector>
                <Connector to="/source/hubspot">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Hubspot logo"
                            src="../../../images/logos/hubspot.png"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>HubSpot</HiddenLogoTitle>
                </Connector>
                <Connector to="/source/salesforce">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Salesforce logo"
                            src="../../../images/logos/salesforce.png"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Salesforce</HiddenLogoTitle>
                </Connector>
                <ConnectorsType
                    title="SaaS"
                    description="Extract exactly once from files, apps, and
              other sources as a stream."
                    hasTooltips={hasTooltips}
                    icon={<SaasIcon className="icon" color="#5072EB" />}
                />
            </ConnectorsGroup>
            <ConnectorsGroup className="spacing-left">
                <Connector to="/source/google-pubsub">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Google Cloud Pub Sub logo"
                            src="../../../images/logos/google-cloud-pub-sub.png"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Google PubSub</HiddenLogoTitle>
                </Connector>
                <Connector to="/source/kinesis">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="AWS Kinesis logo"
                            src="../../../images/logos/aws-kinesis.png"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Amazon Kinesis</HiddenLogoTitle>
                </Connector>
                <Connector to="/source/kafka">
                    <LogoWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Apache Kafka logo"
                            src="../../../images/logos/apache-kafka.png"
                            loading="eager"
                        />
                    </LogoWrapper>
                    <HiddenLogoTitle>Apache Kafka</HiddenLogoTitle>
                </Connector>
                <ConnectorsType
                    title="Real-time"
                    description="Real-time and batch extraction from leading
              SaaS vendors with native connectors built
              for speed and scale."
                    hasTooltips={hasTooltips}
                    icon={<RealTimeIcon className="icon" color="#5072EB" />}
                />
            </ConnectorsGroup>
        </ConnectorsGroupsLeftWrapper>
    );
};

export default DiagramSourceConnectors;
