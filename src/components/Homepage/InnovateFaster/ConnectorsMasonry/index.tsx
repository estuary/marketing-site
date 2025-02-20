import { StaticImage } from 'gatsby-plugin-image';
import {
    rowsWrapper,
    row,
    item,
    logoPlaceholder,
    namePlaceholder,
    logoStyle,
} from './styles.module.less';

const nullConnector = { name: null, logo: null };

const row1 = [
    ...Array(7).fill(nullConnector),
    {
        name: 'Mongo DB',
        logo: (
            <StaticImage
                src="../../../../images/mongodb-logo.png"
                alt="Mongo DB logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'PostgreSQL',
        logo: (
            <StaticImage
                src="../../../../images/postgres_logo.png"
                alt="PostgreSQL logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Oracle',
        logo: (
            <StaticImage
                src="../../../../images/oracle-logo.png"
                alt="Oracle logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Snowflake',
        logo: (
            <StaticImage
                src="../../../../images/snowflake_logo.png"
                alt="Snowflake logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Databricks',
        logo: (
            <StaticImage
                src="../../../../images/databricks-logo.png"
                alt="Databricks logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Apache Iceberg',
        logo: (
            <StaticImage
                src="../../../../images/apache-iceberg-logo.png"
                alt="Apache Iceberg logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Google BigQuery',
        logo: (
            <StaticImage
                src="../../../../images/bigquery_logo.png"
                alt="Google BigQuery logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    ...Array(7).fill(nullConnector),
];

const row2 = [
    ...Array(7).fill(nullConnector),
    {
        name: 'Elastic',
        logo: (
            <StaticImage
                src="../../../../images/elastic-logo.png"
                alt="Elastic logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Amazon Redshift',
        logo: (
            <StaticImage
                src="../../../../images/amazon-redshift-logo.png"
                alt="Amazon Redshift logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Google Sheets',
        logo: (
            <StaticImage
                src="../../../../images/sheets_logo.png"
                alt="Google Sheets logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Salesforce',
        logo: (
            <StaticImage
                src="../../../../images/salesforce-logo.png"
                alt="Salesforce logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Netsuite',
        logo: (
            <StaticImage
                src="../../../../images/netsuite-logo.png"
                alt="Netsuite logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Apache Kafka',
        logo: (
            <StaticImage
                src="../../../../images/apache-kafka-logo.png"
                alt="Apache Kafka logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    ...Array(7).fill(nullConnector),
];

const row3 = [
    ...Array(7).fill(nullConnector),
    {
        name: 'MS SQL Server',
        logo: (
            <StaticImage
                src="../../../../images/ms-sql-server-logo.png"
                alt="MS SQL Server logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Google Ads',
        logo: (
            <StaticImage
                src="../../../../images/google-ads-logo.png"
                alt="Google Ads logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Facebook Ads',
        logo: (
            <StaticImage
                src="../../../../images/facebook-ads-logo.png"
                alt="Facebook Ads logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Hubspot',
        logo: (
            <StaticImage
                src="../../../../images/hubspot-logo.png"
                alt="Hubspot logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Shopify',
        logo: (
            <StaticImage
                src="../../../../images/shopify-logo.png"
                alt="Shopify logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    ...Array(7).fill(nullConnector),
];

const row4 = [
    ...Array(7).fill(nullConnector),
    {
        name: 'Microsoft Fabric Warehouse',
        logo: (
            <StaticImage
                src="../../../../images/microsoft-fabric-warehouse-logo.png"
                alt="Microsoft Fabric Warehouse logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'HTTP Webhook',
        logo: (
            <StaticImage
                src="../../../../images/http-webhooks-logo.png"
                alt="HTTP Webhook logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'MotherDuck',
        logo: (
            <StaticImage
                src="../../../../images/motherduck-logo.png"
                alt="MotherDuck logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Tinybird',
        logo: (
            <StaticImage
                src="../../../../images/tinybird-logo.png"
                alt="Tinybird logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    ...Array(7).fill(nullConnector),
];

const connectorRows = [row1, row2, row3, row4];

const ConnectorsMasonry = () => {
    return (
        <div className={rowsWrapper}>
            {connectorRows.map((rowData, rowIndex) => (
                <div key={rowIndex} className={row}>
                    {rowData.map((connector, index) => (
                        <div key={index} className={item}>
                            {connector.logo ? (
                                <div className={logoStyle}>
                                    {connector.logo}
                                </div>
                            ) : (
                                <div className={logoPlaceholder} />
                            )}
                            <span>
                                {connector.name ? (
                                    connector.name
                                ) : (
                                    <div className={namePlaceholder} />
                                )}
                            </span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ConnectorsMasonry;
