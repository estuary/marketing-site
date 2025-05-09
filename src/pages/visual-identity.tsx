import Layout from '../components/Layout';
import Seo from '../components/seo';
import EstuaryLogoUsage from '../components/VisualIdentityPage/EstuaryLogoUsage';
import Hero from '../components/VisualIdentityPage/Hero';

const VisualIdentityPage = () => {
    return (
        <Layout>
            <Hero />
            <EstuaryLogoUsage />
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
