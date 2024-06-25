import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { HoveredFlowStepsBlock } from '..';
import {
    FlowStepDescription,
    FlowStepImageWrapper,
    FlowStepTitle,
    TooltipBottom,
    TooltipCenter,
    TooltipLeft,
    TooltipRight,
    TooltipTop,
} from './styles';

interface FlowStepsHoverContentProps {
    hoveredBlock: HoveredFlowStepsBlock;
    slide: number;
}

const FlowStepsHoverContent = ({
    hoveredBlock,
    slide,
}: FlowStepsHoverContentProps) => {
    if (!hoveredBlock) return null;

    return (
        <>
            {hoveredBlock === 'transform' ? (
                slide === 2 ? (
                    <>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow Step Transform"
                                src="../../../../../../images/product-page/section-two/desktop/slide-2-transform.png"
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
                    </>
                ) : (
                    <>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow Step Elastic Streaming Compute"
                                src="../../../../../../images/product-page/section-two/desktop/slide-4-elastic-streaming-compute.png"
                                layout="constrained"
                            />
                        </FlowStepImageWrapper>
                        <TooltipTop $slide={4}>
                            <FlowStepTitle>
                                Elastic streaming compute
                            </FlowStepTitle>
                            <FlowStepDescription>
                                Brokers, transforms, and replay with elastic
                                scale, distributed load balancing, and active
                                failover.
                            </FlowStepDescription>
                        </TooltipTop>
                    </>
                )
            ) : null}
            {hoveredBlock === 'stream' ? (
                slide === 2 ? (
                    <>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow Step Stream"
                                src="../../../../../../images/product-page/section-two/desktop/slide-2-stream.png"
                                layout="constrained"
                                quality={100}
                            />
                        </FlowStepImageWrapper>
                        <TooltipLeft $slide={2}>
                            <FlowStepTitle>Stream</FlowStepTitle>
                            <FlowStepDescription>
                                From many sources to many destinations in
                                real-time with exactly-once delivery.
                            </FlowStepDescription>
                        </TooltipLeft>
                    </>
                ) : (
                    <>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow Step Idempotent Streams"
                                src="../../../../../../images/product-page/section-two/desktop/slide-4-idempotent-streams.png"
                                layout="constrained"
                            />
                        </FlowStepImageWrapper>
                        <TooltipLeft $slide={4}>
                            <FlowStepTitle>Idempotent streams</FlowStepTitle>
                            <FlowStepDescription>
                                Exactly-once data delivery with sub-100ms
                                end-to-end latency.
                            </FlowStepDescription>
                        </TooltipLeft>
                    </>
                )
            ) : null}
            {hoveredBlock === 'replay' ? (
                slide === 2 ? (
                    <>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow Step Replay"
                                src="../../../../../../images/product-page/section-two/desktop/slide-2-replay.png"
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
                    </>
                ) : (
                    <>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow Step Elastic Streaming Compute"
                                src="../../../../../../images/product-page/section-two/desktop/slide-4-elastic-streaming-compute.png"
                                layout="constrained"
                            />
                        </FlowStepImageWrapper>
                        <TooltipTop $slide={4}>
                            <FlowStepTitle>
                                Elastic streaming compute
                            </FlowStepTitle>
                            <FlowStepDescription>
                                Brokers, transforms, and replay with elastic
                                scale, distributed load balancing, and active
                                failover.
                            </FlowStepDescription>
                        </TooltipTop>
                    </>
                )
            ) : null}
            {hoveredBlock === 'store' ? (
                slide === 2 ? (
                    <>
                        <FlowStepImageWrapper $slide={slide}>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow Step Store"
                                src="../../../../../../images/product-page/section-two/desktop/slide-2-store.png"
                                layout="constrained"
                                quality={100}
                            />
                        </FlowStepImageWrapper>
                        <TooltipBottom>
                            <FlowStepTitle>Store</FlowStepTitle>
                            <FlowStepDescription>
                                As collections in your own private storage in
                                any region, so you only extract once.
                            </FlowStepDescription>
                        </TooltipBottom>
                    </>
                ) : (
                    <FlowStepImageWrapper $slide={slide}>
                        <StaticImage
                            placeholder="none"
                            alt="Graphic - Flow Step Decoupled Stream Storage"
                            src="../../../../../../images/product-page/section-two/desktop/slide-4-storage.png"
                            layout="constrained"
                        />
                    </FlowStepImageWrapper>
                )
            ) : null}
            {hoveredBlock === 'center' && slide === 4 ? (
                <>
                    <FlowStepImageWrapper $slide={slide}>
                        <StaticImage
                            placeholder="none"
                            alt="Graphic - Managed Schema"
                            src="../../../../../../images/product-page/section-two/desktop/slide-4-center.png"
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
                </>
            ) : null}
        </>
    );
};

export default React.memo(FlowStepsHoverContent);
