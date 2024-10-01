import React from 'react';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import EstuaryLogo from '../../../svgs/estuary-icon.svg';
import FileIcon from '../../../svgs/file.svg';
import SlackIcon from '../../../svgs/slack-outline.svg';
import RecordIcon from '../../../svgs/record-outlined.svg';
import {
    dashboardRegisterUrl,
    docsPageUrl,
    slackUrl,
    webinarsUrl,
} from '../../../../shared';
import BlogBanner from '../../BlogBanner';
import { container } from './styles.module.less';
import FeatureCard from './FeatureCard';

const SectionThree = () => {
    return (
        <section className={defaultWrapperDark}>
            <div className={container}>
                <h2>GETTING STARTED WITH ESTUARY</h2>
                <ul>
                    <FeatureCard
                        icon={
                            <EstuaryLogo
                                width={28}
                                height={28}
                                color="#5072EB"
                            />
                        }
                        title="Free account"
                        description="Getting started with Estuary is simple. Sign up for a free account."
                        link={{
                            title: 'Sign up',
                            href: dashboardRegisterUrl,
                        }}
                    />
                    <FeatureCard
                        icon={
                            <FileIcon width={28} height={28} color="#5072EB" />
                        }
                        title="Docs"
                        description="Make sure you read through the documentation, especially the get started section."
                        link={{
                            title: 'Learn more',
                            href: docsPageUrl,
                        }}
                    />
                    <FeatureCard
                        icon={
                            <SlackIcon width={28} height={28} color="#5072EB" />
                        }
                        title="Community"
                        description="I highly recommend you also join the Slack community. It's the easiest way to get support while you're getting started."
                        link={{
                            title: 'Join Slack Community',
                            href: slackUrl,
                        }}
                    />
                    <FeatureCard
                        icon={
                            <RecordIcon
                                width={28}
                                height={28}
                                color="#5072EB"
                            />
                        }
                        title="Estuary 101"
                        description="I highly recommend you also join the Slack community. It's the easiest way to get support while you're getting started."
                        link={{
                            title: 'Watch',
                            href: webinarsUrl,
                        }}
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
                        title: 'Contact us',
                        href: '/contact-us',
                    }}
                />
            </div>
        </section>
    );
};

export default SectionThree;
