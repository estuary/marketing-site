import "./styles.less"

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import BashTerminal from "../../../../svgs/bash-terminal.svg"
import OutboundLink from "../../../../components/OutboundLink"

const CodingOptional = () => {
    return (
        <div className="section-coding-optional">
            <div className="image-container">
                <StaticImage
                    placeholder="none"
                    alt="Coding optional"
                    layout="constrained"
                    src="../../../../images/coding-optional.jpg"
                />
            </div>
            <div className="content">
                <div className="title-container">
                    <div className="icon-container">
                        <BashTerminal />
                    </div>
                    <p className="title">Code or No-Code</p>
                </div>
                <ul className="topics">
                    <li>Streaming connectors for DB, SaaS, and more</li>
                    <li>Automatic schema inference</li>
                    <li>SQL & Typescript support</li>
                </ul>
                <OutboundLink href="/integrations" showArrow small>View Connectors</OutboundLink>
            </div>
        </div>
    )
}

export default CodingOptional
