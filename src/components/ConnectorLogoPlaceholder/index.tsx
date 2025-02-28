import { ConnectorType } from '../../../shared';
import SourceConnectorIcon from '../../svgs/connector-logo-placeholder.svg';
// TODO: Replace this temporary icon with the ones synced with the dashboard.
// import DestinationConnectorIcon from '../../svgs/connector-logo-placeholder.svg';

const iconColor = 'var(--grey)';

interface ConnectorLogoPlaceholder {
    connectorType: ConnectorType;
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
        <SourceConnectorIcon
            color={iconColor}
            className={className}
            {...iconSize}
        />
    ) : (
        <SourceConnectorIcon
            color={iconColor}
            className={className}
            {...iconSize}
        />
    );
};

export default ConnectorLogoPlaceholder;
