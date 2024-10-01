export const webinarsUrl =
    'https://try.estuary.dev/webinar-estuary101-ondemand';

export const dashboardRegisterUrl = 'https://dashboard.estuary.dev/register';
export const statusPageUrl = 'https://status.estuary.dev/';
export const docsPageUrl = 'https://docs.estuary.dev';
export const slackUrl =
    'https://estuary-dev.slack.com/join/shared_invite/zt-86nal6yr-VPbv~YfZE9Q~6Zl~gmZdFQ#/shared-invite/email';

export const estuaryProductFlowVideoUrl =
    'https://www.youtube.com/embed/hlCh81ZbBik';

export type ConnectorType = 'capture' | 'materialization';

export type ButtonStyleVariants =
    | 'filled'
    | 'outlinedPrimary'
    | 'outlinedSecondary';

export const GA_MEASUREMENT_ID = 'G-P1PZPE4HHZ';
export const GA_ORIGIN = 'https://www.googletagmanager.com';
export const GA_ANALYTICS_ENDPOINT = 'https://www.google-analytics.com';

export const estuaryAddress = {
    '@type': 'PostalAddress',
    'streetAddress': '244 5th Ave, Suite 1277',
    'addressLocality': 'New York',
    'addressRegion': 'NY',
    'postalCode': '10001',
    'addressCountry': 'US',
};

export const getAuthorPathBySlug = (slug: string) =>
    `/author/${slug.toLowerCase()}`;

export const getComparisonSlug = (
    xVendorSlugKey: string,
    yVendorSlugKey: string
) => `/etl-tools/${xVendorSlugKey}-vs-${yVendorSlugKey}`;

export interface Vendor {
    id: string;
    name: string;
    logo: any;
    slugKey: string;
}
