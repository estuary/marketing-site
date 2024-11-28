import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Seo from '../../components/seo';
import Layout from '../../components/Layout';
import Hero from '../../components/CompanyUpdatesPage/Hero';
import ListOfUpdates from '../../components/CompanyUpdatesPage/ListOfUpdates';

const CompanyUpdates = () => {
    return (
        <Layout>
            <Hero />
            <ListOfUpdates />
        </Layout>
    );
};

export const Head = () => {
    // TODO: Adapt this to company updates page
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
        <Seo // TODO: Adapt this to company updates page
            title="Estuary | Real-Time Data Integration, CDC & ETL Platform"
            description="Estuary Flow is the most reliable real-time data integration platform for ETL, ELT, CDC and streaming pipelines. Build and automate data pipelines. Try it free!"
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default CompanyUpdates;
