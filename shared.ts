import { ImageDataLike } from 'gatsby-plugin-image';

export const webinarsUrl =
    'https://try.estuary.dev/webinar-estuary101-ondemand';

export const estuaryProductFlowVideoUrl =
    'https://www.youtube.com/embed/hlCh81ZbBik';

export type ConnectorType = 'capture' | 'materialization';

export type ButtonStyleVariants =
    | 'filled'
    | 'outlinedPrimary'
    | 'outlinedSecondary';

export type GatsbyImageType = {
    childImageSharp: {
        gatsbyImageData: ImageDataLike | null;
    };
};

export const GA_MEASUREMENT_ID = 'G-P1PZPE4HHZ';
export const GA_ORIGIN = 'https://www.googletagmanager.com';
export const GA_ANALYTICS_ENDPOINT = 'https://www.google-analytics.com';
