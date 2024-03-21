import "./styles.less"

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import StackedMoney from "../../../../svgs/stacked-money.svg"
import OutboundLink from "../../../../components/OutboundLink"

const CutPipeline = () => {
    return (
        <div className="section-cut-pipeline">
            <div className="image-container">
                <StaticImage
                    placeholder="none"
                    alt="Coding optional"
                    layout="constrained"
                    src="../../../../images/pricing-calculator.png"
                />
            </div>
            <div className="content">
                <div className="title-container">
                    <div className="icon-container">
                        <StackedMoney />
                    </div>
                    <p className="title">Cut pipeline costs by 2-5x</p>
                </div>
                <p className="description">Estuary customers save up to 5x on their pipeline costs and increase by productivity by 4x</p>
                <OutboundLink href="/pricing" showArrow small>Calculate your savings</OutboundLink>
            </div>
        </div>
    )
}

export default CutPipeline
