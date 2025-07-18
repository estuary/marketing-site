import Seo from '../../components/seo';
import Layout from '../../components/Layout';
import Hero from '../../components/CompanyUpdatesPage/Hero';
import ListOfUpdates from '../../components/CompanyUpdatesPage/ListOfUpdates';
import StayUpdated from '../../components/CompanyUpdatesPage/StayUpdated';
import SignUp from '../../components/Signup';

const CompanyUpdates = () => {
    return (
        <Layout>
            <Hero />
            <ListOfUpdates />
            <StayUpdated />
            <SignUp pageId="company-updates-page" />
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title="Product Updates - News, Milestones & Announcements | Estuary"
        description="Stay up to date with Estuary's latest company news, product launches, partnerships, and more. Explore updates that showcase our journey and innovations."
    />
);

export default CompanyUpdates;
