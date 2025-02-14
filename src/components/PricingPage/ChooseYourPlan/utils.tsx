import LockSvgIcon from '../../../svgs/pricing-page/lock.svg';
import CloudSvgIcon from '../../../svgs/pricing-page/cloud.svg';
import EnterpriseSvgIcon from '../../../svgs/pricing-page/enterprise.svg';
import { dashboardRegisterUrl } from '../../../../shared';

const iconSize = 35;

const getLinkId = (buttonName: string) =>
    `${buttonName}-button-pricing-page-plans-section`;

export const plans = [
    {
        icon: <LockSvgIcon width={iconSize} height={iconSize} />,
        title: 'Free',
        pricePerGb: 0,
        description: 'Free & Production ready. No credit card required.',
        button: {
            id: getLinkId('get-started'),
            title: 'Get started',
            href: dashboardRegisterUrl,
        },
        isFreePlan: true,
        benefits: [
            '10GB/month (2 Connector Instances)',
            'Millisecond Latency',
            'UI & CLI for Editing Pipelines',
            'Incremental Syncing',
            'Streaming Infrastructure',
        ],
    },
    {
        icon: <CloudSvgIcon width={iconSize} height={iconSize} />,
        title: 'Cloud',
        pricePerGb: 0.5,
        pricePerConnector: 100,
        description:
            "Expand your data pipeline and leverage Estuary's leading Support.",
        button: {
            id: getLinkId('try-it-free'),
            title: 'Try it Free',
            href: dashboardRegisterUrl,
        },
        isHighlighted: true,
        benefits: [
            'Up to 12 Connector Instances',
            'Data Stored in your Cloud',
            '99.9% Uptime SLA',
            'Standard Support (9x5) via Slack/Email',
        ],
    },
    {
        icon: <EnterpriseSvgIcon width={iconSize} height={iconSize} />,
        title: 'Enterprise',
        description: 'Get to the next level for mission-critical deployments.',
        button: {
            id: getLinkId('contact-us'),
            title: 'Contact Us',
            href: '/contact-us/',
        },
        benefits: [
            'SOC2 & HIPAA Reports',
            'Customer Success Manager',
            'Single Sign-On',
            'Private Deployments',
            'Custom Region Support',
            'PrivateLink & Google Service Connect',
            '24/7 Support',
            'Provisioned Servers',
        ],
    },
];
