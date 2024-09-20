import { IGatsbyImageData, GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { graphql } from 'gatsby';
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
import SignUp from '../../components/Signup';
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

interface PodcastProps {
    id: string;
    title: string;
    picture: {
        localFile: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
            };
        };
    };
    links: {
        strapi_json_value: string[];
    };
    description: {
        data: {
            description: string;
        };
    };
}

interface LpPodcatsProps {
    data: {
        allStrapiPodcast: {
            nodes: PodcastProps[];
        };
    };
}

const LpPodcats = ({
    data: {
        allStrapiPodcast: { nodes: podcasts },
    },
}: LpPodcatsProps) => {
    console.log(podcasts.map((podcast) => podcast.links.strapi_json_value));
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
                        {podcasts.map((podcast) => {
                            const podcastPictureSrc = getImage(
                                podcast.picture.localFile.childImageSharp
                                    .gatsbyImageData
                            );

                            return (
                                <div key={podcast.id} className={episodeItem}>
                                    {podcastPictureSrc ? (
                                        <div className={episodeLeft}>
                                            <GatsbyImage
                                                alt={`${podcast.title} podcast thumbnail`}
                                                image={podcastPictureSrc}
                                            />
                                        </div>
                                    ) : null}
                                    <div className={episodeRight}>
                                        <div className={episodeHeading}>
                                            {podcast.title}
                                        </div>
                                        <div
                                            className={episodeDescription}
                                            dangerouslySetInnerHTML={{
                                                __html: podcast.description.data
                                                    .description,
                                            }}
                                        />
                                        <div className={linksWrap}>
                                            {podcast.links.strapi_json_value.map(
                                                (link) => (
                                                    <>
                                                        {link.includes(
                                                            'youtube.com'
                                                        ) ||
                                                        link.includes(
                                                            'youtu.be'
                                                        ) ? (
                                                            <OutboundLink
                                                                target="_blank"
                                                                href={link}
                                                                aria-label="watch youtube"
                                                                key={`youtube-${link}`}
                                                            >
                                                                <WatchYoutubeButton />
                                                            </OutboundLink>
                                                        ) : null}

                                                        {link.includes(
                                                            'podcasts.apple.com'
                                                        ) ? (
                                                            <OutboundLink
                                                                target="_blank"
                                                                href={link}
                                                                aria-label="apple podcast"
                                                                key={`apple-${link}`}
                                                            >
                                                                <ApplePodcastButton />
                                                            </OutboundLink>
                                                        ) : null}

                                                        {link.includes(
                                                            'spotify.com'
                                                        ) ? (
                                                            <OutboundLink
                                                                target="_blank"
                                                                href={link}
                                                                aria-label="listen spotify"
                                                                key={`spotify-${link}`}
                                                            >
                                                                <SpotifyButton />
                                                            </OutboundLink>
                                                        ) : null}
                                                    </>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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

export const pageQuery = graphql`
    query GetAllPodcasts {
        allStrapiPodcast {
            nodes {
                id
                title: Title
                picture: Picture {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(width: 600, placeholder: BLURRED)
                        }
                    }
                }
                links: Links {
                    strapi_json_value
                }
                description: Description {
                    data {
                        description: Description
                    }
                }
            }
        }
    }
`;
