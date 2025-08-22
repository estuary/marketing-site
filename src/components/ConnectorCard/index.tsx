import { GatsbyImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { ProcessedHtml } from '../HtmlProcessor';
import { Connector } from '../../../shared';
import InternalLink from '../InternalLink';
import ConnectorLogoPlaceholder from '../ConnectorLogoPlaceholder';
import {
    connectorCard,
    connectorLogo,
    connectorDescription,
    darkThemeCard,
    darkThemeLogo,
    darkThemeDescription,
    footerText,
} from './styles.module.less';

interface ConnectorCardProps {
    connector: Partial<Connector>;
    connectorContent?: string;
    defaultDescription: string;
    defaultBullets: string[];
    isDarkTheme?: boolean;
}

const ConnectorCard = ({
    connector,
    connectorContent,
    defaultDescription,
    defaultBullets = [],
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
                ) : (
                    <ConnectorLogoPlaceholder connectorType={connector.type} />
                )}
            </div>
            <div>
                <h3>{connector.title} connector details</h3>
                <div
                    className={clsx(
                        connectorDescription,
                        isDarkTheme && darkThemeDescription
                    )}
                >
                    <ProcessedHtml body={description} />
                </div>
                {!connectorContent && defaultBullets.length > 0 ? (
                    <ul>
                        {defaultBullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
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
