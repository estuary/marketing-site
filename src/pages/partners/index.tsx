import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import Hero from '../../components/PartnersPage/Hero';
import WhyPartnerWithEstuary from '../../components/PartnersPage/WhyPartnerWithEstuary';
import Benefits from '../../components/PartnersPage/Benefits';

const Partners = () => {
    return (
        <Layout>
            <Hero />
            <WhyPartnerWithEstuary />
            <Benefits />
        </Layout>
    );
};

export const Head = () => {
    const { metaImg } = useStaticQuery(graphql`
        query {
            metaImg: file(relativePath: { eq: "partners-page/handshake.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 536)
                }
            }
        }
    `);

    return (
        <Seo
            title="Estuary Partner Program: Drive Growth with Real-Time Integration"
            description="Join the Estuary Partner Program to boost your data integration capabilities. Benefit from real-time solutions, collaborative marketing, referral rewards, and hands-on support."
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default Partners;
