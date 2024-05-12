import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { OutboundLink } from "../OutboundLink"
import Slider from "../Slider"

const SectionSix = () => {
    return (
        <div className="section-six">
            <div className="section-six-wrapper">
                <div className="section-six-slider-wrapper">
                    <p className="section-four-header-small">Built for who</p>
                    <Slider />
                    <OutboundLink target="_blank" href="https://dashboard.estuary.dev/register" className="section-four-try-it-button section-six-margin">
                        Try it free
                    </OutboundLink>
                </div>
                <div className="section-six-right-wrapper">
                    <div className="section-six-header-vectors">
                        <StaticImage
                            placeholder="none"
                            alt="estuary logo"
                            src="../../images/estuary-vertical-logo.svg"
                            layout="constrained"
                            className="product-flow-section-one-image"
                        />
                    </div>
                    <div className="section-six-right">
                        <StaticImage
                            placeholder="none"
                            alt="code screenshot"
                            src="../../images/code-screenshot.svg"
                            className="section-six-code-screenshot"
                            layout="constrained"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionSix
