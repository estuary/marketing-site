import { GatsbyImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import { Connectors } from '../shared';
import { ProcessedHtml } from '../../HtmlProcessor';
import {
    connectorCard,
    connectorLogo,
    connectorContent,
    connectorTitle,
    connectorDescription,
    connectorBullets,
    bulletItem,
    sectionDescription,
} from './styles.module.less';

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
    const defaultSourceDescription = `${sourceConnector.title} connector provides seamless data extraction with real-time change data capture (CDC) capabilities. This powerful connector enables you to capture data changes as they happen, ensuring your data pipeline stays current and accurate.`;
    const defaultDestDescription = `${destConnector.title} connector enables efficient data loading with support for both batch and streaming operations. This robust connector optimizes data transfer and transformation, providing reliable delivery to your target destination.`;

    const sourceDescription =
        sourceConnectorContent ?? defaultSourceDescription;
    const destDescription = destConnectorContent ?? defaultDestDescription;

    return (
        <section>
            <Container isVertical isDarkTheme>
                <h2>
                    Connector details: <span>{sourceConnector.title}</span> to{' '}
                    <span>{destConnector.title}</span>
                </h2>
                <div className={sectionDescription}>
                    <p>
                        Discover the unique capabilities, features, and benefits
                        of each connector in this integration. Learn how these
                        powerful connectors work together to create a seamless
                        data pipeline that delivers real-time insights and
                        operational efficiency.
                    </p>
                </div>
                <div className={connectorCard}>
                    <div className={connectorContent}>
                        <div className={connectorLogo}>
                            {sourceConnector.logo?.childImageSharp ? (
                                <GatsbyImage
                                    image={
                                        sourceConnector.logo.childImageSharp
                                            .gatsbyImageData
                                    }
                                    alt={`${sourceConnector.title} logo`}
                                />
                            ) : null}
                        </div>
                        <div>
                            <h3 className={connectorTitle}>
                                {sourceConnector.title}
                            </h3>
                            <div className={connectorDescription}>
                                <ProcessedHtml body={sourceDescription} />
                            </div>
                            {!sourceConnectorContent ? (
                                <ul className={connectorBullets}>
                                    <li className={bulletItem}>
                                        Real-time data capture and processing
                                    </li>
                                    <li className={bulletItem}>
                                        Automatic schema detection and mapping
                                    </li>
                                    <li className={bulletItem}>
                                        Built-in error handling and retry
                                        mechanisms
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className={connectorCard}>
                    <div className={connectorContent}>
                        <div className={connectorLogo}>
                            {destConnector.logo?.childImageSharp ? (
                                <GatsbyImage
                                    image={
                                        destConnector.logo.childImageSharp
                                            .gatsbyImageData
                                    }
                                    alt={`${destConnector.title} logo`}
                                />
                            ) : null}
                        </div>
                        <div>
                            <h3 className={connectorTitle}>
                                {destConnector.title}
                            </h3>
                            <div className={connectorDescription}>
                                <ProcessedHtml body={destDescription} />
                            </div>
                            {!destConnectorContent ? (
                                <ul className={connectorBullets}>
                                    <li className={bulletItem}>
                                        Optimized data loading and
                                        transformation
                                    </li>
                                    <li className={bulletItem}>
                                        Schema evolution and compatibility
                                        handling
                                    </li>
                                    <li className={bulletItem}>
                                        Performance monitoring and optimization
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ConnectorDetails;
