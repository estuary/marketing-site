import { StaticImage } from 'gatsby-plugin-image';
import { IStaticImageProps } from 'gatsby-plugin-image/dist/src/components/static-image.server';
import clsx from 'clsx';
import {
    rowsWrapper,
    row,
    item,
    nullItemBorderColor,
    logoPlaceholder,
    logoPlaceholderGradientRight,
    logoPlaceholderGradientLeft,
    namePlaceholder,
    namePlaceholderGradientRight,
    namePlaceholderGradientLeft,
    logoStyle,
} from './styles.module.less';

const nullConnectorLeft = { name: null, logo: null, direction: 'left' };
const nullConnectorRight = { name: null, logo: null, direction: 'right' };

const commonProps: Partial<IStaticImageProps> = {
    quality: 100,
    placeholder: 'blurred',
};

const row1 = [
    ...Array(7).fill(nullConnectorLeft),
    {
        name: 'Mongo DB',
        logo: (
            <StaticImage
                src="../../../../images/mongodb-logo.png"
                alt="Mongo DB logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'PostgreSQL',
        logo: (
            <StaticImage
                src="../../../../images/postgres_logo.png"
                alt="PostgreSQL logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'Oracle',
        logo: (
            <StaticImage
                src="../../../../images/oracle-logo.png"
                alt="Oracle logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'Snowflake',
        logo: (
            <StaticImage
                src="../../../../images/snowflake_logo.png"
                alt="Snowflake logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'Databricks',
        logo: (
            <StaticImage
                src="../../../../images/databricks-logo.png"
                alt="Databricks logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'Apache Iceberg',
        logo: (
            <StaticImage
                src="../../../../images/apache-iceberg-logo.png"
                alt="Apache Iceberg logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'Google BigQuery',
        logo: (
            <StaticImage
                src="../../../../images/bigquery_logo.png"
                alt="Google BigQuery logo"
                {...commonProps}
            />
        ),
    },
    ...Array(7).fill(nullConnectorRight),
];

const row2 = [
    ...Array(7).fill(nullConnectorLeft),
    {
        name: 'Elastic',
        logo: (
            <StaticImage
                src="../../../../images/elastic-logo.png"
                alt="Elastic logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'Amazon Redshift',
        logo: (
            <StaticImage
                src="../../../../images/amazon-redshift-logo.png"
                alt="Amazon Redshift logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'Google Sheets',
        logo: (
            <StaticImage
                src="../../../../images/sheets_logo.png"
                alt="Google Sheets logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'Salesforce',
        logo: (
            <StaticImage
                src="../../../../images/salesforce-logo.png"
                alt="Salesforce logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'Netsuite',
        logo: (
            <StaticImage
                src="../../../../images/netsuite-logo.png"
                alt="Netsuite logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'Apache Kafka',
        logo: (
            <StaticImage
                src="../../../../images/apache-kafka-logo.png"
                alt="Apache Kafka logo"
                {...commonProps}
            />
        ),
    },
    ...Array(7).fill(nullConnectorRight),
];

const row3 = [
    ...Array(7).fill(nullConnectorLeft),
    {
        name: 'MS SQL Server',
        logo: (
            <StaticImage
                src="../../../../images/ms-sql-server-logo.png"
                alt="MS SQL Server logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'Google Ads',
        logo: (
            <StaticImage
                src="../../../../images/google-ads-logo.png"
                alt="Google Ads logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'Facebook Ads',
        logo: (
            <StaticImage
                src="../../../../images/facebook-ads-logo.png"
                alt="Facebook Ads logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'Hubspot',
        logo: (
            <StaticImage
                src="../../../../images/hubspot-logo.png"
                alt="Hubspot logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'Shopify',
        logo: (
            <StaticImage
                src="../../../../images/shopify-logo.png"
                alt="Shopify logo"
                {...commonProps}
            />
        ),
    },
    ...Array(7).fill(nullConnectorRight),
];

const row4 = [
    ...Array(7).fill(nullConnectorLeft),
    {
        name: 'Microsoft Fabric',
        logo: (
            <StaticImage
                src="../../../../images/microsoft-fabric-warehouse-logo.png"
                alt="Microsoft Fabric logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'HTTP Webhook',
        logo: (
            <StaticImage
                src="../../../../images/http-webhooks-logo.png"
                alt="HTTP Webhook logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'MotherDuck',
        logo: (
            <StaticImage
                src="../../../../images/motherduck-logo.png"
                alt="MotherDuck logo"
                {...commonProps}
            />
        ),
    },
    {
        name: 'Tinybird',
        logo: (
            <StaticImage
                src="../../../../images/tinybird-logo.png"
                alt="Tinybird logo"
                {...commonProps}
            />
        ),
    },
    ...Array(7).fill(nullConnectorRight),
];

const connectorRows = [row1, row2, row3, row4];

const ConnectorsMasonry = () => {
    return (
        <div className={rowsWrapper}>
            {connectorRows.map((rowData, rowIndex) => (
                <div key={rowIndex} className={row}>
                    {rowData.map((connector, index) => (
                        <div
                            key={index}
                            className={clsx(
                                item,
                                connector.logo ? null : nullItemBorderColor
                            )}
                        >
                            {connector.logo ? (
                                <div className={logoStyle}>
                                    {connector.logo}
                                </div>
                            ) : (
                                <div
                                    className={clsx(
                                        logoPlaceholder,
                                        connector.direction === 'left'
                                            ? logoPlaceholderGradientLeft
                                            : logoPlaceholderGradientRight
                                    )}
                                />
                            )}
                            <span>
                                {connector.name ? (
                                    connector.name
                                ) : (
                                    <div
                                        className={clsx(
                                            namePlaceholder,
                                            connector.direction === 'left'
                                                ? namePlaceholderGradientLeft
                                                : namePlaceholderGradientRight
                                        )}
                                    />
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
