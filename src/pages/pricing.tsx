import * as React from "react"
import { useState } from "react"
import Layout from "../components/layout"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import SliderComponent from "../components/StorageSlider"
import { Typography, useMediaQuery, useTheme } from "@mui/material"

import BlueCheckmark from "../svgs/blue-checkmark.svg"
import BlueBullet from "../svgs/blue-bullet.svg"
import QuestionMark from "../svgs/question-mark.svg"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Seo from "../components/seo"
import { Link, graphql, useStaticQuery } from "gatsby"
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { ContextToolTip } from "../components/ContextTooltip"

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
    const relatedPost = useStaticQuery(graphql`
        {
            allStrapiBlogPost(
                filter: {
                    tags: { elemMatch: { Name: { eq: "billing articles" } } }
                }
            ) {
                nodes {
                    title: Title
                    hero: Hero {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `)

    const frequentlyQuestions = [
        {
            title: "How is my my bill calculated?",
            description: `There are two components to your monthly bill. Primarily, your bill is  calculated based on the amount of
            data that is Sourced, Transformed, and Delivered by Flow to your destinations. The activity of each of these
            ‘tasks’ are summed on a monthly basis.Secondarily, there is a charge of $0.14/hour per active connector.
            For a given connector running all month, this typically equates to about ~$100/month/connector. in a
            standard 720 hour month.   There is no storage fee as Estuary does not store your data, it will be hosted
            in your own cloud storage. In the free tier, you are given 10GB of data to move at no charge and up t
            o 2 connectors.`,
        },
        {
            title: "Do you offer discounted rates?",
            description: `Discounts are based on two variables - volume commitments and contract duration.`,
        },
        {
            title: "How does Pay-as-you-Go pricing work?",
            description: `For customers that are just starting out, or don’t want to commit to a specific volume of data or time
            you can use Estuary and pay for actual consumption on a monthly basis. Your bill will be computed
            at the end of each month based on the amount of data transfer and number of active connector hours.
            Billing is done through Stripe, and you’ll be able to add a credit card.`,
        },
        {
            title: "How does pre-pay work?",
            description: `Customers that want to pay for a fixed amount of data transfer can pay up front and then amortize
            that usage over time (no more than 12 months). The more data transfer paid up front, the greater the
            discount on the Pay-As-You-Go price.`,
        },
        {
            title: "How does the Free Trial work?",
            description: `Flow can be used for free indefinitely. With the only gate being the 10GB of data transfer each month
            usage over 2 connectors. For customers on our Cloud Plan, there is a 30-day free trial upon request.`,
        },
        {
            title: "What are my billing options?",
            description: `The free tier does not require a credit card nor any billing information. The Cloud Plan can be paid via
            credit card, debit card, or 30-day Invoice. The Enterprise tier is paid via invoice.`,
        },
        {
            title: "Where is my data stored?",
            description:
                "In the free tier, your data will be stored securely stored in Estuary’s cloud storage. Estuary will only retain this data for a limited window. In the Cloud Plan and beyond, your data will be stored in your cloud bucket for whatever length you set.",
        },
    ]

    const [selectedPlan, setSelectedPlan] = useState("free");


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
                                Get instant back-fills without instant
                                bad-bills. We price predictably, on{" "}
                                <strong>GB of change data</strong> moved per
                                month and{" "}
                                <strong>active connector hours.</strong> Put
                                away the TI-83 trying to calculate ‘monthly
                                active rows’.
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
                                >
                                    Interactive Demo
                                </OutboundLink>
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

                    {/* Plans */}
                    <div className="plan-container">
                        <div className="heading">
                            <h2>Plans</h2>
                        </div>

                        <div className="content">
                            <div className="content-left">
                                <div className="plans-section">
                                    <div
                                        className={
                                            selectedPlan === "free"
                                                ? "card selected-border"
                                                : "card"
                                        }
                                        onClick={() => setSelectedPlan("free")}
                                    >
                                        <div className="card-body">
                                            <h3>$0.00/GB</h3>
                                            <p>
                                                Free production use of 2
                                                connectors and up to 10GB/mo of
                                                data
                                            </p>
                                            <div className="radio">
                                                <div
                                                    className={
                                                        selectedPlan === "free"
                                                            ? "radio-circle"
                                                            : "selected-radio-circle"
                                                    }
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            selectedPlan === "cloud"
                                                ? "card selected-border"
                                                : "card"
                                        }
                                        onClick={() => setSelectedPlan("cloud")}
                                    >
                                        <div className="card-body">
                                            <h3>$0.50/GB</h3>
                                            <p>
                                                $0.50/GB of the data moved +
                                                ~$100 per connector
                                                ($0.14/hour/connector).
                                            </p>
                                            <div className="radio">
                                                <div
                                                    className={
                                                        selectedPlan === "cloud"
                                                            ? "radio-circle"
                                                            : "selected-radio-circle"
                                                    }
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            selectedPlan === "custom"
                                                ? "card selected-border"
                                                : "card"
                                        }
                                        onClick={() =>
                                            setSelectedPlan("custom")
                                        }
                                    >
                                        <div className="card-body">
                                            <h3>Custom</h3>
                                            <p>
                                                Custom pricing for large
                                                enterprise deployments
                                            </p>
                                            <div className="radio">
                                                <div
                                                    className={
                                                        selectedPlan ===
                                                            "custom"
                                                            ? "radio-circle"
                                                            : "selected-radio-circle"
                                                    }
                                                ></div>
                                            </div>
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
                                    >
                                        Contact
                                    </OutboundLink>
                                </div>
                            </div>
                            <div className="content-right">
                                {selectedPlan === "free" && (
                                    <div className="card">
                                        <div>
                                            <h5>Free Plan includes:</h5>
                                        </div>
                                        <div className="container-list">
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/ui-ux-testing.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>
                                                    UI & CLI for building,
                                                    monitoring, testing
                                                    pipelines
                                                </p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/latency.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>Millisecond latency</p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/cdc-cost.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>
                                                    Incremental syncing for
                                                    lower CDC cost
                                                </p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/access-connectors.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>Access to all connectors</p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/programmatic.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>
                                                    Programmatic building and
                                                    editing of pipelines
                                                </p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/streaming-infrastructure.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>Streaming infrastructure</p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/floppy.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>
                                                    Limited Data Retention in
                                                    Estuary Cloud
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {selectedPlan === "cloud" && (
                                    <div className="card">
                                        <div>
                                            <h5>Cloud Plan includes:</h5>
                                        </div>
                                        <div className="container-list">
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/programmatic.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>
                                                    Everything from Free Plan...
                                                </p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/floppy.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>Data Stored in your cloud</p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/pie.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>99.9% SLA</p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/list.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>
                                                    Unlimited connectors and
                                                    collections
                                                </p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/slack.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>
                                                    9x5 Customer Support - Slack
                                                    & Email
                                                </p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/calendar.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>30-day Trial</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {selectedPlan === "custom" && (
                                    <div className="card">
                                        <div>
                                            <h5>Enterprise Plan includes:</h5>
                                        </div>
                                        <div className="container-list">
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/pie.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>
                                                    Everything from Free Plan +
                                                    Cloud...
                                                </p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/access-connectors.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>SOC2 & HIPAA Certificates</p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/server.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>Provisioned Servers</p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/list.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>Customer Success Manager</p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/slack.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>24x7 Support Available</p>
                                            </div>
                                            <div className="list">
                                                <div
                                                    style={{
                                                        minWidth: 30,
                                                        minHeight: 20,
                                                    }}
                                                >
                                                    <StaticImage
                                                        placeholder="none"
                                                        alt="salesforce logo"
                                                        src="../svgs/download.svg"
                                                        layout="constrained"
                                                        className="icon-image"
                                                    />
                                                </div>
                                                <p>
                                                    <span
                                                        style={{
                                                            fontWeight: 700,
                                                        }}
                                                    >
                                                        Coming Soon:
                                                    </span>{" "}
                                                    Advance SSO, Custom VPC
                                                    deployment
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Cost Calculator */}

                    <div className="cost-calculator">
                        <div className="heading">
                            <h2>Cost Calculator</h2>
                        </div>
                        <div className="cost-calculator-container">
                            <div className="cost-calculator-left">
                                <div className="content-top">
                                    <div className="cost-calculator-title">
                                        <p>GB of Change Data</p>
                                        <ContextToolTip title={(<Typography>Some text</Typography>)}>
                                            <QuestionMark id="change-data" className="question-mark" />
                                        </ContextToolTip>
                                    </div>
                                    <SliderComponent />
                                </div>
                                <div className="content-bottom">
                                    <div className="cost-calculator-title">
                                        <p>Number of connectors</p><QuestionMark id="num-connectors" className="question-mark" />
                                    </div>
                                    <div className="count-input">
                                        <div className="btn-left">
                                            <svg
                                                width="15"
                                                height="5"
                                                viewBox="0 0 15 5"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="15"
                                                    height="5"
                                                    rx="1"
                                                    fill="#3F3F46"
                                                />
                                            </svg>
                                        </div>
                                        <input type="text" />
                                        <div className="btn-right">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="17"
                                                height="16"
                                                viewBox="0 0 17 16"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7.74037 0C7.28294 0 6.97999 0.31889 6.97999 0.800397V6.4H1.66037C1.20294 6.4 0.899994 6.71889 0.899994 7.2004V8.8004C0.899994 9.28111 1.20294 9.6 1.66037 9.6H6.97999V15.2004C6.97999 15.6811 7.28294 16 7.74037 16H9.26037C9.71705 16 10.02 15.6811 10.02 15.2004V9.6H15.3404C15.797 9.6 16.1 9.28111 16.1 8.8004V7.2004C16.1 6.71889 15.797 6.4 15.3404 6.4H10.02V0.800397C10.02 0.31889 9.71705 0 9.26037 0H7.74037Z"
                                                    fill="#3F3F46"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cost-calculator-right">
                                <div className="card">
                                    <div className="content-top">
                                        <div className="cost-calculator-right-wrapper">
                                            <p className="content-top-heading">
                                                Our Plan
                                            </p>
                                            <QuestionMark id="our-plan" className="question-mark-small" />
                                        </div>

                                        <p className="content-top-description">
                                            XXX GB of change data
                                        </p>
                                        <p className="content-top-description">
                                            XXX connectors
                                        </p>
                                        <p className="content-top-price-tag">
                                            $104 / Month
                                        </p>
                                        <p className="content-top-hint">
                                            -$ from closest competitor
                                        </p>
                                    </div>
                                    <div className="content-bottom">
                                        <div className="cost-calculator-right-wrapper">
                                            <p className="content-bottom-heading">
                                                The 'Others'
                                            </p>
                                            <QuestionMark id="others" className="question-mark-small" />
                                        </div>
                                        <div className="content-bottom-description">
                                            <p>Fivetran</p>
                                            <p>$XXX / Mo</p>
                                        </div>
                                        <div className="content-bottom-description">
                                            <p>Confluent</p>
                                            <p>$XXX / Mo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Frequently question */}
                    <div className="frequently-question">
                        <div className="heading">
                            <h2>Frequently asked questions</h2>
                        </div>
                        <div className="frequently-container">
                            <div className="question">
                                {frequentlyQuestions.map((item, index) => (
                                    <div className="faq-drawer">
                                        <input
                                            id={`faq-drawer-${index}`}
                                            className="faq-drawer__trigger"
                                            type="checkbox"
                                        />
                                        <label
                                            className="faq-drawer__title"
                                            htmlFor={`faq-drawer-${index}`}
                                        >
                                            {item.title}
                                        </label>
                                        <div className="faq-drawer__content-wrapper">
                                            <div className="faq-drawer__content">
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="related-post">
                        <div className="heading">
                            <h2>Related Posts</h2>
                        </div>
                        <div className="related-index-body">
                            {relatedPost?.allStrapiBlogPost?.nodes &&
                                relatedPost?.allStrapiBlogPost?.nodes?.map(
                                    (post: any, index: number) => (
                                        <>
                                            <Link
                                                to=""
                                                className="related-post-card"
                                            >
                                                <GatsbyImage
                                                    image={
                                                        post?.hero?.localFile
                                                            ?.childImageSharp
                                                            ?.gatsbyImageData
                                                    }
                                                    alt="debezium alternatives"
                                                    className="icon-image popular-articles-image"
                                                />
                                                <div className="related-post-card-title">
                                                    {post.title}
                                                </div>
                                            </Link>
                                        </>
                                    )
                                )}
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
                                >
                                    Interactive Demo
                                </OutboundLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const Head = ({ data: { post } }) => {
    return (
        <Seo
            title={"Pricing"}
            description={
                "Managed streaming data pipelines, streaming SQL & turnkey connectivity to clouds, databases, and apps"
            }
        />
    )
}

export default PricingPage
