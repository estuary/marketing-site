import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
} from '../components/PricingPage';

const PricingPage = () => {
    return (
        <Layout>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </Layout>
    );
};

export const Head = () => {
    const { metaImg } = useStaticQuery(graphql`
        query {
            metaImg: file(
                relativePath: { eq: "pricing/pay-once-for-new-target-data.png" }
            ) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 670)
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
