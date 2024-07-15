import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import React, { ChangeEvent, useState } from 'react';
import ActiveUsersIcon from '../../../svgs/metric-active-users.svg';
import LatencyIcon from '../../../svgs/metric-latency.svg';
import OfConnectorsIcon from '../../../svgs/metric-of-connectors.svg';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';

import { ButtonFilled } from '../../../globalStyles';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import EstuaryLogo from '../../../svgs/colored-logo.svg';
import OpenHubspotModal from '../../HubSpot/OpenModal';
import MetricCard from '../../MetricCard';
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
    emailInput,
    formFields,
    getStartedCta,
    iconWrapper,
    imageWrapper,
    inputIconWrapper,
    mainContent,
    metricCardsList,
    middleLine,
    preTitle,
    preTitleWrapper,
    primaryButton,
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
    const [email, setEmail] = useState('');

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const sourceConnectorLogo = getImage(
        sourceConnector.logo?.childImageSharp?.gatsbyImageData
    );
    const destinationConnectorLogo = getImage(
        destConnector.logo?.childImageSharp?.gatsbyImageData
    );

    const handleFormSubmission = (ev: { preventDefault: () => void }) => {
        ev.preventDefault();
        window.open('https://dashboard.estuary.dev/register');
        setEmail('');
    };

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
                    <form
                        id="newsletter-signup"
                        className={getStartedCta}
                        onSubmit={handleFormSubmission}
                    >
                        <label>Enter your company e-mail to register</label>
                        <div className={formFields}>
                            <div className={inputIconWrapper}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Email icon"
                                    src="../../../svgs/product-page/section-thirteen/email-outlined.svg"
                                    layout="constrained"
                                />
                            </div>
                            <input
                                placeholder="Email"
                                type="email"
                                required
                                className={emailInput}
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {/* TODO: Move this button style to LESS */}
                            <ButtonFilled
                                type="submit"
                                className={primaryButton}
                            >
                                Get Started
                            </ButtonFilled>
                        </div>
                    </form>
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
