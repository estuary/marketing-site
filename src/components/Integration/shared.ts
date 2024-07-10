import { GatsbyImageType } from '../../../shared';

export interface Connector {
    title: string;
    logo: GatsbyImageType;
    longDescription?: string;
    shortDescription?: string;
}
