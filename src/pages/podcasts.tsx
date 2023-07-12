import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroImage from "../svgs/hero-image.svg"
import ApplePodcastButton from "../svgs/apple-podcasts.svg"
import SpotifyButton from "../svgs/listen-spotify.svg"
import WatchYoutubeButton from "../svgs/youtube-watch.svg"
import SubscribeYoutubeButton from "../svgs/subscribe-youtube.svg"
import SubscribeYoutubeImage from "../svgs/subscribe-image.svg"
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const LpPodcats = () => {
    return (
        <Layout headerTheme="light">
            <div className="lp-podcast-wrap">
                <section className="podcast-hero">
                    <div className="hero-container">
                        <div className="hero-left">
                            <div className="hero-heading">
                                Tune into Real-Time
                            </div>
                            <div className="hero-subheading">
                                Join us as we join other thought-leaders in the
                                data engineering community as we discuss the
                                current and future state of real-time data.
                            </div>
                        </div>
                        <div className="hero-right">
                            <HeroImage />
                        </div>
                    </div>
                </section>
                <section className="episodes">
                    <div className="episodes-wrap">
                        <div className="episodes-heading">Episodes</div>
                        <div className="episode-item">
                            <div className="episode-left">
                                <StaticImage
                                    placeholder="none"
                                    alt="Data Engineering Podcast"
                                    loading="lazy"
                                    src="../images/lp-podcast/episode-image.webp"
                                    layout="constrained"
                                    width={550}
                                    height={310}
                                    quality={100}
                                />
                            </div>
                            <div className="episode-right">
                                <div className="episode-heading">
                                    Data Engineering Podcast
                                </div>
                                <div className="episode-description">
                                    Johnny, Dave, and Tobias discuss why we
                                    built Gazette, the growth of streaming, and
                                    the rise of the real-time data lake.
                                </div>
                                <div className="links-wrap">
                                    <OutboundLink
                                        target="_blank"
                                        href="https://podcasts.apple.com/us/podcast/data-engineering-podcast/id1193040557"
                                        aria-label="apple podcast"
                                    >
                                        <ApplePodcastButton />
                                    </OutboundLink>
                                    <OutboundLink
                                        target="_blank"
                                        href="https://open.spotify.com/show/2iLvljRGVVIGlJshT5vNDS"
                                        aria-label="listen spotify"
                                    >
                                        <SpotifyButton />
                                    </OutboundLink>
                                </div>
                            </div>
                        </div>
                        <div className="episode-item">
                            <div className="episode-left">
                                <StaticImage
                                    placeholder="none"
                                    alt="The Geek Narrator"
                                    loading="lazy"
                                    src="../images/lp-podcast/episode-image1.webp"
                                    layout="constrained"
                                    width={550}
                                    height={310}
                                    quality={100}
                                />
                            </div>
                            <div className="episode-right">
                                <div className="episode-heading">
                                    The Geek Narrator
                                </div>
                                <div className="episode-description">
                                    Our VP Engineering Phil Fried joins Kaivalya
                                    Apte to get deep on the nuances of batch vs.
                                    streaming processing paradigms.
                                </div>
                                <div className="links-wrap">
                                    <OutboundLink
                                        target="_blank"
                                        href="https://www.youtube.com/watch?v=pOqQ-0cRWKU&t=3198s&pp=ygUNZ2VlayBuYXJyYXRvcg%3D%3D"
                                        aria-label="watch youtube"
                                    >
                                        <WatchYoutubeButton />
                                    </OutboundLink>
                                    <OutboundLink
                                        target="_blank"
                                        href="https://podcasts.apple.com/us/podcast/the-geeknarrator/id1619407689"
                                    >
                                        <ApplePodcastButton />
                                    </OutboundLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="subscribe">
                    <div className="subscribe-wrap">
                        <div className="subscribe-left">
                            <div className="subscribe-heading">
                                Stay in the loop
                            </div>
                            <div className="subscribe-youtube">
                                <span>Subscribe to our Youtube channel</span>
                                <OutboundLink
                                    target="_blank"
                                    href="https://www.youtube.com/@estuarydev"
                                >
                                    <SubscribeYoutubeButton />
                                </OutboundLink>
                            </div>
                            <div className="subscribe-subheading">
                                Subscribe to our newsletter to get the latest
                                news and updates
                            </div>
                            <div className="input-wrap">
                                <input type="email" placeholder="Email" />
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                        <div className="subscribe-right">
                            <SubscribeYoutubeImage />
                        </div>
                    </div>
                </section>
                <section className="signup">
                    <div className="signup-bg">
                        <div className="signup-heading">
                            <span>See how</span> Estuary can work for you and
                            your data
                        </div>
                        <div className="cta-wrap">
                            <a href="https://dashboard.estuary.dev/register">
                                Sign up
                            </a>
                            <a href="https://estuary.dev/about/#contact-us">
                                Contact us
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export const Head = () => {
    return (
        <Seo
            title={"Podcasts"}
            description={
                "Estuary allows enterprises of any size to deploy true real-time pipelines that scale for high-volume use cases — without making difficult trade-offs or investing in complex infrastructure."
            }
        />
    )
}

export default LpPodcats
