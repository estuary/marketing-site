import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import BackgroundImage from 'gatsby-background-image';

const BackgroundImageWrapper = ({
    children,
    ...rest
}: React.BaseHTMLAttributes<HTMLDivElement>) => {
    const data = useStaticQuery(graphql`
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

    // Set ImageData.
    const imageData = data.background.childImageSharp.fluid;

    return (
        <BackgroundImage
            Tag="div"
            fadeIn={false}
            critical
            className="background-index-wrapper"
            fluid={imageData}
            {...{ ...{ children, rest }, children: undefined }}
        >
            {children}
        </BackgroundImage>
    );
};

export default BackgroundImageWrapper;
