import { Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactNode, useCallback, useState } from 'react';
import AiIcon from '../../../../svgs/android-brain.svg';
import BatchIcon from '../../../../svgs/batch.svg';
import RealTimeIcon from '../../../../svgs/metric-latency.svg';
import SingleDataflowIcon from '../../../../svgs/metric-single-dataflow.svg';
import OpsIcon from '../../../../svgs/ops.svg';
import AnalyticsIcon from '../../../../svgs/pie-chart.svg';
import SaasIcon from '../../../../svgs/saas.svg';
import HTMLTooltip from '../../../HTMLTooltip';

import {
    CenterHoverBlock,
    Connector,
    ConnectorsGroup,
    ConnectorsGroupsLeftWrapper,
    ConnectorsGroupsRightWrapper,
    Container,
    FadeTransition,
    FeatureWrapper,
    FlowStepDescription,
    FlowStepImageWrapper,
    FlowStepReplayHoverBlock,
    FlowStepStoreHoverBlock,
    FlowStepStreamHoverBlock,
    FlowStepTitle,
    FlowStepTransformHoverBlock,
    HiddenLogoTitle,
    HoverableBlock,
    ImageWrapper,
    LogoWrapper,
    TooltipBottom,
    TooltipCenter,
    TooltipLeft,
    TooltipRight,
    TooltipTop,
} from './styles';

export type HoveredFlowStepsBlock =
    | 'transform'
    | 'replay'
    | 'stream'
    | 'store'
    | 'center'
    | null;

export type HoveredConnectorsGroupBlock =
    | 'streamingCDCConnectors'
    | 'realTimeConnectors'
    | 'batchConnectors'
    | 'saasConnectors'
    | 'analyticsConnectors'
    | 'opsConnectors'
    | 'aiConnectors'
    | null;

type HoverProps = {
    slide: number;
    children: ReactNode;
};

