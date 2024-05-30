/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import logoUrl from '../images/combination-mark__multi-blue.png';

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
                    fixed(width: 400) {
                        src
                    }
                }
            }
        }
    `);

    if (!image) {
        image = defaultMetaImg.childImageSharp.fixed.src;
    }

    const metaDescription = description ?? site.siteMetadata.description;
    const defaultTitle = title.includes('Estuary |')
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
            <meta name="apple-mobile-web-app-capable" content="yes" />
            {children}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org/',
                    '@type': 'Organization',
                    'name': 'Estuary',
                    'alternateName': 'Estuary Flow',
                    'description':
                        'Estuary helps organizations gain real-time access to their data without having to manage infrastructure. Capture data from SaaS or technology sources, transform it and materialize it back into the same types of systems all with millisecond latency.',
                    image,
                    'logo': site.siteMetadata?.siteUrl + logoUrl,
                    'url':
                        url ??
                        (site.siteMetadata?.siteUrl || 'https://estuary.dev/'),
                    'telephone': '',
                    'sameAs': [
                        'https://twitter.com/EstuaryDev',
                        'https://www.linkedin.com/company/estuary-tech/',
                        'https://www.youtube.com/channel/UCJ9JIjh7uaUdjcFR6xTkJXQ',
                        'https://www.crunchbase.com/organization/estuary',
                    ],
                    'address': {
                        '@type': 'PostalAddress',
                        'streetAddress': '244 5th Ave, Suite 1277',
                        'addressLocality': 'New York, NY',
                        'postalCode': '10001',
                        'addressCountry': 'US',
                    },
                })}
            </script>
        </>
    );
};

export default Seo;
