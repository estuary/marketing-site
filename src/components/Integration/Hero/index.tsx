import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import ActiveUsersIcon from '../../../svgs/metric-active-users.svg';
import LatencyIcon from '../../../svgs/metric-latency.svg';
import OfConnectorsIcon from '../../../svgs/metric-of-connectors.svg';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';

import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import EstuaryLogo from '../../../svgs/colored-logo.svg';
import MetricCard from '../../MetricCard';
import NewsletterSignupForm from '../../NewsletterSignupForm';
import VanityLogosMarquee from '../../VanityLogosMarquee';
import { Connector } from '../shared';
import { activeUsersAmount, dashboardRegisterUrl } from '../../../../shared';
import Container from '../../Container';
import LinkOutlined from '../../LinksAndButtons/LinkOutlined';
import {
    container,
    backgroundImageWraper,
    bgImage,
    bgMiddleImageWrapper,
    bgSideImageWrapper,
    contactUsCta,
    iconWrapper,
    metricCardsList,
    middleLine,
    preTitleWrapper,
    semiCircleLeftSide,
    semiCircleMiddle,
    semiCircleRightSide,
} from './styles.module.less';

const metricIconColor = '#FFFFFF';

export interface HeroProps {
    sourceConnector: Connector;
    destConnector: Connector;
}

const Hero = ({ sourceConnector, destConnector }: HeroProps) => {
    const sourceConnectorLogo = getImage(
        sourceConnector.logo?.childImageSharp?.gatsbyImageData
    );
    const destinationConnectorLogo = getImage(
        destConnector.logo?.childImageSharp?.gatsbyImageData
    );

    return (
        <section className={defaultWrapperDarkBlue}>
            <Container className={container}>
                <div>
                    <div className={preTitleWrapper}>
                        <div className={iconWrapper}>
                            <StaticImage
                                placeholder="none"
                                src="../../../svgs/plugs.svg"
                                alt="Integration icon"
                                loading="eager"
                            />
                        </div>
                        <span>FASTEST, MOST RELIABLE CDC AND ETL</span>
                    </div>
                    <h1>
                        STREAM DATA FROM {sourceConnector.title} TO{' '}
                        {destConnector.title}
                    </h1>
                    <label htmlFor="newsletter-signup">
                        Enter your company e-mail to register
                    </label>
                    <NewsletterSignupForm
                        inputPlaceholder="Email"
                        buttonTitle="Get Started"
                        redirectUrl={dashboardRegisterUrl}
                    />
                </div>
                <div>
                    {sourceConnectorLogo && destinationConnectorLogo ? (
                        <div className={backgroundImageWraper}>
                            <div className={semiCircleLeftSide}>
                                <div className={bgSideImageWrapper}>
                                    <GatsbyImage
                                        image={sourceConnectorLogo}
                                        alt={`${sourceConnector.title} logo`}
                                        loading="eager"
                                        className={bgImage}
                                    />
                                </div>
                            </div>
                            <div className={semiCircleMiddle}>
                                <div className={bgMiddleImageWrapper}>
                                    <EstuaryLogo width={46} />
                                    <div className={middleLine} />
                                </div>
                            </div>
                            <div className={semiCircleRightSide}>
                                <div className={bgSideImageWrapper}>
                                    <GatsbyImage
                                        image={destinationConnectorLogo}
                                        alt={`${destConnector.title} logo`}
                                        loading="eager"
                                        className={bgImage}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : null}
                    <div className={contactUsCta}>
                        <span>Schedule an appointment</span>
                        <LinkOutlined href="/contact-us/">
                            Contact Us
                        </LinkOutlined>
                    </div>
                </div>
            </Container>
            <ul className={metricCardsList}>
                <MetricCard
                    icon={<OfConnectorsIcon color={metricIconColor} />}
                    value="100S"
                    label="Of connectors"
                />
                <MetricCard
                    icon={<ActiveUsersIcon color={metricIconColor} />}
                    value={activeUsersAmount}
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
            </ul>
            <VanityLogosMarquee />
        </section>
    );
};

export default Hero;
