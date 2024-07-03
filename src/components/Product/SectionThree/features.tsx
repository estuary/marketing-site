import React, { ReactNode } from 'react';
import { TooltipLink } from './styles';

interface Features {
    title: string;
    description: ReactNode;
}

export const features: { [key: string]: Features } = {
    noCodeConnectors: {
        title: 'No-code connectors',
        description:
            'Connect apps, analytics, and AI using 100s of streaming CDC, real-time, and batch no-code connectors built by Estuary for speed and scale.',
    },
    endToEndCdc: {
        title: 'End-to-end CDC',
        description: (
            <>
                Perform end-to-end streaming CDC.
                <ul>
                    <li>Stream transaction logs + incremental backfill.</li>
                    <li>Capture change data to a collection.</li>
                    <li>Reuse for transformations or destinations.</li>
                </ul>
            </>
        ),
    },
    realTimeAndBatch: {
        title: 'Real-time and batch',
        description:
            'Connect apps, analytics, and AI using 100s of streaming CDC, real-time, and batch no-code connectors built by Estuary for speed and scale.',
    },
    privateStorage: {
        title: 'Private storage',
        description:
            'As you capture data, Flow automatically stores each stream as a reusable collection, like a Kafka topic but with unlimited storage. It is a durable append-only transaction log stored in your own private account so you can set security rules and encryption.',
    },
    eltAndEtl: {
        title: 'ELT and ETL',
        description:
            'Transform and derive data in real-time (ETL), using SQL or Typescript for operations, or use dbt to transform data (ELT) for analytics.',
    },
    manyToMany: {
        title: 'Many to many',
        description:
            'Move data from many sources to collections, then to many destinations all at once. Share and reuse data across projects, or replace sources and destinations without impacting others.',
    },
    schemaEvolution: {
        title: 'Schema evolution',
        description: (
            <>
                <span>
                    Automatically inferred and managed from source to
                    destination using{' '}
                    <TooltipLink
                        href="https://docs.estuary.dev/concepts/advanced/evolutions/"
                        target="_blank"
                    >
                        schema evolution
                    </TooltipLink>
                    .
                </span>
                <ul>
                    <li>Automated downstream updates.</li>
                    <li>Continuous data validation and testing.</li>
                </ul>
                CLI and API Automation using flowctl.
            </>
        ),
    },
    backfillAndReplay: {
        title: 'Backfill and replay',
        description:
            'Reuse collections to backfill destinations enabling fast and effective one-to-many distribution, streaming transformations and time travel, at any time.',
    },
};
