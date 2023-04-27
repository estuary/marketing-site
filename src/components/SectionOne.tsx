import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import HeroAnimation from "../images/hero-animation.json"
import Lottie, { LottieRef } from "lottie-react"

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
                                    placeholder: BLURRED
                                )
                            }
                        }
                    }
                }
            }
        }
    `)

    const [lottieReady, setLottieReady] = React.useState(false)
    const lottieRef: LottieRef = React.useRef()

    const handleLottieLoaded = React.useCallback(() => {
        setLottieReady(true)
        setTimeout(() => {
            lottieRef.current.play()
        }, 2000)
    }, [lottieRef])

    return (
        <div className="section-one">
            <div className="section-one-wrapper">
                <div className="section-one-left">
                    <h1 className="section-one-h1">Your data,</h1>
                    <h1 className="section-one-h1">where you want it,</h1>
                    <h1 className="section-one-h1">in milliseconds</h1>
                    <div className="section-one-subtext-wrapper">
                        <p className="section-one-subtext">
                            Managed CDC and ETL pipelines with streaming SQL
                            transforms.
                        </p>
                    </div>
                    <a
                        target="_blank"
                        href="https://dashboard.estuary.dev/register"
                        className="section-one-try-it-button"
                    >
                        Build a free streaming pipeline
                    </a>
                </div>
                <div className="section-one-right">
                    {!lottieReady && (
                        <div className="section-one-right-image">
                            <div />
                        </div>
                    )}
                    <Lottie
                        onDOMLoaded={handleLottieLoaded}
                        rendererSettings={{
                            viewBoxOnly: true,
                            preserveAspectRatio: "xMaxYMid meet",
                            progressiveLoad: true,
                            focusable: false,
                        }}
                        animationData={HeroAnimation}
                        className="section-one-right-image"
                        style={(!lottieReady && { display: "none" }) || {}}
                        autoplay={false}
                        lottieRef={lottieRef}
                    />
                </div>
            </div>
            <div className="section-one-bottom">
                {logos.allStrapiVanityLogo.nodes.map(logo =>
                    logo.logo.localFile.internal.mediaType ===
                    "image/svg+xml" ? (
                        <div
                            key={logo.id}
                            style={{ width: 120 }}
                            dangerouslySetInnerHTML={{
                                __html: logo.logo.localFile.svg.content,
                            }}
                        />
                    ) : (
                        <GatsbyImage
                            key={logo.id}
                            alt={`logo`}
                            className="section-one-bottom-logo"
                            loading="eager"
                            image={
                                logo.logo.localFile.childImageSharp
                                    .gatsbyImageData
                            }
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default SectionOne
