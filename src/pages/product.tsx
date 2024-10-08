import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Seo from '../components/seo';

import SectionEight from '../components/Product/SectionEight';
import SectionEleven from '../components/Product/SectionEleven';
import SectionFive from '../components/Product/SectionFive';
import SectionFour from '../components/Product/SectionFour';
import SectionFourteen from '../components/Product/SectionFourteen';
import SectionNine from '../components/Product/SectionNine';
import SectionOne from '../components/Product/SectionOne';
import SectionSeven from '../components/Product/SectionSeven';
import SectionSix from '../components/Product/SectionSix';
import SectionTen from '../components/Product/SectionTen';
import SectionThirteen from '../components/Product/SectionThirteen';
import SectionThree from '../components/Product/SectionThree';
import SectionTwelve from '../components/Product/SectionTwelve';
import SectionTwo from '../components/Product/SectionTwo';
import Layout from '../components/Layout';

const Product = () => {
    return (
        <Layout>
            <article
                className="product-page"
                itemScope
                itemType="http://schema.org/Article"
            >
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
                <SectionSeven />
                <SectionEight />
                <SectionNine />
                <SectionTen />
                <SectionEleven />
                <SectionTwelve />
                <SectionThirteen />
                <SectionFourteen />
            </article>
        </Layout>
    );
};

export const Head = () => {
    const { metaImg } = useStaticQuery(graphql`
        query {
            metaImg: file(relativePath: { eq: "real-time-graphic.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 1072)
                }
            }
        }
    `);

    return (
        <Seo
            title="Estuary Flow | Real-time Data Pipeline & Integration Platform"
            description="Estuary Flow is a real-time ETL and data pipeline platform for quick data integration. Build pipelines in minutes and handle both real-time and batch operations efficiently."
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default Product;
