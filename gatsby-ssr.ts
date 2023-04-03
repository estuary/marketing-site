/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const headComponents = [
  <script
    src="https://cmp.osano.com/16CPXbTOi1sXx4D3/aaa8ccd6-4dbe-43d2-b79b-9926d1462a49/osano.js"
  > </script>,
]

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` });
  setHeadComponents(headComponents);
}
