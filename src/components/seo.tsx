/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import logoUrl from '../images/estuary.png';
import { estuaryAddress } from '../../shared';

export interface SeoProps {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    children?: React.ReactElement;
}

const Seo: React.FC<SeoProps> = ({
    description,
    title,
    image,
    url,
    children,
}) => {
    const { site, defaultMetaImg } = useStaticQuery(graphql`
        query SeoData {
            site {
                siteMetadata {
                    siteUrl
                    title
                    description
                    social {
                        twitter
                    }
                }
            }
            defaultMetaImg: file(
                relativePath: { eq: "estuary-logo-metaimg.png" }
            ) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 400)
                }
            }
        }
    `);

    if (!image) {
        image =
            defaultMetaImg.childImageSharp.gatsbyImageData.images.fallback.src;
    }

    const metaDescription = description ?? site.siteMetadata.description;
    const defaultTitle = title.includes('Estuary')
        ? ''
        : site.siteMetadata?.title;

    return (
        <>
            <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
            <meta name="description" content={metaDescription} />
            <meta property="title" content={title} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            {url ? <meta property="og:url" content={url} /> : null}
            {image ? (
                <>
                    <meta property="og:image" content={image} />
                    <meta property="twitter:image" content={image} />
                </>
            ) : null}
            <meta name="twitter:card" content="summary" />
            <meta
                name="twitter:creator"
                content={site.siteMetadata?.social?.twitter || ''}
            />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="mobile-web-app-capable" content="yes" />
            {children}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org/',
                    '@type': 'Organization',
                    'name': 'Estuary',
                    'alternateName': 'Estuary Flow',
                    'url':
                        url ??
                        (site.siteMetadata?.siteUrl || 'https://estuary.dev/'),
                    'description':
                        'Estuary is a real-time data operations (DataOps) platform that simplifies data pipelines. Capture data from any source, transform it with low-latency processing, and materialize it back into your systems for immediate action. Estuary enables data integration, stream processing, and change data capture in a unified platform.',
                    'logo': site.siteMetadata?.siteUrl + logoUrl,
                    'image': site.siteMetadata?.siteUrl + logoUrl,
                    'telephone': '',
                    'sameAs': [
                        'https://twitter.com/EstuaryDev',
                        'https://www.linkedin.com/company/estuary-tech/',
                        'https://www.youtube.com/channel/UCJ9JIjh7uaUdjcFR6xTkJXQ',
                        'https://www.crunchbase.com/organization/estuary',
                    ],
                    'address': estuaryAddress,
                    'knowsAbout': [
                        'https://en.wikipedia.org/wiki/Data_integration',
                        'https://en.wikipedia.org/wiki/Extract,_transform,_load',
                        'https://en.wikipedia.org/wiki/Data_pipeline',
                        'https://en.wikipedia.org/wiki/Real-time_data',
                        'https://en.wikipedia.org/wiki/Data_warehouse',
                        'https://en.wikipedia.org/wiki/Change_data_capture',
                    ],
                    'numberOfEmployees': '11-50',
                    'founders': [
                        {
                            '@type': 'Person',
                            'name': 'David Yaffe',
                            'jobTitle': 'Co-founder',
                            'description':
                                'David Yaffe is a co-founder and the CEO of Estuary. He previously served as the COO of LiveRamp and the co-founder / CEO of Arbor which was sold to LiveRamp in 2016. He has an extensive background in product management, serving as head of product for Doubleclick Bid Manager and Invite Media.',
                            'sameAs': [
                                'https://www.linkedin.com/in/davidyaffe',
                                'https://www.crunchbase.com/person/david-yaffe',
                                'https://twitter.com/dyaffe',
                                'https://www.producthunt.com/@dyaffe',
                            ],
                        },
                    ],
                })}
            </script>
        </>
    );
};

export default Seo;
