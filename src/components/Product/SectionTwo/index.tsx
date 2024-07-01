import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { DefaultWrapperGrey } from '../../../styles/wrappers';
import Carousel from '../../Carousel';
import Hover from './Hover';
import {
    Container,
    DesktopImageWrapper,
    MobileImageWrapper,
    Slide,
    SlideDescription,
    SlideTitle,
    TabletImageWrapper,
    TextWrapper,
    Title,
} from './styles';

const SectionTwo = () => {
    return (
        <DefaultWrapperGrey style={{ paddingTop: '60px' }}>
            <Container>
                <TextWrapper>
                    <Title>HOW IT WORKS</Title>
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
                                    alt="Graphic - Flow"
                                    src="../../../images/product-page/section-two/desktop/slide-1.png"
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
                                src="../../../images/product-page/section-two/tablet/slide-1.png"
                                layout="constrained"
                                loading="lazy"
                            />
                        </TabletImageWrapper>
                        <MobileImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Flow"
                                src="../../../images/product-page/section-two/mobile/slide-1.png"
                                layout="constrained"
                                loading="lazy"
                            />
                        </MobileImageWrapper>
                        <SlideTitle>Flow</SlideTitle>
                        <SlideDescription>
                            Estuary Flow is built from the ground up for
                            real-time ETL across databases, data warehouses,
                            SaaS apps, and more. Just capture from sources, then
                            materialize to destinations - all in minutes without
                            coding. Let Estuary do the rest and manage the data
                            pipeline all for you.
                        </SlideDescription>
                    </Slide>
                    <Slide>
                        <DesktopImageWrapper>
                            <Hover slide={2}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Graphic - Capture"
                                    src="../../../images/product-page/section-two/desktop/slide-2.png"
                                    layout="constrained"
                                    loading="eager"
                                    quality={100}
                                />
                            </Hover>
                        </DesktopImageWrapper>
                        <TabletImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Capture"
                                src="../../../images/product-page/section-two/tablet/slide-2.png"
                                layout="constrained"
                                loading="eager"
                            />
                        </TabletImageWrapper>
                        <MobileImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Capture"
                                src="../../../images/product-page/section-two/mobile/slide-2.png"
                                layout="constrained"
                                loading="eager"
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
                            <Hover slide={3}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Graphic - Stream, Store, Transform, Replay"
                                    src="../../../images/product-page/section-two/desktop/slide-3.png"
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
                                src="../../../images/product-page/section-two/tablet/slide-3.png"
                                layout="constrained"
                                loading="lazy"
                            />
                        </TabletImageWrapper>
                        <MobileImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Stream, Store, Transform, Replay"
                                src="../../../images/product-page/section-two/mobile/slide-3.png"
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
                            <Hover slide={4}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Graphic - Materialize"
                                    src="../../../images/product-page/section-two/desktop/slide-4.png"
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
                                src="../../../images/product-page/section-two/tablet/slide-4.png"
                                layout="constrained"
                                loading="lazy"
                            />
                        </TabletImageWrapper>
                        <MobileImageWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Graphic - Materialize"
                                src="../../../images/product-page/section-two/mobile/slide-4.png"
                                layout="constrained"
                                loading="lazy"
                            />
                        </MobileImageWrapper>
                        <SlideTitle>Materialize</SlideTitle>
                        <SlideDescription>
                            Write data at any speed, from real-time streaming to
                            hour+ intervals, into side-by-side destinations to
                            support analytics, operations, and AI. Update data
                            in place or add all change data as needed.
                        </SlideDescription>
                    </Slide>
                </Carousel>
            </Container>
        </DefaultWrapperGrey>
    );
};

export default SectionTwo;
