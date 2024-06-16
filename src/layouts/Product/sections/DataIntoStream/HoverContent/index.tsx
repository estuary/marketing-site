import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import {
    FlowStepDescription,
    FlowStepImageWrapper,
    FlowStepReplayTextWrapper,
    FlowStepStoreTextWrapper,
    FlowStepStreamTextWrapper,
    FlowStepTitle,
    FlowStepTransformTextWrapper,
} from './styles';

type Hover = 'transform' | 'replay' | 'stream' | 'store' | null;

const hoveredFlowStepsContent = {
    transform: {
        title: 'Transform',
        description:
            'Streams dynamically in real-time using SQL or TypeScript.',
    },
    replay: {
        title: 'Replay',
        description:
            'Collections for backfilling, stream processing, or time travel.',
    },
    stream: {
        title: 'Stream',
        description:
            'From many sources to many destinations in real-time with exactly-once delivery.',
    },
    store: {
        title: 'Store',
        description:
            'As collections in your own private storage in any region, so you only extract once.',
    },
};

interface HoverContentProps {
    hoveredFlowStep: Hover;
}

const HoverContent = ({ hoveredFlowStep }: HoverContentProps) => {
    if (!hoveredFlowStep) return null;

    const { title, description } = hoveredFlowStepsContent[hoveredFlowStep];

    return (
        <>
            {hoveredFlowStep === 'transform' ? (
                <>
                    <FlowStepImageWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Graphic - Flow Step Transform"
                            src="../../../../../images/product-page/section-two/frame-2-transform.png"
                            layout="constrained"
                        />
                    </FlowStepImageWrapper>
                    <FlowStepTransformTextWrapper>
                        <FlowStepTitle>{title}</FlowStepTitle>
                        <FlowStepDescription>{description}</FlowStepDescription>
                    </FlowStepTransformTextWrapper>
                </>
            ) : null}
            {hoveredFlowStep === 'stream' ? (
                <>
                    <FlowStepImageWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Graphic - Flow Step Stream"
                            src="../../../../../images/product-page/section-two/frame-2-stream.png"
                            layout="constrained"
                        />
                    </FlowStepImageWrapper>
                    <FlowStepStreamTextWrapper>
                        <FlowStepTitle>{title}</FlowStepTitle>
                        <FlowStepDescription>{description}</FlowStepDescription>
                    </FlowStepStreamTextWrapper>
                </>
            ) : null}
            {hoveredFlowStep === 'replay' ? (
                <>
                    <FlowStepImageWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Graphic - Flow Step Replay"
                            src="../../../../../images/product-page/section-two/frame-2-replay.png"
                            layout="constrained"
                        />
                    </FlowStepImageWrapper>
                    <FlowStepReplayTextWrapper>
                        <FlowStepTitle>{title}</FlowStepTitle>
                        <FlowStepDescription>{description}</FlowStepDescription>
                    </FlowStepReplayTextWrapper>
                </>
            ) : null}
            {hoveredFlowStep === 'store' ? (
                <>
                    <FlowStepImageWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Graphic - Flow Step Store"
                            src="../../../../../images/product-page/section-two/frame-2-store.png"
                            layout="constrained"
                        />
                    </FlowStepImageWrapper>
                    <FlowStepStoreTextWrapper>
                        <FlowStepTitle>{title}</FlowStepTitle>
                        <FlowStepDescription>{description}</FlowStepDescription>
                    </FlowStepStoreTextWrapper>
                </>
            ) : null}
        </>
    );
};

export default HoverContent;
