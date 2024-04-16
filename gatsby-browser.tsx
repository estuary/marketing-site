// custom typefaces
import * as React from 'react';
import '@fontsource/montserrat/variable.css';
import '@fontsource/merriweather';
// normalize CSS across browsers
import './src/normalize.css';
// custom CSS styles
import './src/style.less';
import './src/highlighting-atom-one-dark.css';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import { isMobile } from 'react-device-detect';
// Highlighting for code blocks
// import "prismjs/themes/prism.css"

import { Script, ScriptStrategy } from 'gatsby';

const ZD_KEY = '3271265c-16a8-4e0d-b1ab-72ed8fbe7e5a';

export const wrapPageElement = ({ element }) => {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    const subscriber = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('load', subscriber);
    return () => window.removeEventListener('load', subscriber);
  }, []);

  if (process.env.NODE_ENV === 'development' || isMobile || dimensions.width < 768) {
    return element;
  }

  return (
    <>
      {element}
      <Script
        id="ze-snippet"
        key="gatsby-plugin-zendesk-chat"
        strategy={'idle'}
        async
        defer
        data-category="functional"
        data-service="Zen Desk"
        src={`https://static.zdassets.com/ekr/snippet.js?key=${ZD_KEY}`}
      />
      <Script
        id="hs-script-loader"
        async
        defer
        strategy={'idle'}
        data-category="functional"
        data-service="HubSpot"
        src="//js.hs-scripts.com/8635875.js"
      />
    </>
  );
};

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};

export const onRouteUpdate = ({ location }, pluginOptions = {}) => {
  if (process.env.NODE_ENV !== `production` || typeof gtag !== `function`) {
    return null;
  }

  const pluginConfig = pluginOptions.pluginConfig || {};

  const pathIsExcluded =
    location &&
    typeof window.excludeGtagPaths !== `undefined` &&
    window.excludeGtagPaths.some((rx) => rx.test(location.pathname));

  if (pathIsExcluded) return null;

  // wrap inside a timeout to make sure react-helmet is done with its changes (https://github.com/gatsbyjs/gatsby/issues/11592)
  const sendPageView = () => {
    const pagePath = location ? location.pathname + location.search + location.hash : undefined;
    window.gtag(`event`, `page_view`, { page_path: pagePath });
  };

  const { delayOnRouteUpdate = 0 } = pluginConfig;

  if (`requestAnimationFrame` in window) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setTimeout(sendPageView, delayOnRouteUpdate));
    });
  } else {
    // Delay by 32ms to simulate 2 requestOnAnimationFrame calls
    setTimeout(sendPageView, 32 + delayOnRouteUpdate);
  }

  return null;
};
