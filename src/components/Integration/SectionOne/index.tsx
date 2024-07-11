import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import ActiveUsersIcon from '../../../svgs/metric-active-users.svg';
import LatencyIcon from '../../../svgs/metric-latency.svg';
import OfConnectorsIcon from '../../../svgs/metric-of-connectors.svg';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';

import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import OpenHubspotModal from '../../HubSpot/OpenModal';
import MetricCard from '../../MetricCard';
import { OutboundLinkFilled } from '../../OutboundLink';
import VanityLogosMarquee from '../../VanityLogosMarquee';
import { Connector } from '../shared';
import {
    buttonWrapper,
    buttonsWrapper,
    destinationLogo,
    header,
    helpText,
    iconWrapper,
    imageWrapper,
    mainContent,
    metricCardsList,
    preTitle,
    preTitleWrapper,
    primaryButton,
    secondaryButton,
    sourceLogo,
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
                <div className={header}>
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
                        {destConnector.title} IN <span>REAL-TIME OR BATCH</span>
                    </h2>
                    <div className={buttonsWrapper}>
                        <div className={buttonWrapper}>
                            <OutboundLinkFilled
                                target="_blank"
                                href="https://dashboard.estuary.dev/register"
                                className={primaryButton}
                            >
                                Get Started
                            </OutboundLinkFilled>
                            <span className={helpText}>
                                Sign up for a Free Estuary Flow Account.
                            </span>
                        </div>
                        <div className={buttonWrapper}>
                            <OpenHubspotModal
                                buttonLabel="Contact Us"
                                buttonId="section-one-hubspot"
                                className={secondaryButton}
                            />
                            <span className={helpText}>
                                Schedule an appointment.
                            </span>
                        </div>
                    </div>
                </div>
                {sourceConnectorLogo && destinationConnectorLogo ? (
                    <div className={imageWrapper}>
                        <div className={sourceLogo}>
                            <GatsbyImage
                                image={sourceConnectorLogo}
                                alt={`${sourceConnector.title} logo`}
                                loading="eager"
                            />
                        </div>
                        <StaticImage
                            src="../../../images/integration/section-one/integration-bg.png"
                            alt={`Connection between ${sourceConnector.title} and ${destConnector.title}`}
                            loading="eager"
                        />
                        <div className={destinationLogo}>
                            <GatsbyImage
                                image={destinationConnectorLogo}
                                alt={`${destConnector.title} logo`}
                                loading="eager"
                            />
                        </div>
                    </div>
                ) : null}
            </div>
            <div className={metricCardsList}>
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
            </div>
            <VanityLogosMarquee />
        </section>
    );
};

export default SectionOne;
