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
import Layout from '../components/layout';

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
                    gatsbyImageData(layout: FIXED, width: 1200)
                }
            }
        }
    `);

    return (
        <Seo
            title="Flow"
            description="Flow is the first real-time Data Operations platform. Set up pipelines with both historical and real-time data in minutes."
            image={metaImg.childImageSharp.gatsbyImageData}
        />
    );
};

export default Product;
