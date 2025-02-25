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
        name: 'Data movement',
        to: `${urlPrefix}/use-cases/data-movement/`,
        description: '',
        Image: () => <AdaptedDocIcon />,
    },
    {
        name: 'Data lakes and warehouses',
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
        name: 'Real-time analytics',
        to: `${urlPrefix}/use-cases/real-time-analytics/`,
        description: '',
        Image: () => <AdaptedDocIcon />,
    },
];

export const industrySolutionItems: MenuCardItem[] = [
    {
        name: 'Finance',
        to: `${urlPrefix}/industry/finance-data-integration/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
    },
    {
        name: 'Supply chain and logistics',
        to: `${urlPrefix}/industry/supply-chain-data-integration/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
    },
    {
        name: 'Marketing',
        to: `${urlPrefix}/industry/marketing-data-integration/`,
        description: '',
        Image: () => <AdaptedPieChartIcon />,
    },
];

export const technologySolutionItems: MenuCardItem[] = [
    {
        name: 'Private deployments',
        to: `${urlPrefix}/technology/private-deployments/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
    },
    {
        name: 'Apache Iceberg',
        to: `${urlPrefix}/technology/apache-iceberg/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
    },
    {
        name: 'Netsuite',
        to: `${urlPrefix}/technology/netsuite-data-integration/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
    },
    {
        name: 'Kafka',
        to: `${urlPrefix}/technology/kafka-streaming-integration/`,
        description: '',
        Image: () => <AdaptedNoCodeIcon />,
    },
];
