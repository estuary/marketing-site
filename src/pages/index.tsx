import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import SectionOne from '../components/Homepage/SectionOne';
import SectionTwo from '../components/Homepage/SectionTwo';
import SectionThree from '../components/Homepage/SectionThree';
import SectionFour from '../components/Homepage/SectionFour';
import SectionFive from '../components/Homepage/SectionFive';
import SectionSix from '../components/Homepage/SectionSix';
import SectionSeven from '../components/Homepage/SectionSeven';
import SectionEight from '../components/Homepage/SectionEight';
import SectionNine from '../components/Homepage/SectionNine';
import SectionTen from '../components/Homepage/SectionTen';
import SectionEleven from '../components/Homepage/SectionEleven';

const IndexPage = () => {
    return (
        <Layout>
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
        </Layout>
    );
};

export const Head = () => {
    const { metaImg } = useStaticQuery(graphql`
        query {
            metaImg: file(relativePath: { eq: "flow-desktop.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 1200)
                }
            }
        }
    `);

    return (
        <Seo
            title="Estuary | Real-Time Data Integration, CDC & ETL Platform"
            description="Estuary Flow is the most reliable real-time data integration platform for ETL, ELT, CDC and streaming pipelines. Build and automate data pipelines. Try it free!"
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default IndexPage;
