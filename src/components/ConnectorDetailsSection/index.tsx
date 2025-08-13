import Container from '../Container';
import ConnectorCard from '../ConnectorCard';
import { Connector } from '../../../shared';

const DEFAULT_BULLETS: string[][] = [
    [
        'Log-based CDC for high-performance, low-impact data capture',
        'Automatic schema evolution to handle changes in source structure without manual intervention',
        'Unified streaming and batch ingestion in the same pipeline',
        'Hybrid deployment and BYOC support for security and control',
        'Fault-tolerant pipelines that resume automatically from the last checkpoint',
        'Kafka API connectivity for direct integration into streaming ecosystems',
    ],
    [
        "Merge-based materializations to sync only what's changed",
        'Low-latency delivery from streaming and batch sources',
        "Automatic schema alignment so your destination matches your pipeline's evolving data",
        'Flexible deployment models, including BYOC and hybrid for enterprise governance',
        'Unified streaming + batch outputs in a single tool',
        'End-to-end security and compliance for sensitive data workloads',
    ],
];

interface ConnectorDetailsSectionProps {
    isDarkTheme?: boolean;
    connectors: Partial<Connector>[];
    connectorStrapiContents?: (string | undefined)[];
    defaultDescriptions: string[];
    defaultBullets?: string[][];
}

const ConnectorDetailsSection = ({
    isDarkTheme = false,
    connectors,
    connectorStrapiContents = [],
    defaultDescriptions,
    defaultBullets = DEFAULT_BULLETS,
}: ConnectorDetailsSectionProps) => {
    return (
        <section>
            <Container isVertical isDarkTheme={isDarkTheme}>
                {connectors.map((connector, index) => (
                    <ConnectorCard
                        key={`${connector.title}-details-card`}
                        connector={connector}
                        connectorContent={connectorStrapiContents[index]}
                        defaultDescription={defaultDescriptions[index]}
                        defaultBullets={defaultBullets[index]}
                        isDarkTheme={isDarkTheme}
                    />
                ))}
            </Container>
        </section>
    );
};

export default ConnectorDetailsSection;
