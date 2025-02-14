import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import Hero from '../../components/SuccessStoriesPage/Hero';
import SuccessStories from '../../components/SuccessStoriesPage/SuccessStories';
import WhatCustomersSay from '../../components/SuccessStoriesPage/WhatCustomersSay';
import SeeHowSection from '../../components/SeeHowSection';
import OutboundLinkOutlined from '../../components/LinksAndButtons/OutboundLinkOutlined';
import { webinarsUrl } from '../../../shared';
import LinkFilled from '../../components/LinksAndButtons/LinkFilled';

const SuccessStoriesPage = () => {
    return (
        <Layout>
            <Hero />
            <SuccessStories />
            <WhatCustomersSay />
            <SeeHowSection
                buttons={
                    <>
                        <LinkFilled
                            id="contact-us-button-success-stories-page-unlock-section"
                            href="/contact-us/"
                        >
                            Contact Us
                        </LinkFilled>
                        <OutboundLinkOutlined
                            id="watch-demo-button-success-stories-page-unlock-section"
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
            description="See how Estuary Flow solves complex data integration challenges for businesses around the world. Check out our proven success stories."
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default SuccessStoriesPage;
