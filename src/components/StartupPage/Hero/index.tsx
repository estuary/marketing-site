import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import Checkmark from '../../../svgs/checkmark.svg';
import {
    container,
    descriptionStyle,
    iconWrapper,
    imageWrapper,
} from './style.module.less';

const Hero = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container isDarkTheme className={container}>
                <HeroSectionDetails
                    title="Estuary Flow for Startups"
                    description={
                        <span className={descriptionStyle}>
                            Real-time data integration - free for early-stage
                            startups.
                        </span>
                    }
                    additionalElements={
                        <ul>
                            <li>
                                <div className={iconWrapper}>
                                    <Checkmark width={16} color="var(--blue)" />
                                </div>
                                <p>
                                    We know data is critical to startups&apos;
                                    growth and success.{' '}
                                </p>
                            </li>
                            <li>
                                <div className={iconWrapper}>
                                    <Checkmark width={16} color="var(--blue)" />
                                </div>
                                <p>
                                    To help you get off the ground, we offer an
                                    exclusive startup program with{' '}
                                    <strong>$2,000</strong> of free Estuary Flow
                                    credits over 12 months.
                                </p>
                            </li>
                            <li>
                                <div className={iconWrapper}>
                                    <Checkmark width={16} color="var(--blue)" />
                                </div>
                                <p>
                                    Whether you&apos;re building an internal
                                    data stack or integrating customer data
                                    directly into your product, Estuary Flow
                                    helps you centralize, automate, and analyze
                                    data faster.
                                </p>
                            </li>
                        </ul>
                    }
                />
                <div className={imageWrapper}>
                    <StaticImage
                        src="../../../images/startup-page/hero-image-1.png"
                        alt="" // Ask to Sourabh
                        quality={100}
                        placeholder="blurred"
                        loading="eager"
                        layout="constrained"
                    />
                    <span>Get Estuary Flow credits</span>
                    <span>
                        Data/2025 1,19 GB <strong>EDIT</strong>
                    </span>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
