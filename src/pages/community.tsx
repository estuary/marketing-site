import Layout from '../components/Layout';
import Seo from '../components/seo';
import Hero from '../components/CommunityPage/Hero';
import WhyJoinEstuaryCommunity from '../components/CommunityPage/WhyJoinEstuaryCommunity';

const CommunityPage = () => {
    return (
        <Layout>
            <Hero />
            <WhyJoinEstuaryCommunity />
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
