import { Typography } from '@mui/material';
import Fade from '@mui/material/Fade';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactNode, useCallback, useState } from 'react';
import {
    AiIconComponent,
    AnalyticsIconComponent,
    BatchIconComponent,
    CenterHoverBlock,
    Connector,
    ConnectorsGroup,
    ConnectorsGroupsLeftWrapper,
    ConnectorsGroupsRightWrapper,
    Container,
    FeatureWrapper,
    FlowStepDescription,
    FlowStepImageWrapper,
    FlowStepReplayHoverBlock,
    FlowStepStoreHoverBlock,
    FlowStepStreamHoverBlock,
    FlowStepTitle,
    FlowStepTransformHoverBlock,
    HiddenLogoTitle,
    ImageWrapper,
    LogoWrapper,
    OpsIconComponent,
    RealTimeIconComponent,
    SaasIconComponent,
    SingleDataflowIconComponent,
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

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
        {...props}
        classes={{ popper: className }}
        placement="top"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 200 }}
        disableInteractive
        arrow
    />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#ffffff',
        color: '#04192B',
        maxWidth: 232,
        fontSize: theme.typography.pxToRem(16),
        border: '2px solid #5072EB',
        borderRadius: 8,
        padding: 8,
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: '#5072EB',
    },
}));

type HoverProps = {
    slide: number;
    children: ReactNode;
};

