import { useMediaQuery } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useMemo } from 'react';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import { HTMLTooltipProps } from '../../HTMLTooltip';
import KeyFeature from './KeyFeature';
import { features } from './features';
import {
    Container,
    ImageWrapper,
    KeyFeaturesListLeft,
    KeyFeaturesListRight,
    KeyFeaturesWrapper,
    Subtitle,
    TextWrapper,
    Title,
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

const SectionThree = () => {
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
                        layout="constrained"
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
                        layout="constrained"
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
                        layout="constrained"
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
                        layout="constrained"
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
                        layout="constrained"
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
                        layout="constrained"
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
                        layout="constrained"
                    />
                ),
                props: { ...tooltipRightProps, disableInteractive: false },
            },
            {
                feature: features.backfillAndReplay,
                icon: (
                    <StaticImage
                        placeholder="none"
                        alt="Backfill and replay"
                        src="../../../svgs/product-page/section-three/replay.svg"
                        layout="constrained"
                    />
                ),
            },
        ],
        []
    );

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
                    <KeyFeaturesListLeft className="key-features-list">
                        {leftFeatures.map(({ feature, icon }) => (
                            <KeyFeature
                                key={feature.title}
                                props={tooltipLeftProps}
                                feature={feature}
                                icon={icon}
                                isDesktop={isDesktop}
                            />
                        ))}
                    </KeyFeaturesListLeft>
                    <ImageWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Flow"
                            src="../../../images/product-page/section-three/middle-circle.png"
                            layout="constrained"
                        />
                    </ImageWrapper>
                    <KeyFeaturesListRight className="key-features-list">
                        {rightFeatures.map(({ feature, icon, props }) => (
                            <KeyFeature
                                key={feature.title}
                                props={props ?? tooltipRightProps}
                                feature={feature}
                                icon={icon}
                                isDesktop={isDesktop}
                            />
                        ))}
                    </KeyFeaturesListRight>
                </KeyFeaturesWrapper>
            </Container>
        </DefaultWrapperDarkBlue>
    );
};

export default SectionThree;
