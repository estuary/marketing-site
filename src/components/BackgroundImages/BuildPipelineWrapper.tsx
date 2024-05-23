import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

const BuildPipeLineBannerBackground = (
    props: React.BaseHTMLAttributes<HTMLDivElement>
) => {
    const data = useStaticQuery(graphql`
        query {
            background: file(
                relativePath: {
                    eq: "big-banner-build-pipeline-background-image.png"
                }
            ) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1356) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    `);

    return (
        // @ts-expect-error
        <BackgroundImage
            Tag="section"
            fadeIn={false}
            critical
            className="big-build-pipeline-banner-container"
            fluid={data.background.childImageSharp.fluid}
            backgroundColor="#04192b"
            {...{ ...props, children: undefined }}
        >
            {props.children}
        </BackgroundImage>
    );
};

export default BuildPipeLineBannerBackground;
