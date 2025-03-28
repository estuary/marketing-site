import { ConnectorType } from '../../../shared';
import SourceConnectorIcon from '../../svgs/connector-logo-placeholder.svg';
// TODO: Replace this temporary icon with the ones synced with the dashboard.
// import DestinationConnectorIcon from '../../svgs/connector-logo-placeholder.svg';

interface ConnectorLogoPlaceholder {
    connectorType?: ConnectorType;
    connectorIconSize?: number;
    className?: string;
}

const ConnectorLogoPlaceholder = ({
    connectorType,
    connectorIconSize,
    className,
}: ConnectorLogoPlaceholder) => {
    const iconSize = { width: connectorIconSize, height: connectorIconSize };

    return connectorType === 'capture' ? (
        <SourceConnectorIcon className={className} {...iconSize} />
    ) : (
        <SourceConnectorIcon className={className} {...iconSize} />
    );
};

export default ConnectorLogoPlaceholder;
