import * as React from 'react';
import ActiveUsersIcon from '../../../svgs/metric-active-users.svg';
import LatencyIcon from '../../../svgs/metric-latency.svg';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import MetricCard from '../../MetricCard';
import VanityLogosMarquee from '../../VanityLogosMarquee';
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

const SectionOne = () => {
    return (
        <Container>
            <MainContent>
                <HomepageHeader>
                    <HomepageTitle>
                        <span>MEET</span> <span>THE FASTEST</span>
                        <span>,</span> <span>MOST RELIABLE</span>{' '}
                        <span>ETL</span>
                    </HomepageTitle>
                    <HomepageDescription>
                        The only platform built from the ground up for truly
                        real-time ETL and ELT data integration, set up in
                        minutes.
                    </HomepageDescription>
                    <HomepageHeadingButtons>
                        <PrimaryButton
                            target="_blank"
                            href="https://dashboard.estuary.dev/register"
                        >
                            Build a Pipeline
                        </PrimaryButton>
                        <SecondaryButton
                            buttonLabel="Contact Us"
                            buttonId="section-one-hubspot"
                        />
                    </HomepageHeadingButtons>
                </HomepageHeader>
                <FlowAnimationContainer>
                    <React.Suspense fallback={AnimFallback}>
                        <AnimatedHero />
                    </React.Suspense>
                </FlowAnimationContainer>
            </MainContent>
            <MetricCardsList>
                <MetricCard
                    icon={<ActiveUsersIcon />}
                    value="3000+"
                    label="Active users"
                />
                <MetricCard
                    icon={<LatencyIcon />}
                    value="&#60;100ms"
                    label="Latency"
                />
                <MetricCard
                    icon={<SingleDataflowIcon color="#FFFFFF" />}
                    value="7+gb/sec"
                    label="Single dataflow"
                />
            </MetricCardsList>
            <VanityLogosMarquee />
        </Container>
    );
};

export default SectionOne;
