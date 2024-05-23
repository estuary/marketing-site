import React from 'react';
import { Connectors } from '../components/Connectors';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Sources = () => {
    return (
        <Layout headerTheme="light">
            <Connectors
                connectorType="materialization"
                title="Destinations"
                description="Estuary helps your team get the most out of the ever-expanding list of valuable databases, warehouses, and other tools so you can focus on insights instead of pipelines."
                bottomTitle="Sources"
                bottomDescription="Open-source integrations guarantee that you’re covered, and real-time, no matter whether you’re pulling data from a database, filestore, or SaaS application."
            />
        </Layout>
    );
};

export const Head = () => {
    return (
        <Seo
            title="Destinations"
            description="Stream your data anywhere with efficient, low latency pipelines to all your destinations."
        />
    );
};

export default Sources;
