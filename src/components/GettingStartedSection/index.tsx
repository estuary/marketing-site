import EstuaryLogo from '../../svgs/estuary-icon.svg';
import FileIcon from '../../svgs/file.svg';
import SlackIcon from '../../svgs/slack-outline.svg';
import RecordIcon from '../../svgs/record-outlined.svg';
import {
    dashboardRegisterUrl,
    docsPageUrl,
    slackUrl,
    webinarsUrl,
} from '../../../shared';
import BlogBanner from '../BlogBanner';
import Container from '../Container';
import { container } from './styles.module.less';
import FeatureCard from './FeatureCard';

const iconColor = 'var(--blue)';
const iconSize = 28;

interface GettingStartedSectionProps {
    isDarkTheme?: boolean;
}

const GettingStartedSection = ({
    isDarkTheme = false,
}: GettingStartedSectionProps) => {
    return (
        <section>
            <Container
                isVertical
                className={container}
                isDarkTheme={isDarkTheme}
            >
                <h2>
                    Getting started with <span>Estuary</span>
                </h2>
                <ul>
                    <FeatureCard
                        icon={
                            <EstuaryLogo
                                width={iconSize}
                                height={iconSize}
                                color={iconColor}
                            />
                        }
                        title="Free account"
                        description="Getting started with Estuary is simple. Sign up for a free account."
                        link={{
                            id: 'sign-up-link/getting-started-section/comparison-page',
                            title: 'Sign up',
                            href: dashboardRegisterUrl,
                        }}
                        isDarkTheme={isDarkTheme}
                    />
                    <FeatureCard
                        icon={
                            <FileIcon
                                width={iconSize}
                                height={iconSize}
                                color={iconColor}
                            />
                        }
                        title="Docs"
                        description="Make sure you read through the documentation, especially the get started section."
                        link={{
                            id: 'learn-more-link/getting-started-section/comparison-page',
                            title: 'Learn more',
                            href: docsPageUrl,
                        }}
                        isDarkTheme={isDarkTheme}
                    />
                    <FeatureCard
                        icon={
                            <SlackIcon
                                width={iconSize}
                                height={iconSize}
                                color={iconColor}
                            />
                        }
                        title="Community"
                        description="I highly recommend you also join the Slack community. It's the easiest way to get support while you're getting started."
                        link={{
                            id: 'join-slack-link/getting-started-section/comparison-page',
                            title: 'Join Slack Community',
                            href: slackUrl,
                        }}
                        isDarkTheme={isDarkTheme}
                    />
                    <FeatureCard
                        icon={
                            <RecordIcon
                                width={iconSize}
                                height={iconSize}
                                color={iconColor}
                            />
                        }
                        title="Estuary 101"
                        description="I highly recommend you also join the Slack community. It's the easiest way to get support while you're getting started."
                        link={{
                            id: 'watch-link/getting-started-section/comparison-page',
                            title: 'Watch',
                            href: webinarsUrl,
                        }}
                        isDarkTheme={isDarkTheme}
                    />
                </ul>
                <BlogBanner
                    title={
                        <h3>
                            <span>QUESTIONS?</span> FEEL FREE TO CONTACT US ANY
                            TIME!
                        </h3>
                    }
                    button={{
                        id: 'contact-us-button/last-banner/comparison-page',
                        title: 'Contact us',
                        href: '/contact-us/',
                    }}
                    isDarkTheme
                />
            </Container>
        </section>
    );
};

export default GettingStartedSection;
