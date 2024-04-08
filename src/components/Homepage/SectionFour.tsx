import * as React from "react"
import FlowLogo from "../../svgs/flow-logo.svg"
import Customer360 from "../../svgs/icon-customer-360.svg"
import DataMesh from "../../svgs/icon-data-mesh.svg"
import DataModernization from "../../svgs/icon-data-modernization.svg"
import DataReplication from "../../svgs/icon-data-replication.svg"
import DataSharing from "../../svgs/icon-data-sharing.svg"
import OperationalAnalytics from "../../svgs/icon-operational-analytics.svg"
import RealTimeAnalytics from "../../svgs/icon-real-time-analytics.svg"
import StreamingELT from "../../svgs/icon-streaming-elt.svg"
import { OutboundLink } from "../OutboundLink"

const SectionFour = () => {
    return (
        <div className="section-four">
            <p className="section-four-header-small">Features</p>
            <div className="section-four-header-wrapper">
                <h2 className="section-two-bottom-title">
                    A robust set of features
                </h2>
                <div className="section-four-header-vectors">
                    <FlowLogo className="product-flow-section-one-image" />
                </div>
            </div>
            <div>
                <div className="section-four-tile-wrapper">
                    <div className="section-four-tile">
                        <div className="icon-wrapper">
                            <DataReplication className="icon-image" />
                        </div>
                        <h3 className="section-four-tile-title">
                            Data replication & migration
                        </h3>
                        <p className="section-four-tile-subtext">
                            Centralize data with real-time replication.
                        </p>
                    </div>
                    <div className="section-four-tile">
                        <div className="icon-wrapper">
                            <StreamingELT className="icon-image" />
                        </div>
                        <h3 className="section-four-tile-title">
                            Streaming ETL
                        </h3>
                        <p className="section-four-tile-subtext">
                            Real-time ETL for always-up-to-date data in your
                            warehouse of choice.
                        </p>
                    </div>
                    <div className="section-four-tile">
                        <div className="icon-wrapper">
                            <DataModernization className="icon-image" />
                        </div>
                        <h3 className="section-four-tile-title">
                            Data Modernization
                        </h3>
                        <p className="section-four-tile-subtext">
                            Seamlessly connect legacy systems to a modern hybrid
                            cloud environment that’s fully extensible.
                        </p>
                    </div>
                    <div className="section-four-tile">
                        <div className="icon-wrapper">
                            <DataMesh className="icon-image" />
                        </div>
                        <h3 className="section-four-tile-title">Data mesh</h3>
                        <p className="section-four-tile-subtext">
                            Power your data mesh in real time with tools that
                            your entire company can use.
                        </p>
                    </div>
                </div>
                <div className="section-four-tile-wrapper">
                    <div className="section-four-tile">
                        <div className="icon-wrapper">
                            <OperationalAnalytics className="icon-image" />
                        </div>
                        <h3 className="section-four-tile-title">
                            Operational analytics
                        </h3>
                        <p className="section-four-tile-subtext">
                            Understand the performance impact of your real-time
                            analytical workloads.
                        </p>
                    </div>
                    <div className="section-four-tile">
                        <div className="icon-wrapper">
                            <Customer360 className="icon-image" />
                        </div>
                        <h3 className="section-four-tile-title">
                            Customer 360
                        </h3>
                        <p className="section-four-tile-subtext">
                            Gain a unified view of your customers while your
                            team interacts with them. Real-time with historical
                            data.
                        </p>
                    </div>
                    <div className="section-four-tile">
                        <div className="icon-wrapper">
                            <RealTimeAnalytics className="icon-image" />
                        </div>
                        <h3 className="section-four-tile-title">
                            Real-time analytics
                        </h3>
                        <p className="section-four-tile-subtext">
                            Use plain old SQL for streaming analytics on your
                            data to react to business events in real time.
                        </p>
                    </div>
                    <div className="section-four-tile">
                        <div className="icon-wrapper">
                            <DataSharing className="icon-image" />
                        </div>
                        <h3 className="section-four-tile-title">
                            Data sharing
                        </h3>
                        <p className="section-four-tile-subtext">
                            Securely allow other users access to your realtime
                            data products, and materialize them into whatever
                            destination system they want.
                        </p>
                    </div>
                </div>
                <div className="section-four-try-it-button-wrapper">
                    <p className="section-four-try-it-header-text">
                        Use it free with hands-on support.  Scale without
                        bounds.
                    </p>
                    <OutboundLink
                        target="_blank"
                        href="https://dashboard.estuary.dev/register"
                        className="section-four-try-it-button"
                    >
                        Try it free
                    </OutboundLink>
                </div>
            </div>
        </div>
    )
}

export default SectionFour
