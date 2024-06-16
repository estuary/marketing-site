import React, { ReactNode, useCallback, useState } from 'react';
import HoverContent from './HoverContent';
import {
    CenterHoverBlock,
    Container,
    FlowStepReplayHoverBlock,
    FlowStepStoreHoverBlock,
    FlowStepStreamHoverBlock,
    FlowStepTransformHoverBlock,
} from './styles';

export type FlowStep =
    | 'transform'
    | 'replay'
    | 'stream'
    | 'store'
    | 'center'
    | null;

type HoverWrapperProps = {
    slide: number;
    children: ReactNode;
};

const HoverWrapper = ({ slide, children }: HoverWrapperProps) => {
    const [hoveredFlowStep, setHoveredFlowStep] = useState<FlowStep>(null);

    const handleFlowStepMouseEnter = useCallback((flowStep: FlowStep) => {
        requestAnimationFrame(() => setHoveredFlowStep(flowStep));
    }, []);

    const handleFlowStepMouseLeave = useCallback(() => {
        requestAnimationFrame(() => setHoveredFlowStep(null));
    }, []);

    return (
        <Container>
            {children}
            <HoverContent hoveredFlowStep={hoveredFlowStep} slide={slide} />
            <FlowStepTransformHoverBlock
                onMouseEnter={() => handleFlowStepMouseEnter('transform')}
                onMouseLeave={handleFlowStepMouseLeave}
            />
            <FlowStepReplayHoverBlock
                onMouseEnter={() => handleFlowStepMouseEnter('replay')}
                onMouseLeave={handleFlowStepMouseLeave}
            />
            <FlowStepStreamHoverBlock
                onMouseEnter={() => handleFlowStepMouseEnter('stream')}
                onMouseLeave={handleFlowStepMouseLeave}
            />
            <FlowStepStoreHoverBlock
                onMouseEnter={() => handleFlowStepMouseEnter('store')}
                onMouseLeave={handleFlowStepMouseLeave}
            />
            {slide === 4 ? (
                <CenterHoverBlock
                    onMouseEnter={() => handleFlowStepMouseEnter('center')}
                />
            ) : null}
        </Container>
    );
};

export default React.memo(HoverWrapper);
