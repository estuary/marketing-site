import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { statusPageUrl, webinarsUrl } from '../../../../shared';
import DocIcon from '../../../svgs/file.svg';

const iconSize = 18;

export const read = [
    {
        name: 'Blog',
        to: '/blog/data-engineering',
        Image: () => <StaticImage src="../../../svgs/blog.svg" alt="Blog" />,
    },
    {
        name: 'Docs & Guides',
        to: 'https://docs.estuary.dev',
        Image: () => <DocIcon color="#5072EB" width={iconSize} />,
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
    {
        name: 'About us',
        to: '/about',
        Image: () => (
            <StaticImage src="../../../svgs/estuary-icon.svg" alt="About us" />
        ),
    },
];

export const listen = [
    {
        name: 'Podcasts',
        to: '/podcasts',
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
        to: 'https://www.youtube.com/watch?v=Ys5BoNqKljc',
        Image: () => (
            <StaticImage src="../../../svgs/youtube.svg" alt="Youtube" />
        ),
    },
];

export const tours = [
    {
        name: 'Product Tour [2 min]',
        to: '/why',
    },
    {
        name: 'Real-time 101 [30 min]',
        to: webinarsUrl,
    },
];
