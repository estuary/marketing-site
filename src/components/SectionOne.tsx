import * as React from "react"
import { Link } from "gatsby"
import { isDesktop, isMobile } from "react-device-detect"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import type { LottieRef } from "lottie-react"
import { useMediaQuery, useTheme } from "@mui/material"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Marquee from "react-fast-marquee";



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
    const HeroAnimation = React.useMemo(() => import("../images/hero-animation.json"), []);
    const Lottie = React.useMemo(() => React.lazy(() => import("lottie-react")), []);

    const [heroAnim, setHeroAnim] = React.useState<Awaited<
        typeof HeroAnimation
    > | null>(null)

    React.useEffect(() => {
        HeroAnimation.then(anim => {
            setHeroAnim(anim.default as any)
        })
    }, [])

    const [lottieReady, setLottieReady] = React.useState(false)
    const lottieRef: LottieRef = React.useRef()

    const handleLottieLoaded = React.useCallback(() => {
        setLottieReady(true)
        setTimeout(() => {
            lottieRef.current.play()
        }, 5000)
    }, [lottieRef])

    return (
        <React.Suspense fallback={animFallback}>
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
        </React.Suspense>
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

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"))


    return (
        <div className="section-one">
            <div className="section-one-wrapper">
                <div className="section-one-left">
                    <h1>Your data,</h1>
                    <h1>where you <span style={{ whiteSpace: "nowrap" }}>want it,</span></h1>
                    <h1>in <span style={{ wordBreak: "break-word", hyphens: "auto" }}>milliseconds</span></h1>
                    <div className="section-one-subtext-wrapper">
                        <p className="section-one-subtext">
                            Managed CDC and Real-time ETL pipelines with streaming SQL transforms.
                        </p>
                    </div>
                    <div style={{ display: "flex", flexShrink: 1 }}>
                        <OutboundLink
                            target="_blank"
                            href="https://dashboard.estuary.dev/register"
                            className="section-one-try-it-button"
                        >
                            Build a pipeline
                        </OutboundLink>
                        {isDesktop && !isSmall && (
                            <OutboundLink
                                target="_blank"
                                href="/why"
                                className="section-one-tour-button"
                                style={{ marginLeft: 16 }}
                            >Product Tour</OutboundLink>
                        )}
                    </div>
                </div>
                <div className="section-one-right">
                    {isMobile || isSmall ? animFallback : <AnimatedHero />}
                </div>
            </div>
            <div className="custom-slides">
            <Marquee>

                    {logos.allStrapiVanityLogo.nodes?.map((logo) =>
                        logo.logo.localFile.internal.mediaType === "image/svg+xml" ? (
                            <div className="custom-slider" key={logo.id} >
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: logo.logo.localFile.svg.content,
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="custom-slider">
                            <GatsbyImage
                                key={logo.id}
                                alt={`logo`}
                                loading="eager"
                                image={
                                    logo.logo.localFile.childImageSharp.gatsbyImageData
                                }
                            />
                            </div>
                        )
                    )}
                </Marquee>

            </div>
        </div>
    )
}

export default SectionOne
