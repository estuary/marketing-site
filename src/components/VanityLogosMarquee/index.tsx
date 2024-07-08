import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { Container, VanityLogo } from './styles';

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
        <Container>
            <Marquee autoFill>
                {logos.allStrapiVanityLogo.nodes?.map((logo) =>
                    logo.logo.localFile.internal.mediaType ===
                    'image/svg+xml' ? (
                        <VanityLogo key={logo.id}>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: logo.logo.localFile.svg.content,
                                }}
                            />
                        </VanityLogo>
                    ) : (
                        <VanityLogo key={logo.id}>
                            <GatsbyImage
                                alt="logo"
                                loading="eager"
                                image={
                                    logo.logo.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                            />
                        </VanityLogo>
                    )
                )}
            </Marquee>
        </Container>
    );
};

export default VanityLogosMarquee;
