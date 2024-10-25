import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import PricingCalculatorSection from '../components/PricingPage/PricingCalculatorSection';
import Hero from '../components/PricingPage/Hero';
import ChooseYourPlan from '../components/PricingPage/ChooseYourPlan';
import Faq from '../components/PricingPage/Faq';

const PricingPage = () => {
    return (
        <Layout>
            <Hero />
            <ChooseYourPlan />
            <PricingCalculatorSection />
            <Faq />
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
            title="Pricing & Plans | Get Started for Free"
            description="Estuary Flow offers simple pay-as-you-go pricing for real-time data integration and ETL. Build free pipelines, estimate costs with the calculator, and scale with flexible plans."
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default PricingPage;
