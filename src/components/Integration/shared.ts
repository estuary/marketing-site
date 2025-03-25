import { ConnectorType } from '../../../shared';

interface Connector {
    title: string;
    logo: any;
    type: ConnectorType;
}

export interface Connectors {
    sourceConnector: Connector;
    destConnector: Connector;
}
