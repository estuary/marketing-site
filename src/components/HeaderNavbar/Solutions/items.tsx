import DocIcon from '../../../svgs/document.svg';
import PieChartIcon from '../../../svgs/pie-chart.svg';
import NoCodeIcon from '../../../svgs/no-code.svg';
import { getMenuLinkId, MenuCardItem } from '../shared';

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
        linkId: getMenuLinkId('data-movement'),
    },
    {
        name: 'DATA LAKES AND WAREHOUSES',
        to: `${urlPrefix}/use-cases/data-lakes-warehouses/`,
        description: '',
        Image: () => <AdaptedDocIcon />,
        linkId: getMenuLinkId('data-lakes-and-warehouses'),
    },
    {
        name: 'AI',
        to: `${urlPrefix}/use-cases/ai-data-integration/`,
        description: '',
        Image: () => <AdaptedDocIcon />,
        linkId: getMenuLinkId('ai'),
    },
    {
        name: 'REAL-TIME ANALYTICS',
        to: `${urlPrefix}/use-cases/real-time-analytics/`,
        description: '',
        Image: () => <AdaptedDocIcon />,
        linkId: getMenuLinkId('real-time-analytics'),
    },
];

export const industrySolutionItems: MenuCardItem[] = [
    {
        name: 'FINANCE',
        to: `${urlPrefix}/industry/finance-data-integration/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
        linkId: getMenuLinkId('finance'),
    },
    {
        name: 'SUPPLY CHAIN AND LOGISTICS',
        to: `${urlPrefix}/industry/supply-chain-data-integration/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
        linkId: getMenuLinkId('supply-chain-and-logistics'),
    },
    {
        name: 'MARKETING',
        to: `${urlPrefix}/industry/marketing-data-integration/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
        linkId: getMenuLinkId('marketing'),
    },
];

export const technologySolutionItems: MenuCardItem[] = [
    {
        name: 'PRIVATE DEPLOYMENTS',
        to: `${urlPrefix}/technology/private-deployments/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
        linkId: getMenuLinkId('private-deployments'),
    },
    {
        name: 'APACHE ICEBERG',
        to: `${urlPrefix}/technology/apache-iceberg/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
        linkId: getMenuLinkId('apache-iceberg'),
    },
    {
        name: 'NETSUITE',
        to: `${urlPrefix}/technology/netsuite-data-integration/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
        linkId: getMenuLinkId('netsuite'),
    },
    {
        name: 'KAFKA',
        to: `${urlPrefix}/technology/kafka-streaming-integration/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
        linkId: getMenuLinkId('kafka'),
    },
];
