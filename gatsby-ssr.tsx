const React = require('react');

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

// Copied from https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-google-gtag/src/gatsby-ssr.js
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  const origin = `https://www.googletagmanager.com`;
  const GA_MEASUREMENT_ID = 'G-P1PZPE4HHZ';

  const googleTagsLoaderHTML = `
  console.log('LOADING')
    // Load gtag.js script.
    var gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=Google tag ID';

    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(gtagScript,firstScript);
  `;

  const googleAnalyticsHTML = `
      // anonymize_ip
      function gaOptout(){document.cookie=disableStr+'=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/',window[disableStr]=!0}var gaProperty='${GA_MEASUREMENT_ID}',disableStr='ga-disable-'+gaProperty;document.cookie.indexOf(disableStr+'=true')>-1&&(window[disableStr]=!0);
      
      // respect dnt
      if (!(navigator.doNotTrack == "1" || window.doNotTrack == "1")) {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
              dataLayer.push(arguments);
          }

          // Default consent settings and tell it to wait a little bit for an wait
          //  for an update that will be coming from the banner module
          gtag('consent', 'default', {
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500,
          });

          // Start up gtag
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
      }
  `;

  setHtmlAttributes({ lang: `en` });

  // Handle setting the preconnect manually so we can also run a dns prefetch
  setHeadComponents([
    <link rel="preconnect" key="preconnect-google-gtag" href={origin} />,
    <link rel="dns-prefetch" key="dns-prefetch-google-gtag" href={origin} />,
  ]);

  setHeadComponents([
    <script
      key="google-analytics-config"
      dangerouslySetInnerHTML={{
        __html: googleAnalyticsHTML,
      }}
    />,
    <script
      key="google-tags-loader"
      type="text/plain"
      data-category="analytics"
      dangerouslySetInnerHTML={{
        __html: googleTagsLoaderHTML,
      }}
    />,
  ]);
};
