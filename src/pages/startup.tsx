import Layout from '../components/Layout';
import Seo from '../components/seo';
import Hero from '../components/StartupPage/Hero';
import WhatsIncluded from '../components/StartupPage/WhatsIncluded';

const StartupPage = () => {
    return (
        <Layout>
            <Hero />
            <WhatsIncluded />
        </Layout>
    );
};

// TODO: Ask metadata to Sourabh
export const Head = () => {
    return <Seo title="" description="" />;
};

export default StartupPage;
