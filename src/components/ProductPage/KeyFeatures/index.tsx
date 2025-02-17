import { useMediaQuery } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { useMemo } from 'react';
import clsx from 'clsx';
import { HTMLTooltipProps } from '../../HTMLTooltip';
import Container from '../../Container';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import NoCodeIcon from '../../../svgs/product-page/section-three/no-code.svg';
import CdcIcon from '../../../svgs/cdc.svg';
import KafkaIcon from '../../../svgs/kafka.svg';
import TimeIcon from '../../../svgs/time.svg';
import StorageIcon from '../../../svgs/storage.svg';
import DataOpsIcon from '../../../svgs/data-ops.svg';
import SourceIcon from '../../../svgs/source.svg';
import ReplayIcon from '../../../svgs/replay.svg';
import SchemaIcon from '../../../svgs/schema.svg';
import MultiCloudIcon from '../../../svgs/multi-cloud.svg';
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
    color: 'var(--white)',
    borderColor: 'var(--violet300)',
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

const iconColor = '#fff';

const KeyFeatures = () => {
    const isDesktop = useMediaQuery('(min-width:811px)');

    const leftFeatures = useMemo(
        () => [
            {
                feature: features.noCodeConnectors,
                icon: <NoCodeIcon color={iconColor} />,
            },
            {
                feature: features.endToEndCdc,
                icon: <CdcIcon color={iconColor} />,
            },
            {
                feature: features.kafkaCompatible,
                icon: <KafkaIcon color={iconColor} />,
            },
            {
                feature: features.realTimeAndBatch,
                icon: <TimeIcon color={iconColor} />,
            },
            {
                feature: features.privateStorage,
                icon: <StorageIcon color={iconColor} />,
            },
        ],
        []
    );

    const rightFeatures = useMemo(
        () => [
            {
                feature: features.eltAndEtl,
                icon: <DataOpsIcon color={iconColor} />,
            },
            {
                feature: features.manyToMany,
                icon: <SourceIcon color={iconColor} />,
            },
            {
                feature: features.backfillAndReplay,
                icon: <ReplayIcon color={iconColor} />,
            },
            {
                feature: features.schemaEvolution,
                icon: <SchemaIcon color={iconColor} />,
                props: { ...tooltipRightProps, disableInteractive: false },
            },
            {
                feature: features.multiCloud,
                icon: <MultiCloudIcon color={iconColor} />,
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
