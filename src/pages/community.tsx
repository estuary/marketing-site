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
        <Seo
            title="Join the Estuary Community - Built for Data Engineers"
            description="Join the Estuary Community and connect with data engineers building real-time pipelines. Get support, share ideas, and shape the future of data."
        />
    );
};

export default CommunityPage;
