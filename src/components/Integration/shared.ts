import { Connector } from '../../../shared';

export interface Connectors {
    sourceConnector: Partial<Connector>;
    destConnector: Partial<Connector>;
}
