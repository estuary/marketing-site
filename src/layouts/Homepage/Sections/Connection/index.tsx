import "./styles.less"

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import OutboundLink from "../../../../components/OutboundLink"

const SectionConnect = () => {
    return (
        <div className="section-connect">
            <div className="container">
                <p className="pre-title">CASE STUDY</p>
                <div className="title-container">
                    <StaticImage
                        placeholder="none"
                        alt="Connect&Go"
                        layout="constrained"
                        src="../../../../images/connectGo.png"
                    />
                </div>
                <p className="description">Connect&GO lowers MySQL to Snowflake latency up to 180x, improves productivity 4x with Estuary</p>
                <OutboundLink href="/pricing" showArrow>Read</OutboundLink>
            </div>
        </div>
    )
}

export default SectionConnect