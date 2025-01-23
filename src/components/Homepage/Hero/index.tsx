import { Suspense } from 'react';
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

const Hero = () => {
    return (
        <section className={container}>
            <div className={mainContent}>
                <HeroSectionDetails
                    title={
                        <>
                            <span>
                                YOUR DATA. <br /> ANYTIME,
                            </span>{' '}
                            <span>ANYWHERE.</span>
                        </>
                    }
                    description="Secure data integration with Estuary Flow, the enterprise data movement platform for real-time streaming and batch processing."
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
                <MetricCard value={activeUsersAmount} label="Users" />
                <MetricCard value="&#60;100 ms" label="Latency" />
                <MetricCard value="7+ gb/s" label="Throughput" />
                <MetricCard value="99.9%" label="Uptime" />
            </ul>
            <VanityLogosMarquee />
        </section>
    );
};

export default Hero;
