import { type GatsbySSR } from 'gatsby';
import { GA_ANALYTICS_ENDPOINT, GA_MEASUREMENT_ID, GA_ORIGIN } from './shared';

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
    pathname,
    setHtmlAttributes,
    setHeadComponents,
}) => {
    // We always want the `lang` being set
    setHtmlAttributes({ lang: 'en' });

    // COMPLIANCE WARNING - DO NOT INCLUDE TRACKING ON THIS PAGE
    if (pathname && pathname.includes('data-requests')) {
        return;
    }
    // COMPLIANCE WARNING - DO NOT INCLUDE TRACKING ON THIS PAGE

    // On non-production builds we don't want the rest added because it
    //  is just Cookie Consent and Google Tagging / Analytics
    if (process.env.NODE_ENV !== 'production') {
        return;
    }

    const googleAnalyticsHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
          dataLayer.push(arguments);
      }
      // Default consent settings and tell it to wait a little bit for an wait
      //  for an update that will be coming from the banner module
      gtag('consent', 'default', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'analytics_storage': 'denied',
          'functionality_storage': 'denied',
          'personalization_storage': 'denied',
          'security_storage': 'denied',
          'wait_for_update': 500,
      });
      // Start up gtag
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
  `;

    // We need to add this attribute to try to get Google to not include this
    //    text in their search results.
    const consentBannerHandling = `
        window.addEventListener("cf_layer_ready", (event) => {
            if (!event || !event.detail) {
                return;
            }

            const element = event.detail;
            if (element && element.setAttribute) {
                element.setAttribute('data-nosnippet', true);
            }
        });

    `;

    setHeadComponents([
        <link
            rel="dns-prefetch"
            key="dns-prefetch-google-gtag"
            href={GA_ORIGIN}
        />,
        <link rel="preconnect" key="preconnect-google-gtag" href={GA_ORIGIN} />,

        <link
            rel="dns-prefetch"
            key="dns-prefetch-google-analytics"
            href={GA_ANALYTICS_ENDPOINT}
        />,
        <link
            rel="preconnect"
            key="preconnect-google-analytics"
            href={GA_ANALYTICS_ENDPOINT}
        />,
        <script
            key="google-analytics-config"
            dangerouslySetInnerHTML={{
                __html: googleAnalyticsHTML,
            }}
        />,
        <script
            key="google-analytics-loader"
            async
            src={`${GA_ORIGIN}/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />,
        <link
            key="consent-cookiefirst"
            rel="preconnect"
            href="//consent.cookiefirst.com"
        />,
        <link
            key="edge-cookiefirst"
            rel="dns-prefetch"
            href="//edge.cookiefirst.com"
        />,
        <link
            key="api-cookiefirst"
            rel="dns-prefetch"
            href="//api.cookiefirst.com"
        />,
        <script
            key="cookie-first-banner-load-handler"
            dangerouslySetInnerHTML={{
                __html: consentBannerHandling,
            }}
        />,
        <script
            key="script-cookiefirst"
            id="CookieFirst"
            async
            src="https://consent.cookiefirst.com/sites/estuary.dev-bb4406bb-2dfd-4133-8a4c-7b737e5b0bac/consent.js"
        />,
    ]);
};
