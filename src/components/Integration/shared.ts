import { ConnectorType } from '../../../shared';

export interface Connector {
    title: string;
    logo: any;
    longDescription?: string;
    shortDescription?: string;
    type: ConnectorType;
}
