import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import DiagramSourceConnectors from '../../DiagramConnectors/DiagramSourceConnectors';
import DiagramDestinationConnectors from '../../DiagramConnectors/DiagramDestinationConnectors';
import FlowCycle from '../../../svgs/flow-cycle.svg';
import {
    Container,
    DesktopDiagramWrapper,
    Header,
    Step,
    StepDescription,
    StepIcon,
    StepOneIcon,
    StepThreeIcon,
    StepTitle,
    StepTwoIcon,
    Steps,
    Subtitle,
    Title,
} from './styles';

const MoveAndTransform = () => {
    return (
        <Container>
            <Header>
                <Title>
                    <span>Move </span>
                    <span>and </span>
                    <span>transform </span>
                    <span>
                        data in real-time with the only platform built for{' '}
                    </span>
                    <span>ops</span>
                    <span>, </span>
                    <span>analytics</span>
                    <span>, and </span>
                    <span>AI</span>
                </Title>
                <Subtitle>
                    Capture, transform, and materialize with millisecond latency
                    using ETL and ELT data integration, for an exact view of
                    your data that powers analytics and operations.
                </Subtitle>
            </Header>
            <Steps>
                <Step>
                    <StepIcon>
                        <StepOneIcon />
                    </StepIcon>
                    <div>
                        <StepTitle>
                            <span>01</span>Capture
                        </StepTitle>
                        <StepDescription>
                            Use 100s of no-code connectors for streaming CDC,
                            real-time, or batch.
                        </StepDescription>
                    </div>
                </Step>

                <Step>
                    <StepIcon>
                        <StepTwoIcon />
                    </StepIcon>
                    <div>
                        <StepTitle>
                            <span>02</span>Stream-store-replay
                        </StepTitle>
                        <StepDescription>
                            Stream and store in your own storage, then replay
                            any time.
                        </StepDescription>
                    </div>
                </Step>

                <Step>
                    <StepIcon>
                        <StepThreeIcon />
                    </StepIcon>
                    <div>
                        <StepTitle>
                            <span>03</span>Materialize
                        </StepTitle>
                        <StepDescription>
                            Load data at different speeds into many destinations
                            for analytics, ops, and AI.
                        </StepDescription>
                    </div>
                </Step>
            </Steps>
            <DesktopDiagramWrapper className="desktop-image">
                <DiagramSourceConnectors />
                <FlowCycle
                    width="100%"
                    height="100%"
                    className="flow-cycle-middle-image"
                />
                <DiagramDestinationConnectors />
            </DesktopDiagramWrapper>
            <StaticImage
                placeholder="none"
                alt="Estuary Flow streamlines complex data workflows by integrating diverse data sources and destinations"
                src="../../../images/flow-mobile.png"
                quality={100}
                className="mobile-image"
            />
        </Container>
    );
};

export default MoveAndTransform;
