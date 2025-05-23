import Layout from '../components/Layout';
import Seo from '../components/seo';
import Hero from '../components/CommunityPage/Hero';
import WhyJoinEstuaryCommunity from '../components/CommunityPage/WhyJoinEstuaryCommunity';
import SlackChannelsYouWillLove from '../components/CommunityPage/SlackChannelsYouWillLove';

const CommunityPage = () => {
    return (
        <Layout>
            <Hero />
            <WhyJoinEstuaryCommunity />
            <SlackChannelsYouWillLove />
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
