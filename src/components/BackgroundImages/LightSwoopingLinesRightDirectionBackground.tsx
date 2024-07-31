import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import BackgroundImage, {
    IBackgroundImageProps,
} from 'gatsby-background-image';

import clsx from 'clsx';
import { sectionTopBottomPadding } from '../../globalStyles/sections.module.less';
import { commonBackgroundImageProps } from './utils';

type LightSwoopingLinesRightDirectionBackgroundProps = IBackgroundImageProps & {
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const LightSwoopingLinesRightDirectionBackground = ({
    children,
    className,
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
            backgroundColor="#f9fafc"
            className={clsx(sectionTopBottomPadding, className)}
            {...commonBackgroundImageProps}
            {...rest}
        >
            {children}
        </BackgroundImage>
    );
};

export default LightSwoopingLinesRightDirectionBackground;
