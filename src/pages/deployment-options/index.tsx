import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import Hero from '../../components/DeploymentOptionsPage/Hero';
import PublicDeployment from '../../components/DeploymentOptionsPage/PublicDeployment';
import PrivateDeployment from '../../components/DeploymentOptionsPage/PrivateDeployment';
import ByocDeployment from '../../components/DeploymentOptionsPage/ByocDeployment';
import ComparisonTable from '../../components/DeploymentOptionsPage/ComparisonTable';

const DeploymentOptions = () => {
    return (
        <Layout>
            <Hero />
            <PublicDeployment />
            <PrivateDeployment />
            <ByocDeployment />
            <ComparisonTable />
        </Layout>
    );
};

export const Head = () => {
    const { metaImg } = useStaticQuery(graphql`
        query {
            metaImg: file(
                relativePath: {
                    eq: "deployment-options-page/deployment-options-meta-image.png"
                }
            ) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 536)
                }
            }
        }
    `);

    return (
        <Seo
            title="Estuary Flow Deployment Options: Public, Private & BYOC"
            description="Estuary Flow offers Public, Private, and BYOC deployment options for secure, scalable, and customizable data integration, perfect for any business needs."
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default DeploymentOptions;
