import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Marquee from 'react-fast-marquee';
import './styles.less';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

interface VanityLogosMarqueeProps {
    pageId: string;
}

const VanityLogosMarquee = ({ pageId }: VanityLogosMarqueeProps) => {
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
                            name
                            publicURL
                            extension
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FIXED
                                    width: 140
                                    placeholder: NONE
                                )
                            }
                        }
                    }
                    relatedSuccessStory {
                        slug
                    }
                }
            }
        }
    `);

    return (
        <div className="container">
            <Marquee autoFill pauseOnHover>
                {logos.allStrapiVanityLogo.nodes?.map((logo) => {
                    const isImageSvg = logo.logo.localFile.extension === 'svg';
                    const imgAltText = 'Customer logo';

                    return (
                        <div key={logo.id} className="logo-wrapper">
                            {isImageSvg ? (
                                <div className="vanity-logo">
                                    <img
                                        src={logo.logo.localFile.publicURL}
                                        alt={imgAltText}
                                    />
                                </div>
                            ) : (
                                <div className="vanity-logo">
                                    <GatsbyImage
                                        alt={imgAltText}
                                        loading="eager"
                                        image={
                                            logo.logo.localFile.childImageSharp
                                                .gatsbyImageData
                                        }
                                    />
                                </div>
                            )}
                            {logo.relatedSuccessStory?.slug ? (
                                <a
                                    id={`${logo.relatedSuccessStory.slug}-vanity-logo-link/${pageId}`}
                                    href={`/success-stories/${logo.relatedSuccessStory.slug}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Success Story
                                    <ArrowOutwardIcon />
                                </a>
                            ) : null}
                        </div>
                    );
                })}
            </Marquee>
        </div>
    );
};

export default VanityLogosMarquee;
