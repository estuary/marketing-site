import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {
    Box,
    Divider,
    FormControl,
    FormControlLabel,
    Slider,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material"

import FlowLogo from "../svgs/flow-logo.svg"
import BlueCheckmark from "../svgs/blue-checkmark.svg"
import BlueBullet from "../svgs/blue-bullet.svg"
import PricingOpenSource from "../svgs/pricing-open-source.svg"
import PricingCloud from "../svgs/pricing-cloud.svg"
import PricingEnterprise from "../svgs/pricing-enterprise.svg"
import GraphicQuote from "../svgs/graphic-quote.svg"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Seo from "../components/seo"

function gByteLabel(gb: number, maxPrec = 10) {
    const units = ["GB", "TB"]

    let unitIndex = 0
    let scaledValue = gb

    while (scaledValue >= 1000 && unitIndex < units.length - 1) {
        unitIndex += 1
        scaledValue /= 1000
    }

    return `${scaledValue.toFixed(Math.min(unitIndex, maxPrec))}${units[unitIndex]
        }`
}

const ChecklistItem = ({ children, bullet = false }) => (
    <div className="pricing-page-checklist-item">
        {bullet ? (
            <BlueBullet className="pricing-page-tile-checkmark-image" />
        ) : (
            <BlueCheckmark className="pricing-page-tile-checkmark-image" />
        )}
        <p className="pricing-page-tile-checklist-item-text">{children}</p>
    </div>
)

export const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
})

const roundTo = (num: number, decimals: number) =>
    Math.round((num + Number.EPSILON) * 10 ** decimals) / 10 ** decimals

export const calculateDataPrice = (gbs: number): number => {
    let gb_calc: string | number =
        Math.min(1000, gbs) * 0.5 + Math.max(0, (gbs - 1001) * 0.2)
    return roundTo(gb_calc, 2)
}

export const calculateTaskPrice = (tasks: number): number => tasks * 100

export const calculatePrice = (tasks: number, gbs: number) => {
    let gb_calc = calculateDataPrice(gbs)

    let task_calc = calculateTaskPrice(tasks)
    return (
        <>
            <span className="pricing-page-price-bold">
                {currencyFormatter.format(task_calc + gb_calc)}
            </span>
            /month
        </>
    )
}

