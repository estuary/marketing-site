import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import BackgroundImage, {
    IBackgroundImageProps,
} from 'gatsby-background-image';

import { commonSwoopingLinesBackgroundImageProps } from './utils';

type LightSwoopingLinesRightDirectionBackgroundProps = IBackgroundImageProps & {
    children?: React.ReactNode;
    backgroundColor?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const LightSwoopingLinesRightDirectionBackground = ({
    children,
    backgroundColor,
    ...rest
}: LightSwoopingLinesRightDirectionBackgroundProps) => {
    const swoopingLines = useStaticQuery(graphql`
        query {
            imageData: file(
                relativePath: { eq: "lp-connector/hero/Vector.png" }
            ) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 2170) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    `);

    return (
        <BackgroundImage
            Tag="section"
            fluid={swoopingLines.imageData.childImageSharp.fluid}
            backgroundColor={backgroundColor ?? '#f9fafc'}
            {...commonSwoopingLinesBackgroundImageProps}
            {...rest}
        >
            {children}
        </BackgroundImage>
    );
};

export default LightSwoopingLinesRightDirectionBackground;
