import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import OpenHubspotModal from "../../../components/HubSpot/OpenModal"
import { OutboundLink } from "../../../components/OutboundLink"

const PricingHero = () => {
    return (
        <div className="pricing-page-top">
            <div>
                <h1>Simply priced, pay as you go</h1>
                <p>
                    Get instant back-fills without instant bad-bills. We price
                    predictably, on <strong>GB of change data</strong> moved per
                    month and <strong>active connectors.</strong> Put away the
                    TI-83 trying to calculate ‘monthly active rows’.
                </p>
                <div className="main-section-buttons">
                    <OutboundLink
                        target="_blank"
                        href="https://dashboard.estuary.dev/register"
                        className="section-one-try-it-button"
                    >
                        Build free pipeline
                    </OutboundLink>
                    <OpenHubspotModal
                        buttonLabel={"Contact Us"}
                        buttonClass={"section-one-demo-button"}
                        buttonId="pricing-hero-hubspot"
                    />
                </div>
            </div>
            <div className="image-container">
                <StaticImage
                    placeholder="none"
                    alt="pricing logo"
                    src="../../../images/dude_desk_plant.png"
                    width={500}
                    height={500}
                    loading="eager"
                    className="icon-image pricing-landing-image"
                />
            </div>
            <div className="main-section-buttons-mobile">
                <OutboundLink
                    target="_blank"
                    href="https://dashboard.estuary.dev/register"
                    className="section-one-try-it-button"
                >
                    Build free pipeline
                </OutboundLink>
            </div>
        </div>
    )
}

export default PricingHero
