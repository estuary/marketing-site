import * as React from "react"
import { useState } from "react"
import Layout from "../components/layout"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Slider, SvgIconProps, Typography, createSvgIcon, styled, useMediaQuery, useTheme, Stack } from "@mui/material"

import BlackCheckmark from "../svgs/checkmark-black.svg"
import WhiteCheckmark from "../svgs/light-checkmark.svg"
import QuestionMarkSvg from "../svgs/question-mark.svg"
import QuestionMarkSvgWhite from "../svgs/question-mark-white.svg"
import PlusSign from "../svgs/plus-sign.svg"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Seo from "../components/seo"
import { Link, graphql, useStaticQuery } from "gatsby"
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { ContextToolTip } from "../components/ContextTooltip"
import PricingOpenSource from "../svgs/pricing-page-open-source.svg"
import PurpleRectangle from "../svgs/purple_rectangle.svg"
import WhiteRectangle from "../svgs/white_rectangle.svg"
import PricingCloud from "../svgs/cloud-pricing.svg"
import PricingEnterprise from "../svgs/pricing-page-enterprise.svg"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Check } from "@mui/icons-material"

const QuestionIcon = createSvgIcon(QuestionMarkSvg({}), "Question Mark");
const QuestionMarkIcon = React.forwardRef((props: SvgIconProps, ref: React.Ref<SVGSVGElement>) => <QuestionIcon ref={ref} viewBox="0 0 32 32" {...props} />)
const QuestionMarkIconWhite = React.forwardRef((props: SvgIconProps, ref: React.Ref<SVGSVGElement>) => <QuestionMarkSvgWhite ref={ref} viewBox="0 0 32 32" {...props} />)


const SliderComponent = styled(Slider)({
    color: "#7D65F4",
    "& .MuiSlider-thumb": {
        height: 36,
        width: 36,
        backgroundColor: "#7D65F4",
        border: "6px solid white",
        boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.25)",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.25)",
        },
        "&:before": {
            display: "none",
        },
    },
    '& .MuiSlider-track': {
        height: 28,
    },
    '& .MuiSlider-rail': {
        color: '#D9D9D9',
        opacity: 1,
        height: 28,
        width: '100%'
    },
})

function gByteLabel(gb: number, maxPrec = 10) {
    const units = ["GB", "TB"]

    let unitIndex = 0
    let scaledValue = gb

    while (scaledValue >= 1000 && unitIndex < units.length - 1) {
        unitIndex += 1
        scaledValue /= 1000
    }

    return `${scaledValue.toFixed(Math.min(unitIndex, maxPrec))}${units[unitIndex]}`
}

export const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
})

const gbPoints = [
    1,
    250,
    500,
    1000,
    5000
]

const scale = idx => {

    const previousMarkIndex = Math.floor(idx - 1);
    const previousMark = gbPoints[previousMarkIndex];

    if (idx === previousMarkIndex) {
        return previousMark;
    }

    const nextMark = gbPoints[previousMarkIndex + 1];

    if (!nextMark) {
        return previousMark
    }

    const frac = ((idx - 1) - previousMarkIndex) * (nextMark - previousMark)

    return previousMark + frac;
};

const marks = gbPoints.map((_, index) => ({
    value: index + 1,
    label: gByteLabel(scale(index + 1))
}));


