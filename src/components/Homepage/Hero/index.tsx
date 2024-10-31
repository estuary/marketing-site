import * as React from 'react';
import ActiveUsersIcon from '../../../svgs/metric-active-users.svg';
import LatencyIcon from '../../../svgs/metric-latency.svg';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import MetricCard from '../../MetricCard';
import VanityLogosMarquee from '../../VanityLogosMarquee';
import HeroSectionDetails from '../../HeroSectionDetails';
import AnimFallback from './AnimFallback';
import AnimatedHero from './AnimatedHero';
import {
    Container,
    FlowAnimationContainer,
    MainContent,
    MetricCardsList,
} from './styles';

const metricIconColor = '#FFFFFF';

const Hero = () => {
    return (
        <Container>
            <MainContent>
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
                    hasCtaButtons
                    hasSubscriptionBenefits
                />
                <FlowAnimationContainer>
                    <React.Suspense fallback={AnimFallback}>
                        <AnimatedHero />
                    </React.Suspense>
                </FlowAnimationContainer>
            </MainContent>
            <MetricCardsList>
                <MetricCard
                    icon={<ActiveUsersIcon color={metricIconColor} />}
                    value="5500+"
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
            </MetricCardsList>
            <VanityLogosMarquee />
        </Container>
    );
};

export default Hero;
