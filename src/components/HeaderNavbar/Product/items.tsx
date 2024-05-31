import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const products = [
    {
        name: 'ESTUARY FLOW',
        to: '/product',
        description: 'Build fully managed real-time data pipelines in minutes.',
        Image: () => (
            <StaticImage
                src="../../../svgs/header-book.svg"
                width={28}
                height={28}
                alt="Estuary Flow product"
            />
        ),
    },
];

export const compare = [
    {
        name: 'Estuary vs. Fivetran',
        to: '/vs-fivetran',
        Image: () => (
            <StaticImage
                src="../../../svgs/header-balance.svg"
                width={28}
                height={28}
                alt="Compare with concurrent"
            />
        ),
    },
    {
        name: 'Estuary vs. Confluent',
        to: '/vs-confluent',
        Image: () => (
            <StaticImage
                src="../../../svgs/header-balance.svg"
                width={28}
                height={28}
                alt="Compare with concurrent"
            />
        ),
    },
    {
        name: 'Estuary vs. Airbyte',
        to: '/vs-airbyte',
        Image: () => (
            <StaticImage
                src="../../../svgs/header-balance.svg"
                width={28}
                height={28}
                alt="Compare with concurrent"
            />
        ),
    },
    {
        name: 'Estuary vs. Debezium',
        to: '/vs-debezium',
        Image: () => (
            <StaticImage
                src="../../../svgs/header-balance.svg"
                width={28}
                height={28}
                alt="Compare with concurrent"
            />
        ),
    },
];
