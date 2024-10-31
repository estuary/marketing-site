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
                }
            }
        }
    `);

    return (
        <div className="container">
            <Marquee autoFill>
                {logos.allStrapiVanityLogo.nodes?.map((logo) => {
                    const isImageSvg = logo.logo.localFile.extension === 'svg';
                    const imgAltText = 'Customer logo';

                    return isImageSvg ? (
                        <div key={logo.id} className="vanity-logo">
                            <img
                                src={logo.logo.localFile.publicURL}
                                alt={imgAltText}
                            />
                        </div>
                    ) : (
                        <div key={logo.id} className="vanity-logo">
                            <GatsbyImage
                                alt={imgAltText}
                                loading="eager"
                                image={
                                    logo.logo.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                            />
                        </div>
                    );
                })}
            </Marquee>
        </div>
    );
};

export default VanityLogosMarquee;
