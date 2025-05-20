import ConnectorsMasonrySection from '../components/ConnectorsMasonrySection';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import GetStarted from '../components/StartupPage/GetStarted';
import HaveQuestions from '../components/StartupPage/HaveQuestions';
import Hero from '../components/StartupPage/Hero';
import ReadyToGo from '../components/StartupPage/ReadyToGo';
import WhatsIncluded from '../components/StartupPage/WhatsIncluded';

const StartupPage = () => {
    return (
        <Layout hasLightSections>
            <Hero />
            <WhatsIncluded />
            {/* <WhatFoundersAreSaying /> */}
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

export const Head = () => {
    return (
        <Seo
            title="Estuary for Startups: Get $2K in Free Credits for 12 Months"
            description="Early-stage startup? Get $2,000 in free Estuary Flow credits for real-time data pipelines. Connect databases, cloud apps, and streams—no accelerator needed."
        />
    );
};

export default StartupPage;
