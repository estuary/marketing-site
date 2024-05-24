// custom typefaces
import '@fontsource/merriweather';
import '@fontsource/montserrat/variable.css';
import * as React from 'react';
// normalize CSS across browsers
import './src/normalize.css';
// custom CSS styles
import './src/highlighting-atom-one-dark.css';
import './src/style.less';

// Highlighting for code blocks
// import "prismjs/themes/prism.css"

import { Script } from 'gatsby';
import HelpChatPlaceholder from './src/components/HelpChatPlaceholder';

const ZD_KEY = '3271265c-16a8-4e0d-b1ab-72ed8fbe7e5a';

const WrapPageElementComponent = ({ children }) => {
  const [shouldLoadHelpChat, setShouldLoadHelpChat] = React.useState(false);

  const isMobileScreen =
    typeof window !== 'undefined' &&
    (window.innerWidth < 768 || window.innerHeight < 768);

  const handleMouseEnter = React.useCallback(() => {
    setShouldLoadHelpChat(true);
  }, []);

  if (isMobileScreen) {
    return children;
  }

  return (
    <>
      {children}
      {shouldLoadHelpChat && (
        <Script
          id="ze-snippet"
          key="gatsby-plugin-zendesk-chat"
          strategy={'idle'}
          async
          defer
          src={`https://static.zdassets.com/ekr/snippet.js?key=${ZD_KEY}`}
        />
      )}
      <HelpChatPlaceholder onMouseEnter={handleMouseEnter} />
      <Script
        id="hs-script-loader"
        async
        defer
        strategy={'idle'}
        src="//js.hs-scripts.com/8635875.js"
      />
    </>
  );
};

export const wrapPageElement = ({ element }) => {
  return <WrapPageElementComponent>{element}</WrapPageElementComponent>;
};

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};

// Copied from https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-google-gtag/src/gatsby-browser.js
export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== `production` || typeof gtag !== `function`) {
    return null;
  }

  // wrap inside a timeout to make sure react-helmet is done with its changes (https://github.com/gatsbyjs/gatsby/issues/11592)
  const sendPageView = () => {
    const pagePath = location
      ? location.pathname + location.search + location.hash
      : undefined;
    window.gtag(`event`, `page_view`, { page_path: pagePath });
  };

  if (`requestAnimationFrame` in window) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setTimeout(sendPageView, 0));
    });
  } else {
    // Delay by 32ms to simulate 2 requestOnAnimationFrame calls
    setTimeout(sendPageView, 32);
  }

  return null;
};
