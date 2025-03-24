// normalize CSS across browsers
import './src/normalize.css';
// custom CSS styles
import './src/highlighting-atom-one-dark.css';
// global css
import './src/style.less';

// TODO: Remove prismjs from packages? I think it's unused.

import WrapPageElementComponent from './src/components/WrapPageElementComponent';

export const wrapPageElement = ({ element }) => (
    <WrapPageElementComponent>{element}</WrapPageElementComponent>
);

// Copied from https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-google-gtag/src/gatsby-browser.js
export const onRouteUpdate = ({ location, prevLocation }) => {
    if (
        process.env.NODE_ENV !== 'production' ||
        typeof window.gtag !== 'function' ||
        // Check this to prevent this call from being fired on load of the page
        !prevLocation
    ) {
        return null;
    }

    // wrap inside a timeout to make sure react-helmet is done with its changes (https://github.com/gatsbyjs/gatsby/issues/11592)
    const sendPageView = () => {
        const pagePath = location
            ? location.pathname + location.search + location.hash
            : undefined;
        window.gtag('event', 'page_view', { page_path: pagePath });
    };

    if ('requestAnimationFrame' in window) {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setTimeout(sendPageView, 0));
        });
    } else {
        // Delay by 32ms to simulate 2 requestOnAnimationFrame calls
        setTimeout(sendPageView, 32);
    }

    return null;
};
