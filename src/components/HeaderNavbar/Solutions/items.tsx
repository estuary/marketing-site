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
        name: 'Data movement',
        to: `${urlPrefix}/use-cases/data-movement/`,
        description: '',
        Image: () => <AdaptedDocIcon />,
        linkId: getMenuLinkId('data-movement'),
    },
    {
        name: 'Data lakes and warehouses',
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
        name: 'Real-time analytics',
        to: `${urlPrefix}/use-cases/real-time-analytics/`,
        description: '',
        Image: () => <AdaptedDocIcon />,
        linkId: getMenuLinkId('real-time-analytics'),
    },
];

export const industrySolutionItems: MenuCardItem[] = [
    {
        name: 'Finance',
        to: `${urlPrefix}/industry/finance-data-integration/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
        linkId: getMenuLinkId('finance'),
    },
    {
        name: 'Supply chain and logistics',
        to: `${urlPrefix}/industry/supply-chain-data-integration/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
        linkId: getMenuLinkId('supply-chain-and-logistics'),
    },
    {
        name: 'Marketing',
        to: `${urlPrefix}/industry/marketing-data-integration/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
        linkId: getMenuLinkId('marketing'),
    },
    {
        name: 'Ecommerce',
        to: `${urlPrefix}/industry/ecommerce-data-integration/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
        linkId: getMenuLinkId('ecommerce'),
    },
    {
        name: 'Healthcare & wellness',
        to: `${urlPrefix}/industry/healthcare-data-integration/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
        linkId: getMenuLinkId('healthcare'),
    },
];

export const technologySolutionItems: MenuCardItem[] = [
    {
        name: 'Private deployments',
        to: `${urlPrefix}/technology/private-deployments/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
        linkId: getMenuLinkId('private-deployments'),
    },
    {
        name: 'Apache Iceberg',
        to: `${urlPrefix}/technology/apache-iceberg/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
        linkId: getMenuLinkId('apache-iceberg'),
    },
    {
        name: 'Netsuite',
        to: `${urlPrefix}/technology/netsuite-data-integration/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
        linkId: getMenuLinkId('netsuite'),
    },
    {
        name: 'Kafka',
        to: `${urlPrefix}/technology/kafka-streaming-integration/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
        linkId: getMenuLinkId('kafka'),
    },
    {
        name: 'Snowflake',
        to: `${urlPrefix}/technology/real-time-snowflake-streaming/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
        linkId: getMenuLinkId('snowflake'),
    },
];
