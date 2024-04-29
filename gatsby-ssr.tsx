import * as React from 'react';
import { GA_MEASUREMENT_ID } from './shared';

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  const googleAnalyticsHTML = `
      // anonymize_ip
      function gaOptout(){document.cookie=disableStr+'=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/',window[disableStr]=!0}var gaProperty='${GA_MEASUREMENT_ID}',disableStr='ga-disable-'+gaProperty;document.cookie.indexOf(disableStr+'=true')>-1&&(window[disableStr]=!0);
      
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

  setHtmlAttributes({ lang: `en` });
  setHeadComponents([
    <link rel="preconnect" href="//consent.cookiefirst.com" />,
    <link rel="dns-prefetch" href="//edge.cookiefirst.com" />,
    <link rel="dns-prefetch" href="//api.cookiefirst.com" />,
    <script
      id="CookieFirst"
      src="https://consent.cookiefirst.com/sites/estuary.dev-bb4406bb-2dfd-4133-8a4c-7b737e5b0bac/consent.js"
    />,
    <script
      key="google-analytics-config"
      dangerouslySetInnerHTML={{
        __html: googleAnalyticsHTML,
      }}
    />,
  ]);
};
