import ConnectorsMasonrySection from '../components/ConnectorsMasonrySection';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import Hero from '../components/StartupPage/Hero';
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
        </Layout>
    );
};

// TODO: Ask metadata to Sourabh
export const Head = () => {
    return <Seo title="" description="" />;
};

export default StartupPage;
