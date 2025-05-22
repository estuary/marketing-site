import Layout from '../components/Layout';
import Seo from '../components/seo';
import Hero from '../components/CommunityPage/Hero';

const CommunityPage = () => {
    return (
        <Layout>
            <Hero />
        </Layout>
    );
};

export const Head = () => {
    return (
        <Seo // TODO: Ask to Sourabh. Maybe add social preview image as well.
            title=""
            description=""
        />
    );
};

export default CommunityPage;
