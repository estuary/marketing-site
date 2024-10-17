import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import SectionOne from '../../components/DeploymentOptionsPage/SectionOne';

const DeploymentOptions = () => {
    return (
        <Layout>
            <SectionOne />
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
        //TODO: Ask title and description to Sourabh
        <Seo
            title=""
            description=""
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default DeploymentOptions;
