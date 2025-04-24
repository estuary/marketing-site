import { Connectors } from '../components/Connectors';
import Layout from '../components/Layout';
import Seo from '../components/seo';

const Destinations = () => (
    <Layout>
        <Connectors
            connectorType="materialization"
            title="Materialize Data Anywhere"
            description="Materialize your data effortlessly with Estuary Flow's real-time and batch connectors. Load data into destination databases, warehouses, SaaS tools, and cloud platforms for analytics and automation. Integrate with Amazon Redshift, Apache Iceberg, Databricks, Snowflake, and more to power insights and decision-making. Simplify data movement with minimal setup and maximum efficiency."
            bottomTitle="Sources"
            bottomDescription="Open-source integrations guarantee that you're covered, and real-time, no matter whether you're pulling data from a database, filestore, or SaaS application."
        />
    </Layout>
);

export const Head = () => (
    <Seo
        title="Estuary Flow Data Materialization - Real-Time & Batch Connectors"
        description="Materialize data seamlessly into databases, warehouses, and SaaS tools with Estuary Flow's real-time & batch connectors. Integrate with Redshift, Iceberg, Snowflake, BigQuery & more."
    />
);

export default Destinations;
