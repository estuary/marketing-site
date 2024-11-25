import React, { ReactNode, useCallback, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Fade from '@mui/material/Fade';
import clsx from 'clsx';
import DiagramSourceConnectors from '../../../DiagramConnectors/DiagramSourceConnectors';
import DiagramDestinationConnectors from '../../../DiagramConnectors/DiagramDestinationConnectors';
import {
    slideStyle,
    slide1Style,
    slide2Style,
    slide3Style,
    slide4Style,
    flowStepTransformHoverBlock,
    flowStepReplayHoverBlock,
    flowStepStreamHoverBlock,
    flowStepStoreHoverBlock,
    centerHoverBlock,
    imageWrapper,
    imageWrapperSlide1,
    imageWrapperSlide3,
    connectorsGroups,
    flowStepImageWrapper,
    flowStepImageWrapperSlide3,
    hoverableBlock,
    tooltip,
    tooltipTop,
    tooltipLeft,
    tooltipRight,
    tooltipBottom,
    tooltipBottomSlide3,
    tooltipCenter,
    fadeTransitionWrapper,
    slideOneStorageImageWrapper,
} from './styles.module.less';

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
        <div
            className={clsx(
                slideStyle,
                [slide1Style, slide2Style, slide3Style, slide4Style][slide - 1]
            )}
        >
            {[1, 2].includes(slide) ? (
                <DiagramSourceConnectors
                    hasTooltips
                    connectorsGroupsClassName={connectorsGroups}
                />
            ) : null}
            <div
                className={clsx(
                    imageWrapper,
                    slide === 1 ? imageWrapperSlide1 : null,
                    slide === 3 ? imageWrapperSlide3 : null
                )}
            >
                {children}
            </div>
            {[1, 4].includes(slide) ? (
                <DiagramDestinationConnectors
                    hasTooltips
                    connectorsGroupsClassName={connectorsGroups}
                />
            ) : null}
            <div className={fadeTransitionWrapper}>
                <Fade in={hoveredFlowStepBlock === 'transform'}>
                    {slide === 3 ? (
                        <div className={hoverableBlock}>
                            <div
                                className={clsx(
                                    flowStepImageWrapper,
                                    flowStepImageWrapperSlide3
                                )}
                            >
                                <StaticImage
                                    placeholder="none"
                                    alt="Flow Step Transform"
                                    src="../../../../images/product-page/section-two/desktop/slide-3-transform.png"
                                    quality={100}
                                />
                            </div>
                            <div className={clsx(tooltip, tooltipTop)}>
                                <h4>Transform</h4>
                                <p>
                                    Streams dynamically in real-time using SQL
                                    or TypeScript.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className={hoverableBlock}>
                            <div className={flowStepImageWrapper}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Flow Step Elastic Streaming Compute"
                                    src="../../../../images/product-page/section-two/desktop/slide-1-elastic-streaming-compute.png"
                                />
                            </div>
                            <div className={clsx(tooltip, tooltipTop)}>
                                <h4>Elastic streaming compute</h4>
                                <p>
                                    Brokers, transforms, and replay built on
                                    decoupled storage-compute with elastic
                                    scale, distributed load balancing, and
                                    active failover.
                                </p>
                            </div>
                        </div>
                    )}
                </Fade>
                <Fade in={hoveredFlowStepBlock === 'stream'}>
                    {slide === 3 ? (
                        <div className={hoverableBlock}>
                            <div
                                className={clsx(
                                    flowStepImageWrapper,
                                    flowStepImageWrapperSlide3
                                )}
                            >
                                <StaticImage
                                    placeholder="none"
                                    alt="Flow Step Stream"
                                    src="../../../../images/product-page/section-two/desktop/slide-3-stream.png"
                                    quality={100}
                                />
                            </div>
                            <div className={clsx(tooltip, tooltipLeft)}>
                                <h4>Stream</h4>
                                <p>
                                    From many sources to many destinations in
                                    real-time with exactly-once delivery.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className={hoverableBlock}>
                            <div className={flowStepImageWrapper}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Flow Step Idempotent Streams"
                                    src="../../../../images/product-page/section-two/desktop/slide-1-idempotent-streams.png"
                                />
                            </div>
                            <div className={clsx(tooltip, tooltipLeft)}>
                                <h4>Idempotent streams</h4>
                                <p>
                                    Exactly-once data delivery with sub-100ms
                                    end-to-end latency.
                                </p>
                            </div>
                        </div>
                    )}
                </Fade>
                <Fade in={hoveredFlowStepBlock === 'replay'}>
                    {slide === 3 ? (
                        <div className={hoverableBlock}>
                            <div
                                className={clsx(
                                    flowStepImageWrapper,
                                    flowStepImageWrapperSlide3
                                )}
                            >
                                <StaticImage
                                    placeholder="none"
                                    alt="Flow Step Replay"
                                    src="../../../../images/product-page/section-two/desktop/slide-3-replay.png"
                                    quality={100}
                                />
                            </div>
                            <div className={clsx(tooltip, tooltipRight)}>
                                <h4>Replay</h4>
                                <p>
                                    Collections for backfilling, stream
                                    processing, or time travel.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className={hoverableBlock}>
                            <div className={flowStepImageWrapper}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Flow Step Elastic Streaming Compute"
                                    src="../../../../images/product-page/section-two/desktop/slide-1-elastic-streaming-compute.png"
                                />
                            </div>
                            <div className={clsx(tooltip, tooltipTop)}>
                                <h4>Elastic streaming compute</h4>
                                <p>
                                    Brokers, transforms, and replay built on
                                    decoupled storage-compute with elastic
                                    scale, distributed load balancing, and
                                    active failover.
                                </p>
                            </div>
                        </div>
                    )}
                </Fade>
                <Fade in={hoveredFlowStepBlock === 'store'}>
                    {slide === 3 ? (
                        <div className={hoverableBlock}>
                            <div
                                className={clsx(
                                    flowStepImageWrapper,
                                    flowStepImageWrapperSlide3
                                )}
                            >
                                <StaticImage
                                    placeholder="none"
                                    alt="Flow Step Store"
                                    src="../../../../images/product-page/section-two/desktop/slide-3-store.png"
                                    quality={100}
                                />
                            </div>
                            <div
                                className={clsx(
                                    tooltip,
                                    tooltipBottom,
                                    tooltipBottomSlide3
                                )}
                            >
                                <h4>Store</h4>
                                <p>
                                    As collections in your own private storage
                                    in any region, so you only extract once.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className={hoverableBlock}>
                            <div
                                className={clsx(
                                    flowStepImageWrapper,
                                    slideOneStorageImageWrapper
                                )}
                            >
                                <StaticImage
                                    placeholder="none"
                                    alt="Flow Step Decoupled Stream Storage"
                                    src="../../../../images/product-page/section-two/desktop/slide-1-storage.png"
                                />
                            </div>
                            <div className={clsx(tooltip, tooltipBottom)}>
                                <h4>Decoupled stream storage</h4>
                                <p>
                                    All data stored as collections in your
                                    private cloud storage.
                                </p>
                            </div>
                        </div>
                    )}
                </Fade>
                {slide === 1 ? (
                    <Fade in={hoveredFlowStepBlock === 'center'}>
                        <div className={hoverableBlock}>
                            <div className={flowStepImageWrapper}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Managed Schema"
                                    src="../../../../images/product-page/section-two/desktop/slide-1-center.png"
                                />
                            </div>
                            <div className={clsx(tooltip, tooltipCenter)}>
                                <h4>Managed schema</h4>
                                <p>
                                    End-to-end schema inference, evolution, and
                                    automation.
                                </p>
                            </div>
                        </div>
                    </Fade>
                ) : null}
            </div>
            {[1, 3].includes(slide) ? (
                <>
                    <div
                        onMouseEnter={() =>
                            handleHoverableFlowStepBlockMouseEnter('transform')
                        }
                        onMouseLeave={handleHoveredFlowStepBlockMouseLeave}
                        className={flowStepTransformHoverBlock}
                    />
                    <div
                        onMouseEnter={() =>
                            handleHoverableFlowStepBlockMouseEnter('replay')
                        }
                        onMouseLeave={handleHoveredFlowStepBlockMouseLeave}
                        className={flowStepReplayHoverBlock}
                    />
                    <div
                        onMouseEnter={() =>
                            handleHoverableFlowStepBlockMouseEnter('stream')
                        }
                        onMouseLeave={handleHoveredFlowStepBlockMouseLeave}
                        className={flowStepStreamHoverBlock}
                    />
                    <div
                        onMouseEnter={() =>
                            handleHoverableFlowStepBlockMouseEnter('store')
                        }
                        onMouseLeave={handleHoveredFlowStepBlockMouseLeave}
                        className={flowStepStoreHoverBlock}
                    />
                </>
            ) : null}
            {slide === 1 ? (
                <div
                    onMouseEnter={() =>
                        handleHoverableFlowStepBlockMouseEnter('center')
                    }
                    className={centerHoverBlock}
                />
            ) : null}
        </div>
    );
};

export default React.memo(Hover);
