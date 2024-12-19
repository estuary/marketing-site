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
                            <span className="white-text">MEET</span>{' '}
                            <span>THE FASTEST</span>
                            <span>,</span> <span>MOST RELIABLE</span>{' '}
                            <span className="white-text">ETL</span>
                        </>
                    }
                    description="Estuary is the only platform built from the ground up
                        for truly real-time ETL and ELT data integration, set up
                        in minutes."
                    ctaButtons={<HeroSectionActions />}
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
                    label="Active users"
                />
                <MetricCard
                    icon={<LatencyIcon color={metricIconColor} />}
                    value="&#60;100ms"
                    label="Latency"
                />
                <MetricCard
                    icon={<SingleDataflowIcon color={metricIconColor} />}
                    value="7+gb/sec"
                    label="Single dataflow"
                />
            </ul>
            <VanityLogosMarquee />
        </section>
    );
};

export default Hero;
