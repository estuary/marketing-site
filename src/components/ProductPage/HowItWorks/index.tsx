import { StaticImage } from 'gatsby-plugin-image';
import Carousel from '../../Carousel';
import FlowCycle from '../../../svgs/flow-cycle.svg';
import Container from '../../Container';
import Hover from './Hover';
import {
    wrapper,
    slideStyle,
    tabletImageWrapper,
    desktopImageWrapper,
    mobileImageWrapper,
    slideDescription,
} from './styles.module.less';

const HowItWorks = () => {
    return (
        <section className={wrapper}>
            <Container isVertical>
                <h2>How it works</h2>
                <Carousel
                    hasArrow
                    aria-label="How Estuary Flow works carousel"
                    arrowColor="var(--grey)"
                    hasMultipleItemsSlide
                    hasViewport
                >
                    <div className={slideStyle}>
                        <div className={desktopImageWrapper}>
                            <Hover slide={1}>
                                <FlowCycle width="100%" height="100%" />
                            </Hover>
                        </div>
                        <div className={tabletImageWrapper}>
                            <StaticImage
                                placeholder="none"
                                alt="Flow"
                                src="../../../images/product-page/section-two/tablet/slide-1.png"
                                loading="eager"
                            />
                        </div>
                        <div className={mobileImageWrapper}>
                            <StaticImage
                                placeholder="none"
                                alt="Flow"
                                src="../../../images/product-page/section-two/mobile/slide-1.png"
                                loading="eager"
                            />
                        </div>
                        <h3>Flow</h3>
                        <p className={slideDescription}>
                            Estuary Flow is built from the ground up for
                            real-time ETL across databases, data warehouses,
                            SaaS apps, and more. Just capture from sources, then
                            materialize to destinations - all in minutes without
                            coding. Let Estuary do the rest and manage the data
                            pipeline all for you.
                        </p>
                    </div>
                    <div className={slideStyle}>
                        <div className={desktopImageWrapper}>
                            <Hover slide={2}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Capture"
                                    src="../../../images/product-page/section-two/desktop/slide-2.png"
                                    quality={100}
                                />
                            </Hover>
                        </div>
                        <div className={tabletImageWrapper}>
                            <StaticImage
                                placeholder="none"
                                alt="Capture"
                                src="../../../images/product-page/section-two/tablet/slide-2.png"
                            />
                        </div>
                        <div className={mobileImageWrapper}>
                            <StaticImage
                                placeholder="none"
                                alt="Capture"
                                src="../../../images/product-page/section-two/mobile/slide-2.png"
                            />
                        </div>
                        <h3>Capture</h3>
                        <p className={slideDescription}>
                            Capture change data in real-time from databases
                            using streaming CDC, real-time messaging, APIs, SaaS
                            apps and more.
                        </p>
                    </div>
                    <div className={slideStyle}>
                        <div className={desktopImageWrapper}>
                            <Hover slide={3}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Stream, Store, Transform, Replay"
                                    src="../../../images/product-page/section-two/desktop/slide-3.png"
                                    quality={100}
                                />
                            </Hover>
                        </div>
                        <div className={tabletImageWrapper}>
                            <StaticImage
                                placeholder="none"
                                alt="Stream, Store, Transform, Replay"
                                src="../../../images/product-page/section-two/tablet/slide-3.png"
                            />
                        </div>
                        <div className={mobileImageWrapper}>
                            <StaticImage
                                placeholder="none"
                                alt="Stream, Store, Transform, Replay"
                                src="../../../images/product-page/section-two/mobile/slide-3.png"
                            />
                        </div>
                        <h3>Stream, Store, Transform, Replay</h3>
                        <p className={slideDescription}>
                            Stream data exactly with sub-100ms latency to all
                            destinations, transform it as needed. Store data
                            reliably as it streams using collections, durable
                            transaction logs of unlimited size, and replay
                            collections to backfill data or time travel.
                        </p>
                    </div>
                    <div className={slideStyle}>
                        <div className={desktopImageWrapper}>
                            <Hover slide={4}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Materialize"
                                    src="../../../images/product-page/section-two/desktop/slide-4.png"
                                    quality={100}
                                />
                            </Hover>
                        </div>
                        <div className={tabletImageWrapper}>
                            <StaticImage
                                placeholder="none"
                                alt="Materialize"
                                src="../../../images/product-page/section-two/tablet/slide-4.png"
                            />
                        </div>
                        <div className={mobileImageWrapper}>
                            <StaticImage
                                placeholder="none"
                                alt="Materialize"
                                src="../../../images/product-page/section-two/mobile/slide-4.png"
                            />
                        </div>
                        <h3>Materialize</h3>
                        <p className={slideDescription}>
                            Write data at any speed, from real-time streaming to
                            hour+ intervals, into side-by-side destinations to
                            support analytics, operations, and AI. Update data
                            in place or add all change data as needed.
                        </p>
                    </div>
                </Carousel>
            </Container>
        </section>
    );
};

export default HowItWorks;
