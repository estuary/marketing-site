import Layout from '../components/Layout';
import Seo from '../components/seo';
import Hero from '../components/CommunityPage/Hero';
import WhyJoinEstuaryCommunity from '../components/CommunityPage/WhyJoinEstuaryCommunity';
import SlackChannelsYouWillLove from '../components/CommunityPage/SlackChannelsYouWillLove';
import BuiltOnOpenCore from '../components/CommunityPage/BuiltOnOpenCore';
import SuccessStoriesSection from '../components/SuccessStoriesSection';

const CommunityPage = () => {
    return (
        <Layout>
            <Hero />
            <WhyJoinEstuaryCommunity />
            <SlackChannelsYouWillLove />
            <BuiltOnOpenCore />
            <SuccessStoriesSection isDarkTheme />
        </Layout>
    );
};

export const Head = () => {
    // TODO: Set preview image here? Left a comment on Figma to Dani
    return (
        <Seo
            title="Join the Estuary Community - Built for Data Engineers"
            description="Join the Estuary Community and connect with data engineers building real-time pipelines. Get support, share ideas, and shape the future of data."
        />
    );
};

export default CommunityPage;