const PricingPage = () => {
    const theme = useTheme()
    const isMedium = useMediaQuery(theme.breakpoints.between(811, 1100))

    const x_factor = isMedium ? 0.0016 : 0.0024

    const sliderScale = x => 1 / (1 + Math.E ** (x * x_factor * -1))
    const inverseSliderScale = x => Math.log(x / (1 - x)) / x_factor
    const marks = (
        isMedium ? [1, 500, 1000, 5000] : [1, 250, 600, 1000, 5000]
    ).map(v => ({
        label: gByteLabel(v, 0),
        value: sliderScale(v),
    }))
    console.log(marks)
    const [selectedGB, setSelectedGB] = React.useState(1)
    const [selectedTasks, setSelectedTasks] = React.useState(1)


    const [selectedPlan, setSelectedPlan] = React.useState("Free")


    return (
        <Layout headerTheme="light">
            <div className="pricing-page">
                <div className="pricing-page-background-image-wrapper">
                    <div className="pricing-page-top">
                        <div className="pricing-page-top-left">
                            <h1 className="product-flow-section-one-h1">
                                Simply priced, pay as you go
                            </h1>
                            <p className="pricing-page-subheader-text">
                                Get instant back-fills without instant bad-bills. We price predictably, on <strong>GB of change data</strong> moved per month and <strong>active connector hours.</strong> Put away the TI-83 trying to calculate ‘monthly active rows’.
                            </p>
                            <div className="main-section-buttons">
                                <OutboundLink
                                    target="_blank"
                                    href="https://dashboard.estuary.dev/register"
                                    className="section-one-try-it-button"
                                >
                                    Build free pipeline
                                </OutboundLink>
                                <OutboundLink
                                    target="_blank"
                                    href="/why"
                                    className="section-one-demo-button"
                                >Interactive Demo</OutboundLink>
                            </div>
                        </div>
                        <div className="pricing-page-top-right">
                            <StaticImage
                                placeholder="none"
                                alt="pricing logo"
                                src="../svgs/pricing_page.svg"
                                layout="fixed"
                                className="icon-image"
                            />
                        </div>
                    </div>


                    <div className="plan-container">
                        <div className="heading">
                            <h2>Plans</h2>
                        </div>

                        <div className="content">
                            <div className="content-left">
                                <div>
                                    <div className={selectedPlan === "Free" ? "card selected-border" : "card"} onClick={() => setSelectedPlan("Free")}>
                                        <div className="card-body">
                                            <h3>$0.00/GB</h3>
                                            <p>Free production use 2 connections and up to 10GB/mo od data</p>
                                            <div className="radio">
                                                <div className={selectedPlan === "Free" ? "radio-circle" : "selected-radio-circle"}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={selectedPlan === "After Free Trial" ? "card selected-border" : "card"} onClick={() => setSelectedPlan("After Free Trial")}>
                                        <div className="card-body">
                                            <h3>$0.00/GB</h3>
                                            <p>Free production use 2 connections and up to 10GB/mo od data</p>
                                            <div className="radio">
                                                <div className={selectedPlan === "After Free Trial" ? "radio-circle" : "selected-radio-circle"}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={selectedPlan === "Custom" ? "card selected-border" : "card"} onClick={() => setSelectedPlan("Custom")}>
                                        <div className="card-body">
                                            <h3>$0.00/GB</h3>
                                            <p>Free production use 2 connections and up to 10GB/mo od data</p>
                                            <div className="radio">
                                                <div className={selectedPlan === "Custom" ? "radio-circle" : "selected-radio-circle"}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons-section">
                                        <OutboundLink
                                            target="_blank"
                                            href="https://dashboard.estuary.dev/register"
                                            className="build-button"
                                        >
                                            Build a Pipeline
                                        </OutboundLink>
                                        <OutboundLink
                                            target="_blank"
                                            href="/why"
                                            className="contact-button"
                                        >Contact</OutboundLink>
                                    </div>
                                </div>
                            </div>
                            <div className="content-right">
                                <div className="card">
                                    <div>
                                        <h5>Free plan includes:</h5>
                                    </div>
                                    <div className="container-list">
                                        <div className="list">
                                            <StaticImage
                                                placeholder="none"
                                                alt="salesforce logo"
                                                src="../svgs/ui-ux-testing.svg"
                                                layout="fixed"
                                                className="icon-image"
                                            />
                                            <p>UI & CLI for building, monitoring, testing pipelines</p>
                                        </div>
                                        <div className="list">
                                            <StaticImage
                                                placeholder="none"
                                                alt="salesforce logo"
                                                src="../svgs/latency.svg"
                                                layout="fixed"
                                                className="icon-image"
                                            /> <p>Millisecond latency</p> </div>
                                        <div className="list">
                                            <StaticImage
                                                placeholder="none"
                                                alt="salesforce logo"
                                                src="../svgs/cdc-cost.svg"
                                                layout="fixed"
                                                className="icon-image"
                                            /><p>Incremental syncing for lower CDC cost</p> </div>
                                        <div className="list">
                                            <StaticImage
                                                placeholder="none"
                                                alt="salesforce logo"
                                                src="../svgs/access-connectors.svg"
                                                layout="fixed"
                                                className="icon-image"
                                            />
                                            <p>Access to all connectors</p>
                                        </div>
                                        <div className="list">
                                            <StaticImage
                                                placeholder="none"
                                                alt="salesforce logo"
                                                src="../svgs/programmatic.svg"
                                                layout="fixed"
                                                className="icon-image"
                                            /><p>Programmatic building and editing of pipelines</p> </div>
                                        <div className="list">
                                            <StaticImage
                                                placeholder="none"
                                                alt="salesforce logo"
                                                src="../svgs/streaming-infrastructure.svg"
                                                layout="fixed"
                                                className="icon-image"
                                            /><p>Streaming infrastructure</p>

                                        </div>



                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="frequently-question">
                        <div className="heading">
                            <h2>Frequently asked questions</h2>
                        </div>
                        <div className="frequently-container">
                            <div className="question">
                                <div className="faq-drawer">
                                    <input id="faq-drawer" className="faq-drawer__trigger" type="checkbox" checked />
                                    <label className="faq-drawer__title" htmlFor="faq-drawer">How is my my bill calculated?</label>
                                    <div className="faq-drawer__content-wrapper">
                                        <div className="faq-drawer__content">
                                            <p>There are two components to your monthly bill. Primarily, your bill is  calculated based on the amount of
                                                data that is Sourced, Transformed, and Delivered by Flow to your destinations. The activity of each of these
                                                ‘tasks’ are summed on a monthly basis.Secondarily, there is a charge of $0.14/hour per active connector.
                                                For a given connector running all month, this typically equates to about ~$100/month/connector. in a
                                                standard 720 hour month.   There is no storage fee as Estuary does not store your data, it will be hosted
                                                in your own cloud storage. In the free tier, you are given 10GB of data to move at no charge and up t
                                                o 2 connectors.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-drawer">
                                    <input id="faq-drawer-2" className="faq-drawer__trigger" type="checkbox" checked />
                                    <label className="faq-drawer__title" htmlFor="faq-drawer-2">Do you offer discounted rates?</label>
                                    <div className="faq-drawer__content-wrapper">
                                        <div className="faq-drawer__content">
                                            <p>Discounts are based on two variables - volume commitments and contract duration.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="faq-drawer">
                                    <input id="faq-drawer-3" className="faq-drawer__trigger" type="checkbox" checked />
                                    <label className="faq-drawer__title" htmlFor="faq-drawer-3">How does Pay-as-you-Go pricing work?</label>
                                    <div className="faq-drawer__content-wrapper">
                                        <div className="faq-drawer__content">
                                            <p>For customers that are just starting out, or don’t want to commit to a specific volume of data or time
                                                you can use Estuary and pay for actual consumption on a monthly basis. Your bill will be computed
                                                at the end of each month based on the amount of data transfer and number of active connector hours.
                                                Billing is done through Stripe, and you’ll be able to add a credit card. </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="faq-drawer">
                                    <input id="faq-drawer-4" className="faq-drawer__trigger" type="checkbox" checked />
                                    <label className="faq-drawer__title" htmlFor="faq-drawer-4">How does pre-pay work?</label>
                                    <div className="faq-drawer__content-wrapper">
                                        <div className="faq-drawer__content">
                                            <p>Customers that want to pay for a fixed amount of data transfer can pay up front and then amortize
                                                that usage over time (no more than 12 months). The more data transfer paid up front, the greater the
                                                discount on the Pay-As-You-Go price. </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="faq-drawer">
                                    <input id="faq-drawer-5" className="faq-drawer__trigger" type="checkbox" checked />
                                    <label className="faq-drawer__title" htmlFor="faq-drawer-5">How does the Free Trial work?</label>
                                    <div className="faq-drawer__content-wrapper">
                                        <div className="faq-drawer__content">
                                            <p>Flow can be used for free indefinitely. With the only gate being the 10GB of data transfer each month
                                                usage over 2 connectors. For customers on our Cloud Plan, there is a 30-day free trial upon request. </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="faq-drawer">
                                    <input id="faq-drawer-6" className="faq-drawer__trigger" type="checkbox" checked />
                                    <label className="faq-drawer__title" htmlFor="faq-drawer-6">What are my billing options?</label>
                                    <div className="faq-drawer__content-wrapper">
                                        <div className="faq-drawer__content">
                                            <p>The free tier does not require a credit card nor any billing information. The Cloud Plan can be paid via
                                                credit card, debit card, or 30-day Invoice. The Enterprise tier is paid via invoice.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="related-post">
                        <div className="heading">
                            <h2>Related Posts</h2>
                        </div>
                        <div className="related-index-body">
                            <Link to='' className="related-post-card">
                                <StaticImage
                                    placeholder="none"
                                    alt="Estuary history"
                                    loading="lazy"
                                    src="../images/lp-podcast/episode-image.webp"
                                    layout="constrained"
                                    width={308}
                                    height={326}
                                    quality={100}
                                />
                                <div className="related-post-card-title">Why ELT won’t fix your data problems</div>
                            </Link>
                            <Link to='' className="related-post-card">
                                <StaticImage
                                    placeholder="none"
                                    alt="Estuary history"
                                    loading="lazy"
                                    src="../images/lp-podcast/episode-image.webp"
                                    layout="constrained"
                                    width={308}
                                    height={326}
                                    quality={100}
                                />
                                <div className="related-post-card-title">How to avoid the  MDS high speed data tax</div>
                            </Link>
                            <Link to='' className="related-post-card">
                                <StaticImage
                                    placeholder="none"
                                    alt="Estuary history"
                                    loading="lazy"
                                    src="../images/lp-podcast/episode-image.webp"
                                    className=""
                                    layout="constrained"
                                    width={308}
                                    height={326}
                                    quality={100}
                                />
                                <div className="related-post-card-title">Estuary vs. Competitors</div>
                            </Link>

                        </div>
                    </div>


                    <div className="start-move-demo">
                        <div className="start-move-demo-container">
                        <div className="start-container">
                            <h2>Start moving your data the faster way</h2>
                            <p>Start a 30-day free trial with Estuary</p>
                        </div>
                        <div className="buttons-container">
                            <OutboundLink
                                target="_blank"
                                href="https://dashboard.estuary.dev/register"
                                className="build-button"
                            >
                                Build a pipeline
                            </OutboundLink>
                            <OutboundLink
                                target="_blank"
                                href="/why"
                                className="demo-button"
                            >Interactive Demo</OutboundLink>
                        </div>
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

export const Head = ({ data: { post } }) => {
    return <Seo title={"Pricing"} description={"Managed streaming data pipelines, streaming SQL & turnkey connectivity to clouds, databases, and apps"} />
}

export default PricingPage
