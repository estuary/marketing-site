import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Slider, useMediaQuery, useTheme } from "@mui/material"

import FlowLogo from "../svgs/flow-logo.svg"
import BlueCheckmark from "../svgs/blue-checkmark.svg"
import PricingOpenSource from "../svgs/pricing-open-source.svg"
import PricingCloud from "../svgs/pricing-cloud.svg"
import PricingEnterprise from "../svgs/pricing-enterprise.svg"
import ComingSoon from "../svgs/coming-soon-icon.svg"
import GraphicQuote from "../svgs/graphic-quote.svg"

function gByteLabel(gb: number,maxPrec=10) {
    const units = ["GB", "TB"]

    let unitIndex = 0
    let scaledValue = gb

    while (scaledValue >= 1000 && unitIndex < units.length - 1) {
        unitIndex += 1
        scaledValue /= 1000
    }

    return `${scaledValue.toFixed(Math.min(unitIndex,maxPrec))} ${units[unitIndex]}`
}

const ChecklistItem = ({ children }) => (
    <div className="pricing-page-checklist-item">
        <BlueCheckmark className="pricing-page-tile-checkmark-image" />
        <p className="pricing-page-tile-checklist-item-text">{children}</p>
    </div>
)
const FREE_TIER_GBS = 10
// $0.75/GB up to 1000 GB / month and then we cut pricing in half after that per GB
const calculatePrice = (gbs: number) => {
    if (gbs <= FREE_TIER_GBS +0.001) {
        return <span className="pricing-page-price-bold">{FREE_TIER_GBS}GB Free</span>
    } else {
        let calc: string|number = Math.min(1000,gbs) * 0.75 + Math.max(0, (gbs - 1001) * 0.375);
        calc = Math.round(calc);
        return (
            <>
                <span className="pricing-page-price-bold">
                    $
                    {calc}
                </span>
                /month
            </>
        )
    }
}

