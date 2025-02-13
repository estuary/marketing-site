import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import Hero from '../components/Homepage/Hero';
import MoveAndTransform from '../components/Homepage/MoveAndTransform';
import SuccessStories from '../components/Homepage/SuccessStories';
import SecureYourData from '../components/Homepage/SecureYourData';
import BuildInMinutes from '../components/Homepage/BuildInMinutes';
import AutomateDataops from '../components/Homepage/AutomateDataops';
import Do4xMoreWith25xLess from '../components/Homepage/Do4xMoreWith25xLess';
import WhatPeopleAreSaying from '../components/Homepage/WhatPeopleAreSaying';
import DeploymentModes from '../components/Homepage/DeploymentModes';
import TheBestRealTimeCdc from '../components/Homepage/TheBestRealTimeCdc';
import SeeHowSection from '../components/SeeHowSection';
import OutboundLinkFilled from '../components/LinksAndButtons/OutboundLinkFilled';
import LinkOutlined from '../components/LinksAndButtons/LinkOutlined';
import { dashboardRegisterUrl } from '../../shared';
import InnovateFaster from '../components/Homepage/InnovateFaster';

const IndexPage = () => {
    return (
        <Layout showReleaseBanner>
            <Hero />
            <MoveAndTransform />
            <SuccessStories />
            <DeploymentModes />
            <SecureYourData />
            <TheBestRealTimeCdc />
            <BuildInMinutes />
            <AutomateDataops />
            <InnovateFaster />
            <Do4xMoreWith25xLess />
            <WhatPeopleAreSaying />
            <SeeHowSection
                buttons={
                    <>
                        <OutboundLinkFilled
                            id="try-now-for-free-button-home-page"
                            href={dashboardRegisterUrl}
                            target="_blank"
                        >
                            Try Now For Free
                        </OutboundLinkFilled>
                        <LinkOutlined
                            id="contact-us-button-home-page"
                            href="/contact-us/"
                            variant="secondary"
                            hasLightBorder
                        >
                            Contact Us
                        </LinkOutlined>
                    </>
                }
            />
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
