import { Suspense } from 'react';
import ActiveUsersIcon from '../../../svgs/metric-active-users.svg';
import LatencyIcon from '../../../svgs/metric-latency.svg';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import MetricCard from '../../MetricCard';
import VanityLogosMarquee from '../../VanityLogosMarquee';
import HeroSectionDetails from '../../HeroSectionDetails';
import { activeUsersAmount } from '../../../../shared';
import HeroSectionActions from '../../HeroSectionActions';
import AnimFallback from './AnimFallback';
import AnimatedHero from './AnimatedHero';
import {
    container,
    flowAnimationContainer,
    mainContent,
    metricCardsList,
} from './styles.module.less';

const metricIconColor = 'var(--white)';

const Hero = () => {
    return (
        <section className={container}>
            <div className={mainContent}>
                <HeroSectionDetails
                    title={
                        <>
                            <span className="white-text">YOUR DATA. <br /> ANYTIME, ANYWHERE.</span>
                        </>
                    }
                    description="Effortless data integration with Estuary - the data movement platform for real-time streaming and batch processing."
                    ctaButtons={<HeroSectionActions showDemoCta />}
                    hasSubscriptionBenefits
                />
                <div className={flowAnimationContainer}>
                    <Suspense fallback={AnimFallback}>
                        <AnimatedHero />
                    </Suspense>
                </div>
            </div>
            <ul className={metricCardsList}>
                <MetricCard
                    icon={<ActiveUsersIcon color={metricIconColor} />}
                    value={activeUsersAmount}
                    label="Users"
                />
                <MetricCard
                    icon={<LatencyIcon color={metricIconColor} />}
                    value="&#60;100ms"
                    label="Latency"
                />
                <MetricCard
                    icon={<SingleDataflowIcon color={metricIconColor} />}
                    value="7+gb/sec"
                    label="Dataflow"
                />
            </ul>
            <VanityLogosMarquee />
        </section>
    );
};

export default Hero;
