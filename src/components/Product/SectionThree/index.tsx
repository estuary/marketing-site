import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
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
} from './styles';

const SectionThree = () => {
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
                        <KeyFeature
                            keyFeature="No-code connectors"
                            icon={
                                <StaticImage
                                    placeholder="none"
                                    alt="Key feature - No-code connectors"
                                    src="../../../svgs/product-page/section-three/no-code.svg"
                                    layout="constrained"
                                    loading="lazy"
                                />
                            }
                            isReversed
                        />
                        <KeyFeature
                            keyFeature="End-to-end CDC"
                            icon={
                                <StaticImage
                                    placeholder="none"
                                    alt="Key feature - End-to-end CDC"
                                    src="../../../svgs/product-page/section-three/cdc.svg"
                                    layout="constrained"
                                    loading="lazy"
                                />
                            }
                            isReversed
                        />
                        <KeyFeature
                            keyFeature="Real-time and batch"
                            icon={
                                <StaticImage
                                    placeholder="none"
                                    alt="Key feature - Real-time and batch"
                                    src="../../../svgs/product-page/section-three/time.svg"
                                    layout="constrained"
                                    loading="lazy"
                                />
                            }
                            isReversed
                        />
                        <KeyFeature
                            keyFeature="Private storage"
                            icon={
                                <StaticImage
                                    placeholder="none"
                                    alt="Key feature - Private storage"
                                    src="../../../svgs/product-page/section-three/storage.svg"
                                    layout="constrained"
                                    loading="lazy"
                                />
                            }
                            isReversed
                        />
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
                        <KeyFeature
                            keyFeature="ELT and ETL"
                            icon={
                                <StaticImage
                                    placeholder="none"
                                    alt="Key feature - Data ops"
                                    src="../../../svgs/product-page/section-three/data-ops.svg"
                                    layout="constrained"
                                    loading="lazy"
                                />
                            }
                        />
                        <KeyFeature
                            keyFeature="Many to many"
                            icon={
                                <StaticImage
                                    placeholder="none"
                                    alt="Key feature - Many to many"
                                    src="../../../svgs/product-page/section-three/source.svg"
                                    layout="constrained"
                                    loading="lazy"
                                />
                            }
                        />
                        <KeyFeature
                            keyFeature="Schema evolution"
                            icon={
                                <StaticImage
                                    placeholder="none"
                                    alt="Key feature - Schema evolution"
                                    src="../../../svgs/product-page/section-three/schema.svg"
                                    layout="constrained"
                                    loading="lazy"
                                />
                            }
                        />
                        <KeyFeature
                            keyFeature="Private storage"
                            icon={
                                <StaticImage
                                    placeholder="none"
                                    alt="Key feature - Private storage"
                                    src="../../../svgs/product-page/section-three/replay.svg"
                                    layout="constrained"
                                    loading="lazy"
                                />
                            }
                        />
                    </KeyFeaturesListRight>
                </KeyFeaturesWrapper>
            </Container>
        </DefaultWrapperDarkBlue>
    );
};

export default SectionThree;
