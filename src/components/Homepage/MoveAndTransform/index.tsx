import { StaticImage } from 'gatsby-plugin-image';
import RealTimeIcon from '../../../svgs/homepage/real-time.svg';
import BatchIcon from '../../../svgs/homepage/batch.svg';
import SaasIcon from '../../../svgs/homepage/saas.svg';
import AnalyticsIcon from '../../../svgs/homepage/analytics.svg';
import OpsIcon from '../../../svgs/homepage/ops.svg';
import AiIcon from '../../../svgs/homepage/ai.svg';
import StoreIcon from '../../../svgs/homepage/store.svg';
import TransformIcon from '../../../svgs/homepage/transform.svg';
import {
    container,
    header,
    step,
    steps,
    mobileImage,
    diagram,
    card,
} from './styles.module.less';

const MoveAndTransform = () => {
    return (
        <section className={container}>
            <div className={header}>
                <h2>
                    <span>Move and transform data across 200+ systems</span>
                </h2>
                <p>
                    Integrate with millisecond latency for an exact view of your
                    data to power analytics and operations.
                </p>
            </div>
            <div className={steps}>
                <div className={step}>
                    <h3>Move</h3>
                    <p>200+ no-code connectors. Real-time or batch.</p>
                </div>
                <div className={step}>
                    <h3>Transform</h3>
                    <p>Transform and store data in storage owned by you.</p>
                </div>
            </div>
            <div className={diagram}>
                <h4>
                    Connect to Any Data <br /> Source
                </h4>
                <h4>Activate Data</h4>
                <div className={card}>
                    <RealTimeIcon />
                    <span>Real-time</span>
                </div>
                <div className={card}>
                    <BatchIcon />
                    <span>Batch</span>
                </div>
                <div className={card}>
                    <SaasIcon />
                    <span>Saas</span>
                </div>
                <div className={card}>
                    <AnalyticsIcon />
                    <span>Analytics</span>
                </div>
                <div className={card}>
                    <OpsIcon />
                    <span>Ops</span>
                </div>
                <div className={card}>
                    <AiIcon />
                    <span>AI</span>
                </div>
                <div className={card}>
                    <div>
                        <StoreIcon />
                        <TransformIcon />
                    </div>
                    <h4>
                        Store and <br /> Transform
                    </h4>
                </div>
                <StaticImage
                    placeholder="blurred"
                    alt=""
                    src="../../../images/homepage/move-and-transform-data.png"
                    quality={100}
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
