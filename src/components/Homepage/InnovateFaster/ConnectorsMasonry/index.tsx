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

const connectors = [
    ...Array(7).fill(nullConnector),
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
        name: 'Google Storage',
        logo: (
            <StaticImage
                src="../../../../images/google-storage-logo.png"
                alt="Google Storage logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Open AI',
        logo: (
            <StaticImage
                src="../../../../images/openai-logo.png"
                alt="Openai logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
    {
        name: 'Pinecone',
        logo: (
            <StaticImage
                src="../../../../images/pinecone-logo.png"
                alt="Pinecone logo"
                quality={100}
                placeholder="blurred"
            />
        ),
    },
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
    ...Array(7).fill(nullConnector),
];

const generateFilteredConnectors = (exclusions: string[]) =>
    connectors.filter(({ name }) => !exclusions.includes(name));

const exclusionSets = [
    [],
    ['Mongo DB'],
    ['Mongo DB', 'Pinecone'],
    ['Mongo DB', 'Pinecone', 'Open AI'],
];
const connectorRows = exclusionSets.map(generateFilteredConnectors);

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
