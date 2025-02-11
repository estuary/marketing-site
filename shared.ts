import { htmlToText } from 'html-to-text';
import { features } from './src/components/DeploymentOptionsPage/shared';
import { Author } from './src/templates/author/shared';

export const webinarsUrl =
    'https://try.estuary.dev/webinar-estuary101-ondemand';

export const dashboardUrl = 'https://dashboard.estuary.dev';
export const dashboardRegisterUrl = `${dashboardUrl}/register`;
export const statusPageUrl = 'https://status.estuary.dev/';
export const docsPageUrl = 'https://docs.estuary.dev';
export const slackUrl =
    'https://estuary-dev.slack.com/join/shared_invite/zt-86nal6yr-VPbv~YfZE9Q~6Zl~gmZdFQ#/shared-invite/email';
export const estuaryFlowGithubUrl = 'https://github.com/estuary/flow/';
export const estuaryLinkedinUrl =
    'https://www.linkedin.com/company/estuary-tech/';
export const estuaryProductFlowVideoUrl =
    'https://www.youtube.com/embed/hlCh81ZbBik';

export const socTwoLink = 'https://www.aicpa.org/soc4so';

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

export const getAuthorSeoJson = (author: Author, siteUrl: string) => {
    const authorBio = author.bio.data.bio
        ? htmlToText(author.bio.data.bio, { wordwrap: false })
        : 'Blog post author.';

    const sameAs: string[] = [];

    if (author.socials?.linked_in) {
        sameAs.push(author.socials.linked_in);
    }

    if (author.socials?.twitter) {
        sameAs.push(author.socials.twitter);
    }

    if (author.socials?.other) {
        sameAs.push(author.socials.other);
    }

    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': author.name,
        'url': `${siteUrl}${getAuthorPathBySlug(author.slug)}/`,
        'jobTitle': author.role,
        'description': authorBio,
        'worksFor': {
            '@type': 'Organization',
            'name': 'Estuary',
            'url': 'https://estuary.dev/',
        },
        sameAs,
        'image': author.picture?.localFile?.childImageSharp?.fixedImg?.images
            ?.fallback?.src
            ? {
                  '@type': 'ImageObject',
                  'url': `${siteUrl}${author.picture.localFile.childImageSharp.fixedImg.images.fallback.src}`,
              }
            : undefined,
    };
};

export const getComparisonSlug = (
    xVendorSlugKey: string,
    yVendorSlugKey: string
) => {
    const [firstVendorSlugKey, secondVendorSlugKey] = [
        xVendorSlugKey,
        yVendorSlugKey,
    ].sort();
    return `etl-tools/${firstVendorSlugKey}-vs-${secondVendorSlugKey}/`;
};

export interface SubText {
    data: {
        subText: string;
    };
}

interface HasFeature {
    icon: boolean | null;
    subText?: SubText;
}

interface HasCellTitle {
    cellTitle: string;
    subText?: SubText;
}

interface HasDollarSign {
    numberOfDollarSigns: {
        array: number[];
    };
    subText?: SubText;
}

export interface Vendor {
    id: string;
    name: string;
    logo: any;
    slugKey: string;
    useCases: {
        databaseReplication: string;
        dataMigration: HasFeature;
        dataIntegration: HasFeature;
        aiPipelines: HasFeature;
        operationalAnalytics: HasFeature;
        streamProcessing: HasFeature;
    };
    connectors: {
        count: string;
        streaming: string;
        thirdParty: HasFeature;
        customSdk: HasFeature;
        requestAConnector: HasFeature;
    };
    features: {
        batchingStreaming: string;
        deliveryGuarantee: string;
        loadWhiteMethod: string;
        dataOps: HasFeature;
        eltTransforms: HasFeature;
        etlTransforms: HasFeature;
        schemaInference: HasFeature;
        storeReplay: HasFeature;
        timeTravel: HasFeature;
        snapshots: HasFeature;
        easeOfUse: HasCellTitle;
        deploymentOptions: string;
        support: HasCellTitle;
    };
    deployment: {
        abilities: {
            perfMinLatency: string;
            reliability: string;
            scalability: string;
        };
        security: {
            socTwo: HasFeature;
            dataSourceAuth: string;
            encryption: string;
            hipaaCompliance: HasFeature;
        };
    };
    cost: {
        vendor: HasDollarSign;
        dataEngineering: HasDollarSign;
        admin: HasDollarSign;
    };
    introductoryDetails: {
        introduction: {
            data: {
                introduction: string;
            };
        };
        pros: {
            data: {
                pros: string;
            };
        };
        cons: {
            data: {
                cons: string;
            };
        };
        pricing: {
            data: {
                pricing: string;
            };
        };
    };
}

export type DeploymentOption = keyof typeof features;

export const activeUsersAmount = '5500+';
