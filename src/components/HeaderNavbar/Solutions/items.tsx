import BookIcon from '../../../svgs/book.svg';

const BookHeaderIcon = () => <BookIcon width={11} height={14} />;

const urlPrefix = '/solutions';

export const useCaseSolutions = [
    {
        name: 'DATA MOVEMENT',
        to: `${urlPrefix}/use-cases/data-movement/`,
        description: '',
        Image: () => <BookHeaderIcon />,
    },
    {
        name: 'DATA LAKES AND WAREHOUSES',
        to: `${urlPrefix}/use-cases/data-lakes-warehouses/`,
        description: '',
        Image: () => <BookHeaderIcon />,
    },
    {
        name: 'AI',
        to: `${urlPrefix}/use-cases/ai/`,
        description: '',
        Image: () => <BookHeaderIcon />,
    },
    {
        name: 'REAL-TIME ANALYTICS',
        to: `${urlPrefix}/use-cases/real-time-analytics/`,
        description: '',
        Image: () => <BookHeaderIcon />,
    },
];

export const industrySolutions = [
    {
        name: 'FINANCE',
        to: `${urlPrefix}/industry/finance/`,
        description: '',
        Image: () => <BookHeaderIcon />,
    },
    {
        name: 'SUPPLY CHAIN AND LOGISTICS',
        to: `${urlPrefix}/industry/supply-chain/`,
        description: '',
        Image: () => <BookHeaderIcon />,
    },
    {
        name: 'MARKETING',
        to: `${urlPrefix}/industry/marketing/`,
        description: '',
        Image: () => <BookHeaderIcon />,
    },
];

export const technologySolutions = [
    {
        name: 'PRIVATE DEPLOYMENTS',
        to: `${urlPrefix}/technology/private-deployments/`,
        description: '',
        Image: () => <BookHeaderIcon />,
    },
    {
        name: 'APACHE ICEBERG',
        to: `${urlPrefix}/technology/apache-iceberg/`,
        description: '',
        Image: () => <BookHeaderIcon />,
    },
    {
        name: 'NETSUITE',
        to: `${urlPrefix}/technology/netsuite/`,
        description: '',
        Image: () => <BookHeaderIcon />,
    },
    {
        name: 'KAFKA',
        to: `${urlPrefix}/technology/kafka/`,
        description: '',
        Image: () => <BookHeaderIcon />,
    },
];
