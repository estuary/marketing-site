import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import Hero from '../../components/SecurityPage/Hero';
import DeploymentModes from '../../components/SecurityPage/DeploymentModes';
import AlwaysSecure from '../../components/SecurityPage/AlwaysSecure';
import SecurityFeatures from '../../components/SecurityPage/SecurityFeatures';
import Map from '../../components/SecurityPage/Map';
import ExplorePrivateDeployments from '../../components/SecurityPage/ExplorePrivateDeployments';

const SecurityPage = () => {
    return (
        <Layout>
            <Hero />
            <DeploymentModes />
            <AlwaysSecure />
            <SecurityFeatures />
            <Map />
            <ExplorePrivateDeployments />
        </Layout>
    );
};

export const Head = () => {
    const { metaImg } = useStaticQuery(graphql`
        query {
            metaImg: file(
                relativePath: { eq: "security-page/security-hero-image.png" }
            ) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 534)
                }
            }
        }
    `);

    return (
        <Seo
            title="Secure Data with Estuary Flow's Flexible Integration Options"
            description="Estuary Flow provides secure data integration with flexible deployment options. Ensure compliance with GDPR, SOC 2, and HIPAA for a secure, scalable solution."
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default SecurityPage;
