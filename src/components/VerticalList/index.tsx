import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import OutboundLink from '../LinksAndButtons/OutboundLink';
import ApplePodcastButton from '../../svgs/apple-podcasts.svg';
import SpotifyButton from '../../svgs/listen-spotify.svg';
import WatchYoutubeButton from '../../svgs/youtube-watch.svg';
import LinkFilled from '../LinksAndButtons/LinkFilled';
import {
    list,
    episodeLeft,
    episodeRight,
    episodeDescription,
    linksWrap,
    readLink,
} from './styles.module.less';

const VerticalList = ({ items }) => {
    return (
        <ul className={list}>
            {items.map((item) => {
                const pictureSrc = getImage(
                    item.picture.localFile?.childImageSharp.gatsbyImageData
                );

                return (
                    <li key={item.id}>
                        {pictureSrc ? (
                            <div className={episodeLeft}>
                                <GatsbyImage
                                    alt={item.picture.alternativeText}
                                    image={pictureSrc}
                                />
                            </div>
                        ) : null}
                        <div className={episodeRight}>
                            <h3>{item.title}</h3>
                            <span>{item.postedDate ?? item.publishedAt}</span>
                            {item.description.data?.description ? (
                                <div
                                    className={episodeDescription}
                                    dangerouslySetInnerHTML={{
                                        __html: item.description.data
                                            ?.description,
                                    }}
                                />
                            ) : (
                                <p>{item.description}</p>
                            )}
                            <div className={linksWrap}>
                                {item.links ? (
                                    item.links?.strapi_json_value.map(
                                        (link) => (
                                            <OutboundLink
                                                key={link}
                                                href={link}
                                                target="_blank"
                                            >
                                                {link.includes('youtube.com') ||
                                                link.includes('youtu.be') ? (
                                                    <WatchYoutubeButton />
                                                ) : null}

                                                {link.includes(
                                                    'podcasts.apple.com'
                                                ) ? (
                                                    <ApplePodcastButton />
                                                ) : null}

                                                {link.includes(
                                                    'spotify.com'
                                                ) ? (
                                                    <SpotifyButton />
                                                ) : null}
                                            </OutboundLink>
                                        )
                                    )
                                ) : (
                                    <LinkFilled
                                        href={`/${item.slug}`}
                                        className={readLink}
                                    >
                                        Read
                                    </LinkFilled>
                                )}
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default VerticalList;
