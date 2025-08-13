import { GatsbyImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { ProcessedHtml } from '../HtmlProcessor';
import { Connector } from '../../../shared';
import InternalLink from '../InternalLink';
import {
    connectorCard,
    connectorLogo,
    connectorTitle,
    connectorDescription,
    connectorBullets,
    bulletItem,
    darkThemeCard,
    darkThemeLogo,
    darkThemeTitle,
    darkThemeDescription,
    darkThemeBullets,
    darkThemeBulletItem,
    footerText,
} from './styles.module.less';

interface ConnectorCardProps {
    connector: Partial<Connector>;
    connectorContent?: string;
    defaultDescription: string;
    defaultBullets?: string[];
    isDarkTheme?: boolean;
}

const ConnectorCard = ({
    connector,
    connectorContent,
    defaultDescription,
    defaultBullets = [
        'Real-time data capture and processing',
        'Automatic schema detection and mapping',
        'Built-in error handling and retry mechanisms',
    ],
    isDarkTheme = false,
}: ConnectorCardProps) => {
    const description = connectorContent ?? defaultDescription;

    return (
        <div className={clsx(connectorCard, isDarkTheme && darkThemeCard)}>
            <div className={clsx(connectorLogo, isDarkTheme && darkThemeLogo)}>
                {connector.logo?.childImageSharp ? (
                    <GatsbyImage
                        image={connector.logo.childImageSharp.gatsbyImageData}
                        alt={`${connector.title} logo`}
                    />
                ) : null}
            </div>
            <div>
                <h3
                    className={clsx(
                        connectorTitle,
                        isDarkTheme && darkThemeTitle
                    )}
                >
                    {connector.title} connector details
                </h3>
                <div
                    className={clsx(
                        connectorDescription,
                        isDarkTheme && darkThemeDescription
                    )}
                >
                    <ProcessedHtml
                        body={description}
                        className={connectorDescription}
                    />
                </div>
                {!connectorContent ? (
                    <ul
                        className={clsx(
                            connectorBullets,
                            isDarkTheme && darkThemeBullets
                        )}
                    >
                        {defaultBullets.map((bullet, index) => (
                            <li
                                key={index}
                                className={clsx(
                                    bulletItem,
                                    isDarkTheme && darkThemeBulletItem
                                )}
                            >
                                {bullet}
                            </li>
                        ))}
                    </ul>
                ) : null}
                {connector.connectorTagsByConnectorIdList &&
                connector.connectorTagsByConnectorIdList.length > 0 &&
                connector.connectorTagsByConnectorIdList[0].documentationUrl ? (
                    <p className={footerText}>
                        For more details about the {connector.title} connector,
                        check out the{' '}
                        <InternalLink
                            href={
                                connector.connectorTagsByConnectorIdList[0]
                                    .documentationUrl
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            documentation page
                        </InternalLink>
                        .
                    </p>
                ) : null}
            </div>
        </div>
    );
};

export default ConnectorCard;
