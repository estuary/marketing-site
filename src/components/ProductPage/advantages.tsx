import React from 'react';
import { OutboundLink } from '../OutboundLink';
import { docsPageUrl } from '../../../shared';

export const sectionSixAdvantages = [
    {
        id: 1,
        title: 'Use 100s of no-code connectors for apps, DBs, DWs, and more.',
    },
    {
        id: 2,
        title: (
            <>
                Use the Flow UI to build without coding, or the{' '}
                <OutboundLink
                    href={`${docsPageUrl}/concepts/flowctl/`}
                    target="_blank"
                >
                    flowctl
                </OutboundLink>{' '}
                CLI for development.
            </>
        ),
    },
    {
        id: 3,
        title: 'Transform using Streaming SQL (ETL) and Typescript (ETL) or dbt (ELT) in your warehouse.',
    },
];

export const sectionSevenAdvantages = [
    {
        id: 4,
        title: (
            <>
                Automate DataOps and integrate with other tooling using the{' '}
                <OutboundLink
                    href={`${docsPageUrl}/concepts/flowctl/`}
                    target="_blank"
                >
                    flowctl
                </OutboundLink>{' '}
                CLI.
            </>
        ),
    },
    {
        id: 5,
        title: (
            <>
                Use built-in pipeline{' '}
                <OutboundLink
                    href={`${docsPageUrl}/concepts/tests/`}
                    target="_blank"
                >
                    testing
                </OutboundLink>{' '}
                to validate data and pipeline flows automatically.
            </>
        ),
    },
    {
        id: 6,
        title: (
            <>
                Select advanced schema detection and automate{' '}
                <OutboundLink
                    href={`${docsPageUrl}/concepts/advanced/evolutions/`}
                    target="_blank"
                >
                    schema evolution
                </OutboundLink>
                .
            </>
        ),
    },
];

export const sectionEightAdvantages = [
    {
        id: 7,
        title: 'Be 4x more productive and focus more new development, less on troubleshooting.',
    },
    {
        id: 8,
        title: (
            <>
                Spend 2-5x less with low, predictable pricing (see{' '}
                <OutboundLink href="/pricing" target="_blank">
                    pricing
                </OutboundLink>
                .)
            </>
        ),
    },
    {
        id: 9,
        title: 'Minimize source loads and costs by extracting data only once from each source.',
    },
    {
        id: 10,
        title: 'Lower destination costs by using real-time extraction with batch loading. Then schedule faster updates only when you need them.',
    },
];

export const sectionNineAdvantages = [
    {
        id: 11,
        title: 'Stream in real-time at any scale, running over 7GB/sec in production just for 1 customer.',
    },
    {
        id: 12,
        title: 'Ensure data is never lost with exactly-once transactionally storage and delivery.',
    },
    {
        id: 13,
        title: 'Use built-in monitoring and alerting, and active-active load balancing and failover.',
    },
];
