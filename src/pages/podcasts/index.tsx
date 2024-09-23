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
    heroLeft,
    heroRight,
    episodes,
    episodesHeading,
    episodeLeft,
    episodeRight,
    episodeDescription,
    linksWrap,
    subscribe,
    subscribeWrap,
    subscribeLeft,
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
    postedDate: string;
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
    return (
        <Layout>
            <div className={container}>
                <section className={hero}>
                    <div className={heroLeft}>
                        <h1>Tune into Real-Time</h1>
                        <p>
                            Join us as we join other thought-leaders in the data
                            engineering community as we discuss the current and
                            future state of real-time data.
                        </p>
                    </div>
                    <div className={heroRight}>
                        <HeroImage />
                    </div>
                </section>
                <section className={episodes}>
                    <h2 className={episodesHeading}>Episodes</h2>
                    <ul>
                        {podcasts.map((podcast) => {
                            const podcastPictureSrc = getImage(
                                podcast.picture.localFile.childImageSharp
                                    .gatsbyImageData
                            );

                            return (
                                <li key={podcast.id}>
                                    {podcastPictureSrc ? (
                                        <div className={episodeLeft}>
                                            <GatsbyImage
                                                alt={`${podcast.title} podcast thumbnail`}
                                                image={podcastPictureSrc}
                                            />
                                        </div>
                                    ) : null}
                                    <div className={episodeRight}>
                                        <h3>{podcast.title}</h3>
                                        <span>{podcast.postedDate}</span>
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
                                </li>
                            );
                        })}
                    </ul>
                </section>
                <section className={subscribe}>
                    <div className={subscribeWrap}>
                        <div className={subscribeLeft}>
                            <h2>Stay in the loop</h2>
                            <div className={subscribeYoutube}>
                                <p>Subscribe to our Youtube channel</p>
                                <OutboundLink
                                    target="_blank"
                                    href="https://www.youtube.com/@estuarydev"
                                >
                                    <SubscribeYoutubeButton />
                                </OutboundLink>
                            </div>
                            <p className={subscribeSubheading}>
                                Subscribe to our newsletter to get the latest
                                news and updates
                            </p>
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
        allStrapiPodcast(sort: [{ PostedDate: DESC }]) {
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
                postedDate: PostedDate(formatString: "MMMM D, YYYY")
            }
        }
    }
`;
