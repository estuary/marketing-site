import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import ActiveUsersIcon from '../../../svgs/metric-active-users.svg';
import LatencyIcon from '../../../svgs/metric-latency.svg';
import OfConnectorsIcon from '../../../svgs/metric-of-connectors.svg';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';

import MetricCard from '../../MetricCard';
import VanityLogosMarquee from '../../VanityLogosMarquee';
import { Connector } from '../shared';
import {
    ButtonWrapper,
    ButtonsWrapper,
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

const metricIconColor = '#FFFFFF';

export interface SectionOneProps {
    sourceConnector: Connector;
    destConnector: Connector;
}

const SectionOne = ({ sourceConnector, destConnector }: SectionOneProps) => {
    const sourceConnectorLogo = getImage(
        sourceConnector.logo.childImageSharp.gatsbyImageData
    );
    const destConnectorLogo = getImage(
        destConnector.logo.childImageSharp.gatsbyImageData
    );

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
                {sourceConnectorLogo && destConnectorLogo ? (
                    <ImageWrapper>
                        <SourceLogo className="connector-logo">
                            <GatsbyImage
                                image={sourceConnectorLogo}
                                alt={`${sourceConnector.title} logo`}
                                loading="eager"
                            />
                        </SourceLogo>
                        <StaticImage
                            src="../../../images/integration/section-one/integration-bg.png"
                            alt={`Connection between ${sourceConnector.title} and ${destConnector.title}`}
                            loading="eager"
                        />
                        <DestinationLogo className="connector-logo">
                            <GatsbyImage
                                image={destConnectorLogo}
                                alt={`${destConnector.title} logo`}
                                loading="eager"
                            />
                        </DestinationLogo>
                    </ImageWrapper>
                ) : null}
            </MainContent>
            <MetricCardsList>
                <MetricCard
                    icon={<OfConnectorsIcon color={metricIconColor} />}
                    value="100S"
                    label="Of connectors"
                />
                <MetricCard
                    icon={<ActiveUsersIcon color={metricIconColor} />}
                    value="3000+"
                    label="Active users"
                />
                <MetricCard
                    icon={<LatencyIcon color={metricIconColor} />}
                    value="&#60;100MS"
                    label="End-to-end latency"
                />
                <MetricCard
                    icon={<SingleDataflowIcon color={metricIconColor} />}
                    value="7+GB/SEC"
                    label="Single dataflow"
                />
            </MetricCardsList>
            <VanityLogosMarquee />
        </DefaultWrapperDarkBlue>
    );
};

export default SectionOne;
