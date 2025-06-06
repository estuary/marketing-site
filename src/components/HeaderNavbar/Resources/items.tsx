import { StaticImage } from 'gatsby-plugin-image';
import { statusPageUrl, webinarsUrl } from '../../../../shared';
import DocIcon from '../../../svgs/file.svg';
import SuccessIcon from '../../../svgs/success.svg';
import { getMenuLinkId, MenuCardItem } from '../shared';

const iconSize = 16;

export const read: MenuCardItem[] = [
    {
        name: 'Blog',
        to: '/blog/',
        Image: () => <StaticImage src="../../../svgs/blog.svg" alt="Blog" />,
        linkId: getMenuLinkId('blog'),
    },
    {
        name: 'Company Updates',
        to: '/product-updates/',
        Image: () => (
            <StaticImage src="../../../svgs/blog.svg" alt="Company Updates" />
        ),
        linkId: getMenuLinkId('company-updates'),
    },
    {
        name: 'Docs & Guides',
        to: 'https://docs.estuary.dev',
        Image: () => <DocIcon color="var(--blue)" width={iconSize} />,
        linkId: getMenuLinkId('docs-and-guides'),
    },
    {
        name: 'About us',
        to: '/about/',
        Image: () => (
            <StaticImage src="../../../svgs/estuary-icon.svg" alt="About us" />
        ),
        linkId: getMenuLinkId('about-us'),
    },
    {
        name: 'Status',
        to: statusPageUrl,
        Image: () => (
            <StaticImage
                src="../../../svgs/product-flow-live-reporting.svg"
                alt="Status"
                height={iconSize}
                width={iconSize}
            />
        ),
        linkId: getMenuLinkId('status'),
    },
];

export const listen: MenuCardItem[] = [
    {
        name: 'Podcasts',
        to: '/podcasts/',
        Image: () => (
            <StaticImage src="../../../svgs/microphone.svg" alt="Podcasts" />
        ),
        linkId: getMenuLinkId('podcasts'),
    },
    {
        name: 'Webinars',
        to: webinarsUrl,
        Image: () => (
            <StaticImage src="../../../svgs/webinars.svg" alt="Webinars" />
        ),
        linkId: getMenuLinkId('webinars'),
    },
    {
        name: 'YouTube',
        to: 'https://www.youtube.com/@estuarydev',
        Image: () => (
            <StaticImage src="../../../svgs/youtube.svg" alt="Youtube" />
        ),
        linkId: getMenuLinkId('youtube'),
    },
];

export const demo: MenuCardItem[] = [
    {
        name: 'Play Interactive Demo',
        to: '/demo/',
        linkId: getMenuLinkId('play-interactive-demo'),
    },
    {
        name: 'Real-time 101 [30 min]',
        to: webinarsUrl,
        linkId: getMenuLinkId('real-time-101-30-min'),
    },
];

export const partners: MenuCardItem[] = [
    {
        name: 'Partners',
        to: '/partners/',
        description: 'Browse our directory of partners',
        Image: () => (
            <SuccessIcon
                color="var(--blue)"
                width={iconSize}
                height={iconSize}
            />
        ),
        linkId: getMenuLinkId('partners'),
    },
    {
        name: 'Community',
        to: '/community/',
        description: 'Join our community of 1000+ members',
        Image: () => (
            <SuccessIcon
                color="var(--blue)"
                width={iconSize}
                height={iconSize}
            />
        ),
        linkId: getMenuLinkId('community'),
    },
];
