import {
    GatsbyImage,
    ImageDataLike,
    StaticImage,
    getImage,
} from 'gatsby-plugin-image';
import clsx from 'clsx';
import { ConnectorType } from '../../../../shared';
import LightSwoopingLinesRightDirectionBackground from '../../../components/BackgroundImages/LightSwoopingLinesRightDirectionBackground';
import Container from '../../../components/Container';
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
        title: string;
        logo: ImageDataLike | null | undefined;
        type: ConnectorType;
    };
};

const Hero = ({ connector: { title, logo, type } }: HeroProps) => {
    if (!logo) {
        console.log('hero missing logo', { title, type });
    }
    const logoImage = logo ? getImage(logo) : null;

    return (
        <LightSwoopingLinesRightDirectionBackground>
            <Container>
                <Content
                    connector={{
                        title,
                        type,
                    }}
                />
                {logoImage ? (
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
                            <GatsbyImage
                                alt={`${title} logo`}
                                image={logoImage}
                            />
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
                                />
                            ) : (
                                <StaticImage
                                    placeholder="none"
                                    alt="take a tour"
                                    src="../../../images/lp-connector/hero/FlowToDestination.png"
                                    imgStyle={{
                                        objectFit: 'contain',
                                    }}
                                />
                            )}
                        </div>
                    </div>
                ) : null}
            </Container>
        </LightSwoopingLinesRightDirectionBackground>
    );
};

export default Hero;
