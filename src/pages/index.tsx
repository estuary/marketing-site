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
import DeploymentModes from '../components/Homepage/DeploymentModes';
import TheBestRealTimeCdc from '../components/Homepage/TheBestRealTimeCdc';
import SeeHowSection from '../components/SeeHowSection';
import OutboundLinkFilled from '../components/LinksAndButtons/OutboundLinkFilled';
import LinkOutlined from '../components/LinksAndButtons/LinkOutlined';
import { dashboardRegisterUrl } from '../../shared';
import OrganizationScript from '../components/OrganizationScript';
import ConnectorsMasonrySection from '../components/ConnectorsMasonrySection';
import HowEstuaryMakesADifferenceSection from '../components/HowEstuaryMakesADifferenceSection';

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
            <ConnectorsMasonrySection
                title={
                    <>
                        <span>Secure data movement between</span> any source{' '}
                        <span>and</span> destination
                    </>
                }
                description="Easily connect, synchronize and activate your data whether it's for AI, operations, data warehouses, or beyond."
            />
            <Do4xMoreWith25xLess />
            <HowEstuaryMakesADifferenceSection />
            <SeeHowSection
                buttons={
                    <>
                        <OutboundLinkFilled
                            id="try-now-for-free-button/home-page"
                            href={dashboardRegisterUrl}
                            target="_blank"
                        >
                            Try Now For Free
                        </OutboundLinkFilled>
                        <LinkOutlined
                            id="contact-us-button/home-page"
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
    const { metaImg, site } = useStaticQuery(graphql`
        query GetHomepageMetadata {
            metaImg: file(relativePath: { eq: "flow-desktop.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 1200, height: 630)
                }
            }
            site {
                siteMetadata {
                    siteUrl
                }
            }
        }
    `);

    return (
        <Seo
            title="Estuary | Real-Time Data Integration, CDC & ETL Platform"
            description="Estuary Flow is the most reliable real-time data integration platform for ETL, ELT, CDC and streaming pipelines. Build and automate data pipelines. Try it free!"
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        >
            <OrganizationScript site={site} />
        </Seo>
    );
};

export default IndexPage;
