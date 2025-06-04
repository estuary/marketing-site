/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';

import { FC, ReactElement } from 'react';

const previewImageWidth = '1200';
const previewImageHeight = '630';

export interface SeoProps {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    children?: ReactElement;
    prevUrl?: string;
    nextUrl?: string;
}

const Seo: FC<SeoProps> = ({
    description,
    title,
    image,
    url,
    children,
    prevUrl,
    nextUrl,
}) => {
    const { site, defaultMetaImg } = useStaticQuery(graphql`
        query SeoData {
            site {
                siteMetadata {
                    siteName
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

    const rawPath =
        image ??
        defaultMetaImg.childImageSharp.gatsbyImageData.images.fallback.src;

    const imageUrl = rawPath.startsWith('http')
        ? rawPath
        : `https://estuary-marketing--pr857-brenosalv-feature-85-qk9df1na.web.app${rawPath}`;

    const metaDescription = description ?? site.siteMetadata.description;
    const defaultTitle = title.includes('Estuary')
        ? ''
        : site.siteMetadata?.title;

    return (
        <>
            <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
            <meta name="site_name" content="Estuary" />
            <meta name="description" content={metaDescription} />
            <meta property="title" content={title} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            {url ? <meta property="og:url" content={url} /> : null}
            <meta name="twitter:card" content="summary" />
            {imageUrl ? (
                <>
                    <meta property="og:image" content={imageUrl} />
                    <meta name="twitter:image" content={imageUrl} />
                    <meta
                        property="og:image:width"
                        content={previewImageWidth}
                    />
                    <meta
                        property="og:image:height"
                        content={previewImageHeight}
                    />
                    <meta
                        property="twitter:image:width"
                        content={previewImageWidth}
                    />
                    <meta
                        property="twitter:image:height"
                        content={previewImageHeight}
                    />
                    <meta name="twitter:card" content="summary_large_image" />
                </>
            ) : null}
            <meta property="og:site_name" content="Estuary" />
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
            {prevUrl ? <link rel="prev" href={prevUrl} /> : null}
            {nextUrl ? <link rel="next" href={nextUrl} /> : null}
            {children}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    '@id': 'https://estuary.dev/#website',
                    'url': 'https://estuary.dev',
                    'name': 'Estuary',
                    'alternateName': 'Estuary Flow',
                })}
            </script>
        </>
    );
};

export default Seo;
