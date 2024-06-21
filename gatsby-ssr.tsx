import * as React from 'react';
import { GA_ANALYTICS_ENDPOINT, GA_MEASUREMENT_ID, GA_ORIGIN } from './shared';

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

    const reoDevHTML = `
      !function(){var e,t,n;e="a2955ffcdd9029c",t=function(){Reo.init({clientID:"a2955ffcdd9029c"})},(n=document.createElement("script")).src="https://static.reo.dev/"+e+"/reo.js",n.async=!0,n.onload=t,document.head.appendChild(n)}();
    `;

    setHtmlAttributes({ lang: 'en' });
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
            key="google-analytics-config"
            dangerouslySetInnerHTML={{
                __html: reoDevHTML,
            }}
        />,
    ]);
};
