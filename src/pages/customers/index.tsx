import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import Hero from '../../components/CustomersPage/Hero';
import CaseStudies from '../../components/CustomersPage/CaseStudies';
import WhatCustomersSay from '../../components/CustomersPage/WhatCustomersSay';
import SeeHowSection from '../../components/SeeHowSection';
import OutboundLinkOutlined from '../../components/LinksAndButtons/OutboundLinkOutlined';
import { webinarsUrl } from '../../../shared';
import LinkFilled from '../../components/LinksAndButtons/LinkFilled';

const CustomersPage = () => {
    return (
        <Layout>
            <Hero />
            <CaseStudies />
            <WhatCustomersSay />
            <SeeHowSection
                buttons={
                    <>
                        <LinkFilled href="/contact-us/">Contact Us</LinkFilled>
                        <OutboundLinkOutlined
                            href={webinarsUrl}
                            target="_blank"
                            variant="secondary"
                        >
                            Watch Demo
                        </OutboundLinkOutlined>
                    </>
                }
            />
        </Layout>
    );
};

export const Head = () => {
    const { metaImg } = useStaticQuery(graphql`
        query {
            metaImg: file(
                relativePath: { eq: "customers-page/hero-image.png" }
            ) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 670)
                }
            }
        }
    `);

    return (
        <Seo
            title="Our Customers and Success Stories | Estuary Flow"
            description="See how Estuary Flow solves complex data integration challenges for businesses around the world. Check out our case studies for proven success stories."
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default CustomersPage;
