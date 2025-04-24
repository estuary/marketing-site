import { Connectors } from '../components/Connectors';
import Layout from '../components/Layout';
import Seo from '../components/seo';

const Integrations = () => {
    return (
        <Layout>
            <Connectors
                title="Integrate & Move Data Anywhere - Estuary Flow Connectors"
                description="Easily move data in real-time or batch with 200+ pre-built ETL connectors for databases, data warehouses, SaaS apps, and cloud platforms. Automate ingestion with seamless integrations for Redshift, Snowflake, BigQuery, Kafka, MySQL, PostgreSQL, and more—build powerful pipelines with minimal setup and maximum efficiency."
                showAllConnectors={true}
            />
        </Layout>
    );
};

export const Head = () => {
    return (
        <Seo
            title="Data Integration Connectors Directory"
            description="Explore Estuary Flow's real-time data integration connectors. Connect data from sources to destinations like databases, SaaS apps, and cloud platforms to streamline ETL pipelines."
        />
    );
};

export default Integrations;
