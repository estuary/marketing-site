const React = require('react');
const { Partytown } = require('@builder.io/partytown/react');
const { GA_MEASUREMENT_ID, GTAG_PATH } = require('./shared');

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
    <Partytown key="partytown" forward={['dataLayer', 'gtag']} />,
    <script key="google-analytics" type="text/partytown" src={GTAG_PATH} />,
    <script
      key="google-analytics-config"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments);}
        gtag('js', new Date()); 
        gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false })`,
      }}
    />,
    // <script key="osano-1" src="https://cmp.osano.com/16CPXbTOi1sXx4D3/1e6b223c-ed10-4c4b-a442-48fea69f76af/osano.js"></script>,
  ]);
};
