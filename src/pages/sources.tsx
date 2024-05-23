import React from 'react';
import { Connectors } from '../components/Connectors';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Sources = () => {
    return (
        <Layout headerTheme="light">
            <Connectors
                connectorType="capture"
                title="Sources"
                description="Capture the most up-to-date view of your business metrics across all data sources, including databases, SaaS, warehouses, and filestores."
                bottomTitle="Destinations"
                bottomDescription="You bring the warehouse, we’ll fill it with data. We connect to Amazon Redshift, Google BigQuery, Postgres, Snowflake, and more."
            />
        </Layout>
    );
};

export const Head = () => {
    return (
        <Seo
            title="Sources"
            description="Capture the most up-to-date view of your business metrics across all data sources, including databases, SaaS, warehouses, and filestores."
        />
    );
};

export default Sources;
