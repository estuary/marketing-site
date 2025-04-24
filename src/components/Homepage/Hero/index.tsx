import MetricCard from '../../MetricCard';
import VanityLogosMarquee from '../../VanityLogosMarquee';
import HeroSectionDetails from '../../HeroSectionDetails';
import { activeUsersAmount } from '../../../../shared';
import HeroSectionActions from '../../HeroSectionActions';
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
                            <span className="white-text">Meet</span>{' '}
                            <span>the fastest</span>
                            <span>,</span> <span>most reliable</span>{' '}
                            <span className="white-text">ETL</span>
                        </>
                    }
                    description="Secure data integration with Estuary Flow, the enterprise data movement platform for real-time streaming and batch processing."
                    ctaButtons={
                        <HeroSectionActions
                            pageId="homepage"
                            contactUsButtonTitle="Book a Demo"
                        />
                    }
                    hasSubscriptionBenefits
                />
                <div className={flowAnimationContainer}>
                    <AnimatedHero />
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