const Hover = ({ slide, children }: HoverProps) => {
    const [hoveredFlowStepBlock, setHoveredFlowStepBlock] =
        useState<HoveredFlowStepsBlock>(null);

    const handleHoverableFlowStepBlockMouseEnter = (
        block: HoveredFlowStepsBlock
    ) => setHoveredFlowStepBlock(block);

    const handleHoveredFlowStepBlockMouseLeave = useCallback(
        () => setHoveredFlowStepBlock(null),
        []
    );

    return (
        <Container $slide={slide}>
            {[1, 2].includes(slide) ? (
                <ConnectorsGroupsLeftWrapper>
                    <ConnectorsGroup>
                        <Connector to="/source/oracle-flashback">
                            <LogoWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="Oracle logo"
                                    src="../../../../images/logos/oracle.png"
                                    layout="constrained"
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
                                    src="../../../../images/logos/my-sql.png"
                                    layout="constrained"
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
                                    src="../../../../images/logos/postgre-sql.png"
                                    layout="constrained"
                                    loading="eager"
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>Postgre SQL</HiddenLogoTitle>
                        </Connector>
                        <HTMLTooltip
                            title={
                                <Typography color="inherit">
                                    The only real-time log-based data capture
                                    with incremental snapshots as a combined
                                    real-time data stream.
                                </Typography>
                            }
                        >
                            <FeatureWrapper>
                                <SingleDataflowIcon
                                    className="icon"
                                    color="#5072EB"
                                />
                                <h4>Streaming CDC</h4>
                            </FeatureWrapper>
                        </HTMLTooltip>
                    </ConnectorsGroup>
                    <ConnectorsGroup>
                        <Connector to="/source/s">
                            <LogoWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="Amazon S3 logo"
                                    src="../../../../images/logos/amazon-s3.png"
                                    layout="constrained"
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
                                    src="../../../../images/logos/google-cloud-storage.png"
                                    layout="constrained"
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
                                    src="../../../../images/logos/azure-blob-storage.png"
                                    layout="constrained"
                                    loading="eager"
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>ABS</HiddenLogoTitle>
                        </Connector>
                        <HTMLTooltip
                            title={
                                <Typography color="inherit">
                                    Real-time support for messaging, APIs,
                                    WebSockets as streaming data.
                                </Typography>
                            }
                        >
                            <FeatureWrapper>
                                <RealTimeIcon
                                    className="icon"
                                    color="#5072EB"
                                />
                                <h4>Real-time</h4>
                            </FeatureWrapper>
                        </HTMLTooltip>
                    </ConnectorsGroup>
                    <ConnectorsGroup>
                        <Connector to="/source/netsuite-v">
                            <LogoWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="Netsuite logo"
                                    src="../../../../images/logos/netsuite.png"
                                    layout="constrained"
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
                                    src="../../../../images/logos/hubspot.png"
                                    layout="constrained"
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
                                    src="../../../../images/logos/salesforce.png"
                                    layout="constrained"
                                    loading="eager"
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>Salesforce</HiddenLogoTitle>
                        </Connector>
                        <HTMLTooltip
                            title={
                                <Typography color="inherit">
                                    Extract exactly once from files, apps, and
                                    other sources as a stream.
                                </Typography>
                            }
                        >
                            <FeatureWrapper>
                                <BatchIcon className="icon" color="#5072EB" />
                                <h4>Batch</h4>
                            </FeatureWrapper>
                        </HTMLTooltip>
                    </ConnectorsGroup>
                    <ConnectorsGroup>
                        <Connector to="/source/google-pubsub">
                            <LogoWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="Google Cloud Pub Sub logo"
                                    src="../../../../images/logos/google-cloud-pub-sub.png"
                                    layout="constrained"
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
                                    src="../../../../images/logos/aws-kinesis.png"
                                    layout="constrained"
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
                                    src="../../../../images/logos/apache-kafka.png"
                                    layout="constrained"
                                    loading="eager"
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>Apache Kafka</HiddenLogoTitle>
                        </Connector>
                        <HTMLTooltip
                            title={
                                <Typography color="inherit">
                                    Real-time and batch extraction from leading
                                    SaaS vendors with native connectors built
                                    for speed and scale.
                                </Typography>
                            }
                        >
                            <FeatureWrapper>
                                <SaasIcon className="icon" color="#5072EB" />
                                <h4>SaaS</h4>
                            </FeatureWrapper>
                        </HTMLTooltip>
                    </ConnectorsGroup>
                </ConnectorsGroupsLeftWrapper>
            ) : null}
            <ImageWrapper $slide={slide}>{children}</ImageWrapper>
            {[1, 4].includes(slide) ? (
                <ConnectorsGroupsRightWrapper>
                    <ConnectorsGroup>
                        <Connector to="/destination/snowflake">
                            <LogoWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="Snowflake logo"
                                    src="../../../../images/logos/snowflake.png"
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
                                    src="../../../../images/logos/bigquery.png"
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
                                    src="../../../../images/logos/redshift.png"
                                    layout="constrained"
                                    loading="eager"
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>Amazon Redshift</HiddenLogoTitle>
                        </Connector>
                        <HTMLTooltip
                            title={
                                <Typography color="inherit">
                                    Load data at any speed into data warehouses
                                    and lakes from real-time to hour+ intervals
                                    as in-place updates and hard deletes or
                                    append-only change data history.
                                </Typography>
                            }
                        >
                            <FeatureWrapper>
                                <AnalyticsIcon
                                    className="icon"
                                    color="#5072EB"
                                />
                                <h4>Analytics</h4>
                            </FeatureWrapper>
                        </HTMLTooltip>
                    </ConnectorsGroup>
                    <ConnectorsGroup>
                        <Connector to="/destination/elasticsearch">
                            <LogoWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="ElasticSearch logo"
                                    src="../../../../images/logos/elastic-search.png"
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
                                    src="../../../../images/logos/mongo-db.png"
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
                                    src="../../../../images/logos/dynamo-db.png"
                                    layout="constrained"
                                    loading="eager"
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>Amazon DynamoDB</HiddenLogoTitle>
                        </Connector>
                        <HTMLTooltip
                            title={
                                <Typography color="inherit">
                                    Stream in real-time to SQL or NoSQL, OLAP,
                                    time series, or ElasticSearch databases.
                                </Typography>
                            }
                        >
                            <FeatureWrapper>
                                <OpsIcon className="icon" color="#5072EB" />
                                <h4>Ops</h4>
                            </FeatureWrapper>
                        </HTMLTooltip>
                    </ConnectorsGroup>
                    <ConnectorsGroup>
                        <Connector to="/destination/pinecone">
                            <LogoWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="Pinecone logo"
                                    src="../../../../images/logos/pinecone.png"
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
                                    src="../../../../images/logos/openai.png"
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
                                    src="../../../../images/logos/databricks.png"
                                    layout="constrained"
                                    loading="eager"
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>Databricks</HiddenLogoTitle>
                        </Connector>
                        <HTMLTooltip
                            title={
                                <Typography color="inherit">
                                    Build AI pipelines that load vector
                                    databases for RAG and invoke chabots like
                                    ChatGPT or use other LLM models in
                                    real-time.
                                </Typography>
                            }
                        >
                            <FeatureWrapper>
                                <AiIcon className="icon" color="#5072EB" />
                                <h4>AI</h4>
                            </FeatureWrapper>
                        </HTMLTooltip>
                    </ConnectorsGroup>
                </ConnectorsGroupsRightWrapper>
            ) : null}
            <FadeTransition in={hoveredFlowStepBlock === 'transform'}>
                {slide === 3 ? (
                    <HoverableBlock>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Flow Step Transform"
                                src="../../../../images/product-page/section-two/desktop/slide-3-transform.png"
                                layout="constrained"
                                quality={100}
                            />
                        </FlowStepImageWrapper>
                        <TooltipTop className="tooltip" $slide={2}>
                            <FlowStepTitle>Transform</FlowStepTitle>
                            <FlowStepDescription>
                                Streams dynamically in real-time using SQL or
                                TypeScript.
                            </FlowStepDescription>
                        </TooltipTop>
                    </HoverableBlock>
                ) : (
                    <HoverableBlock>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Flow Step Elastic Streaming Compute"
                                src="../../../../images/product-page/section-two/desktop/slide-1-elastic-streaming-compute.png"
                                layout="constrained"
                            />
                        </FlowStepImageWrapper>
                        <TooltipTop className="tooltip" $slide={4}>
                            <FlowStepTitle>
                                Elastic streaming compute
                            </FlowStepTitle>
                            <FlowStepDescription>
                                Brokers, transforms, and replay built on
                                decoupled storage-compute with elastic scale,
                                distributed load balancing, and active failover.
                            </FlowStepDescription>
                        </TooltipTop>
                    </HoverableBlock>
                )}
            </FadeTransition>
            <FadeTransition in={hoveredFlowStepBlock === 'stream'}>
                {slide === 3 ? (
                    <HoverableBlock>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Flow Step Stream"
                                src="../../../../images/product-page/section-two/desktop/slide-3-stream.png"
                                layout="constrained"
                                quality={100}
                            />
                        </FlowStepImageWrapper>
                        <TooltipLeft className="tooltip">
                            <FlowStepTitle>Stream</FlowStepTitle>
                            <FlowStepDescription>
                                From many sources to many destinations in
                                real-time with exactly-once delivery.
                            </FlowStepDescription>
                        </TooltipLeft>
                    </HoverableBlock>
                ) : (
                    <HoverableBlock>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Flow Step Idempotent Streams"
                                src="../../../../images/product-page/section-two/desktop/slide-1-idempotent-streams.png"
                                layout="constrained"
                            />
                        </FlowStepImageWrapper>
                        <TooltipLeft className="tooltip">
                            <FlowStepTitle>Idempotent streams</FlowStepTitle>
                            <FlowStepDescription>
                                Exactly-once data delivery with sub-100ms
                                end-to-end latency.
                            </FlowStepDescription>
                        </TooltipLeft>
                    </HoverableBlock>
                )}
            </FadeTransition>
            <FadeTransition in={hoveredFlowStepBlock === 'replay'}>
                {slide === 3 ? (
                    <HoverableBlock>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Flow Step Replay"
                                src="../../../../images/product-page/section-two/desktop/slide-3-replay.png"
                                layout="constrained"
                                quality={100}
                            />
                        </FlowStepImageWrapper>
                        <TooltipRight className="tooltip">
                            <FlowStepTitle>Replay</FlowStepTitle>
                            <FlowStepDescription>
                                Collections for backfilling, stream processing,
                                or time travel.
                            </FlowStepDescription>
                        </TooltipRight>
                    </HoverableBlock>
                ) : (
                    <HoverableBlock>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Flow Step Elastic Streaming Compute"
                                src="../../../../images/product-page/section-two/desktop/slide-1-elastic-streaming-compute.png"
                                layout="constrained"
                            />
                        </FlowStepImageWrapper>
                        <TooltipTop className="tooltip" $slide={4}>
                            <FlowStepTitle>
                                Elastic streaming compute
                            </FlowStepTitle>
                            <FlowStepDescription>
                                Brokers, transforms, and replay built on
                                decoupled storage-compute with elastic scale,
                                distributed load balancing, and active failover.
                            </FlowStepDescription>
                        </TooltipTop>
                    </HoverableBlock>
                )}
            </FadeTransition>
            <FadeTransition in={hoveredFlowStepBlock === 'store'}>
                {slide === 3 ? (
                    <HoverableBlock>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Flow Step Store"
                                src="../../../../images/product-page/section-two/desktop/slide-3-store.png"
                                layout="constrained"
                                quality={100}
                            />
                        </FlowStepImageWrapper>
                        <TooltipBottom className="tooltip" $slide={3}>
                            <FlowStepTitle>Store</FlowStepTitle>
                            <FlowStepDescription>
                                As collections in your own private storage in
                                any region, so you only extract once.
                            </FlowStepDescription>
                        </TooltipBottom>
                    </HoverableBlock>
                ) : (
                    <HoverableBlock>
                        <FlowStepImageWrapper
                            $slide={slide}
                            style={{ marginTop: '-0.4%' }}
                        >
                            <StaticImage
                                placeholder="none"
                                alt="Flow Step Decoupled Stream Storage"
                                src="../../../../images/product-page/section-two/desktop/slide-1-storage.png"
                                layout="constrained"
                            />
                        </FlowStepImageWrapper>
                        <TooltipBottom className="tooltip" $slide={4}>
                            <FlowStepTitle>
                                Decoupled stream storage
                            </FlowStepTitle>
                            <FlowStepDescription>
                                All data stored as collections in your private
                                cloud storage.
                            </FlowStepDescription>
                        </TooltipBottom>
                    </HoverableBlock>
                )}
            </FadeTransition>
            {slide === 1 ? (
                <FadeTransition in={hoveredFlowStepBlock === 'center'}>
                    <HoverableBlock>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Managed Schema"
                                src="../../../../images/product-page/section-two/desktop/slide-1-center.png"
                                layout="constrained"
                            />
                        </FlowStepImageWrapper>
                        <TooltipCenter className="tooltip">
                            <FlowStepTitle>Managed schema</FlowStepTitle>
                            <FlowStepDescription>
                                End-to-end schema inference, evolution, and
                                automation.
                            </FlowStepDescription>
                        </TooltipCenter>
                    </HoverableBlock>
                </FadeTransition>
            ) : null}
            {[1, 3].includes(slide) ? (
                <>
                    <FlowStepTransformHoverBlock
                        onMouseEnter={() =>
                            handleHoverableFlowStepBlockMouseEnter('transform')
                        }
                        onMouseLeave={handleHoveredFlowStepBlockMouseLeave}
                        $slide={slide}
                    />
                    <FlowStepReplayHoverBlock
                        onMouseEnter={() =>
                            handleHoverableFlowStepBlockMouseEnter('replay')
                        }
                        onMouseLeave={handleHoveredFlowStepBlockMouseLeave}
                    />
                    <FlowStepStreamHoverBlock
                        onMouseEnter={() =>
                            handleHoverableFlowStepBlockMouseEnter('stream')
                        }
                        onMouseLeave={handleHoveredFlowStepBlockMouseLeave}
                    />
                    <FlowStepStoreHoverBlock
                        onMouseEnter={() =>
                            handleHoverableFlowStepBlockMouseEnter('store')
                        }
                        onMouseLeave={handleHoveredFlowStepBlockMouseLeave}
                    />
                </>
            ) : null}
            {slide === 1 ? (
                <CenterHoverBlock
                    onMouseEnter={() =>
                        handleHoverableFlowStepBlockMouseEnter('center')
                    }
                />
            ) : null}
        </Container>
    );
};

export default React.memo(Hover);
