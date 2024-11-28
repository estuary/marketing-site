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
    // TODO: Ask an image to Polina
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
        <Seo // TODO: Ask an image to Polina
            title="Company Updates - News, Milestones & Announcements | Estuary"
            description="Stay up to date with Estuary's latest company news, product launches, partnerships, and more. Explore updates that showcase our journey and innovations."
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default CompanyUpdates;
