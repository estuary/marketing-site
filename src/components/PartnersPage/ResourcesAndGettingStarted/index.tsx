import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import DocsIcon from '../../../svgs/file.svg';
import BlogIcon from '../../../svgs/header-book.svg';
import SlackOutlineIcon from '../../../svgs/slack-outline-2.svg';
import Card from '../Card';
import { docsPageUrl, slackUrl } from '../../../../shared';
import Link from '../Card/Link';
import { container, cardList } from './styles.module.less';

const iconSize = 28;
const iconColor = '#5072EB';

const ResourcesAndGettingStarted = () => (
    <section className={defaultWrapperGrey}>
        <div className={container}>
            <h2>RESOURCES AND GETTING STARTED</h2>
            <div className={cardList}>
                <Card
                    icon={
                        <DocsIcon
                            color={iconColor}
                            width={iconSize}
                            height={iconSize}
                        />
                    }
                    title="Docs"
                    description="Get started quickly by taking advantage of our developer-friendly documentation."
                    link={
                        <Link href={docsPageUrl} isExternal>
                            Explore Docs
                        </Link>
                    }
                />
                <Card
                    icon={
                        <BlogIcon
                            color={iconColor}
                            width={iconSize}
                            height={iconSize}
                        />
                    }
                    title="Blog"
                    description="Master or review key concepts to build innovative data integration solutions."
                    link={
                        <Link href="/blog/data-engineering/">Learn More</Link>
                    }
                />
                <Card
                    icon={
                        <SlackOutlineIcon
                            color={iconColor}
                            width={iconSize}
                            height={iconSize}
                        />
                    }
                    title="Community"
                    description="Connect with thousands of developers using Estuary Flow to supercharge their data integration capabilities."
                    link={
                        <Link href={slackUrl} isExternal>
                            Join Slack Community
                        </Link>
                    }
                />
            </div>
        </div>
    </section>
);

export default ResourcesAndGettingStarted;