export const calculatePrice = (gb: number, connectors: number) => ({
    estuary: 1.0 * gb + 100 * connectors,
    fivetran: (1590 + 45.7 * gb + -0.0517 * gb ** 2 + 2.79 * 10 ** -5 * gb ** 3 + -5.37 * 10 ** -9 * gb ** 4),
    confluent: connectors * 150 + (1.73 * gb + 1100)
})


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
                    Slug
                    hero: Hero {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
            allStrapiProductComparisonPage(
                    filter: {Published: {}, Slug: {eq: "vs-fivetran"}}
                ) {
                    nodes {
                    their_name
                    Slug
                    logo: DescriptivePicture {
                        localFile {
                        childImageSharp {
                            gatsbyImageData(
                            layout: CONSTRAINED
                            width: 400
                            placeholder: BLURRED
                            aspectRatio: 1.7
                            formats: [AUTO, WEBP, AVIF]
                            )
                        }
                        }
                    }
                    }
                }
             }   
    `)

    const [selectedPlan, setSelectedPlan] = useState("free");
    const [selectedGbs, setSelectedGbs] = useState(1);
    const [selectedConnectors, setSelectedConnectors] = useState(2);

    const prices = React.useMemo(() => calculatePrice(scale(selectedGbs), selectedConnectors), [selectedGbs, selectedConnectors])

    const theme = useTheme()
    const isMedium = useMediaQuery(theme.breakpoints.between(811, 1100))


    const ChecklistItem = ({ children, white = false }) => (
        <div className="pricing-page-checklist-item">
            {white ? (
                <>
                    <WhiteCheckmark className="pricing-page-tile-checkmark-image" />
                    <p className="pricing-page-tile-checklist-item-text text-white">{children}</p>
                </>
            ) : (
                <>
                    <BlackCheckmark className="pricing-page-tile-checkmark-image" />
                    <p className="pricing-page-tile-checklist-item-text">{children}</p>
                </>
            )}
        </div>
    )

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
                                    href="/about/#contact-us"
                                    className="section-one-demo-button"
                                >
                                    Contact Us
                                </OutboundLink>
                            </div>
                        </div>
                        <div className="pricing-page-top-right">
                            <StaticImage
                                placeholder="none"
                                alt="pricing logo"
                                src="../images/dude_desk_plant.png"
                                layout="fixed"
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

                    {/* Plans */}
                    <div className="plan-container">
                        <div className="heading">
                            <h2>Plans</h2>
                        </div>
                        <div className="pricing-page-tiles-wrapper">
                            <div className="pricing-page-tile">
                                <PricingOpenSource className="pricing-page-tile-icon" />
                                <PurpleRectangle className="pricing-page-rectangle" />
                                <p className="pricing-page-tile-name">Free</p>
                                <p className="pricing-page-price">
                                    <span className="pricing-page-price">
                                        $0/GB
                                    </span>
                                </p>
                                <div className="pricing-page-checklist-wrapper">
                                    <ChecklistItem>
                                        Up to 10GB / mo for any 2 connectors
                                    </ChecklistItem>
                                    <ChecklistItem>
                                        Millisecond Latency
                                    </ChecklistItem>
                                    <ChecklistItem>
                                        UI & CLI for building & monitoring pipelines
                                    </ChecklistItem>
                                    <ChecklistItem>
                                        Limited Data Retention in Estuary Cloud
                                    </ChecklistItem>
                                    <ChecklistItem>
                                        Incremental Syncing for lower CDC cost
                                    </ChecklistItem>
                                    <ChecklistItem>
                                        Streaming Infrastructure
                                    </ChecklistItem>
                                </div>
                                <Link
                                    className="pricing-page-tile-button"
                                    to="https://github.com/estuary/flow"
                                >
                                    Get started
                                </Link>
                            </div>
                            <div className="pricing-page-tile-purple">
                                <p className="pricing-page-corner-text">30-Day <br /> Free Trial</p>
                                <PricingCloud className="pricing-page-tile-icon" />
                                <WhiteRectangle className="pricing-page-rectangle" />
                                <p className="pricing-page-tile-name text-white">Cloud</p>
                                <div className="pricing-page-checklist-wrapper">
                                    <p className="pricing-page-price text-white">
                                        $0.50/GB
                                    </p>
                                    <ChecklistItem white>
                                        $.50/GB change data moved +$.14/hour/connector
                                    </ChecklistItem>
                                    <ChecklistItem white>All features of Free plan, plus... </ChecklistItem>
                                    <ChecklistItem white>
                                        Data stored in your cloud
                                    </ChecklistItem>
                                    <ChecklistItem white>99.9% uptime SLA</ChecklistItem>


                                    <ChecklistItem white>
                                        Unlimited Connectors
                                    </ChecklistItem>
                                    <ChecklistItem white>
                                        9x5 Customer Support via Slack/Email
                                    </ChecklistItem>
                                </div>
                                <OutboundLink
                                    target="_blank"
                                    href="https://dashboard.estuary.dev/register"
                                    className="pricing-page-tile-button-white"
                                >
                                    Try it free
                                </OutboundLink>
                            </div>
                            <div className="pricing-page-tile">
                                <PricingEnterprise className="pricing-page-tile-icon" />
                                <PurpleRectangle className="pricing-page-rectangle" />
                                <p className="pricing-page-tile-name">Enterprise</p>
                                <p className="pricing-page-price">
                                    <span className="pricing-page-price">
                                        Custom Pricing
                                    </span>
                                </p>
                                <div className="pricing-page-checklist-wrapper-custom">
                                    <ChecklistItem>
                                        All features of Free + Cloud, plus...
                                    </ChecklistItem>
                                    <ChecklistItem>
                                        SOC2 & HIPPA Certificates
                                    </ChecklistItem>
                                    <ChecklistItem>
                                        Customer Success Manager
                                    </ChecklistItem>
                                    <ChecklistItem>
                                        24x7 support available
                                    </ChecklistItem>
                                    <ChecklistItem>
                                        Provisioned servers
                                    </ChecklistItem>

                                </div>
                                <Link
                                    className="pricing-page-tile-button"
                                    to="/about#contact-us"
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>


                    </div>

                    {/* Cost Calculator */}

                    <div className="cost-calculator">
                        <div className="heading">
                            <h2>Price Comparison</h2>
                        </div>
                        <div className="cost-calculator-container">
                            <div className="cost-calculator-left">
                                <div className="cost-calculator-subcontainer">
                                    <div className="cost-calculator-title">
                                        <p className="cost-calculator-left-title">Calculator</p>
                                        <p className="cost-calculator-subtitle">GB of Change Data</p>
                                        {/* <ContextToolTip
                                            placement="top-start"
                                            title={(<Typography className="context-tooltip-text">
                                                ‘Change Data’ is defined as any incremental
                                                upsert event. You are only billed on the bytes
                                                of moving that particular new event. For example, a single
                                                database row being backfilled or updated will be billed based on the total size of
                                                the corresponding JSON document. One connector can operate on many tables inside a DB.
                                            </Typography>)} >
                                            <QuestionMarkIcon id="change-data" className="question-mark" />
                                        </ContextToolTip> */}
                                    </div>
                                    <SliderComponent
                                        value={selectedGbs}
                                        min={1}
                                        max={gbPoints.length}
                                        step={0.0001}
                                        valueLabelFormat={val => gByteLabel(scale(val))}
                                        valueLabelDisplay="auto"
                                        marks={marks}
                                        // scale={scale}
                                        onChange={(_, val: number) => setSelectedGbs(val)}
                                    />
                                </div>
                                <div className="content-bottom">
                                    <div className="cost-calculator-title">
                                        <p className="cost-calculator-subtitle">Number of Connectors</p>
                                        {/* <ContextToolTip
                                            placement="top-start"
                                            title={(<Typography className="context-tooltip-text">
                                                A connector is defined as any unique database connection. For example, 3 connectors to Postgres and 1 to Salesforce would be 4 active connectors that are billed at $.14/hour (about $100/month)
                                            </Typography>)} >
                                            <QuestionMarkIcon id="num-connectors" className="question-mark" />
                                        </ContextToolTip> */}
                                    </div>
                                    <div className="count-input">
                                        <div className="btn-left" onClick={() => setSelectedConnectors(c => Math.max(0, c + 1))}>
                                            <PlusSign />
                                        </div>
                                        <input className="cost-calculator-connector-input" type="number" value={selectedConnectors} onChange={evt => setSelectedConnectors(+evt.target.value)} />
                                        <div className="btn-right" onClick={() => setSelectedConnectors(c => Math.max(0, c - 1))}>
                                            <svg
                                                width="15"
                                                height="2"
                                                viewBox="0 0 15 2"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="15"
                                                    height="2"
                                                    rx="1"
                                                    fill="#ffffff"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cost-calculator-results-wrapper">
                                <p className="results-title zero-margin-bottom">
                                    Results
                                </p>
                                <div className="results-text-wrapper">
                                    <p className="results-title zero-margin-bottom">{currencyFormatter.format(prices.estuary)} / Month</p>
                                    <ContextToolTip
                                        placement="top-start"
                                        title={(<Typography className="context-tooltip-text">
                                            ‘Change Data’ is defined as any incremental
                                            upsert event. You are only billed on the bytes
                                            of moving that particular new event. For example, a single
                                            database row being backfilled or updated will be billed based on the total size of
                                            the corresponding JSON document. One connector can operate on many tables inside a DB.
                                        </Typography>)} >
                                        <QuestionMarkIconWhite id="change-data" className="question-mark" />
                                    </ContextToolTip>
                                </div>
                                <p className="results-subtext zero-margin-bottom">
                                    {gByteLabel(scale(selectedGbs))} of change data
                                </p>
                                <p className="results-subtext">
                                    {selectedConnectors} connectors
                                </p>

                            </div>
                            <div className="cost-calculator-right">
                                <div className="comparisons-wrapper">
                                        <div className="cost-calculator-right-wrapper">
                                            <p className="cost-calculator-left-title zero-margin-bottom">
                                                Comparisons
                                            </p>
                                        </div>
                                    <div className="content-bottom">
                                        <div className="cost-calculator-right-wrapper">
                                            <div className="comparisons-competition">
                                                <p className="comparisons-subtext zero-margin-bottom">
                                                    The Competition
                                                </p>
                                                <ContextToolTip
                                                    placement="top-start"
                                                    title={(<Typography className="context-tooltip-text">
                                                        ‘Change Data’ is defined as any incremental
                                                        upsert event. You are only billed on the bytes
                                                        of moving that particular new event. For example, a single
                                                        database row being backfilled or updated will be billed based on the total size of
                                                        the corresponding JSON document. One connector can operate on many tables inside a DB.
                                                    </Typography>)} >
                                                    <QuestionMarkIcon id="change-data" className="question-mark-dark" />
                                                </ContextToolTip>
                                            </div>

                                        </div>
                                        <div className="comparisons-competitor">
                                            <p className="zero-margin-bottom">Fivetran</p>
                                            <p className="zero-margin-bottom">{currencyFormatter.format(prices.fivetran)} / Mo</p>
                                        </div>
                                        <div className="comparisons-competitor">
                                            <p className="zero-margin-bottom">Confluent</p>
                                            <p className="zero-margin-bottom">{currencyFormatter.format(prices.confluent)} / Mo</p>
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
                                    <>
                                        <Accordion expanded={index === 0 ? true : null}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon sx={{ color: "#27272A", fontSize: "2rem" }} />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                className="faq-question"
                                            >
                                                <Typography >{item.title}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography sx={{ lineHeight: "2.5rem", color: "#3F3F46" }}>
                                                    {item.description}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </>

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
                                                to={`/${post.Slug}`}
                                                className="related-post-card"
                                            >
                                                <GatsbyImage
                                                    image={
                                                        post?.hero?.localFile
                                                            ?.childImageSharp
                                                            ?.gatsbyImageData
                                                    }
                                                    alt="debezium alternatives"
                                                    className="icon-image popular-articles-image related-post-image"
                                                />
                                                <div className="related-post-card-title">
                                                    {post.title}
                                                </div>
                                            </Link>
                                        </>
                                    )
                                )}
                            {relatedPost?.allStrapiProductComparisonPage?.nodes &&
                                relatedPost?.allStrapiProductComparisonPage?.nodes?.map(
                                    (post: any, index: number) => (
                                        <>
                                            <Link
                                                to={`/${post.Slug}`}
                                                className="related-post-card"
                                            >
                                                <GatsbyImage
                                                    image={
                                                        post?.logo?.localFile
                                                            ?.childImageSharp
                                                            ?.gatsbyImageData
                                                    }
                                                    alt="debezium alternatives"
                                                    className="icon-image popular-articles-image related-post-image"
                                                />
                                                <div className="related-post-card-title">
                                                    Estuary Flow vs. {post.their_name}
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
                                    Contact Us
                                </OutboundLink>
                            </div>
                            <div>

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
