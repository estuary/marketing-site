import DocIcon from '../../../svgs/document.svg';
import PieChartIcon from '../../../svgs/pie-chart.svg';
import NoCodeIcon from '../../../svgs/no-code.svg';

const iconSize = 15;
const iconColor = 'var(--blue)';

const AdaptedDocIcon = () => (
    <DocIcon width={iconSize} height={iconSize} color={iconColor} />
);
const AdaptedPieChartIcon = () => (
    <PieChartIcon width={iconSize} height={iconSize} color={iconColor} />
);
const AdaptedNoCodeIcon = () => (
    <NoCodeIcon width={iconSize} height={iconSize} color={iconColor} />
);

const urlPrefix = '/solutions';

export const useCaseSolutionItems = [
    {
        name: 'DATA MOVEMENT',
        to: `${urlPrefix}/use-cases/data-movement/`,
        description: '',
        Image: () => <AdaptedDocIcon />,
    },
    {
        name: 'DATA LAKES AND WAREHOUSES',
        to: `${urlPrefix}/use-cases/data-lakes-warehouses/`,
        description: '',
        Image: () => <AdaptedDocIcon />,
    },
    {
        name: 'AI',
        to: `${urlPrefix}/use-cases/ai/`,
        description: '',
        Image: () => <AdaptedDocIcon />,
    },
    {
        name: 'REAL-TIME ANALYTICS',
        to: `${urlPrefix}/use-cases/real-time-analytics/`,
        description: '',
        Image: () => <AdaptedDocIcon />,
    },
];

export const industrySolutionItems = [
    {
        name: 'FINANCE',
        to: `${urlPrefix}/industry/finance/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
    },
    {
        name: 'SUPPLY CHAIN AND LOGISTICS',
        to: `${urlPrefix}/industry/supply-chain/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
    },
    {
        name: 'MARKETING',
        to: `${urlPrefix}/industry/marketing/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
    },
];

export const technologySolutionItems = [
    {
        name: 'PRIVATE DEPLOYMENTS',
        to: `${urlPrefix}/technology/private-deployments/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
    },
    {
        name: 'APACHE ICEBERG',
        to: `${urlPrefix}/technology/apache-iceberg/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
    },
    {
        name: 'NETSUITE',
        to: `${urlPrefix}/technology/netsuite/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
    },
    {
        name: 'KAFKA',
        to: `${urlPrefix}/technology/kafka/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
    },
];
