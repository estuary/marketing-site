import ConnectorsMasonrySection from '../components/ConnectorsMasonrySection';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import GetStarted from '../components/StartupPage/GetStarted';
import HaveQuestions from '../components/StartupPage/HaveQuestions';
import Hero from '../components/StartupPage/Hero';
import ReadyToGo from '../components/StartupPage/ReadyToGo';
import WhatFoundersAreSaying from '../components/StartupPage/WhatFoundersAreSaying';
import WhatsIncluded from '../components/StartupPage/WhatsIncluded';

const StartupPage = () => {
    return (
        <Layout>
            <Hero />
            <WhatsIncluded />
            <WhatFoundersAreSaying />
            <ConnectorsMasonrySection
                title={
                    <>
                        <span>Centralize your company&apos;s data with</span>{' '}
                        total reliability
                    </>
                }
                description={
                    <>
                        Estuary Flow offers automated, real-time pipelines from{' '}
                        <strong>200+ sources</strong> into your warehouse, data
                        lake, or other destinations. Give your business the
                        flexibility to answer any question at any time.
                    </>
                }
                isDarkTheme
            />
            <GetStarted />
            <ReadyToGo />
            <HaveQuestions />
        </Layout>
    );
};

// TODO: Ask metadata to Sourabh
export const Head = () => {
    return (
        <Seo
            title="Estuary Flow for Startups"
            description="Estuary Flow automates real-time data pipelines from 200+ sources into your warehouse, data lake, or other destinations, empowering flexible, on-demand analytics."
        />
    );
};

export default StartupPage;
