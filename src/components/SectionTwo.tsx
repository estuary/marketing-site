import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import FlowLogo from "../svgs/flow-logo.svg"

const SectionTwo = () => {
    return (
        <div className="section-two">
            <div className="section-two-header-wrapper global-max-width">
                <div className="section-two-header-subwrapper">
                    <h2 className="section-two-header">
                        Move and{" "}
                        <span className="section-two-header-colortext">
                            transform your data
                        </span>{" "}
                        from where it is to where you want it
                        <span className="section-two-header-colortext">
                            {" "}
                            in milliseconds
                        </span>
                        , without scheduling.
                    </h2>
                    <p className="section-two-subtext">
                        Capture from clouds, databases, and SaaS apps using
                        real-time ETL, create real-time transformations and
                        materialized views, for a consistent, exact copy of your
                        data powering both analytics and operations.
                    </p>
                </div>
                <div className="section-two-header-vectors">
                    <FlowLogo className="product-flow-section-one-image" />
                </div>
            </div>
            <div className="section-two-first-graphic-wrapper global-max-width">
                <StaticImage
                    placeholder="none"
                    alt="dataflow graphic"
                    src="../images/section-two-data-graphic.png"
                    layout="constrained"
                    width={777}
                    height={429}
                    quality={100}
                    className="section-two-first-graphic"
                />
            </div>
            <div className="section-two-tiles-wrapper global-max-width">
                <div className="section-two-tile-wrapper">
                    <div className="section-two-tile">
                        <h3 className="section-two-tile-title">
                            Tools the whole team can use
                        </h3>
                        <p className="section-two-tile-text">
                            Make updates through Flow’s UI or CLI. Programmatic
                            access for the ability to easily embed and
                            whitelabel pipelines.
                        </p>
                    </div>
                    <div className="section-two-tile">
                        <h3 className="section-two-tile-title">Automation</h3>
                        <p className="section-two-tile-text">
                            No scheduling or orchestration tools required.
                            Automated schema management and data deduplication.
                        </p>
                    </div>
                </div>
                <div className="section-two-tile-wrapper">
                    <div className="section-two-tile">
                        <h3 className="section-two-tile-title">Reliability</h3>
                        <p className="section-two-tile-text">
                            Proven, fault-tolerant architecture. Built upon
                            cloud storage, extended with real-time capabilities.
                        </p>
                    </div>
                    <div className="section-two-tile">
                        <h3 className="section-two-tile-title">Scale</h3>
                        <p className="section-two-tile-text">
                            Powering active workloads at 7GB/s CDC from any size
                            database.
                        </p>
                    </div>
                    <div className="section-two-tile">
                        <h3 className="section-two-tile-title">
                            Accuracy & Control
                        </h3>
                        <p className="section-two-tile-text">
                            Your pipelines, how you want them. Safeguard your
                            data products with built in, customizable schema
                            controls. Idempotent, exactly once semantics.
                        </p>
                    </div>
                </div>

                <div className="section-two-bottom-header">
                    <div className="section-two-bottom-left">
                        <h2 className="section-two-bottom-title">
                            Real-time database replication
                        </h2>
                        <ul className="section-two-bottom-header-ul">
                            <li>
                                Powering exact copies of your data where you
                                want them. Supports databases of 10TB+.
                            </li>
                            <li>
                                Database connectors & real-time Salesforce
                                integration built in-house.
                            </li>
                            <li>
                                Supports open source batch-based connectors.
                                Bring any Airbyte connector in and run it
                                enabling access to 200+ connectors.
                            </li>
                        </ul>
                    </div>
                    <div className="section-two-bottom-right">
                        <StaticImage
                            placeholder="none"
                            alt="estuary product screenshot"
                            src="../images/realtime-replication.png"
                            className="section-two-second-graphic"
                            layout="fixed"
                            quality={100}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
