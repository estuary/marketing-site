import React from 'react';
import Seo from '../../components/seo';
import Layout from '../../components/Layout';
import Hero from '../../components/CompanyUpdatesPage/Hero';
import ListOfUpdates from '../../components/CompanyUpdatesPage/ListOfUpdates';
import SignUp from '../../components/Signup';

const CompanyUpdates = () => {
    return (
        <Layout>
            <Hero />
            <ListOfUpdates />
            <SignUp />
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title="Company Updates - News, Milestones & Announcements | Estuary"
        description="Stay up to date with Estuary's latest company news, product launches, partnerships, and more. Explore updates that showcase our journey and innovations."
    />
);

export default CompanyUpdates;
