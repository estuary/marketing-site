import React, { ReactNode, useCallback, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import DiagramSourceConnectors from '../../../DiagramConnectors/DiagramSourceConnectors';
import DiagramDestinationConnectors from '../../../DiagramConnectors/DiagramDestinationConnectors';
import {
    CenterHoverBlock,
    Container,
    FadeTransition,
    FlowStepDescription,
    FlowStepImageWrapper,
    FlowStepReplayHoverBlock,
    FlowStepStoreHoverBlock,
    FlowStepStreamHoverBlock,
    FlowStepTitle,
    FlowStepTransformHoverBlock,
    HoverableBlock,
    ImageWrapper,
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
                <DiagramSourceConnectors hasTooltips />
            ) : null}
            <ImageWrapper $slide={slide}>{children}</ImageWrapper>
            {[1, 4].includes(slide) ? (
                <DiagramDestinationConnectors hasTooltips />
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
                            style={{ marginTop: '-0.5%' }}
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
