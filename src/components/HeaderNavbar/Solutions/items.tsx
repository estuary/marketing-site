import DocIcon from '../../../svgs/document.svg';
import PieChartIcon from '../../../svgs/pie-chart.svg';
import NoCodeIcon from '../../../svgs/no-code.svg';
import { MenuCardItem } from '../shared';

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

export const useCaseSolutionItems: MenuCardItem[] = [
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
        to: `${urlPrefix}/use-cases/ai-data-integration/`,
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

export const industrySolutionItems: MenuCardItem[] = [
    {
        name: 'FINANCE',
        to: `${urlPrefix}/industry/finance-data-integration/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
    },
    {
        name: 'SUPPLY CHAIN AND LOGISTICS',
        to: `${urlPrefix}/industry/supply-chain-data-integration/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
    },
    {
        name: 'MARKETING',
        to: `${urlPrefix}/industry/marketing-data-integration/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
    },
];

export const technologySolutionItems: MenuCardItem[] = [
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
        to: `${urlPrefix}/technology/netsuite-data-integration/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
    },
    {
        name: 'KAFKA',
        to: `${urlPrefix}/technology/kafka-streaming-integration/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
    },
];
