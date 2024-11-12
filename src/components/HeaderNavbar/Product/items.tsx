import React from 'react';
import { getComparisonSlug } from '../../../../shared';
import BookIcon from '../../../svgs/book.svg';
import BalanceIcon from '../../../svgs/header-balance.svg';

const BookHeaderIcon = () => <BookIcon width={11} height={14} />;
const BalanceHeaderIcon = () => <BalanceIcon width={15} height={15} />;

export const products = [
    {
        name: 'ESTUARY FLOW',
        to: '/product',
        description: 'Build fully managed real-time data pipelines in minutes.',
        Image: () => <BookHeaderIcon />,
    },
    {
        name: 'DEPLOYMENT OPTIONS',
        to: '/deployment-options',
        description:
            'Explore the deployment options for Estuary Flow: Public, Private, and BYOC, with a comparison.',
        Image: () => <BookHeaderIcon />,
    },
    {
        name: 'SECURITY',
        to: '/security',
        description:
            'Learn more about seamless data security with Estuary Flow.',
        Image: () => <BookHeaderIcon />,
    },
];

const generateComparisonTo = (xVendorSlugKey, yVendorSlugKey) =>
    `/${getComparisonSlug(xVendorSlugKey, yVendorSlugKey)}`;

export const compare = [
    {
        name: 'Estuary vs. Fivetran',
        to: generateComparisonTo('estuary', 'fivetran'),
        Image: () => <BalanceHeaderIcon />,
    },
    {
        name: 'Estuary vs. Confluent',
        to: generateComparisonTo('confluent', 'estuary'),
        Image: () => <BalanceHeaderIcon />,
    },
    {
        name: 'Estuary vs. Airbyte',
        to: generateComparisonTo('airbyte', 'estuary'),
        Image: () => <BalanceHeaderIcon />,
    },
    {
        name: 'Estuary vs. Debezium',
        to: generateComparisonTo('debezium-kafka', 'estuary'),
        Image: () => <BalanceHeaderIcon />,
    },
];
