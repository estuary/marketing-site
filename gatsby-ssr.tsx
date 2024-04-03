const React = require('react');
const { GTAG_ID, GTAG_PATH } = require('./shared');
const { Script } = require('gatsby');

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` });
  setHeadComponents([
    <Script key="google-analytics" strategy="off-main-thread" src={GTAG_PATH} />,
    <Script
      key="google-analytics-config"
      strategy="off-main-thread"
      forward={[`gtag`, 'dataLayer.push']}
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function() { window.dataLayer.push(arguments);}
        window.gtag('js', new Date()); 
        window.gtag('config', '${GTAG_ID}', { send_page_view: false })`,
      }}
    />,
    // <script key="osano-1" src="https://cmp.osano.com/16CPXbTOi1sXx4D3/1e6b223c-ed10-4c4b-a442-48fea69f76af/osano.js"></script>,
  ]);
};