const PricingPage = () => {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.between("sm", "lg"))

    const x_factor = isMedium ? 0.0022 : 0.0028

    const sliderScale = x=>1/(1+Math.E**((x*x_factor)*-1));
    const inverseSliderScale = x=>Math.log(x/(1-x)) / x_factor
    const marks = (isMedium ? [10,500,1000,5000] : [10,250,500,1000,5000]).map(v => ({
        label: gByteLabel(v,0),
        value: sliderScale(v),
    }));
    console.log(marks)
    const [selectedGB, setSelectedGB] = React.useState(sliderScale(10))
    return (
        <Layout headerTheme="light">
            <div className="pricing-page">
                <div className="pricing-page-background-image-wrapper">
                    <div className="pricing-page-top">
                        <div className="pricing-page-top-left">
                            <h1 className="product-flow-section-one-h1">
                                Pricing Tiers
                            </h1>
                            <p className="pricing-page-subheader-text">
                                Predictable pricing that scales with your
                                business.
                            </p>
                            <p className="pricing-page-subheader-text">
                                No charge for storing data. Since we don't store
                                your data, storage is in your own cloud storage
                                bucket at low cloud storage rates
                            </p>
                        </div>
                        <div className="pricing-page-top-right">
                            <FlowLogo className="product-flow-section-one-image" />
                        </div>
                    </div>

                    <div className="pricing-page-tiles-wrapper">
                        <div className="pricing-page-tile">
                            <PricingOpenSource className="pricing-page-tile-icon icon-wrapper" />
                            <p className="pricing-page-tile-name">
                                Open source
                            </p>
                            <p className="pricing-page-price">
                                <span className="pricing-page-price-bold">
                                    $0
                                </span>
                                /month
                            </p>
                            <p className="pricing-page-tile-price-subtext">
                                Free with BSL
                            </p>
                            <div className="pricing-page-checklist-wrapper">
                                <ChecklistItem>
                                    Millisecond latency
                                </ChecklistItem>
                                <ChecklistItem>
                                    CDC from DBs & 50+ APIs
                                </ChecklistItem>
                                <ChecklistItem>
                                    Real-time transformations
                                </ChecklistItem>

                                <ChecklistItem>
                                    Real-time materializations
                                </ChecklistItem>

                                <ChecklistItem>
                                    Limitless horizontal scaling
                                </ChecklistItem>

                                <ChecklistItem>
                                    Free support on Slack
                                </ChecklistItem>
                            </div>
                            <Link
                                className="pricing-page-tile-button"
                                to="https://github.com/estuary/flow"
                            >
                                Get started
                            </Link>
                        </div>
                        <div className="pricing-page-tile">
                            <PricingCloud className="pricing-page-tile-icon icon-wrapper" />
                            <p className="pricing-page-tile-name">cloud</p>
                            <p className="pricing-page-price">
                                {calculatePrice(inverseSliderScale(selectedGB))}
                            </p>
                            <Slider
                                value={selectedGB}
                                onChange={(_, val) =>
                                    setSelectedGB(sliderScale(Math.round(inverseSliderScale(val || val[0]))))
                                }
                                min={sliderScale(10)}
                                max={sliderScale(5000)}
                                step={sliderScale(10)/1000}
                                // scale={sliderScale}
                                marks={marks}
                                style={{ margin: `1rem 0 3rem 0` }}
                            />

                            <div className="pricing-page-checklist-wrapper">
                                <ChecklistItem>
                                    <span className="pricing-page-checklist-item-text-bold">
                                        {gByteLabel(inverseSliderScale(selectedGB))}
                                    </span>{" "}
                                    average monthly changes
                                </ChecklistItem>
                                <ChecklistItem>
                                    All in Open Source
                                </ChecklistItem>
                                <ChecklistItem>All the benefits of Open Source plus</ChecklistItem>
                                <ChecklistItem>Cloud-hosted Flow</ChecklistItem>
                                <ChecklistItem>99.9% uptime SLA</ChecklistItem>

                                <ChecklistItem>Free 30-day trial</ChecklistItem>

                                <ChecklistItem>
                                    UI access for deployment, altering and
                                    monitoring
                                </ChecklistItem>
                            </div>
                            <a
                                target="_blank"
                                href="https://dashboard.estuary.dev/register"
                                className="pricing-page-tile-button"
                            >
                                Try it free
                            </a>
                        </div>
                        <div className="pricing-page-tile">
                            <PricingEnterprise className="pricing-page-tile-icon icon-wrapper" />
                            <p className="pricing-page-tile-name">enterprise</p>
                            <p className="pricing-page-price">
                                <span className="pricing-page-price-bold">
                                    Custom
                                </span>
                            </p>
                            <div className="pricing-page-checklist-wrapper-custom">
                                <ChecklistItem>
                                    Everything in Open Source and Cloud plus
                                </ChecklistItem>
                                <ChecklistItem>
                                    24/7 hands-on support
                                </ChecklistItem>
                                <ChecklistItem>
                                    Provisioned servers
                                </ChecklistItem>
                                <div className="pricing-page-checklist-item">
                                    <ComingSoon className="pricing-page-tile-coming-soon-image" />
                                    <p className="pricing-page-tile-checklist-item-text">
                                        VPC-based deployments
                                    </p>
                                </div>
                            </div>
                            <Link
                                className="pricing-page-tile-button"
                                to="/about#contact-us"
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>
                    <div className="pricing-page-quote-box">
                        <GraphicQuote className="pricing-page-tile-graphic-quote-image" />
                        <p className="pricing-page-quote-box-quote">
                            “This tool is 1000x times better than LogStash or
                            Elastic Enterprise Data Ingestion Tool, which has
                            many issues.”
                        </p>
                        <div className="pricing-page-quote-image-wrapper">
                            <StaticImage
                                placeholder="none"
                                alt="data flow image"
                                src="../images/pompato-color.svg"
                                layout="fixed"
                                className="pricing-page-tile-coming-soon-image"
                            />
                            <p className="pricing-page-quote-source-name">
                                Pompato
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PricingPage
