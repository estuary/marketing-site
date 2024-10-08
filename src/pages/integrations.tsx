import React from 'react';
import { Connectors } from '../components/Connectors';
import Layout from '../components/Layout';
import Seo from '../components/seo';

const description =
    "Explore Estuary Flow's real-time data integration connectors. Connect data from sources to destinations like databases, SaaS apps, and cloud platforms to streamline ETL pipelines.";

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
    return (
        <Seo
            title="Data Integration Connectors Directory | Estuary Flow"
            description={description}
        />
    );
};

export default Integrations;
