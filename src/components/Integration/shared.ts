import { ConnectorType } from '../../../shared';

export interface Connector {
    title: string;
    logo: any;
    shortDescription?: string;
    longDescription?: string;
    type: ConnectorType;
}

export interface Connectors {
    sourceConnector: Connector;
    destConnector: Connector;
}
