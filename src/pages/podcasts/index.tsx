import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import NewsletterSignupForm from '../../components/NewsletterSignupForm';
import { OutboundLink } from '../../components/OutboundLink';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import { estuaryAllowsEnterprises } from '../../content/seo';
import ApplePodcastButton from '../../svgs/apple-podcasts.svg';
import HeroImage from '../../svgs/hero-image.svg';
import SpotifyButton from '../../svgs/listen-spotify.svg';
import SubscribeYoutubeImage from '../../svgs/subscribe-image.svg';
import SubscribeYoutubeButton from '../../svgs/subscribe-youtube.svg';
import WatchYoutubeButton from '../../svgs/youtube-watch.svg';
import SignUp from '../../components/signup';
import {
    container,
    hero,
    heroContainer,
    heroLeft,
    heroHeading,
    heroSubheading,
    heroRight,
    episodes,
    episodesWrap,
    episodesHeading,
    episodeItem,
    episodeLeft,
    episodeRight,
    episodeHeading,
    episodeDescription,
    linksWrap,
    subscribe,
    subscribeWrap,
    subscribeLeft,
    subscribeHeading,
    subscribeYoutube,
    subscribeSubheading,
    subscribeRight,
} from './styles.module.less';

const LpPodcats = () => {
    return (
        <Layout>
            <div className={container}>
                <section className={hero}>
                    <div className={heroContainer}>
                        <div className={heroLeft}>
                            <div className={heroHeading}>
                                Tune into Real-Time
                            </div>
                            <div className={heroSubheading}>
                                Join us as we join other thought-leaders in the
                                data engineering community as we discuss the
                                current and future state of real-time data.
                            </div>
                        </div>
                        <div className={heroRight}>
                            <HeroImage />
                        </div>
                    </div>
                </section>
                <section className={episodes}>
                    <div className={episodesWrap}>
                        <div className={episodesHeading}>Episodes</div>
                        <div className={episodeItem}>
                            <div className={episodeLeft}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Data Engineering Podcast"
                                    src="../../images/lp-podcast/episode-image.webp"
                                    width={550}
                                    height={310}
                                    quality={100}
                                />
                            </div>
                            <div className={episodeRight}>
                                <div className={episodeHeading}>
                                    Data Engineering Podcast
                                </div>
                                <div className={episodeDescription}>
                                    Johnny, Dave, and Tobias discuss why we
                                    built Gazette, the growth of streaming, and
                                    the rise of the real-time data lake.
                                </div>
                                <div className={linksWrap}>
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
                        <div className={episodeItem}>
                            <div className={episodeLeft}>
                                <StaticImage
                                    placeholder="none"
                                    alt="The Geek Narrator"
                                    src="../../images/lp-podcast/episode-image1.webp"
                                    width={550}
                                    height={310}
                                    quality={100}
                                />
                            </div>
                            <div className={episodeRight}>
                                <div className={episodeHeading}>
                                    The Geek Narrator
                                </div>
                                <div className={episodeDescription}>
                                    Our VP Engineering Phil Fried joins Kaivalya
                                    Apte to get deep on the nuances of batch vs.
                                    streaming processing paradigms.
                                </div>
                                <div className={linksWrap}>
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
                <section className={subscribe}>
                    <div className={subscribeWrap}>
                        <div className={subscribeLeft}>
                            <div className={subscribeHeading}>
                                Stay in the loop
                            </div>
                            <div className={subscribeYoutube}>
                                <span>Subscribe to our Youtube channel</span>
                                <OutboundLink
                                    target="_blank"
                                    href="https://www.youtube.com/@estuarydev"
                                >
                                    <SubscribeYoutubeButton />
                                </OutboundLink>
                            </div>
                            <div className={subscribeSubheading}>
                                Subscribe to our newsletter to get the latest
                                news and updates
                            </div>
                            <NewsletterSignupForm />
                        </div>
                        <div className={subscribeRight}>
                            <SubscribeYoutubeImage />
                        </div>
                    </div>
                </section>
                <SignUp />
            </div>
        </Layout>
    );
};

export const Head = () => {
    return <Seo title="Podcasts" description={estuaryAllowsEnterprises} />;
};

export default LpPodcats;
