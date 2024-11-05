import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import Hero from '../../components/PartnersPage/Hero';
import WhyPartnerWithEstuary from '../../components/PartnersPage/WhyPartnerWithEstuary';

const Partners = () => {
    return (
        <Layout>
            <Hero />
            <WhyPartnerWithEstuary />
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
            title="" // Ask Sourabh
            description=""
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default Partners;
