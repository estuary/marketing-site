import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import ActiveUsersIcon from '../../../svgs/metric-active-users.svg';
import LatencyIcon from '../../../svgs/metric-latency.svg';
import OfConnectorsIcon from '../../../svgs/metric-of-connectors.svg';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';

import MetricCard from '../../MetricCard';
import VanityLogosMarquee from '../../VanityLogosMarquee';
import {
    ButtonWrapper,
    ButtonsWrapper,
    Description,
    DestinationLogo,
    Header,
    HelpText,
    IconWrapper,
    ImageWrapper,
    MainContent,
    MetricCardsList,
    PreTitle,
    PreTitleWrapper,
    PrimaryButton,
    SecondaryButton,
    SourceLogo,
    Title,
} from './styles';

interface SectionOneProps {
    sourceConnector: {
        title: string;
        logo: any;
    };
    destConnector: {
        title: string;
        logo: any;
    };
}

const SectionOne = ({ sourceConnector, destConnector }: SectionOneProps) => {
    console.log(sourceConnector);
    return (
        <DefaultWrapperDarkBlue>
            <MainContent>
                <Header>
                    <PreTitleWrapper>
                        <IconWrapper>
                            <StaticImage
                                placeholder="none"
                                src="../../../svgs/plugs.svg"
                                alt="Integration icon"
                                layout="constrained"
                            />
                        </IconWrapper>
                        <PreTitle>Fastest, Most Reliable CDC and ETL</PreTitle>
                    </PreTitleWrapper>
                    <Title>
                        STREAM DATA FROM {sourceConnector.title} TO{' '}
                        {destConnector.title} IN <span>REAL-TIME OR BATCH</span>
                    </Title>
                    <Description>
                        Estuary Flow is the only platform built for change data
                        capture (CDC) that lets you capture, transform, and
                        materialize data in real-time and batch for analytics,
                        ops, and AI - in minutes, with millisecond latency.
                    </Description>
                    <ButtonsWrapper>
                        <ButtonWrapper>
                            <PrimaryButton
                                target="_blank"
                                href="https://dashboard.estuary.dev/register"
                            >
                                Get Started
                            </PrimaryButton>
                            <HelpText>
                                Sign up for a Free Estuary Flow Account.
                            </HelpText>
                        </ButtonWrapper>
                        <ButtonWrapper>
                            <SecondaryButton
                                buttonLabel="Contact Us"
                                buttonId="section-one-hubspot"
                            />
                            <HelpText>Schedule an appointment.</HelpText>
                        </ButtonWrapper>
                    </ButtonsWrapper>
                </Header>
                <ImageWrapper>
                    <SourceLogo className="connector-logo">
                        <GatsbyImage
                            image={
                                sourceConnector.logo.childImageSharp
                                    .gatsbyImageData
                            }
                            alt={`${sourceConnector.title} connector logo`}
                            loading="eager"
                        />
                    </SourceLogo>
                    <StaticImage
                        src="../../../images/integration/integration-bg.png"
                        alt={`Connection between ${sourceConnector.title} and ${destConnector.title}`}
                        loading="eager"
                    />
                    <DestinationLogo className="connector-logo">
                        <GatsbyImage
                            image={
                                destConnector.logo.childImageSharp
                                    .gatsbyImageData
                            }
                            alt={`${destConnector.title} connector logo`}
                            loading="eager"
                        />
                    </DestinationLogo>
                </ImageWrapper>
            </MainContent>
            <MetricCardsList>
                <MetricCard
                    icon={<OfConnectorsIcon />}
                    value="100S"
                    label="Of connectors"
                />
                <MetricCard
                    icon={<ActiveUsersIcon />}
                    value="3000+"
                    label="Active users"
                />
                <MetricCard
                    icon={<LatencyIcon />}
                    value="&#60;100MS"
                    label="End-to-end latency"
                />
                <MetricCard
                    icon={<SingleDataflowIcon color="#FFFFFF" />}
                    value="7+GB/SEC"
                    label="Single dataflow"
                />
            </MetricCardsList>
            <VanityLogosMarquee />
        </DefaultWrapperDarkBlue>
    );
};

export default SectionOne;