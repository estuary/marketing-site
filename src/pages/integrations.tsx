import React from 'react';
import { Connectors } from '../components/Connectors';
import Layout from '../components/layout';
import Seo from '../components/seo';

const description =
    'Capture from clouds, databases, and SaaS apps using real-time ETL, create real-time transformations and materialized views, for a consistent, exact copy of your data powering both analytics and operations.';

const Integrations = () => {
    return (
        <Layout>
            <Connectors
                title="Integrations"
                description={description}
                showAllConnectors={true}
            />
        </Layout>
    );
};

export const Head = () => {
    return <Seo title="Integrations" description={description} />;
};

export default Integrations;
