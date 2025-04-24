import { Connectors } from '../components/Connectors';
import Layout from '../components/Layout';
import Seo from '../components/seo';

const Sources = () => {
    return (
        <Layout>
            <Connectors
                connectorType="capture"
                title="Ingest & Stream Data from Any Source"
                description="Ingest & stream real-time and batch data effortlessly with Estuary Flow's source connectors. Connect databases, SaaS apps, cloud storage, and file systems to power analytics and automation. Seamlessly integrate MariaDB, MongoDB, PostgreSQL, SQL Server, MySQL, NetSuite, and more to streamline data movement with minimal setup and maximum reliability."
                bottomTitle="Destinations"
                bottomDescription="You bring the warehouse, we'll fill it with data. We connect to Amazon Redshift, Google BigQuery, Postgres, Snowflake, and more."
            />
        </Layout>
    );
};

export const Head = () => {
    return (
        <Seo
            title="Estuary Flow Data Sources - Real-Time & Batch Connectors"
            description="Ingest & stream data from databases, SaaS apps, warehouses & file stores with Estuary Flow's real-time & batch connectors. Automate pipelines with MongoDB, PostgreSQL & more."
        />
    );
};

export default Sources;
