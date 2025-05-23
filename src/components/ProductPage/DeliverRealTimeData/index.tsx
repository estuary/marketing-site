import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import ActiveUsersIcon from '../../../svgs/metric-active-users.svg';
import LatencyIcon from '../../../svgs/metric-latency.svg';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import Advantages from '../../Advantages';
import { sectionNineAdvantages } from '../advantages';
import { activeUsersAmount } from '../../../../shared';
import {
    activeUsersMetric,
    iconWrapper,
    latencyMetric,
    logoWrapper,
    metrics,
    metric,
    singleDataFlowMetric,
    textWrapper,
} from './styles.module.less';

const DeliverRealTimeData = () => {
    return (
        <section>
            <Advantages
                isDarkTheme
                isImageOnTheLeft
                icon={
                    <StaticImage
                        placeholder="none"
                        alt="Real-time data"
                        src="../../../svgs/product-page/section-nine/real-time-clock.svg"
                    />
                }
                title={
                    <>
                        Deliver <span>real-time data</span> at scale
                    </>
                }
                subtitle="Estuary Flow delivers reliable, real-time performance in production for over 3,000 active users, including some the most demanding workloads proven to 10x the scale of the alternatives."
                image={
                    <div className={metrics}>
                        <StaticImage
                            placeholder="none"
                            alt="Estuary performance metrics"
                            src="../../../images/product-page/section-nine/metrics-background.png"
                        />
                        <div className={logoWrapper}>
                            <StaticImage
                                placeholder="none"
                                alt="Estuary logo"
                                src="../../../images/product-page/section-nine/estuary-logo.png"
                                quality={100}
                            />
                        </div>
                        <div className={clsx(metric, singleDataFlowMetric)}>
                            <div className={iconWrapper}>
                                <SingleDataflowIcon color="var(--white)" />
                            </div>
                            <div className={textWrapper}>
                                <h3>7+GB/sec</h3>
                                <p>Single dataflow</p>
                            </div>
                        </div>
                        <div className={clsx(metric, activeUsersMetric)}>
                            <div className={iconWrapper}>
                                <ActiveUsersIcon color="var(--blue)" />
                            </div>
                            <div className={textWrapper}>
                                <h3>{activeUsersAmount}</h3>
                                <p>Active users</p>
                            </div>
                        </div>
                        <div className={clsx(metric, latencyMetric)}>
                            <div className={iconWrapper}>
                                <LatencyIcon color="var(--blue)" />
                            </div>
                            <div className={textWrapper}>
                                <h3>&#60;100ms</h3>
                                <p>Latency</p>
                            </div>
                        </div>
                    </div>
                }
                advantages={sectionNineAdvantages}
            />
        </section>
    );
};

export default DeliverRealTimeData;
