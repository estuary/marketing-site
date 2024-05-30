import * as React from 'react';
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
    return (
        <Seo
            title="Estuary | Real-Time Data Integration, CDC & ETL Platform"
            description="Estuary Flow is the fastest, most reliable real-time data platform for CDC, ETL, and streaming pipelines. Build and automate data pipelines in minutes. Try it Free!"
        />
    );
};

export default IndexPage;
