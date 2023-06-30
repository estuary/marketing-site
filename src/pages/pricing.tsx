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

function gByteLabel(gb: number, maxPrec = 10) {
    const units = ["GB", "TB"]

    let unitIndex = 0
    let scaledValue = gb

    while (scaledValue >= 1000 && unitIndex < units.length - 1) {
        unitIndex += 1
        scaledValue /= 1000
    }

    return `${scaledValue.toFixed(Math.min(unitIndex, maxPrec))}${
        units[unitIndex]
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

const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
})

const roundTo = (num: number, decimals: number) =>
    Math.round((num + Number.EPSILON) * 10 ** decimals) / 10 ** decimals

const calculateDataPrice = (gbs: number): number => {
    let gb_calc: string | number =
        Math.min(1000, gbs) * 0.5 + Math.max(0, (gbs - 1001) * 0.2)
    return roundTo(gb_calc, 2)
}

// $0.75/GB up to 1000 GB / month, then $0.20 after
const calculatePrice = (tasks: number, gbs: number) => {
    let gb_calc = roundTo(calculateDataPrice(gbs), 2)

    let task_calc = tasks * 100
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
    const isMedium = useMediaQuery(theme.breakpoints.between(811,1100))

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
                            <p className="pricing-page-tile-name">Free</p>
                            <p className="pricing-page-tile-price-subtext">
                                Free for up to two tasks and 10 GB/Mo. No credit
                                card required.
                            </p>
                            <p className="pricing-page-price">
                                <span className="pricing-page-price-bold">
                                    $0
                                </span>
                                /month
                            </p>
                            <div className="pricing-page-checklist-wrapper">
                                <ChecklistItem>
                                    Millisecond latency
                                </ChecklistItem>
                                <ChecklistItem>
                                    UI for creating, testing and monitoring
                                    pipelines
                                </ChecklistItem>
                                <ChecklistItem>
                                    Incremental transfers for much lower CDC
                                    costs
                                </ChecklistItem>
                                <ChecklistItem>
                                    Create and access entities{" "}
                                    <OutboundLink href="https://docs.estuary.dev/concepts/flowctl/">
                                        programatically
                                    </OutboundLink>
                                </ChecklistItem>
                                <ChecklistItem>
                                    Use up to 50 collections, 2 total tasks
                                    (sources, sestinations and/or
                                    transformations)
                                </ChecklistItem>
                                <ChecklistItem>
                                    Up to 50 collections
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
                            <p className="pricing-page-tile-name">Cloud</p>
                            <p className="pricing-page-tile-price-subtext">
                                <b>Sources & Destinations</b>: $0.14/hr - $100/month
                                <br />
                                <b>Data</b>: $0.50/GB per task up to 1TB, then
                                $0.20/GB
                            </p>
                            <p className="pricing-page-price">
                                {calculatePrice(
                                    selectedTasks,
                                    selectedGB
                                )}
                            </p>
                            <Stack
                                margin="1rem 0 2rem 0"
                                justifyContent="center"
                            >
                                <Stack
                                    spacing={2}
                                    alignItems="center"
                                    direction="column"
                                    marginBottom={"2em"}
                                >
                                    <Typography component="div">
                                        {isMedium ? "Tasks" : "Sources & Destinations"}:{" "}
                                        <Typography
                                            display="inline"
                                            fontWeight="bold"
                                        >
                                            {currencyFormatter.format(
                                                selectedTasks * 100
                                            )}
                                        </Typography>
                                    </Typography>
                                    <Slider
                                        value={selectedTasks}
                                        onChange={(_, val) =>
                                            setSelectedTasks(
                                                typeof val === "number"
                                                    ? val
                                                    : val[0]
                                            )
                                        }
                                        marks={[1,2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                            id => ({
                                                value: id,
                                                label: id,
                                            })
                                        )}
                                        min={1}
                                        max={10}
                                        step={1}
                                        valueLabelDisplay="auto"
                                        valueLabelFormat={v => `${v} tasks`}
                                        style={{ marginTop: 0 }}
                                    />
                                </Stack>
                                <Stack
                                    spacing={2}
                                    alignItems="center"
                                    direction="column"
                                    marginBottom="1.75rem"
                                >
                                    <Typography>
                                        Data:{" "}
                                        <Typography
                                            display="inline"
                                            fontWeight="bold"
                                        >
                                            {currencyFormatter.format(
                                                calculateDataPrice(
                                                        selectedGB
                                                )
                                            )}
                                        </Typography>
                                    </Typography>
                                    <Slider
                                        value={sliderScale(selectedGB)}
                                        onChange={(_, val) =>
                                            setSelectedGB(
                                                    Math.round(
                                                        inverseSliderScale(
                                                            val || val[0]
                                                        )
                                                    )
                                            )
                                        }
                                        min={marks[0].value}
                                        max={marks[marks.length - 1].value}
                                        step={marks[0].value / 1000}
                                        marks={marks}
                                        valueLabelDisplay="auto"
                                        valueLabelFormat={v =>
                                            gByteLabel(inverseSliderScale(v))
                                        }
                                        style={{ marginTop: 0 }}
                                    />
                                </Stack>
                                <Typography
                                    variant="caption"
                                    style={{
                                        lineHeight: "1.1",
                                        letterSpacing: "0.02133em",
                                    }}
                                >
                                    *A task represents a source, destination or
                                    transformation.
                                </Typography>
                            </Stack>
                            <div className="pricing-page-checklist-wrapper">
                                <p style={{ marginTop: 0 }}>
                                    Everything in Flow Free plus:
                                </p>
                                <ChecklistItem>99.9% SLA</ChecklistItem>
                                <ChecklistItem>
                                    Limitless horizontal scaling
                                </ChecklistItem>
                                <ChecklistItem>
                                    Unlimited collections, sources and
                                    destinations
                                </ChecklistItem>
                                <ChecklistItem>
                                    Pay as you go, monthly and annual payment
                                    options
                                </ChecklistItem>
                                <ChecklistItem>Free 30-day trial</ChecklistItem>
                                <ChecklistItem>
                                    9x5 Customer Support - Slack + email
                                </ChecklistItem>
                            </div>
                            <p className="pricing-page-tile-price-subtext">
                                Users typically save 70-80% over other solutions
                                while enabling real-time data.
                            </p>
                            <OutboundLink
                                target="_blank"
                                href="https://dashboard.estuary.dev/register"
                                className="pricing-page-tile-button"
                            >
                                Try it free
                            </OutboundLink>
                        </div>
                        <div className="pricing-page-tile">
                            <PricingEnterprise className="pricing-page-tile-icon icon-wrapper" />
                            <p className="pricing-page-tile-name">Enterprise</p>
                            <p className="pricing-page-tile-price-subtext">
                                For large or custom deployments of Flow.
                            </p>
                            <p className="pricing-page-price">
                                <span className="pricing-page-price-bold">
                                    Custom
                                </span>
                            </p>
                            <div className="pricing-page-checklist-wrapper-custom">
                                <p>Everything in Flow Cloud plus:</p>
                                <ChecklistItem>
                                    Certificates of SOC2 & HIPAA compliance
                                </ChecklistItem>
                                <ChecklistItem>
                                    Provisioned servers
                                </ChecklistItem>
                                <ChecklistItem>
                                    9x5 Support standard, 24x7 support available
                                </ChecklistItem>
                                <ChecklistItem>
                                    Customer Success Manager
                                </ChecklistItem>
                                <div className="pricing-page-checklist-item">
                                    <div className="pricing-page-tile-coming-soon-image">
                                        <p>Coming Soon</p>
                                    </div>
                                </div>
                                <ChecklistItem bullet>
                                    Advanced SSO (OAuth / SAML / SCIM)
                                </ChecklistItem>
                                <ChecklistItem bullet>
                                    Custom VPC deployment
                                </ChecklistItem>
                            </div>
                            <p className="pricing-page-tile-price-subtext">
                                Want to try Flow for free for 30 days, with no
                                limit on data transfer?
                            </p>
                            <Link
                                className="pricing-page-tile-button"
                                to="/about#contact-us"
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>
                    <div className="pricing-page-faq">
                        <h2 className="pricing-page-faq-title">
                            Frequently Asked Questions
                        </h2>
                        <div className="pricing-page-faq-qa-wrapper">
                            <p className="pricing-page-faq-question">
                                How is my monthly bill calculated?
                            </p>
                            <p className="pricing-page-faq-answer">
                                Your bill is calculated based on the amount of
                                data that is Captured, Transformed and
                                Materialized by Flow to your destinations. Each
                                of these are “tasks” and activity from all tasks
                                are summed on a monthly basis. Unlike other
                                platforms, Flow doesn’t store data and you’ll
                                only pay on data that is actively moved during
                                that month. In the free tier, you are given 10
                                GB of streaming data at no charge, at which
                                point the product will stop capturing and
                                materializing additional data.
                            </p>
                        </div>
                        <div className="pricing-page-faq-qa-wrapper">
                            <p className="pricing-page-faq-question">
                                How can I get Flow discounts?
                            </p>
                            <p className="pricing-page-faq-answer">
                                Discounts are based on two things - volume
                                commitments and contract duration. Please
                                contact us to learn more about the discounts
                                available for your use case.
                            </p>
                        </div>
                        <div className="pricing-page-faq-qa-wrapper">
                            <p className="pricing-page-faq-question">
                                How does Pay as you Go (PAYG) pricing work?
                            </p>
                            <p className="pricing-page-faq-answer">
                                For customers that are just starting out, or
                                don’t want to commit to a specific volume of
                                data or time commitment, you can simply use Flow
                                and pay for actual consumption on a monthly
                                basis. You enter your credit card information
                                and at the end of each month, your bill is
                                computed based on the amount of data transfer.
                            </p>
                        </div>
                        <div className="pricing-page-faq-qa-wrapper">
                            <p className="pricing-page-faq-question">
                                How does prepay work?
                            </p>
                            <p className="pricing-page-faq-answer">
                                Customers that want to pay for a fixed amount of
                                data transfer can pay up front and then burn
                                down that usage over time (no more than 12
                                months). The more data transfer that is paid for
                                up front, the larger the discount from the PAYG
                                price.
                            </p>
                        </div>
                        <div className="pricing-page-faq-qa-wrapper">
                            <p className="pricing-page-faq-question">
                                How long can I trial Flow?
                            </p>
                            <p className="pricing-page-faq-answer">
                                Flow can be used for free indefinitely, with the
                                only gate that you are limited to 10 GB of data
                                transfer each month. For customers with larger
                                needs, we do offer a 30 day free trial upon
                                request. Please contact us to learn more and to
                                qualify.
                            </p>
                        </div>
                        <div className="pricing-page-faq-qa-wrapper">
                            <p className="pricing-page-faq-question">
                                What if I need more time than 30 days to trial
                                Flow?
                            </p>
                            <p className="pricing-page-faq-answer">
                                Your bill is calculated based on the amount of
                                data that is Captured, Transformed and
                                Materialized by Flow to your destinations. Each
                                of these are “tasks” and activity from all tasks
                                are summed on a monthly basis. Unlike other
                                platforms, Flow doesn’t store data and you’ll
                                only pay on data that is actively moved during
                                that month. In the free tier, you are given 10
                                GB of streaming data at no charge, at which
                                point the product will stop capturing and
                                materializing additional data.
                            </p>
                        </div>
                        <div className="pricing-page-faq-qa-wrapper">
                            <p className="pricing-page-faq-question">
                                What are my billing options?
                            </p>
                            <p className="pricing-page-faq-answer">
                                The Free tier does not require a credit card or
                                any billing information. The Standard tier can
                                be paid via credit card, debit card (for
                                prepay), or Invoice. The Enterprise tier is paid
                                for via Invoice.
                            </p>
                        </div>
                        <div className="pricing-page-faq-qa-wrapper">
                            <p className="pricing-page-faq-question">
                                How do you keep the costs down with very large
                                data sets?
                            </p>
                            <p className="pricing-page-faq-answer">
                                If your dataset is very large, we are happy to
                                create a custom pricing to meet all of your
                                needs.
                            </p>
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
