import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import BackgroundImage, {
    IBackgroundImageProps,
} from 'gatsby-background-image';

import { commonBackgroundImageProps } from './utils';

type StraightLinesBackgroundProps = IBackgroundImageProps & {
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const StraightLinesBackground = ({
    children,
    ...rest
}: StraightLinesBackgroundProps) => {
    const swoopingLines = useStaticQuery(graphql`
        query {
            imageData: file(
                relativePath: { eq: "lp-connector/real-time/Vector.png" }
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
            fluid={swoopingLines.imageData.childImageSharp.fluid}
            backgroundColor="#04192b"
            {...commonBackgroundImageProps}
            {...rest}
        >
            {children}
        </BackgroundImage>
    );
};

export default StraightLinesBackground;
