import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { HoveredConnectorsGroupBlock } from '..';
import {
    AiConnectorsHoverBlock,
    AnalyticsConnectorsHoverBlock,
    BatchConnectorsHoverBlock,
    ConnectorsGroupImageWrapper,
    OpsConnectorsHoverBlock,
    RealTimeConnectorsHoverBlock,
    SaasConnectorsHoverBlock,
    StreamingCDCConnectorsHoverBlock,
} from './styles';

interface ConnectorsGroupHoverProps {
    hoveredBlock: HoveredConnectorsGroupBlock;
    slide: number;
    onMouseEnter: (block: HoveredConnectorsGroupBlock) => void;
    onMouseLeave: () => void;
}

const ConnectorsGroupHover = ({
    hoveredBlock,
    slide,
    onMouseEnter,
    onMouseLeave,
}: ConnectorsGroupHoverProps) => {
    return (
        <>
            {[1, 4].includes(slide) ? (
                <StreamingCDCConnectorsHoverBlock
                    onMouseEnter={() => onMouseEnter('streamingCDCConnectors')}
                    onMouseLeave={onMouseLeave}
                >
                    {hoveredBlock === 'streamingCDCConnectors' ? (
                        <ConnectorsGroupImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Streaming CDC source connectors"
                                src="../../../../../../images/product-page/section-two/streaming-cdc-connectors-group.png"
                                layout="constrained"
                            />
                        </ConnectorsGroupImageWrapper>
                    ) : null}
                </StreamingCDCConnectorsHoverBlock>
            ) : null}
            {[1, 4].includes(slide) ? (
                <RealTimeConnectorsHoverBlock
                    onMouseEnter={() => onMouseEnter('realTimeConnectors')}
                    onMouseLeave={onMouseLeave}
                >
                    {hoveredBlock === 'realTimeConnectors' ? (
                        <ConnectorsGroupImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Real-time source connectors"
                                src="../../../../../../images/product-page/section-two/real-time-connectors-group.png"
                                layout="constrained"
                            />
                        </ConnectorsGroupImageWrapper>
                    ) : null}
                </RealTimeConnectorsHoverBlock>
            ) : null}
            {[1, 4].includes(slide) ? (
                <BatchConnectorsHoverBlock
                    onMouseEnter={() => onMouseEnter('batchConnectors')}
                    onMouseLeave={onMouseLeave}
                >
                    {hoveredBlock === 'batchConnectors' ? (
                        <ConnectorsGroupImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Batch source connectors"
                                src="../../../../../../images/product-page/section-two/batch-connectors-group.png"
                                layout="constrained"
                            />
                        </ConnectorsGroupImageWrapper>
                    ) : null}
                </BatchConnectorsHoverBlock>
            ) : null}
            {[1, 4].includes(slide) ? (
                <SaasConnectorsHoverBlock
                    onMouseEnter={() => onMouseEnter('saasConnectors')}
                    onMouseLeave={onMouseLeave}
                >
                    {hoveredBlock === 'saasConnectors' ? (
                        <ConnectorsGroupImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="SaaS source connectors"
                                src="../../../../../../images/product-page/section-two/saas-connectors-group.png"
                                layout="constrained"
                            />
                        </ConnectorsGroupImageWrapper>
                    ) : null}
                </SaasConnectorsHoverBlock>
            ) : null}
            {[3, 4].includes(slide) ? (
                <AnalyticsConnectorsHoverBlock
                    onMouseEnter={() => onMouseEnter('analyticsConnectors')}
                    onMouseLeave={onMouseLeave}
                >
                    {hoveredBlock === 'analyticsConnectors' ? (
                        <ConnectorsGroupImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Analytics destination connectors"
                                src="../../../../../../images/product-page/section-two/analytics-connectors-group.png"
                                layout="constrained"
                            />
                        </ConnectorsGroupImageWrapper>
                    ) : null}
                </AnalyticsConnectorsHoverBlock>
            ) : null}
            {[3, 4].includes(slide) ? (
                <OpsConnectorsHoverBlock
                    onMouseEnter={() => onMouseEnter('opsConnectors')}
                    onMouseLeave={onMouseLeave}
                >
                    {hoveredBlock === 'opsConnectors' ? (
                        <ConnectorsGroupImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Ops destination connectors"
                                src="../../../../../../images/product-page/section-two/ops-connectors-group.png"
                                layout="constrained"
                            />
                        </ConnectorsGroupImageWrapper>
                    ) : null}
                </OpsConnectorsHoverBlock>
            ) : null}
            {[3, 4].includes(slide) ? (
                <AiConnectorsHoverBlock
                    onMouseEnter={() => onMouseEnter('aiConnectors')}
                    onMouseLeave={onMouseLeave}
                >
                    {hoveredBlock === 'aiConnectors' ? (
                        <ConnectorsGroupImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="AI destination connectors"
                                src="../../../../../../images/product-page/section-two/ai-connectors-group.png"
                                layout="constrained"
                            />
                        </ConnectorsGroupImageWrapper>
                    ) : null}
                </AiConnectorsHoverBlock>
            ) : null}
        </>
    );
};

export default React.memo(ConnectorsGroupHover);
