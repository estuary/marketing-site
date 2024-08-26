import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import { SectionOne, SectionTwo } from '../components/PricingPage';

const PricingPage = () => {
    return (
        <Layout>
            <SectionOne />
            <SectionTwo />
        </Layout>
    );
};

export const Head = () => {
    const { metaImg } = useStaticQuery(graphql`
        query {
            metaImg: file(relativePath: { eq: "pricing/graphic_parent.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 618)
                }
            }
        }
    `);

    return (
        <Seo
            title="Pricing"
            description="Reduce your data costs and latency with managed streaming CDC and ETL pipelines."
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default PricingPage;
