import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Seo from '../../../components/seo';

export const Head = () => {
    const { metaImg } = useStaticQuery(graphql`
        query {
            metaImg: file(relativePath: { eq: "pricing/graphic_parent.png" }) {
                childImageSharp {
                    fixed(width: 1200) {
                        src
                    }
                }
            }
        }
    `);

    return (
        <Seo
            title="Pricing"
            description="Reduce your data costs and latency with managed streaming CDC and ETL pipelines."
            image={metaImg.childImageSharp.fixed.src}
        />
    );
};

export default Head;
