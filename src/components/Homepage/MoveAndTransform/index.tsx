import { StaticImage } from 'gatsby-plugin-image';
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
                    <span>Move and transform data across 200+ systems</span>
                </h2>
                <p>
                    Integrate with millisecond latency for an exact view of your data to power analytics and operations.
                </p>
            </div>
            <div className={steps}>
                <div className={step}>
                    {/* <div className={StepIconWrapper}> */}
                        {/* <CaptureIcon /> */}
                    {/* </div> */}
                    <div>
                        <h3>
                            <span>01</span>Ingest
                        </h3>
                        <p>
                            200+ no-code connectors. Real-time or batch.
                        </p>
                    </div>
                </div>

                <div className={step}>
                    {/* <div className={StepIconWrapper}>
                        <StoreAndTransformIcon />
                    </div> */}
                    <div>
                        <h3>
                            <span>02</span>Transform
                        </h3>
                        <p>
                            Transform and store data in storage owned by you.
                        </p>
                    </div>
                </div>

                <div className={step}>
                    {/* <div className={StepIconWrapper}>
                        <RealTimeDelivery />
                    </div> */}
                    <div>
                        <h3>
                            <span>03</span>Load
                        </h3>
                        <p>
                            Materialize data to your destination at any cadence.
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
