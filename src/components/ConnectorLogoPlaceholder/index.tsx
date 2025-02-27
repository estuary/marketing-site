import SourceConnectorIcon from '@mui/icons-material/CloudUploadOutlined';
import DestinationConnectorIcon from '@mui/icons-material/CloudDownloadOutlined';
import { ConnectorType } from '../../../shared';

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
            style={iconSize}
            htmlColor={iconColor}
            className={className}
        />
    ) : (
        <DestinationConnectorIcon
            style={iconSize}
            htmlColor={iconColor}
            className={className}
        />
    );
};

export default ConnectorLogoPlaceholder;
