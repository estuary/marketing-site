import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import type { LottieRef } from "lottie-react"
import * as React from "react"
import Marquee from "react-fast-marquee"
import { OutboundLink } from "../components/OutboundLink"
import OpenHubspotModal from "./HubSpot/OpenModal"

const animFallback = (
    <div className="section-one-right-image">
        <StaticImage
            placeholder="none"
            alt="estuary logo"
            src="../images/hero-anim-placeholder.png"
            layout="constrained"
        />
    </div>
)

const AnimatedHero = () => {
    const HeroAnimation = React.useMemo(
        () => import("../images/hero-animation.json"),
        []
    )
    const Lottie = React.useMemo(
        () => React.lazy(() => import("lottie-react")),
        []
    )

    const [heroAnim, setHeroAnim] = React.useState<Awaited<
        typeof HeroAnimation
    > | null>(null)

    React.startTransition(() => {
        HeroAnimation.then(anim => {
            setHeroAnim(anim.default as any)
        })
    })

    const [lottieReady, setLottieReady] = React.useState(false)
    const lottieRef: LottieRef = React.useRef()

    const handleLottieLoaded = React.useCallback(() => {
        setLottieReady(true)
        setTimeout(() => {
            lottieRef.current.play()
        }, 5000)
    }, [lottieRef])

    return (
        <>
            {!(lottieReady && heroAnim) && animFallback}
            {heroAnim && (
                <Lottie
                    onDOMLoaded={handleLottieLoaded}
                    rendererSettings={{
                        viewBoxOnly: true,
                        preserveAspectRatio: "xMaxYMid meet",
                        progressiveLoad: true,
                        focusable: false,
                    }}
                    animationData={heroAnim}
                    className="section-one-right-image"
                    style={(!lottieReady && { display: "none" }) || {}}
                    autoplay={false}
                    lottieRef={lottieRef}
                />
            )}
        </>
    )
}

const SectionOne = () => {
    const logos = useStaticQuery(graphql`
        {
            allStrapiVanityLogo(
                sort: { SortOrder: DESC }
                filter: { Enabled: { eq: true } }
            ) {
                nodes {
                    id
                    enabled: Enabled
                    logo: Logo {
                        localFile {
                            svg {
                                content
                            }
                            name
                            internal {
                                mediaType
                            }
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FIXED
                                    width: 120
                                    placeholder: NONE
                                )
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <div className="section-one">
            <div className="section-one-wrapper">
                <div className="section-one-main">
                    <div className="section-one-left">
                        <h1>Real-time ETL & CDC</h1>
                        <h1>for apps, analytics, and AI.</h1>
                        <h1>
                            Up in{" "}
                            <span
                                style={{ wordBreak: "break-word", hyphens: "auto" }}
                            >
                                minutes.
                            </span>
                        </h1>
                        <div className="section-one-subtext-wrapper">
                            <p className="section-one-subtext">
                                Streaming CDC with SQL and Typescript transforms,
                                all at a fraction of the cost of the alternatives
                            </p>
                            <div className="section-one-container-cta">
                                <OutboundLink
                                    target="_blank"
                                    href="https://dashboard.estuary.dev/register"
                                    className="section-one-button"
                                >
                                    Build a pipeline
                                </OutboundLink>
                                <OpenHubspotModal
                                    buttonLabel={"Book Demo"}
                                    buttonClass={"section-one-button-secondary"}
                                    buttonId="section-one-hubspot"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="section-one-right">
                        <React.Suspense fallback={animFallback}>
                            <AnimatedHero />
                        </React.Suspense>
                    </div>
                </div>
                <div className="custom-slides slide-container">
                    <Marquee>
                        {logos.allStrapiVanityLogo.nodes?.map(logo =>
                            logo.logo.localFile.internal.mediaType ===
                                "image/svg+xml" ? (
                                <div className="custom-slider" key={logo.id}>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: logo.logo.localFile.svg.content,
                                        }}
                                    />
                                </div>
                            ) : (
                                <div className="custom-slider" key={logo.id}>
                                    <GatsbyImage
                                        alt={`logo`}
                                        loading="eager"
                                        image={
                                            logo.logo.localFile.childImageSharp
                                                .gatsbyImageData
                                        }
                                    />
                                </div>
                            )
                        )}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default SectionOne
