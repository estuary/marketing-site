import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

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

export const compare = [
    {
        name: 'Estuary vs. Fivetran',
        to: '/etl-tools/estuary-vs-fivetran',
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
        to: '/etl-tools/estuary-vs-confluent',
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
        to: '/etl-tools/estuary-vs-airbyte',
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
        to: '/etl-tools/estuary-vs-debezium-kafka',
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
