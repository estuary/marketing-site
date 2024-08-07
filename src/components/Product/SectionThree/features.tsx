import React from 'react';
import { TooltipLink } from './styles';

interface Features {
    title: string;
    description: JSX.Element;
}

export const features: { [key: string]: Features } = {
    noCodeConnectors: {
        title: 'No-code connectors',
        description: (
            <p>
                Connect apps, analytics, and AI using 100s of streaming CDC,
                real-time, and batch no-code connectors built by Estuary for
                speed and scale.
            </p>
        ),
    },
    endToEndCdc: {
        title: 'End-to-end CDC',
        description: (
            <>
                <p>Perform end-to-end streaming CDC.</p>
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
        description: (
            <p>
                Connect apps, analytics, and AI using 100s of streaming CDC,
                real-time, and batch no-code connectors built by Estuary for
                speed and scale.
            </p>
        ),
    },
    privateStorage: {
        title: 'Private storage',
        description: (
            <p>
                As you capture data, Flow automatically stores each stream as a
                reusable collection, like a Kafka topic but with unlimited
                storage. It is a durable append-only transaction log stored in
                your own private account so you can set security rules and
                encryption.
            </p>
        ),
    },
    eltAndEtl: {
        title: 'ELT and ETL',
        description: (
            <p>
                Transform and derive data in real-time (ETL), using SQL or
                Typescript for operations, or use dbt to transform data (ELT)
                for analytics.
            </p>
        ),
    },
    manyToMany: {
        title: 'Many to many',
        description: (
            <p>
                Move data from many sources to collections, then to many
                destinations all at once. Share and reuse data across projects,
                or replace sources and destinations without impacting others.
            </p>
        ),
    },
    schemaEvolution: {
        title: 'Schema evolution',
        description: (
            <>
                <p>
                    Automatically inferred and managed from source to
                    destination using{' '}
                    <TooltipLink
                        href="https://docs.estuary.dev/concepts/advanced/evolutions/"
                        target="_blank"
                    >
                        schema evolution
                    </TooltipLink>
                    .
                </p>
                <ul>
                    <li>Automated downstream updates.</li>
                    <li>Continuous data validation and testing.</li>
                </ul>
                <p>CLI and API Automation using flowctl.</p>
            </>
        ),
    },
    backfillAndReplay: {
        title: 'Backfill and replay',
        description: (
            <p>
                Reuse collections to backfill destinations enabling fast and
                effective one-to-many distribution, streaming transformations
                and time travel, at any time.
            </p>
        ),
    },
};
