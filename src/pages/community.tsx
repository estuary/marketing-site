import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import Hero from '../components/CommunityPage/Hero';
import WhyJoinEstuaryCommunity from '../components/CommunityPage/WhyJoinEstuaryCommunity';
import SlackChannelsYouWillLove from '../components/CommunityPage/SlackChannelsYouWillLove';
import BuiltOnOpenCore from '../components/CommunityPage/BuiltOnOpenCore';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import WantToGoAStepFurther from '../components/CommunityPage/WantToGoAStepFurther';

const CommunityPage = () => {
    return (
        <Layout>
            <Hero />
            <WhyJoinEstuaryCommunity />
            <SlackChannelsYouWillLove />
            <BuiltOnOpenCore />
            <SuccessStoriesSection isDarkTheme />
            <WantToGoAStepFurther />
        </Layout>
    );
};

export const Head = () => {
    const { metaImg } = useStaticQuery(graphql`
        query {
            metaImg: file(
                relativePath: {
                    eq: "community-page/join-the-estuary-community.jpg"
                }
            ) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 1200, height: 630)
                }
            }
        }
    `);

    return (
        <Seo
            title="Join the Estuary Community - Built for Data Engineers"
            description="Join the Estuary Community and connect with data engineers building real-time pipelines. Get support, share ideas, and shape the future of data."
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default CommunityPage;
