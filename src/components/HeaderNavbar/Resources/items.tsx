import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { webinarsUrl } from '../../../../shared';

export const read = [
    {
        name: 'Blog',
        to: '/blog/data-engineering',
        hasChevronIcon: true,
        Image: () => (
            <StaticImage
                src="../../../svgs/blog.svg"
                alt="Blog"
            />
        ),
    },
    {
        name: 'Documents & Guides',
        to: 'https://docs.estuary.dev',
        hasChevronIcon: true,
        Image: () => (
            <StaticImage
                src="../../../svgs/docs-and-guides.svg"
                alt="Documents & Guides"
            />
        ),
    },
    {
        name: 'About us',
        to: '/about',
        hasChevronIcon: true,
        Image: () => (
            <StaticImage
                src="../../../svgs/estuary-icon.svg"
                alt="About us"
            />
        ),
    },
];

export const listen = [
    {
        name: 'Podcasts',
        to: '/podcasts',
        hasChevronIcon: true,
        Image: () => (
            <StaticImage
                src="../../../svgs/microphone.svg"
                alt="About us"
            />
        ),
    },
    {
        name: 'Webinars',
        to: webinarsUrl,
        hasChevronIcon: true,
        Image: () => (
            <StaticImage
                src="../../../svgs/webinars.svg"
                alt="About us"
            />
        ),
    },
    {
        name: 'YouTube',
        to: 'https://www.youtube.com/watch?v=Ys5BoNqKljc',
        hasChevronIcon: true,
        Image: () => (
            <StaticImage
                src="../../../svgs/youtube.svg"
                alt="About us"
            />
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

export const caseStudies = [
    {
        name: 'CONNECT&GO',
        to: '/customers/connectngo/',
        description: 'Connect&GO improves productivity 4x with Estuary.',
        hasChevronIcon: false,
        Image: () => (
            <StaticImage
                src="../../../images/c&g-logo.png"
                width={28}
                height={28}
                alt="Connect and Go logo"
            />
        ),
    },
    {
        name: 'TRUE PLATFORM',
        to: '/customers/casestudy/trueplatform/',
        description: 'True Platform discovered seamless, scalable data movement.',
        hasChevronIcon: false,
        Image: () => (
            <StaticImage
                src="../../../images/true-logo.png"
                width={28}
                height={28}
                alt="True Platform logo"
            />
        ),
    },
    {
        name: 'SOLI & COMPANY',
        to: '/customers/casestudy/soli_&_company/',
        description: 'Soli & Company trusts Estuary’s approachable pricing and quick setup.',
        hasChevronIcon: false,
        Image: () => (
            <StaticImage
                src="../../../images/soli&company-logo.png"
                width={28}
                height={28}
                alt="Soli & Company logo"
            />
        ),
    },
];
