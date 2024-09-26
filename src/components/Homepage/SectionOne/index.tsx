import * as React from 'react';
import ActiveUsersIcon from '../../../svgs/metric-active-users.svg';
import LatencyIcon from '../../../svgs/metric-latency.svg';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import MetricCard from '../../MetricCard';
import VanityLogosMarquee from '../../VanityLogosMarquee';
import { dashboardRegisterUrl } from '../../../../shared';
import SubscriptionBenefits from '../../SubscriptionBenefits';
import AnimFallback from './AnimFallback';
import AnimatedHero from './AnimatedHero';
import {
    Container,
    FlowAnimationContainer,
    HomepageDescription,
    HomepageHeader,
    HomepageHeadingButtons,
    HomepageTitle,
    MainContent,
    MetricCardsList,
    PrimaryButton,
    SecondaryButton,
} from './styles';

const metricIconColor = '#FFFFFF';

const SectionOne = () => {
    return (
        <Container>
            <MainContent>
                <HomepageHeader>
                    <HomepageTitle>
                        <span className="white-text">MEET</span>{' '}
                        <span>THE FASTEST, MOST RELIABLE</span>{' '}
                        <span className="white-text">ETL</span>
                    </HomepageTitle>
                    <HomepageDescription>
                        The only platform built from the ground up for truly
                        real-time ETL and ELT data integration, set up in
                        minutes.
                    </HomepageDescription>
                    <HomepageHeadingButtons>
                        <PrimaryButton
                            target="_blank"
                            href={dashboardRegisterUrl}
                            className="homepage-section-one-button"
                        >
                            Build a Pipeline
                        </PrimaryButton>
                        <SecondaryButton
                            href="/contact-us"
                            className="homepage-section-one-button"
                            target="_blank"
                        >
                            Contact Us
                        </SecondaryButton>
                    </HomepageHeadingButtons>
                    <SubscriptionBenefits />
                </HomepageHeader>
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

export default SectionOne;
