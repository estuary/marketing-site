import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Marquee from 'react-fast-marquee';
import ActiveUsersIcon from '../../../svgs/metric-active-users.svg';
import LatencyIcon from '../../../svgs/metric-latency.svg';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
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
    MarqueeWrapper,
    MetricCard,
    MetricCardsList,
    MetricIconWrapper,
    MetricLabel,
    MetricValue,
    MetricsWrapper,
    PrimaryButton,
    SecondaryButton,
    VanityLogo,
} from './styles';

const metricIconColor = '#FFFFFF';

const SectionOne = () => {
    const logos = useStaticQuery(graphql`
        {
            allStrapiVanityLogo(
                sort: { SortOrder: DESC }
                filter: { Enabled: { eq: true } }
            ) {
                nodes {
                    id
                    enabled: Enabled
                    logo: Logo {
                        localFile {
                            svg {
                                content
                            }
                            name
                            internal {
                                mediaType
                            }
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FIXED
                                    width: 140
                                    placeholder: NONE
                                )
                            }
                        }
                    }
                }
            }
        }
    `);

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
                <MetricCard>
                    <MetricIconWrapper>
                        <ActiveUsersIcon color={metricIconColor} />
                    </MetricIconWrapper>
                    <MetricsWrapper>
                        <MetricValue>3000+</MetricValue>
                        <MetricLabel>Active users</MetricLabel>
                    </MetricsWrapper>
                </MetricCard>
                <MetricCard>
                    <MetricIconWrapper>
                        <LatencyIcon color={metricIconColor} />
                    </MetricIconWrapper>
                    <MetricsWrapper>
                        <MetricValue>&#60;100ms</MetricValue>
                        <MetricLabel>Latency</MetricLabel>
                    </MetricsWrapper>
                </MetricCard>
                <MetricCard>
                    <MetricIconWrapper>
                        <SingleDataflowIcon color={metricIconColor} />
                    </MetricIconWrapper>
                    <MetricsWrapper>
                        <MetricValue>7+gb/sec</MetricValue>
                        <MetricLabel>Single dataflow</MetricLabel>
                    </MetricsWrapper>
                </MetricCard>
            </MetricCardsList>
            <MarqueeWrapper>
                <Marquee autoFill>
                    {logos.allStrapiVanityLogo.nodes?.map((logo) =>
                        logo.logo.localFile.internal.mediaType ===
                        'image/svg+xml' ? (
                            <VanityLogo key={logo.id}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: logo.logo.localFile.svg.content,
                                    }}
                                />
                            </VanityLogo>
                        ) : (
                            <VanityLogo key={logo.id}>
                                <GatsbyImage
                                    alt="logo"
                                    loading="eager"
                                    image={
                                        logo.logo.localFile.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </VanityLogo>
                        )
                    )}
                </Marquee>
            </MarqueeWrapper>
        </Container>
    );
};

export default SectionOne;
