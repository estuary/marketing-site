import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import Carousel from '../../../../components/Carousel';
import { DefaultWrapper } from '../../../../styles/wrappers';
import HoverContent from './HoverContent';
import {
    Container,
    FlowStepReplayHoverBlock,
    FlowStepStoreHoverBlock,
    FlowStepStreamHoverBlock,
    FlowStepTransformHoverBlock,
    Slide,
    SlideDescription,
    SlideImageWrapper,
    SlideImageWrapperRelative,
    SlideTitle,
    Subtitle,
    TextWrapper,
    Title,
} from './styles';

type FlowStep = 'transform' | 'replay' | 'stream' | 'store' | null;

const DataIntoStream = () => {
    const [hoveredFlowStep, setHoveredFlowStep] = useState<FlowStep>(null);

    const handleMouseEnter = (flowStep: FlowStep) =>
        setHoveredFlowStep(flowStep);

    const handleFlowStepsMouseLeave = () => setHoveredFlowStep(null);

    return (
        <DefaultWrapper>
            <Container>
                <TextWrapper>
                    <Title>HOW IT WORKS</Title>
                    <Subtitle>
                        Estuary Flow is built from the ground up - the first
                        truly decoupled storage-compute data streaming with data
                        pipeline services and stream-native connectors - to keep
                        real-time data in sync across databases, data
                        warehouses, SaaS apps, and more.
                    </Subtitle>
                </TextWrapper>
                <Carousel
                    hasArrow
                    aria-label="How Estuary Flow works carousel"
                    arrowColor="#47506D"
                >
                    <Slide>
                        <SlideImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Capture"
                                src="../../../../images/product-page/section-two/frame-1.png"
                                layout="constrained"
                                loading="eager"
                            />
                        </SlideImageWrapper>
                        <SlideTitle>Capture</SlideTitle>
                        <SlideDescription>
                            Capture change data in real-time from databases
                            using streaming CDC, real-time messaging, APIs, SaaS
                            apps and more.
                        </SlideDescription>
                    </Slide>
                    <Slide>
                        <SlideImageWrapperRelative>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Stream, Store, Transform, Replay"
                                src="../../../../images/product-page/section-two/frame-2.png"
                                layout="constrained"
                            />
                            <HoverContent hoveredFlowStep={hoveredFlowStep} />
                            <FlowStepTransformHoverBlock
                                onMouseEnter={() =>
                                    handleMouseEnter('transform')
                                }
                                onMouseLeave={handleFlowStepsMouseLeave}
                            />
                            <FlowStepReplayHoverBlock
                                onMouseEnter={() => handleMouseEnter('replay')}
                                onMouseLeave={handleFlowStepsMouseLeave}
                            />
                            <FlowStepStreamHoverBlock
                                onMouseEnter={() => handleMouseEnter('stream')}
                                onMouseLeave={handleFlowStepsMouseLeave}
                            />
                            <FlowStepStoreHoverBlock
                                onMouseEnter={() => handleMouseEnter('store')}
                                onMouseLeave={handleFlowStepsMouseLeave}
                            />
                        </SlideImageWrapperRelative>
                        <SlideTitle>
                            Stream, Store, Transform, Replay
                        </SlideTitle>
                        <SlideDescription>
                            Stream data exactly with sub-100ms latency to all
                            destinations, transform it as needed. Store data
                            reliably as it streams using collections, durable
                            transaction logs of unlimited size, and replay
                            collections to backfill data or time travel.
                        </SlideDescription>
                    </Slide>
                    <Slide>
                        <SlideImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Materialize"
                                src="../../../../images/product-page/section-two/frame-3.png"
                                layout="constrained"
                            />
                        </SlideImageWrapper>
                        <SlideTitle>Materialize</SlideTitle>
                        <SlideDescription>
                            Write data at any speed, from real-time streaming to
                            hour +intervals, into side-by-side destinations to
                            support analytics, operations, and AI. Update data
                            in place or add all change data as needed.
                        </SlideDescription>
                    </Slide>
                    <Slide>
                        <SlideImageWrapperRelative>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Materialize"
                                src="../../../../images/product-page/section-two/frame-4.png"
                                layout="constrained"
                            />
                        </SlideImageWrapperRelative>
                        <SlideTitle>Flow</SlideTitle>
                        <SlideDescription>
                            Let Estuary do the rest - deliver data end-to-end
                            exactly once as data;, manage schema inference,
                            evolution, and automation;, scale elastically with
                            fully decoupled streaming storage-compute, - and
                            manage the data pipeline for you.
                        </SlideDescription>
                    </Slide>
                </Carousel>
            </Container>
        </DefaultWrapper>
    );
};

export default DataIntoStream;
