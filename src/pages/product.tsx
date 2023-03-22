import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// @ts-ignore
import FlowLogo from "../svgs/flow-logo.svg"
import FlowCDC from "../svgs/product-flow-cdc.svg"
import SectionTwoDataCaptureImg1 from "../svgs/product-flow-section-two-data-capture-image1.svg"
import FlowLongtailSaas from "../svgs/product-flow-longtail-saas.svg"
import FlowPowerfulTransformations from "../svgs/product-flow-powerful-transformations.svg"
import FlowMaterializations from "../svgs/product-flow-materializations.svg"
import FlowTesting from "../svgs/product-flow-built-in-testing.svg"
import FlowFailure from "../svgs/product-flow-survive-any-failure.svg"
import FlowExactlyOnce from "../svgs/product-flow-exactly-once.svg"
import FlowMinimizeLoad from "../svgs/product-flow-minimize-load.svg"
import FlowScaling from "../svgs/product-flow-scaling.svg"
import FlowLiveReporting from "../svgs/product-flow-live-reporting.svg"
import FlowSchemaInference from "../svgs/product-flow-schema-inference.svg"

const ProductPage = () => {
    return (
        <Layout headerTheme="light">
            <div className="product-flow">
                <div className="product-flow-section-one-background-image-wrapper">
                    <div className="product-flow-section-one">
                        <div className="product-flow-section-one-left">
                            <h1 className="product-flow-section-one-h1">
                                Streaming ELT made simple
                            </h1>
                            <p className="product-flow-section-one-subtext">
                                Use it free with hands-on support. Scale without
                                bounds.
                            </p>
                            <Link
                                className="product-flow-section-one-try-it-button"
                                to="#"
                            >
                                Try it free
                            </Link>
                        </div>
                        <div className="product-flow-section-one-right">
                            <FlowLogo className="product-flow-section-one-image" />
                        </div>
                    </div>
                </div>
                <div className="product-flow-section-two-background-image-wrapper">
                    <div className="product-flow-section-two">
                        <div className="product-flow-section-two-left">
                            <FlowLogo className="product-flow-section-one-image" />
                            <div className="product-flow-section-two-gif-wrapper">
                                <FlowCDC className="product-flow-section-two-gif" />
                            </div>
                        </div>
                        <div className="product-flow-section-two-right">
                            <div>
                                <p className="product-flow-section-two-header-small">
                                    Data Movement
                                </p>
                                <h2 className="product-flow-section-two-topic-header">
                                    Data capture
                                </h2>
                                <p className="product-flow-section-two-topic-subtext">
                                    Capture your data from sources like
                                    databases and SaaS applications.
                                </p>
                                <div className="product-flow-topic-section-wrapper">
                                    <div className="product-flow-topic-wrapper">
                                        <div className="product-flow-section-two-topic-image-wrapper">
                                            <SectionTwoDataCaptureImg1 className="product-flow-section-two-topic-image" />
                                        </div>
                                        <p className="product-flow-section-two-topic-child">
                                            <span className="product-flow-bold">
                                                Real-time CDC{" "}
                                            </span>
                                            from databases. Built by the Estuary
                                            team to scale and ensure exactly
                                            once semantics.
                                        </p>
                                    </div>
                                    <div className="product-flow-topic-wrapper">
                                        <div className="product-flow-section-two-topic-image-wrapper">
                                            <StaticImage
                                                placeholder="none"
                                                alt="salesforce logo"
                                                src="../images/salesforce-logo.png"
                                                width={35}
                                                layout="fixed"
                                                className="product-flow-section-two-topic-image"
                                            />
                                        </div>
                                        <p className="product-flow-section-two-topic-child">
                                            <span className="product-flow-bold">
                                                Real-time SaaS integrations
                                            </span>{" "}
                                            built by the Estuary team for apps
                                            that support streaming.
                                        </p>
                                    </div>
                                    <div className="product-flow-topic-wrapper">
                                        <div className="product-flow-section-two-topic-image-wrapper">
                                            <FlowLongtailSaas className="product-flow-section-two-topic-image" />
                                        </div>
                                        <p className="product-flow-section-two-topic-child">
                                            <span className="product-flow-bold">
                                                Long-tail SaaS
                                            </span>
                                            . Integrate any Airbyte connector to
                                            access 200+ batch-based endpoints.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-flow-section-two-transformations-wrapper">
                                <p className="product-flow-section-two-header-small">
                                    Transformations
                                </p>
                                <h2 className="product-flow-section-two-topic-header">
                                    Powerful transformations
                                </h2>
                                <div className="product-flow-topic-wrapper">
                                    <div className="product-flow-section-two-topic-image-wrapper">
                                        <FlowPowerfulTransformations className="product-flow-section-two-topic-image" />
                                    </div>
                                    <p className="product-flow-section-two-topic-child">
                                        True streaming SQL and Javascript
                                        transformations.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h2 className="product-flow-section-two-topic-header">
                                    Materializations
                                </h2>
                                <div className="product-flow-topic-wrapper">
                                    <div className="product-flow-section-two-topic-image-wrapper">
                                        <FlowMaterializations className="product-flow-section-two-topic-image" />
                                    </div>
                                    <p className="product-flow-section-two-topic-child">
                                        Maintain low-latency views across
                                        systems of your choice. Built by the
                                        Estuary team, all materialization
                                        destinations are natively real-time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-flow-section-three">
                    <p className="section-four-header-small">Extensibility</p>
                    <div className="product-flow-section-three-top-wrapper">
                        <div className="product-flow-section-three-header-wrapper">
                            <h2 className="product-flow-section-three-header">
                                Easily add
                            </h2>
                            <h2 className="product-flow-section-three-header">
                                connectors through
                            </h2>
                            <h2 className="product-flow-section-three-header">
                                our open protocol
                            </h2>
                        </div>
                        <div>
                            <FlowLogo className="product-flow-section-one-image" />
                        </div>
                    </div>

                    <div>
                        <div className="product-flow-section-three-tile-wrapper">
                            <div className="product-flow-section-three-tile">
                                <div className="product-flow-section-two-topic-image-wrapper">
                                    <FlowTesting className="product-flow-section-two-topic-image" />
                                </div>
                                <h3 className="section-four-tile-title">
                                    Built-in testing
                                </h3>
                                <p className="section-four-tile-subtext">
                                    Unit tests ensure that you can be confident
                                    your data is accurate as you evolve
                                    pipelines
                                </p>
                            </div>
                            <div className="product-flow-section-three-tile">
                                <div className="product-flow-section-two-topic-image-wrapper">
                                    <FlowFailure className="product-flow-section-two-topic-image" />
                                </div>
                                <h3 className="section-four-tile-title">
                                    Survive any failure
                                </h3>
                                <p className="section-four-tile-subtext">
                                    Cross region and datacenter so that downtime
                                    in cloud providers won’t affect you.
                                </p>
                            </div>
                            <div className="product-flow-section-three-tile">
                                <div className="product-flow-section-two-topic-image-wrapper">
                                    <FlowExactlyOnce className="product-flow-section-two-topic-image" />
                                </div>
                                <h3 className="section-four-tile-title">
                                    Exactly-once semantics
                                </h3>
                                <p className="section-four-tile-subtext">
                                    Ensure transactional consistency so you can
                                    have precise world views – and not just
                                    eventually consistent or at-least once
                                    semantics.
                                </p>
                            </div>
                            <div className="product-flow-section-three-tile">
                                <div className="product-flow-section-two-topic-image-wrapper">
                                    <FlowMinimizeLoad className="product-flow-section-two-topic-image" />
                                </div>
                                <h3 className="section-four-tile-title">
                                    Minimize load on your systems
                                </h3>
                                <p className="section-four-tile-subtext">
                                    Pull data from your systems once using
                                    low-impact CDC, and Flow can help you use it
                                    across all your systems without having to
                                    re-sync.
                                </p>
                            </div>
                        </div>
                        <div className="product-flow-section-three-tile-wrapper">
                            <div className="product-flow-section-three-tile">
                                <div className="product-flow-section-two-topic-image-wrapper">
                                    <FlowScaling className="product-flow-section-two-topic-image" />
                                </div>
                                <h3 className="section-four-tile-title">
                                    Scaling
                                </h3>
                                <p className="section-four-tile-subtext">
                                    Flow is a distributed system which scales
                                    with your data and has been operated at data
                                    volumes up to 7 GB/s. Backfill terabytes of
                                    data in minutes from your source systems
                                    without breaking a sweat.
                                </p>
                            </div>
                            <div className="product-flow-section-three-tile">
                                <div className="product-flow-section-two-topic-image-wrapper">
                                    <FlowLiveReporting className="product-flow-section-two-topic-image" />
                                </div>
                                <h3 className="section-four-tile-title">
                                    Live reporting and monitoring
                                </h3>
                                <p className="section-four-tile-subtext">
                                    Know your data is flowing with
                                    up-to-the-minute reporting.
                                </p>
                            </div>
                            <div className="product-flow-section-three-tile">
                                <div className="product-flow-section-two-topic-image-wrapper">
                                    <FlowSchemaInference className="product-flow-section-two-topic-image" />
                                </div>
                                <h3 className="section-four-tile-title">
                                    Schema inference
                                </h3>
                                <p className="section-four-tile-subtext">
                                    Turn your unstructured data into structured
                                    data
                                </p>
                            </div>
                        </div>
                        <div className="section-four-try-it-button-wrapper">
                            <p className="section-four-try-it-header-text">
                                Use it free with hands-on support.  Scale
                                without bounds.
                            </p>
                            <Link className="section-four-try-it-button" to="#">
                                Try it free
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductPage