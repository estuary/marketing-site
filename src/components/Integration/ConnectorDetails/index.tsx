import { Connectors } from '../shared';
import ConnectorDetailsSection from '../../ConnectorDetailsSection';

interface ConnectorDetailsProps extends Connectors {
    sourceConnectorContent?: string;
    destConnectorContent?: string;
}

const ConnectorDetails = ({
    sourceConnector,
    destConnector,
    sourceConnectorContent,
    destConnectorContent,
}: ConnectorDetailsProps) => {
    const defaultSourceDescription = `The ${sourceConnector.title} capture connector in Estuary Flow enables you to stream data from your source system in real time, with minimal impact on performance. Using log-based Change Data Capture (CDC), Flow continuously ingests new and updated records without heavy bulk loads. Whether you need low-latency replication, hybrid cloud integration, or continuous analytics, Estuary Flow ensures your data is accurate, fresh, and always moving where it needs to go.`;

    const defaultDestDescription = `The ${destConnector.title} materialization connector in Estuary Flow delivers data from your pipelines directly into your destination system — continuously and in real time. Using merge-based writes, Flow efficiently updates only changed records, ensuring your destination stays perfectly in sync without unnecessary reprocessing. Whether for analytics, AI, or operational use cases, Estuary Flow provides a reliable, cost-efficient way to keep ${destConnector.title} up to date.`;

    return (
        <ConnectorDetailsSection
            isDarkTheme={false}
            connectors={[sourceConnector, destConnector]}
            connectorStrapiContents={[
                sourceConnectorContent,
                destConnectorContent,
            ]}
            defaultDescriptions={[
                defaultSourceDescription,
                defaultDestDescription,
            ]}
        />
    );
};

export default ConnectorDetails;
