import React from 'react';
import DocsIcon from '../../../svgs/file.svg';
import BlogIcon from '../../../svgs/book.svg';
import SlackOutlineIcon from '../../../svgs/slack-outline-2.svg';
import Card from '../../Card';
import { docsPageUrl, slackUrl } from '../../../../shared';
import Link from '../../Card/Link';
import CardsSection from '../../CardsSection';

const ResourcesAndGettingStarted = () => (
    <CardsSection title="RESOURCES AND GETTING STARTED">
        <Card
            Icon={DocsIcon}
            title="Docs"
            link={
                <Link href={docsPageUrl} isExternal>
                    Explore Docs
                </Link>
            }
        >
            Get started quickly by taking advantage of our developer-friendly
            documentation.
        </Card>
        <Card
            Icon={BlogIcon}
            title="Blog"
            link={<Link href="/blog/data-engineering/">Learn More</Link>}
        >
            Master or review key concepts to build innovative data integration
            solutions.
        </Card>
        <Card
            Icon={SlackOutlineIcon}
            title="Community"
            link={
                <Link href={slackUrl} isExternal>
                    Join Slack Community
                </Link>
            }
        >
            Connect with thousands of developers using Estuary Flow to
            supercharge their data integration capabilities.
        </Card>
    </CardsSection>
);

export default ResourcesAndGettingStarted;
