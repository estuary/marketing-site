import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Carousel from '../../../../components/Carousel';
import { DefaultWrapper } from '../../../../styles/wrappers';
import Hover from './Hover';
import {
    Container,
    DesktopImageWrapper,
    MobileImageWrapper,
    Slide,
    SlideDescription,
    SlideTitle,
    Subtitle,
    TabletImageWrapper,
    TextWrapper,
    Title,
} from './styles';

const DataIntoStream = () => {
    return (
        <DefaultWrapper>
            <Container>
                <TextWrapper>
                    <Title>HOW IT WORKS</Title>
                    <Subtitle>
                        Estuary Flow is built from the ground up - the first
                        truly decoupled storage-compute data streaming with data
                        pipeline services and stream-native connectors - to keep
                        real-time data in sync across databases, data
                        warehouses, SaaS apps, and more.
                    </Subtitle>
                </TextWrapper>
                <Carousel
                    hasArrow
                    aria-label="How Estuary Flow works carousel"
                    arrowColor="#47506D"
                >
                    <Slide>
                        <DesktopImageWrapper>
                            <Hover slide={1}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Graphic - Capture"
                                    src="../../../../images/product-page/section-two/desktop/slide-1.png"
                                    layout="constrained"
                                    loading="lazy"
                                    quality={100}
                                />
                            </Hover>
                        </DesktopImageWrapper>
                        <TabletImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Capture"
                                src="../../../../images/product-page/section-two/tablet/slide-1.png"
                                layout="constrained"
                                loading="lazy"
                            />
                        </TabletImageWrapper>
                        <MobileImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Capture"
                                src="../../../../images/product-page/section-two/mobile/slide-1.png"
                                layout="constrained"
                                loading="lazy"
                            />
                        </MobileImageWrapper>
                        <SlideTitle>Capture</SlideTitle>
                        <SlideDescription>
                            Capture change data in real-time from databases
                            using streaming CDC, real-time messaging, APIs, SaaS
                            apps and more.
                        </SlideDescription>
                    </Slide>
                    <Slide>
                        <DesktopImageWrapper>
                            <Hover slide={2}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Graphic - Stream, Store, Transform, Replay"
                                    src="../../../../images/product-page/section-two/desktop/slide-2.png"
                                    layout="constrained"
                                    loading="lazy"
                                    quality={100}
                                />
                            </Hover>
                        </DesktopImageWrapper>
                        <TabletImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Stream, Store, Transform, Replay"
                                src="../../../../images/product-page/section-two/tablet/slide-2.png"
                                layout="constrained"
                                loading="lazy"
                            />
                        </TabletImageWrapper>
                        <MobileImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Stream, Store, Transform, Replay"
                                src="../../../../images/product-page/section-two/mobile/slide-2.png"
                                layout="constrained"
                                loading="lazy"
                            />
                        </MobileImageWrapper>
                        <SlideTitle>
                            Stream, Store, Transform, Replay
                        </SlideTitle>
                        <SlideDescription>
                            Stream data exactly with sub-100ms latency to all
                            destinations, transform it as needed. Store data
                            reliably as it streams using collections, durable
                            transaction logs of unlimited size, and replay
                            collections to backfill data or time travel.
                        </SlideDescription>
                    </Slide>
                    <Slide>
                        <DesktopImageWrapper>
                            <Hover slide={3}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Graphic - Materialize"
                                    src="../../../../images/product-page/section-two/desktop/slide-3.png"
                                    layout="constrained"
                                    loading="lazy"
                                    quality={100}
                                />
                            </Hover>
                        </DesktopImageWrapper>
                        <TabletImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Materialize"
                                src="../../../../images/product-page/section-two/tablet/slide-3.png"
                                layout="constrained"
                                loading="lazy"
                            />
                        </TabletImageWrapper>
                        <MobileImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Materialize"
                                src="../../../../images/product-page/section-two/mobile/slide-3.png"
                                layout="constrained"
                                loading="lazy"
                            />
                        </MobileImageWrapper>
                        <SlideTitle>Materialize</SlideTitle>
                        <SlideDescription>
                            Write data at any speed, from real-time streaming to
                            hour +intervals, into side-by-side destinations to
                            support analytics, operations, and AI. Update data
                            in place or add all change data as needed.
                        </SlideDescription>
                    </Slide>
                    <Slide>
                        <DesktopImageWrapper>
                            <Hover slide={4}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Graphic - Flow"
                                    src="../../../../images/product-page/section-two/desktop/slide-4.png"
                                    layout="constrained"
                                    loading="lazy"
                                    quality={100}
                                />
                            </Hover>
                        </DesktopImageWrapper>
                        <TabletImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow"
                                src="../../../../images/product-page/section-two/tablet/slide-4.png"
                                layout="constrained"
                                loading="lazy"
                            />
                        </TabletImageWrapper>
                        <MobileImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow"
                                src="../../../../images/product-page/section-two/mobile/slide-4.png"
                                layout="constrained"
                                loading="lazy"
                            />
                        </MobileImageWrapper>
                        <SlideTitle>Flow</SlideTitle>
                        <SlideDescription>
                            Let Estuary do the rest - deliver data end-to-end
                            exactly once as data;, manage schema inference,
                            evolution, and automation;, scale elastically with
                            fully decoupled streaming storage-compute, - and
                            manage the data pipeline for you.
                        </SlideDescription>
                    </Slide>
                </Carousel>
            </Container>
        </DefaultWrapper>
    );
};

export default DataIntoStream;
