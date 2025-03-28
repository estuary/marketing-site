import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import ActiveUsersIcon from '../../../svgs/metric-active-users.svg';
import LatencyIcon from '../../../svgs/metric-latency.svg';
import OfConnectorsIcon from '../../../svgs/metric-of-connectors.svg';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import EstuaryLogo from '../../../svgs/colored-logo.svg';
import MetricCard from '../../MetricCard';
import VanityLogosMarquee from '../../VanityLogosMarquee';
import { Connectors } from '../shared';
import { activeUsersAmount } from '../../../../shared';
import Container from '../../Container';
import ConnectorLogoPlaceholder from '../../ConnectorLogoPlaceholder';
import HeroSectionDetails from '../../HeroSectionDetails';
import HeroSectionActions from '../../HeroSectionActions';
import {
    container,
    backgroundImageWraper,
    bgImage,
    bgMiddleImageWrapper,
    bgSideImageWrapper,
    iconWrapper,
    metricCardsList,
    middleLine,
    preTitleWrapper,
    semiCircleLeftSide,
    semiCircleMiddle,
    semiCircleRightSide,
} from './styles.module.less';

const metricIconColor = 'var(--white)';
const connectorIconSize = 64;

const Hero = ({ sourceConnector, destConnector }: Connectors) => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container className={container}>
                <HeroSectionDetails
                    additionalElementsOnTop={
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
                    }
                    title={`STREAM DATA FROM ${sourceConnector.title} TO ${destConnector.title}`}
                    description={`Sync your ${sourceConnector.title} data with ${destConnector.title} in minutes using Estuary Flow for real-time, no-code integration and seamless data pipelines.`}
                    ctaButtons={
                        <HeroSectionActions
                            pageId={`integration-page-${sourceConnector.title}-to-${destConnector.title}`}
                            registerButtonTitle="Start Streaming for Free"
                            contactUsButtonTitle="Get Demo"
                        />
                    }
                    hasSubscriptionBenefits
                />
                <div>
                    <div className={backgroundImageWraper}>
                        <div className={semiCircleLeftSide}>
                            <div className={bgSideImageWrapper}>
                                {sourceConnector.logo?.extension === 'svg' ? (
                                    <img
                                        src={sourceConnector.logo.publicURL}
                                        alt={`${sourceConnector.title} logo`}
                                        loading="eager"
                                        className={bgImage}
                                    />
                                ) : sourceConnector.logo?.childImageSharp ? (
                                    <GatsbyImage
                                        image={
                                            sourceConnector.logo.childImageSharp
                                                .gatsbyImageData
                                        }
                                        alt={`${sourceConnector.title} logo`}
                                        loading="eager"
                                        className={bgImage}
                                    />
                                ) : (
                                    <ConnectorLogoPlaceholder
                                        connectorType={sourceConnector.type}
                                        connectorIconSize={connectorIconSize}
                                    />
                                )}
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
                                {destConnector.logo?.extension === 'svg' ? (
                                    <img
                                        src={destConnector.logo.publicURL}
                                        alt={`${destConnector.title} logo`}
                                        loading="eager"
                                        className={bgImage}
                                    />
                                ) : destConnector.logo?.childImageSharp ? (
                                    <GatsbyImage
                                        image={
                                            destConnector.logo.childImageSharp
                                                .gatsbyImageData
                                        }
                                        alt={`${destConnector.title} logo`}
                                        loading="eager"
                                        className={bgImage}
                                    />
                                ) : (
                                    <ConnectorLogoPlaceholder
                                        connectorType={destConnector.type}
                                        connectorIconSize={connectorIconSize}
                                    />
                                )}
                            </div>
                        </div>
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
