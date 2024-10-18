import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import Hero from '../components/Homepage/Hero';
import MoveAndTransform from '../components/Homepage/MoveAndTransform';
import CaseStudies from '../components/Homepage/CaseStudies';
import SecureYourData from '../components/Homepage/SecureYourData';
import UseTheBestRealTimeCdc from '../components/Homepage/UseTheBestRealTimeCdc';
import BuildInMinutes from '../components/Homepage/BuildInMinutes';
import AutomateDataops from '../components/Homepage/AutomateDataops';
import InnovateFaster from '../components/Homepage/InnovateFaster';
import Do4xMoreWith25xLess from '../components/Homepage/Do4xMoreWith25xLess';
import WhatPeopleAreSaying from '../components/Homepage/WhatPeopleAreSaying';
import SeeHow from '../components/Homepage/SeeHow';
import DeploymentModes from '../components/Homepage/DeploymentModes';

const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <MoveAndTransform />
            <CaseStudies />
            <DeploymentModes />
            <SecureYourData />
            <UseTheBestRealTimeCdc />
            <BuildInMinutes />
            <AutomateDataops />
            <InnovateFaster />
            <Do4xMoreWith25xLess />
            <WhatPeopleAreSaying />
            <SeeHow />
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
