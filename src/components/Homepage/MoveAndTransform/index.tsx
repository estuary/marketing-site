import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
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
    desktopImage,
    mobileImage,
    diagram,
    card,
    analytics,
    ops,
    ai,
    realTime,
    batch,
    saas,
    storeAndTransform,
    firstColumnHeading,
    secondColumnHeading,
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
                <h4 className={firstColumnHeading}>
                    Connect to Any Data <br /> Source
                </h4>
                <h4 className={secondColumnHeading}>Activate Data</h4>
                <div className={clsx(card, realTime)}>
                    <RealTimeIcon />
                    <span>Real-time</span>
                </div>
                <div className={clsx(card, batch)}>
                    <BatchIcon />
                    <span>Batch</span>
                </div>
                <div className={clsx(card, saas)}>
                    <SaasIcon />
                    <span>Saas</span>
                </div>
                <div className={clsx(card, analytics)}>
                    <AnalyticsIcon />
                    <span>Analytics</span>
                </div>
                <div className={clsx(card, ops)}>
                    <OpsIcon />
                    <span>Ops</span>
                </div>
                <div className={clsx(card, ai)}>
                    <AiIcon />
                    <span>AI</span>
                </div>
                <div className={clsx(card, storeAndTransform)}>
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
                    className={desktopImage}
                />
                <StaticImage
                    placeholder="blurred"
                    alt=""
                    src="../../../images/homepage/move-and-transform-data-mobile.png"
                    quality={100}
                    className={mobileImage}
                    layout="fullWidth"
                />
            </div>
        </section>
    );
};

export default MoveAndTransform;
