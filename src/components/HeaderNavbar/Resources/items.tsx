import { StaticImage } from 'gatsby-plugin-image';
import { statusPageUrl, webinarsUrl } from '../../../../shared';
import DocIcon from '../../../svgs/file.svg';
import SuccessIcon from '../../../svgs/success.svg';
import { MenuCardItem } from '../shared';

const iconSize = 16;

export const read: MenuCardItem[] = [
    {
        name: 'Blog',
        to: '/blog/',
        Image: () => <StaticImage src="../../../svgs/blog.svg" alt="Blog" />,
    },
    {
        name: 'Company Updates',
        to: '/company-updates/',
        Image: () => (
            <StaticImage src="../../../svgs/blog.svg" alt="Company Updates" />
        ),
    },
    {
        name: 'Docs & Guides',
        to: 'https://docs.estuary.dev',
        Image: () => <DocIcon color="var(--blue)" width={iconSize} />,
    },
    {
        name: 'About us',
        to: '/about/',
        Image: () => (
            <StaticImage src="../../../svgs/estuary-icon.svg" alt="About us" />
        ),
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
    },
];

export const listen: MenuCardItem[] = [
    {
        name: 'Podcasts',
        to: '/podcasts/',
        Image: () => (
            <StaticImage src="../../../svgs/microphone.svg" alt="Podcasts" />
        ),
    },
    {
        name: 'Webinars',
        to: webinarsUrl,
        Image: () => (
            <StaticImage src="../../../svgs/webinars.svg" alt="Webinars" />
        ),
    },
    {
        name: 'YouTube',
        to: 'https://www.youtube.com/@estuarydev',
        Image: () => (
            <StaticImage src="../../../svgs/youtube.svg" alt="Youtube" />
        ),
    },
];

export const demo: MenuCardItem[] = [
    {
        name: 'Watch Interactive Demo',
        to: '/demo/',
    },
    {
        name: 'Real-time 101 [30 min]',
        to: webinarsUrl,
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
    },
];
