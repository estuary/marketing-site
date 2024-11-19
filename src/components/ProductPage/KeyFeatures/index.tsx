import { useMediaQuery } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useMemo } from 'react';
import clsx from 'clsx';
import { HTMLTooltipProps } from '../../HTMLTooltip';
import Container from '../../Container';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import KeyFeature from './KeyFeature';
import { features } from './features';
import {
    imageWrapper,
    keyFeaturesList,
    keyFeaturesListLeft,
    keyFeaturesListRight,
    keyFeaturesWrapper,
    textWrapper,
} from './styles.module.less';

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

const KeyFeatures = () => {
    const isDesktop = useMediaQuery('(min-width:811px)');

    const leftFeatures = useMemo(
        () => [
            {
                feature: features.noCodeConnectors,
                icon: (
                    <StaticImage
                        placeholder="none"
                        alt="No-code connectors"
                        src="../../../svgs/product-page/section-three/no-code.svg"
                    />
                ),
            },
            {
                feature: features.endToEndCdc,
                icon: (
                    <StaticImage
                        placeholder="none"
                        alt="End-to-end CDC"
                        src="../../../svgs/product-page/section-three/cdc.svg"
                    />
                ),
            },
            {
                feature: features.kafkaCompatible,
                icon: (
                    <StaticImage
                        placeholder="none"
                        alt="Kafka"
                        src="../../../svgs/product-page/section-three/kafka.svg"
                    />
                ),
            },
            {
                feature: features.realTimeAndBatch,
                icon: (
                    <StaticImage
                        placeholder="none"
                        alt="Real-time and batch"
                        src="../../../svgs/product-page/section-three/time.svg"
                    />
                ),
            },
            {
                feature: features.privateStorage,
                icon: (
                    <StaticImage
                        placeholder="none"
                        alt="Private storage"
                        src="../../../svgs/product-page/section-three/storage.svg"
                    />
                ),
            },
        ],
        []
    );

    const rightFeatures = useMemo(
        () => [
            {
                feature: features.eltAndEtl,
                icon: (
                    <StaticImage
                        placeholder="none"
                        alt="Data ops"
                        src="../../../svgs/product-page/section-three/data-ops.svg"
                    />
                ),
            },
            {
                feature: features.manyToMany,
                icon: (
                    <StaticImage
                        placeholder="none"
                        alt="Many to many"
                        src="../../../svgs/product-page/section-three/source.svg"
                    />
                ),
            },
            {
                feature: features.backfillAndReplay,
                icon: (
                    <StaticImage
                        placeholder="none"
                        alt="Backfill and replay"
                        src="../../../svgs/product-page/section-three/replay.svg"
                    />
                ),
            },
            {
                feature: features.schemaEvolution,
                icon: (
                    <StaticImage
                        placeholder="none"
                        alt="Schema evolution"
                        src="../../../svgs/product-page/section-three/schema.svg"
                    />
                ),
                props: { ...tooltipRightProps, disableInteractive: false },
            },
            {
                feature: features.multiCloud,
                icon: (
                    <StaticImage
                        placeholder="none"
                        alt="Multi Cloud"
                        src="../../../svgs/product-page/section-three/multi-cloud.svg"
                    />
                ),
            },
        ],
        []
    );

    return (
        <section className={defaultWrapperDarkBlue}>
            <Container isVertical>
                <div className={textWrapper}>
                    <h2>KEY FEATURES</h2>
                    <p>
                        Estuary Flow stands out because it brings together the
                        best of CDC, real-time, and batch with modern data
                        engineering best practices, enabling the best of both
                        worlds, without managing infrastructure.
                    </p>
                </div>
                <div className={keyFeaturesWrapper}>
                    <div className={clsx(keyFeaturesList, keyFeaturesListLeft)}>
                        {leftFeatures.map(({ feature, icon }) => (
                            <KeyFeature
                                key={feature.title}
                                props={tooltipLeftProps}
                                feature={feature}
                                icon={icon}
                                isDesktop={isDesktop}
                            />
                        ))}
                    </div>
                    <div className={imageWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Flow"
                            src="../../../images/product-page/section-three/middle-circle.png"
                        />
                    </div>
                    <div
                        className={clsx(keyFeaturesList, keyFeaturesListRight)}
                    >
                        {rightFeatures.map(({ feature, icon, props }) => (
                            <KeyFeature
                                key={feature.title}
                                props={props ?? tooltipRightProps}
                                feature={feature}
                                icon={icon}
                                isDesktop={isDesktop}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default KeyFeatures;
