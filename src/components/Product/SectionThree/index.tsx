import { useMediaQuery } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactNode } from 'react';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import HTMLTooltip, { HTMLTooltipProps } from '../../HTMLTooltip';
import KeyFeature from './KeyFeature';
import {
    Container,
    ImageWrapper,
    KeyFeaturesListLeft,
    KeyFeaturesListRight,
    KeyFeaturesWrapper,
    Subtitle,
    TextWrapper,
    Title,
    TooltipLink,
} from './styles';

const tooltipProps = {
    backgroundColor: '#091F38',
    color: '#fff',
    borderColor: '#A4B6F4',
    borderRadius: 36,
    padding: 20,
    maxWidth: 292,
};

const tooltipLeftProps: Omit<HTMLTooltipProps, 'children' | 'title'> = {
    ...tooltipProps,
    placement: 'left',
};

const tooltipRightProps: Omit<HTMLTooltipProps, 'children' | 'title'> = {
    ...tooltipProps,
    placement: 'right',
};

interface Features {
    title: string;
    description: ReactNode;
}

const features: { [key: string]: Features } = {
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

const SectionThree = () => {
    const isDesktop = useMediaQuery('(min-width:811px)');

    const renderKeyFeature = (
        props: Omit<HTMLTooltipProps, 'children' | 'title'>,
        feature: any,
        icon: JSX.Element
    ) => {
        const keyFeature = (
            <KeyFeature
                title={feature.title}
                description={feature.description}
                icon={icon}
                isReversed={props.placement === 'left'}
            />
        );

        return isDesktop ? (
            <HTMLTooltip {...props} title={feature.description}>
                {keyFeature}
            </HTMLTooltip>
        ) : (
            <div>{keyFeature}</div>
        );
    };

    return (
        <DefaultWrapperDarkBlue>
            <Container>
                <TextWrapper>
                    <Title>KEY FEATURES</Title>
                    <Subtitle>
                        Estuary Flow stands out because it brings together the
                        best of CDC, real-time, and batch with modern data
                        engineering best practices, enabling the best of both
                        worlds, without managing infrastructure.
                    </Subtitle>
                </TextWrapper>
                <KeyFeaturesWrapper>
                    <KeyFeaturesListLeft>
                        {renderKeyFeature(
                            tooltipLeftProps,
                            features.noCodeConnectors,
                            <StaticImage
                                placeholder="none"
                                alt="Key feature - No-code connectors"
                                src="../../../svgs/product-page/section-three/no-code.svg"
                                layout="constrained"
                                loading="lazy"
                            />
                        )}
                        {renderKeyFeature(
                            tooltipLeftProps,
                            features.endToEndCdc,
                            <StaticImage
                                placeholder="none"
                                alt="Key feature - End-to-end CDC"
                                src="../../../svgs/product-page/section-three/cdc.svg"
                                layout="constrained"
                                loading="lazy"
                            />
                        )}
                        {renderKeyFeature(
                            tooltipLeftProps,
                            features.realTimeAndBatch,
                            <StaticImage
                                placeholder="none"
                                alt="Key feature - Real-time and batch"
                                src="../../../svgs/product-page/section-three/time.svg"
                                layout="constrained"
                                loading="lazy"
                            />
                        )}
                        {renderKeyFeature(
                            tooltipLeftProps,
                            features.privateStorage,
                            <StaticImage
                                placeholder="none"
                                alt="Key feature - Private storage"
                                src="../../../svgs/product-page/section-three/storage.svg"
                                layout="constrained"
                                loading="lazy"
                            />
                        )}
                    </KeyFeaturesListLeft>
                    <ImageWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Key features circle"
                            src="../../../images/product-page/section-three/middle-circle.png"
                            layout="constrained"
                            loading="lazy"
                        />
                    </ImageWrapper>
                    <KeyFeaturesListRight>
                        {renderKeyFeature(
                            tooltipRightProps,
                            features.eltAndEtl,
                            <StaticImage
                                placeholder="none"
                                alt="Key feature - Data ops"
                                src="../../../svgs/product-page/section-three/data-ops.svg"
                                layout="constrained"
                                loading="lazy"
                            />
                        )}
                        {renderKeyFeature(
                            tooltipRightProps,
                            features.manyToMany,
                            <StaticImage
                                placeholder="none"
                                alt="Key feature - Many to many"
                                src="../../../svgs/product-page/section-three/source.svg"
                                layout="constrained"
                                loading="lazy"
                            />
                        )}
                        {renderKeyFeature(
                            { ...tooltipRightProps, disableInteractive: false },
                            features.schemaEvolution,
                            <StaticImage
                                placeholder="none"
                                alt="Key feature - Schema evolution"
                                src="../../../svgs/product-page/section-three/schema.svg"
                                layout="constrained"
                                loading="lazy"
                            />
                        )}
                        {renderKeyFeature(
                            tooltipRightProps,
                            features.backfillAndReplay,
                            <StaticImage
                                placeholder="none"
                                alt="Key feature - Backfill and replay"
                                src="../../../svgs/product-page/section-three/replay.svg"
                                layout="constrained"
                                loading="lazy"
                            />
                        )}
                    </KeyFeaturesListRight>
                </KeyFeaturesWrapper>
            </Container>
        </DefaultWrapperDarkBlue>
    );
};

export default SectionThree;
