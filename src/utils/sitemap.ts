import { createWriteStream } from 'fs';
import { mkdir } from 'fs/promises';
import * as path from 'path';

interface SitemapUrl {
    url: string;
    lastmod?: string;
    changefreq?: string;
    priority?: number;
}

interface PageData {
    path: string;
    pageContext?: {
        lastMod?: string;
    };
}

const URL_CATEGORIES = {
    HOMEPAGE: 'homepage',
    PRODUCT: 'product',
    PRICING: 'pricing',
    CONTACT: 'contact',
    BLOG: 'blog',
    COMPARISON: 'comparison',
    OTHER: 'other',
} as const;

type UrlCategory = (typeof URL_CATEGORIES)[keyof typeof URL_CATEGORIES];

const getUrlCategory = (url: string): UrlCategory => {
    if (url === '/' || url === '') return URL_CATEGORIES.HOMEPAGE;
    if (url.startsWith('/product')) return URL_CATEGORIES.PRODUCT;
    if (url.startsWith('/pricing')) return URL_CATEGORIES.PRICING;
    if (url.startsWith('/contact')) return URL_CATEGORIES.CONTACT;
    if (url.startsWith('/blog')) return URL_CATEGORIES.BLOG;
    if (url.includes('vs') || url.includes('comparison')) {
        return URL_CATEGORIES.COMPARISON;
    }
    return URL_CATEGORIES.OTHER;
};

const isIntegrationUrl = (url: string): boolean => {
    return url.startsWith('/integrations/');
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
    let priority = 0.5;

    if (page.path === '/') {
        priority = 1.0;
    } else if (page.path === '/product') {
        priority = 0.9;
    } else if (page.path === '/pricing') {
        priority = 0.8;
    }

    return {
        url: page.path,
        lastmod: page.pageContext?.lastMod,
        changefreq: 'weekly',
        priority,
    };
};

const XML_ESCAPE_PATTERNS = {
    AMPERSAND: /&/g,
    LESS_THAN: /</g,
    GREATER_THAN: />/g,
    QUOTE: /"/g,
    APOSTROPHE: /'/g,
} as const;

const escapeXml = (text: string): string => {
    return text
        .replace(XML_ESCAPE_PATTERNS.AMPERSAND, '&amp;')
        .replace(XML_ESCAPE_PATTERNS.LESS_THAN, '&lt;')
        .replace(XML_ESCAPE_PATTERNS.GREATER_THAN, '&gt;')
        .replace(XML_ESCAPE_PATTERNS.QUOTE, '&quot;')
        .replace(XML_ESCAPE_PATTERNS.APOSTROPHE, '&#39;');
};

const generateSitemap = async (
    urls: SitemapUrl[],
    outputPath: string
): Promise<void> => {
    const writeStream = createWriteStream(outputPath);

    writeStream.write('<?xml version="1.0" encoding="UTF-8"?>\n');
    writeStream.write(
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    );

    urls.forEach((url) => {
        const fullUrl = `https://estuary.dev${url.url}`;
        const lastmod = url.lastmod
            ? new Date(url.lastmod).toISOString()
            : new Date().toISOString();

        writeStream.write('  <url>\n');
        writeStream.write(`    <loc>${escapeXml(fullUrl)}</loc>\n`);
        writeStream.write(`    <lastmod>${escapeXml(lastmod)}</lastmod>\n`);
        if (url.changefreq) {
            writeStream.write(
                `    <changefreq>${escapeXml(url.changefreq)}</changefreq>\n`
            );
        }
        if (url.priority !== undefined) {
            writeStream.write(`    <priority>${url.priority}</priority>\n`);
        }
        writeStream.write('  </url>\n');
    });

    writeStream.write('</urlset>\n');
    writeStream.end();

    return new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
};

const generateSitemapIndex = async (
    sitemaps: { url: string; lastmod?: string }[],
    outputPath: string
): Promise<void> => {
    const writeStream = createWriteStream(outputPath);

    writeStream.write('<?xml version="1.0" encoding="UTF-8"?>\n');
    writeStream.write(
        '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    );

    sitemaps.forEach((sitemap) => {
        const fullUrl = `https://estuary.dev${sitemap.url}`;
        const lastmod = sitemap.lastmod
            ? new Date(sitemap.lastmod).toISOString()
            : new Date().toISOString();

        writeStream.write('  <sitemap>\n');
        writeStream.write(`    <loc>${escapeXml(fullUrl)}</loc>\n`);
        writeStream.write(`    <lastmod>${escapeXml(lastmod)}</lastmod>\n`);
        writeStream.write('  </sitemap>\n');
    });

    writeStream.write('</sitemapindex>\n');
    writeStream.end();

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
                path.join(publicPath, 'integrations-sitemap.xml')
            );
            console.log(
                `Generated integrations sitemap with ${integrationUrls.length} URLs`
            );
        }

        if (sortedOtherUrls.length > 0) {
            await generateSitemap(
                sortedOtherUrls,
                path.join(publicPath, 'sitemap-0.xml')
            );
            console.log(
                `Generated main sitemap with ${sortedOtherUrls.length} URLs`
            );
        }

        const sitemaps = [
            { url: '/sitemap-0.xml', lastmod: new Date().toISOString() },
        ];

        if (integrationUrls.length > 0) {
            sitemaps.push({
                url: '/integrations-sitemap.xml',
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
