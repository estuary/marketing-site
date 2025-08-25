import { createWriteStream } from 'fs';
import * as path from 'path';
import {
    SitemapStream,
    SitemapAndIndexStream,
    SitemapIndexStream,
} from 'sitemap';

interface SitemapUrl {
    url: string;
    lastmod?: string;
}

interface PageData {
    path: string;
    pageContext?: {
        lastMod?: string;
    };
}

const siteUrl = 'https://estuary.dev';
const SITEMAP_URL_LIMIT = 45000;

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
    return {
        url: page.path,
        lastmod: page.pageContext?.lastMod,
    };
};

const waitForStreamFinish = (
    writeStream: NodeJS.WritableStream
): Promise<void> => {
    return new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
};

const generateLargeSitemap = async (
    urls: SitemapUrl[],
    publicPath: string,
    sitemapName: string
): Promise<number> => {
    const sms = new SitemapAndIndexStream({
        limit: SITEMAP_URL_LIMIT,
        getSitemapStream: (i) => {
            const sitemapStream = new SitemapStream({
                hostname: siteUrl,
                xmlns: {
                    news: false,
                    xhtml: false,
                    image: false,
                    video: false,
                },
            });

            const sitemapPath = `${sitemapName}-${i}.xml`;
            const fullPath = path.join(publicPath, sitemapPath);
            const ws = sitemapStream.pipe(createWriteStream(fullPath));

            return [`${siteUrl}/${sitemapPath}`, sitemapStream, ws];
        },
    });

    const indexPath = path.join(publicPath, `${sitemapName}-index.xml`);
    const writeStream = sms.pipe(createWriteStream(indexPath));

    urls.forEach((url) => {
        sms.write({
            url: url.url,
            lastmod: url.lastmod,
        });
    });

    sms.end();

    const sitemapCount = Math.ceil(urls.length / SITEMAP_URL_LIMIT);

    await waitForStreamFinish(writeStream);
    return sitemapCount;
};

const generateMainSitemapIndex = async (
    publicPath: string,
    mainSitemapCount = 1,
    integrationsSitemapCount = 0
): Promise<void> => {
    const sitemapIndex = new SitemapIndexStream();

    const indexPath = path.join(publicPath, 'sitemap-index.xml');
    const writeStream = sitemapIndex.pipe(createWriteStream(indexPath));

    for (let i = 0; i < mainSitemapCount; i++) {
        const sitemapName = `sitemap-${i}.xml`;
        sitemapIndex.write({
            url: `${siteUrl}/${sitemapName}`,
            lastmod: new Date().toISOString(),
        });
    }

    for (let i = 0; i < integrationsSitemapCount; i++) {
        const sitemapName = `integrations-sitemap-${i}.xml`;
        sitemapIndex.write({
            url: `${siteUrl}/${sitemapName}`,
            lastmod: new Date().toISOString(),
        });
    }

    sitemapIndex.end();

    return waitForStreamFinish(writeStream);
};

export const generateCustomSitemaps = async (
    pages: PageData[],
    publicPath: string
): Promise<void> => {
    try {
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

        let integrationsSitemapCount = 0;
        if (integrationUrls.length > 0) {
            integrationsSitemapCount = await generateLargeSitemap(
                integrationUrls,
                publicPath,
                'integrations-sitemap'
            );
            console.log(
                `Generated integrations sitemap with ${integrationUrls.length} URLs at ${publicPath} (split into ${integrationsSitemapCount} files)`
            );
        }

        let mainSitemapCount = 1;
        if (sortedOtherUrls.length > 0) {
            mainSitemapCount = await generateLargeSitemap(
                sortedOtherUrls,
                publicPath,
                'sitemap'
            );
            console.log(
                `Generated main sitemap with ${sortedOtherUrls.length} URLs at ${publicPath} (split into ${mainSitemapCount} files)`
            );
        }

        await generateMainSitemapIndex(
            publicPath,
            mainSitemapCount,
            integrationsSitemapCount
        );
        console.log('Generated main sitemap index');
    } catch (error) {
        console.error('Error generating sitemaps:', error);
        throw error;
    }
};
