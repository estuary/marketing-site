import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import './styles.less';

const VanityLogosMarquee = () => {
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
                                    width: 140
                                    placeholder: NONE
                                )
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <div className="container">
            <Marquee autoFill>
                {logos.allStrapiVanityLogo.nodes?.map((logo) =>
                    logo.logo.localFile.internal.mediaType ===
                    'image/svg+xml' ? (
                        <div key={logo.id} className="vanity-logo">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: logo.logo.localFile.svg.content,
                                }}
                            />
                        </div>
                    ) : (
                        <div key={logo.id} className="vanity-logo">
                            <GatsbyImage
                                alt="logo"
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
    );
};

export default VanityLogosMarquee;
