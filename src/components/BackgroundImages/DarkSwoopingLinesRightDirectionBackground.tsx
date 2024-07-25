import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import BackgroundImage, {
    IBackgroundImageProps,
} from 'gatsby-background-image';

import clsx from 'clsx';
import { sectionTopBottomPadding } from '../../globalStyles/sections.module.less';
import { commonBackgroundImageProps } from './utils';

type DarkSwoopingLinesRightDirectionBackgroundProps = IBackgroundImageProps & {
    children?: React.ReactNode;
    backgroundColor?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const DarkSwoopingLinesRightDirectionBackground = ({
    children,
    backgroundColor,
    className,
    ...rest
}: DarkSwoopingLinesRightDirectionBackgroundProps) => {
    const swoopingLines = useStaticQuery(graphql`
        query {
            imageData: file(relativePath: { eq: "overlay-vector-right.png" }) {
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
            className={clsx(sectionTopBottomPadding, className)}
            {...commonBackgroundImageProps}
            {...rest}
        >
            {children}
        </BackgroundImage>
    );
};

export default DarkSwoopingLinesRightDirectionBackground;
