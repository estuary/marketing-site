import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import BackgroundImage, {
    IBackgroundImageProps,
} from 'gatsby-background-image';

type BuildPipeLineBannerBackgroundProps = IBackgroundImageProps & {
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const BuildPipeLineBannerBackground = ({
    children,
    ...rest
}: BuildPipeLineBannerBackgroundProps) => {
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
        <BackgroundImage
            Tag="section"
            fadeIn={false}
            critical
            className="big-build-pipeline-banner-container"
            fluid={data.background.childImageSharp.fluid}
            backgroundColor="#04192b"
            {...rest}
        >
            {children}
        </BackgroundImage>
    );
};

export default BuildPipeLineBannerBackground;
