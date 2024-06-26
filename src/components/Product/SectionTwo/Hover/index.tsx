import React, { ReactNode, useCallback, useState } from 'react';
import ConnectorsGroupHover from './ConnectorsGroupHover';
import FlowStepsHoverContent from './FlowStepsHoverContent';
import {
    CenterHoverBlock,
    Container,
    FlowStepReplayHoverBlock,
    FlowStepStoreHoverBlock,
    FlowStepStreamHoverBlock,
    FlowStepTransformHoverBlock,
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
    const [hoveredConnectorsGroupBlock, setHoveredConnectorsGroupBlock] =
        useState<HoveredConnectorsGroupBlock>(null);

    const handleHoverableFlowStepBlockMouseEnter = useCallback(
        (block: HoveredFlowStepsBlock) => setHoveredFlowStepBlock(block),
        []
    );

    const handleHoverableConnectorsGroupBlockMouseEnter = useCallback(
        (block: HoveredConnectorsGroupBlock) =>
            setHoveredConnectorsGroupBlock(block),
        []
    );

    const handleHoveredFlowStepBlockMouseLeave = useCallback(
        () => setHoveredFlowStepBlock(null),
        []
    );

    const handleHoveredConnectorsGroupBlockMouseLeave = useCallback(
        () => setHoveredConnectorsGroupBlock(null),
        []
    );

    return (
        <Container>
            {children}
            <FlowStepsHoverContent
                hoveredBlock={hoveredFlowStepBlock}
                slide={slide}
            />
            {[2, 4].includes(slide) ? (
                <>
                    <FlowStepTransformHoverBlock
                        onMouseEnter={() =>
                            handleHoverableFlowStepBlockMouseEnter('transform')
                        }
                        onMouseLeave={handleHoveredFlowStepBlockMouseLeave}
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
            {slide === 4 ? (
                <CenterHoverBlock
                    onMouseEnter={() =>
                        handleHoverableFlowStepBlockMouseEnter('center')
                    }
                />
            ) : null}
            <ConnectorsGroupHover
                slide={slide}
                onMouseEnter={handleHoverableConnectorsGroupBlockMouseEnter}
                onMouseLeave={handleHoveredConnectorsGroupBlockMouseLeave}
                hoveredBlock={hoveredConnectorsGroupBlock}
            />
        </Container>
    );
};

export default Hover;
