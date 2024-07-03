import { useMediaQuery } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import HTMLTooltip, { HTMLTooltipProps } from '../../HTMLTooltip';
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
