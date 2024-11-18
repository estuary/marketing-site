import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import DiagramSourceConnectors from '../../DiagramConnectors/DiagramSourceConnectors';
import DiagramDestinationConnectors from '../../DiagramConnectors/DiagramDestinationConnectors';
import FlowCycle from '../../../svgs/flow-cycle.svg';
import CaptureIcon from '../../../svgs/capture.svg';
import RealTimeDelivery from '../../../svgs/real-time-delivery.svg';
import StoreAndTransformIcon from '../../../svgs/store-and-transform.svg';
import {
    container,
    desktopDiagramWrapper,
    header,
    step,
    StepIconWrapper,
    steps,
    mobileImage,
    connectorsGroups,
    flowCycleMiddleImage,
} from './styles.module.less';

const MoveAndTransform = () => {
    return (
        <section className={container}>
            <div className={header}>
                <h2>
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
                </h2>
                <p>
                    Capture, transform, and materialize with millisecond latency
                    using ETL and ELT data integration, for an exact view of
                    your data that powers analytics and operations.
                </p>
            </div>
            <div className={steps}>
                <div className={step}>
                    <div className={StepIconWrapper}>
                        <CaptureIcon />
                    </div>
                    <div>
                        <h3>
                            <span>01</span>Capture
                        </h3>
                        <p>
                            Use 100s of no-code connectors for streaming CDC,
                            real-time, or batch.
                        </p>
                    </div>
                </div>

                <div className={step}>
                    <div className={StepIconWrapper}>
                        <StoreAndTransformIcon />
                    </div>
                    <div>
                        <h3>
                            <span>02</span>Stream-store-replay
                        </h3>
                        <p>
                            Stream and store in your own storage, then replay
                            any time.
                        </p>
                    </div>
                </div>

                <div className={step}>
                    <div className={StepIconWrapper}>
                        <RealTimeDelivery />
                    </div>
                    <div>
                        <h3>
                            <span>03</span>Materialize
                        </h3>
                        <p>
                            Load data at different speeds into many destinations
                            for analytics, ops, and AI.
                        </p>
                    </div>
                </div>
            </div>
            <div className={desktopDiagramWrapper}>
                <DiagramSourceConnectors
                    connectorsGroupsClassName={connectorsGroups}
                />
                <FlowCycle
                    width="100%"
                    height="100%"
                    className={flowCycleMiddleImage}
                />
                <DiagramDestinationConnectors
                    connectorsGroupsClassName={connectorsGroups}
                />
            </div>
            <StaticImage
                placeholder="none"
                alt="Estuary Flow streamlines complex data workflows by integrating diverse data sources and destinations"
                src="../../../images/flow-mobile.png"
                quality={100}
                className={mobileImage}
            />
        </section>
    );
};

export default MoveAndTransform;
