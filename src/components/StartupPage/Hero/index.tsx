import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import Checkmark from '../../../svgs/checkmark.svg';
import {
    wrapper,
    container,
    descriptionStyle,
    iconWrapper,
    imageWrapperOne,
    imageWrapperTwo,
} from './style.module.less';

const Hero = () => {
    return (
        <section className={wrapper}>
            <Container
                isDarkTheme
                className={container}
                isReverseColumnOnMobile
            >
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
                <div className={imageWrapperOne}>
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
            <Container isDarkTheme className={container}>
                <div className={imageWrapperTwo}>
                    <StaticImage
                        src="../../../images/startup-page/hero-image-2.png"
                        alt="" // Ask to Sourabh
                        quality={100}
                        placeholder="blurred"
                        loading="eager"
                        layout="constrained"
                    />
                    <span>Operational databases</span>
                    <span>Cloud apps</span>
                    <span>Real-time streams</span>
                </div>
                <HeroSectionDetails
                    description={
                        <span className={descriptionStyle}>
                            With Estuary, you can get real-time access to your
                            data from sources such as:
                        </span>
                    }
                    additionalElements={
                        <>
                            <ul>
                                <li>
                                    <div className={iconWrapper}>
                                        <Checkmark
                                            width={16}
                                            color="var(--blue)"
                                        />
                                    </div>
                                    <p>
                                        Operational databases including
                                        PostgreSQL, MySQL, and MongoDB.
                                    </p>
                                </li>
                                <li>
                                    <div className={iconWrapper}>
                                        <Checkmark
                                            width={16}
                                            color="var(--blue)"
                                        />
                                    </div>
                                    <p>
                                        Cloud apps including Salesforce,
                                        Hubspot, Netsuite, Intercom, and
                                        Zendesk.
                                    </p>
                                </li>
                                <li>
                                    <div className={iconWrapper}>
                                        <Checkmark
                                            width={16}
                                            color="var(--blue)"
                                        />
                                    </div>
                                    <p>
                                        Real-time streams including Kafka,
                                        Kinesis, and Webhooks.
                                    </p>
                                </li>
                            </ul>
                            <p>
                                With a click of a button, you can make your data
                                work for you by ingesting it into analytical
                                data warehouses like Snowflake or operational
                                analytics services like Tinybird.
                            </p>
                            <strong>
                                No accelerator affiliation is required!
                            </strong>
                        </>
                    }
                />
            </Container>
        </section>
    );
};

export default Hero;
