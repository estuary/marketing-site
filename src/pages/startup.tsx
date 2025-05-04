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
        </Layout>
    );
};

// TODO: Ask metadata to Sourabh
export const Head = () => {
    return <Seo title="" description="" />;
};

export default StartupPage;
