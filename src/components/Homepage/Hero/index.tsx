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
                            <span>Unlock Your Data.</span>
                            <br />
                            Anywhere. Anytime.
                        </>
                    }
                    description="Power analytics, operations, and AI with secure, real-time data delivery."
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
                <MetricCard value="1 petabyte / month" label="Data moved" />
                <MetricCard value="99.9%" label="Uptime" />
            </ul>
            <VanityLogosMarquee pageId="homepage" />
        </section>
    );
};

export default Hero;
