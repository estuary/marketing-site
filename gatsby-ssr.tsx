const React = require('react');
const { Partytown } = require('@builder.io/partytown/react');

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

const GA_MEASUREMENT_ID = 'G-P1PZPE4HHZ';

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` });
  setHeadComponents([
    <Partytown
      key="partytown"
      forward={[
        'gtag',
        'dataLayer.push',
        '_hsq.push',
        // TODO (partytown) - eventually we should see if we can
        //  get the forms working through partytown
        // ["hbspt.forms.create", { preserveBehavior: true }],
      ]}
    />,
    <script key="google-analytics" type="text/partytown" src={`/gtag.js?id=${GA_MEASUREMENT_ID}`} />,
    <script
      key="google-analytics-config"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function() { window.dataLayer.push(arguments);}
        window.gtag('js', new Date()); 
        window.gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false })`,
      }}
    />,
    // <script key="osano-1" src="https://cmp.osano.com/16CPXbTOi1sXx4D3/1e6b223c-ed10-4c4b-a442-48fea69f76af/osano.js"></script>,
  ]);
};
