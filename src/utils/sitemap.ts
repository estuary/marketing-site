import { createWriteStream } from 'fs';
import { mkdir } from 'fs/promises';
import * as path from 'path';
import { SitemapStream, SitemapIndexStream } from 'sitemap';

interface SitemapUrl {
    url: string;
    lastmod?: string;
    changefreq?: string;
}

interface PageData {
    path: string;
    pageContext?: {
        lastMod?: string;
    };
}

const siteUrl = 'https://estuary.dev';
const integrationsSitemapFilename = 'integrations-sitemap.xml';
const mainSitemapFilename = 'sitemap-0.xml';

const URL_CATEGORIES = {
    HOMEPAGE: 'homepage',
    PRODUCT: 'product',
    PRICING: 'pricing',
    CONTACT: 'contact',
    BLOG: 'blog',
    COMPARISON: 'etl-tools',
    OTHER: 'other',
} as const;

type UrlCategory = (typeof URL_CATEGORIES)[keyof typeof URL_CATEGORIES];

const getUrlCategory = (url: string): UrlCategory => {
    if (url === '/' || url === '') return URL_CATEGORIES.HOMEPAGE;
    if (url.startsWith('/product')) return URL_CATEGORIES.PRODUCT;
    if (url.startsWith('/pricing')) return URL_CATEGORIES.PRICING;
    if (url.startsWith('/contact')) return URL_CATEGORIES.CONTACT;
    if (url.startsWith('/blog')) return URL_CATEGORIES.BLOG;
    if (url.startsWith('/etl-tools')) return URL_CATEGORIES.COMPARISON;
    return URL_CATEGORIES.OTHER;
};

const isIntegrationUrl = (url: string) => {
    return url.startsWith('/integrations/');
};

const shouldExcludePage = (pagePath: string) => {
    const excludedPaths = [
        '/dev-404-page',
        '/404',
        '/offline-plugin-app-shell-fallback',
    ];
    return excludedPaths.includes(pagePath);
};

const sortUrlsByCategory = (urls: SitemapUrl[]): SitemapUrl[] => {
    const categoryOrder = [
        URL_CATEGORIES.HOMEPAGE,
        URL_CATEGORIES.PRODUCT,
        URL_CATEGORIES.PRICING,
        URL_CATEGORIES.CONTACT,
        URL_CATEGORIES.BLOG,
        URL_CATEGORIES.COMPARISON,
        URL_CATEGORIES.OTHER,
    ];

    return urls.sort((a, b) => {
        const categoryA = getUrlCategory(a.url);
        const categoryB = getUrlCategory(b.url);

        const indexA = categoryOrder.indexOf(categoryA);
        const indexB = categoryOrder.indexOf(categoryB);

        if (indexA !== indexB) {
            return indexA - indexB;
        }

        return a.url.localeCompare(b.url);
    });
};

const convertToSitemapUrl = (page: PageData): SitemapUrl => {
    const isBlogUrl = page.path.startsWith('/blog');

    return {
        url: page.path,
        lastmod: page.pageContext?.lastMod,
        changefreq: isBlogUrl ? 'weekly' : undefined,
    };
};

const generateSitemap = async (
    urls: SitemapUrl[],
    outputPath: string
): Promise<void> => {
    const sitemap = new SitemapStream({
        hostname: siteUrl,
        xmlns: {
            news: false,
            xhtml: false,
            image: false,
            video: false,
        },
    });
    const writeStream = createWriteStream(outputPath);

    sitemap.pipe(writeStream);

    urls.forEach((url) => {
        sitemap.write({
            url: url.url,
            lastmod: url.lastmod,
            changefreq: url.changefreq,
        });
    });

    sitemap.end();

    return new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
};

const generateSitemapIndex = async (
    sitemaps: { url: string; lastmod?: string }[],
    outputPath: string
): Promise<void> => {
    const sitemapIndex = new SitemapIndexStream();
    const writeStream = createWriteStream(outputPath);

    sitemapIndex.pipe(writeStream);

    sitemaps.forEach((sitemap) => {
        sitemapIndex.write({
            url: `${siteUrl}${sitemap.url}`,
            lastmod: sitemap.lastmod,
        });
    });

    sitemapIndex.end();

    return new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
};

export const generateCustomSitemaps = async (
    pages: PageData[],
    publicPath: string
): Promise<void> => {
    try {
        await mkdir(publicPath, { recursive: true });

        const integrationUrls: SitemapUrl[] = [];
        const otherUrls: SitemapUrl[] = [];

        pages.forEach((page) => {
            if (shouldExcludePage(page.path)) {
                return;
            }

            const sitemapUrl = convertToSitemapUrl(page);

            if (isIntegrationUrl(page.path)) {
                integrationUrls.push(sitemapUrl);
            } else {
                otherUrls.push(sitemapUrl);
            }
        });

        const sortedOtherUrls = sortUrlsByCategory(otherUrls);

        if (integrationUrls.length > 0) {
            await generateSitemap(
                integrationUrls,
                path.join(publicPath, integrationsSitemapFilename)
            );
            console.log(
                `Generated integrations sitemap with ${integrationUrls.length} URLs`
            );
        }

        if (sortedOtherUrls.length > 0) {
            await generateSitemap(
                sortedOtherUrls,
                path.join(publicPath, mainSitemapFilename)
            );
            console.log(
                `Generated main sitemap with ${sortedOtherUrls.length} URLs`
            );
        }

        const sitemaps = [
            {
                url: `/${mainSitemapFilename}`,
                lastmod: new Date().toISOString(),
            },
        ];

        if (integrationUrls.length > 0) {
            sitemaps.push({
                url: `/${integrationsSitemapFilename}`,
                lastmod: new Date().toISOString(),
            });
        }

        await generateSitemapIndex(
            sitemaps,
            path.join(publicPath, 'sitemap-index.xml')
        );
        console.log('Generated sitemap index');
    } catch (error) {
        console.error('Error generating sitemaps:', error);
        throw error;
    }
};