const Hover = ({ slide, children }: HoverProps) => {
    const [hoveredFlowStepBlock, setHoveredFlowStepBlock] =
        useState<HoveredFlowStepsBlock>(null);
    console.log(hoveredFlowStepBlock);
    const handleHoverableFlowStepBlockMouseEnter = useCallback(
        (block: HoveredFlowStepsBlock) => setHoveredFlowStepBlock(block),
        []
    );

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
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>Postgre SQL</HiddenLogoTitle>
                        </Connector>
                        <HtmlTooltip
                            title={
                                <Typography color="inherit">
                                    The only real-time log-based data capture
                                    with incremental snapshots as a combined
                                    real-time data stream.
                                </Typography>
                            }
                        >
                            <FeatureWrapper>
                                <SingleDataflowIconComponent color="#5072EB" />
                                <h4>Streaming CDC</h4>
                            </FeatureWrapper>
                        </HtmlTooltip>
                    </ConnectorsGroup>
                    <ConnectorsGroup>
                        <Connector to="/source/s">
                            <LogoWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="Amazon S3 logo"
                                    src="../../../../images/logos/amazon-s3.png"
                                    layout="constrained"
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
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>ABS</HiddenLogoTitle>
                        </Connector>
                        <HtmlTooltip
                            title={
                                <Typography color="inherit">
                                    Real-time support for messaging, APIs,
                                    WebSockets as streaming data.
                                </Typography>
                            }
                        >
                            <FeatureWrapper>
                                <RealTimeIconComponent color="#5072EB" />
                                <h4>Real-time</h4>
                            </FeatureWrapper>
                        </HtmlTooltip>
                    </ConnectorsGroup>
                    <ConnectorsGroup>
                        <Connector to="/source/netsuite-v">
                            <LogoWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="Netsuite logo"
                                    src="../../../../images/logos/netsuite.png"
                                    layout="constrained"
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
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>Salesforce</HiddenLogoTitle>
                        </Connector>
                        <HtmlTooltip
                            title={
                                <Typography color="inherit">
                                    Extract exactly once from files, apps, and
                                    other sources as a stream.
                                </Typography>
                            }
                        >
                            <FeatureWrapper>
                                <BatchIconComponent color="#5072EB" />
                                <h4>Batch</h4>
                            </FeatureWrapper>
                        </HtmlTooltip>
                    </ConnectorsGroup>
                    <ConnectorsGroup>
                        <Connector to="/source/google-pubsub">
                            <LogoWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="Google Cloud Pub Sub logo"
                                    src="../../../../images/logos/google-cloud-pub-sub.png"
                                    layout="constrained"
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
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>Amazon Kinesis</HiddenLogoTitle>
                        </Connector>
                        <Connector to="/source/kafka">
                            <LogoWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="AWS Kinesis logo"
                                    src="../../../../images/logos/apache-kafka.png"
                                    layout="constrained"
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>Apache Kafka</HiddenLogoTitle>
                        </Connector>
                        <HtmlTooltip
                            title={
                                <Typography color="inherit">
                                    Real-time and batch extraction from leading
                                    SaaS vendors with native connectors built
                                    for speed and scale.
                                </Typography>
                            }
                        >
                            <FeatureWrapper>
                                <SaasIconComponent color="#5072EB" />
                                <h4>SaaS</h4>
                            </FeatureWrapper>
                        </HtmlTooltip>
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
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>Amazon Redshift</HiddenLogoTitle>
                        </Connector>
                        <HtmlTooltip
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
                                <AnalyticsIconComponent color="#5072EB" />
                                <h4>Analytics</h4>
                            </FeatureWrapper>
                        </HtmlTooltip>
                    </ConnectorsGroup>
                    <ConnectorsGroup>
                        <Connector to="/destination/elasticsearch">
                            <LogoWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="ElasticSearch logo"
                                    src="../../../../images/logos/elastic-search.png"
                                    layout="constrained"
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>Elastic</HiddenLogoTitle>
                        </Connector>
                        <Connector to="/destination/timescaledb">
                            <LogoWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="Timescale DB logo"
                                    src="../../../../images/logos/timescale-db.png"
                                    layout="constrained"
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>Timescale</HiddenLogoTitle>
                        </Connector>
                        <Connector to="/destination/rockset">
                            <LogoWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="Rockset logo"
                                    src="../../../../images/logos/rockset.png"
                                    layout="constrained"
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>Rockset</HiddenLogoTitle>
                        </Connector>
                        <HtmlTooltip
                            title={
                                <Typography color="inherit">
                                    Stream in real-time to SQL or NoSQL, OLAP,
                                    time series, or ElasticSearch databases.
                                </Typography>
                            }
                        >
                            <FeatureWrapper>
                                <OpsIconComponent color="#5072EB" />
                                <h4>Ops</h4>
                            </FeatureWrapper>
                        </HtmlTooltip>
                    </ConnectorsGroup>
                    <ConnectorsGroup>
                        <Connector to="/destination/pinecone">
                            <LogoWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="Pinecone logo"
                                    src="../../../../images/logos/pinecone.png"
                                    layout="constrained"
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
                                />
                            </LogoWrapper>
                            <HiddenLogoTitle>Databricks</HiddenLogoTitle>
                        </Connector>
                        <HtmlTooltip
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
                                <AiIconComponent color="#5072EB" />
                                <h4>AI</h4>
                            </FeatureWrapper>
                        </HtmlTooltip>
                    </ConnectorsGroup>
                </ConnectorsGroupsRightWrapper>
            ) : null}
            <Fade in={hoveredFlowStepBlock === 'transform'}>
                {slide === 3 ? (
                    <div>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow Step Transform"
                                src="../../../../images/product-page/section-two/desktop/slide-3-transform.png"
                                layout="constrained"
                                quality={100}
                            />
                        </FlowStepImageWrapper>
                        <TooltipTop $slide={2}>
                            <FlowStepTitle>Transform</FlowStepTitle>
                            <FlowStepDescription>
                                Streams dynamically in real-time using SQL or
                                TypeScript.
                            </FlowStepDescription>
                        </TooltipTop>
                    </div>
                ) : (
                    <div>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow Step Elastic Streaming Compute"
                                src="../../../../images/product-page/section-two/desktop/slide-1-elastic-streaming-compute.png"
                                layout="constrained"
                            />
                        </FlowStepImageWrapper>
                        <TooltipTop $slide={4}>
                            <FlowStepTitle>
                                Elastic streaming compute
                            </FlowStepTitle>
                            <FlowStepDescription>
                                Brokers, transforms, and replay built on
                                decoupled storage-compute with elastic scale,
                                distributed load balancing, and active failover.
                            </FlowStepDescription>
                        </TooltipTop>
                    </div>
                )}
            </Fade>
            <Fade in={hoveredFlowStepBlock === 'stream'}>
                {slide === 3 ? (
                    <div>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow Step Stream"
                                src="../../../../images/product-page/section-two/desktop/slide-3-stream.png"
                                layout="constrained"
                                quality={100}
                            />
                        </FlowStepImageWrapper>
                        <TooltipLeft>
                            <FlowStepTitle>Stream</FlowStepTitle>
                            <FlowStepDescription>
                                From many sources to many destinations in
                                real-time with exactly-once delivery.
                            </FlowStepDescription>
                        </TooltipLeft>
                    </div>
                ) : (
                    <div>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow Step Idempotent Streams"
                                src="../../../../images/product-page/section-two/desktop/slide-1-idempotent-streams.png"
                                layout="constrained"
                            />
                        </FlowStepImageWrapper>
                        <TooltipLeft>
                            <FlowStepTitle>Idempotent streams</FlowStepTitle>
                            <FlowStepDescription>
                                Exactly-once data delivery with sub-100ms
                                end-to-end latency.
                            </FlowStepDescription>
                        </TooltipLeft>
                    </div>
                )}
            </Fade>
            <Fade in={hoveredFlowStepBlock === 'replay'}>
                {slide === 3 ? (
                    <div>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow Step Replay"
                                src="../../../../images/product-page/section-two/desktop/slide-3-replay.png"
                                layout="constrained"
                                quality={100}
                            />
                        </FlowStepImageWrapper>
                        <TooltipRight>
                            <FlowStepTitle>Replay</FlowStepTitle>
                            <FlowStepDescription>
                                Collections for backfilling, stream processing,
                                or time travel.
                            </FlowStepDescription>
                        </TooltipRight>
                    </div>
                ) : (
                    <div>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow Step Elastic Streaming Compute"
                                src="../../../../images/product-page/section-two/desktop/slide-1-elastic-streaming-compute.png"
                                layout="constrained"
                            />
                        </FlowStepImageWrapper>
                        <TooltipTop $slide={4}>
                            <FlowStepTitle>
                                Elastic streaming compute
                            </FlowStepTitle>
                            <FlowStepDescription>
                                Brokers, transforms, and replay built on
                                decoupled storage-compute with elastic scale,
                                distributed load balancing, and active failover.
                            </FlowStepDescription>
                        </TooltipTop>
                    </div>
                )}
            </Fade>
            <Fade in={hoveredFlowStepBlock === 'store'}>
                {slide === 3 ? (
                    <div>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow Step Store"
                                src="../../../../images/product-page/section-two/desktop/slide-3-store.png"
                                layout="constrained"
                                quality={100}
                            />
                        </FlowStepImageWrapper>
                        <TooltipBottom $slide={3}>
                            <FlowStepTitle>Store</FlowStepTitle>
                            <FlowStepDescription>
                                As collections in your own private storage in
                                any region, so you only extract once.
                            </FlowStepDescription>
                        </TooltipBottom>
                    </div>
                ) : (
                    <div>
                        <FlowStepImageWrapper
                            $slide={slide}
                            style={{ marginTop: '-0.4%' }}
                        >
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow Step Decoupled Stream Storage"
                                src="../../../../images/product-page/section-two/desktop/slide-1-storage.png"
                                layout="constrained"
                            />
                        </FlowStepImageWrapper>
                        <TooltipBottom $slide={4}>
                            <FlowStepTitle>
                                Decoupled stream storage
                            </FlowStepTitle>
                            <FlowStepDescription>
                                All data stored as collections in your private
                                cloud storage.
                            </FlowStepDescription>
                        </TooltipBottom>
                    </div>
                )}
            </Fade>
            {slide === 1 ? (
                <Fade in={hoveredFlowStepBlock === 'center'}>
                    <div>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Managed Schema"
                                src="../../../../images/product-page/section-two/desktop/slide-1-center.png"
                                layout="constrained"
                            />
                        </FlowStepImageWrapper>
                        <TooltipCenter>
                            <FlowStepTitle>Managed schema</FlowStepTitle>
                            <FlowStepDescription>
                                End-to-end schema inference, evolution, and
                                automation.
                            </FlowStepDescription>
                        </TooltipCenter>
                    </div>
                </Fade>
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
