import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
    SectionEight,
    SectionFive,
    SectionFour,
    SectionNine,
    SectionOne,
    SectionSeven,
    SectionSix,
    SectionTen,
    SectionThree,
    SectionTwo,
} from '../components/Homepage';
import Layout from '../components/layout';
import Seo from '../components/seo';

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
            image={metaImg.childImageSharp.gatsbyImageData}
        />
    );
};

export default IndexPage;
