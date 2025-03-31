import { IGatsbyImageData } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import NewsletterSignupForm from '../../components/NewsletterSignupForm';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import { estuaryAllowsEnterprises } from '../../content/seo';
import HeroImage from '../../svgs/hero-image.svg';
import SubscribeYoutubeImage from '../../svgs/subscribe-image.svg';
import SubscribeYoutubeButton from '../../svgs/subscribe-youtube.svg';
import SignUp from '../../components/Signup';
import OutboundLink from '../../components/LinksAndButtons/OutboundLink';
import VerticalList from '../../components/VerticalList';
import {
    container,
    hero,
    heroLeft,
    heroRight,
    episodes,
    episodesHeading,
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
                    <VerticalList items={podcasts} pageId="podcasts-page" />
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
                                    <SubscribeYoutubeButton id="subscribe-youtube-button/podcasts-page" />
                                </OutboundLink>
                            </div>
                            <p className={subscribeSubheading}>
                                Sign up for our newsletter to get the latest
                                news and updates
                            </p>
                            <NewsletterSignupForm />
                        </div>
                        <div className={subscribeRight}>
                            <SubscribeYoutubeImage />
                        </div>
                    </div>
                </section>
                <SignUp pageId="podcasts-page" />
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
                    alternativeText
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
