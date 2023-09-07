/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

export interface SeoProps {
    title: string
    description?: string
    image?: string
    url?: string
    children?: React.ReactElement
}

const Seo: React.FC<SeoProps> = ({
    description,
    title,
    image,
    url,
    children,
}) => {
    const { site, defaultMetaImg } = useStaticQuery(
        graphql`
            query SeoData {
                site {
                    siteMetadata {
                        title
                        description
                        social {
                            twitter
                        }
                    }
                }
                defaultMetaImg: file(relativePath: { eq: "estuary-logo.png" }) {
                    childImageSharp {
                        fixed(width: 400) {
                            src
                        }
                    }
                }
            }
        `
    )

    if(!image) {
        image = defaultMetaImg.childImageSharp.fixed.src
    }

    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title

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
                content={site.siteMetadata?.social?.twitter || ``}
            />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            {children}
        </>
    )
}

export default Seo
