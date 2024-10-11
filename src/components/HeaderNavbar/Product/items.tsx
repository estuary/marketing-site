import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { getComparisonSlug } from '../../../../shared';

export const products = [
    {
        name: 'ESTUARY FLOW',
        to: '/product',
        description: 'Build fully managed real-time data pipelines in minutes.',
        hasChevronIcon: false,
        Image: () => (
            <StaticImage
                src="../../../svgs/header-book.svg"
                width={11}
                height={14}
                alt="Estuary Flow product"
            />
        ),
    },
];

const generateComparisonTo = (xVendorSlugKey, yVendorSlugKey) =>
    `/${getComparisonSlug(xVendorSlugKey, yVendorSlugKey)}`;

export const compare = [
    {
        name: 'Estuary vs. Fivetran',
        to: generateComparisonTo('estuary', 'fivetran'),
        hasChevronIcon: true,
        Image: () => (
            <StaticImage
                src="../../../svgs/header-balance.svg"
                width={15}
                height={15}
                alt="Compare with concurrent"
            />
        ),
    },
    {
        name: 'Estuary vs. Confluent',
        to: generateComparisonTo('confluent', 'estuary'),
        hasChevronIcon: true,
        Image: () => (
            <StaticImage
                src="../../../svgs/header-balance.svg"
                width={15}
                height={15}
                alt="Compare with concurrent"
            />
        ),
    },
    {
        name: 'Estuary vs. Airbyte',
        to: generateComparisonTo('airbyte', 'estuary'),
        hasChevronIcon: true,
        Image: () => (
            <StaticImage
                src="../../../svgs/header-balance.svg"
                width={15}
                height={15}
                alt="Compare with concurrent"
            />
        ),
    },
    {
        name: 'Estuary vs. Debezium',
        to: generateComparisonTo('debezium-kafka', 'estuary'),
        hasChevronIcon: true,
        Image: () => (
            <StaticImage
                src="../../../svgs/header-balance.svg"
                width={15}
                height={15}
                alt="Compare with concurrent"
            />
        ),
    },
];
