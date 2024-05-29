import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const products = [
    {
        name: 'Estuary Flow',
        to: '/product',
        description: 'Build fully managed real-time data pipelines in minutes.',
        Image: () => (
            <StaticImage
                src="../../../images/header-book.png"
                width={20}
                height={20}
                alt="book"
            />
        ),
    },
];

export const compare = [
    {
        name: 'Estuary vs. Fivetran',
        to: '/vs-fivetran',
    },
    {
        name: 'Estuary vs. Confluent',
        to: '/vs-confluent',
    },
    {
        name: 'Estuary vs. Airbyte',
        to: '/vs-airbyte',
    },
    {
        name: 'Estuary vs. Debezium',
        to: '/vs-debezium',
    },
];
