import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { Connector, ConnectorType } from '../../../../shared';
import LightSwoopingLinesRightDirectionBackground from '../../../components/BackgroundImages/LightSwoopingLinesRightDirectionBackground';
import Container from '../../../components/Container';
import ConnectorLogoPlaceholder from '../../../components/ConnectorLogoPlaceholder';
import Content from './Content';
import {
    containerImage,
    flowStepOne,
    flowStepThree,
    flowStepTwo,
    frameContainer,
    logoContainer,
    logoContainerCapture,
    textBaseStyling,
} from './styles.module.less';

type HeroProps = {
    connector: {
        title?: string;
        logo?: Connector['logo'];
        type?: ConnectorType;
    };
};

const Hero = ({ connector: { title, logo, type } }: HeroProps) => {
    return (
        <LightSwoopingLinesRightDirectionBackground>
            <Container>
                <Content
                    connector={{
                        title,
                        type,
                    }}
                />
                <div className={containerImage}>
                    <span className={clsx(textBaseStyling, flowStepOne)}>
                        <span>01.</span>{' '}
                        {type === 'capture'
                            ? `Move from ${title}`
                            : 'Select a source'}
                    </span>
                    <span className={clsx(textBaseStyling, flowStepTwo)}>
                        <span>02.</span> Transform in-flight
                    </span>
                    <span className={clsx(textBaseStyling, flowStepThree)}>
                        <span>03.</span>{' '}
                        {type === 'materialization'
                            ? `Deliver to ${title}`
                            : 'Select a destination'}
                    </span>
                    <div
                        className={clsx(
                            logoContainer,
                            type === 'capture' ? logoContainerCapture : null
                        )}
                    >
                        {logo?.childImageSharp?.gatsbyImageData ? (
                            <GatsbyImage
                                alt={`${title} logo`}
                                image={logo.childImageSharp.gatsbyImageData}
                                loading="eager"
                            />
                        ) : (
                            <ConnectorLogoPlaceholder connectorType={type} />
                        )}
                    </div>
                    <div className={frameContainer}>
                        {type === 'capture' ? (
                            <StaticImage
                                placeholder="none"
                                alt="take a tour"
                                src="../../../images/lp-connector/hero/FlowFromSource.png"
                                imgStyle={{
                                    objectFit: 'contain',
                                }}
                                loading="eager"
                            />
                        ) : (
                            <StaticImage
                                placeholder="none"
                                alt="take a tour"
                                src="../../../images/lp-connector/hero/FlowToDestination.png"
                                imgStyle={{
                                    objectFit: 'contain',
                                }}
                                loading="eager"
                            />
                        )}
                    </div>
                </div>
            </Container>
        </LightSwoopingLinesRightDirectionBackground>
    );
};

export default Hero;
