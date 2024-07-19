import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import ActiveUsersIcon from '../../../svgs/metric-active-users.svg';
import LatencyIcon from '../../../svgs/metric-latency.svg';
import OfConnectorsIcon from '../../../svgs/metric-of-connectors.svg';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';

import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import EstuaryLogo from '../../../svgs/colored-logo.svg';
import OpenHubspotModal from '../../HubSpot/OpenModal';
import MetricCard from '../../MetricCard';
import NewsletterSignupForm from '../../NewsletterSignupForm';
import VanityLogosMarquee from '../../VanityLogosMarquee';
import { Connector } from '../shared';
import {
    backgroundImageWraper,
    bgImage,
    bgMiddleImageWrapper,
    bgSideImageWrapper,
    buttonWrapper,
    columnLeft,
    columnRight,
    contactUsCta,
    iconWrapper,
    imageWrapper,
    mainContent,
    metricCardsList,
    middleLine,
    preTitle,
    preTitleWrapper,
    secondaryButton,
    semiCircleLeftSide,
    semiCircleMiddle,
    semiCircleRightSide,
    title,
} from './styles.module.less';

const metricIconColor = '#FFFFFF';

export interface SectionOneProps {
    sourceConnector: Connector;
    destConnector: Connector;
}

const SectionOne = ({ sourceConnector, destConnector }: SectionOneProps) => {
    const sourceConnectorLogo = getImage(
        sourceConnector.logo?.childImageSharp?.gatsbyImageData
    );
    const destinationConnectorLogo = getImage(
        destConnector.logo?.childImageSharp?.gatsbyImageData
    );

    return (
        <section className={defaultWrapperDarkBlue}>
            <div className={mainContent}>
                <div className={columnLeft}>
                    <div className={preTitleWrapper}>
                        <div className={iconWrapper}>
                            <StaticImage
                                placeholder="none"
                                src="../../../svgs/plugs.svg"
                                alt="Integration icon"
                                layout="constrained"
                                loading="eager"
                            />
                        </div>
                        <span className={preTitle}>
                            Fastest, Most Reliable CDC and ETL
                        </span>
                    </div>
                    <h2 className={title}>
                        STREAM DATA FROM {sourceConnector.title} TO{' '}
                        {destConnector.title}
                    </h2>
                    <label htmlFor="newsletter-signup" className="label">
                        Enter your company e-mail to register
                    </label>
                    <NewsletterSignupForm
                        inputPlaceholder="Email"
                        buttonTitle="Get Started"
                        redirectUrl="https://dashboard.estuary.dev/register"
                    />
                </div>
                <div className={columnRight}>
                    {sourceConnectorLogo && destinationConnectorLogo ? (
                        <div className={imageWrapper}>
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
                        </div>
                    ) : null}
                    <div className={contactUsCta}>
                        <span>Schedule an appointment</span>
                        <div className={buttonWrapper}>
                            <OpenHubspotModal
                                buttonLabel="Contact Us"
                                buttonId="section-one-hubspot"
                                buttonClass={secondaryButton}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ul className={metricCardsList}>
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
            </ul>
            <VanityLogosMarquee />
        </section>
    );
};

export default SectionOne;
