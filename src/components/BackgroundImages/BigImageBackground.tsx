import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { backgroundIndexWrapper } from './styles.module.less';

const BigImageBackground = ({
    children,
    ...rest
}: React.BaseHTMLAttributes<HTMLDivElement>) => {
    const imageData = useStaticQuery(graphql`
        query {
            background: file(relativePath: { eq: "blogs-bg.png" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    `);

    return (
        <BackgroundImage
            fadeIn={false}
            critical
            className={backgroundIndexWrapper}
            fluid={imageData.background.childImageSharp.fluid}
            {...{ ...{ children, rest }, children: undefined }}
        >
            {children}
        </BackgroundImage>
    );
};

export default BigImageBackground;
