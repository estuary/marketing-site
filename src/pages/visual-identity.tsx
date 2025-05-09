import Layout from '../components/Layout';
import Seo from '../components/seo';
import Hero from '../components/VisualIdentityPage/Hero';

const VisualIdentityPage = () => {
    return (
        <Layout>
            <Hero />
        </Layout>
    );
};

export const Head = () => {
    return (
        <Seo // TODO: Ask to Sourabh
            title=""
            description=""
        />
    );
};

export default VisualIdentityPage;
