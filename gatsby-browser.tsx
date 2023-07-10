// custom typefaces
import * as React from "react"
import "@fontsource/montserrat/variable.css"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.less"
import "./src/highlighting-atom-one-dark.css"
import { isMobile } from "react-device-detect"

// Highlighting for code blocks
// import "prismjs/themes/prism.css"

import { Script, ScriptStrategy } from "gatsby"

import { useSyncExternalStore } from 'react';

export function useWindowDimensions() {
    // the 3rd parameter is optional and only needed for server side rendering
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function subscribe(callback) {
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
}

function getSnapshot() {
    return { width: window.innerWidth, height: window.innerHeight };
}

function getServerSnapshot() {
    return {
        width: 0,
        height: 0,
    };
}

const ZD_KEY = "3271265c-16a8-4e0d-b1ab-72ed8fbe7e5a"

export const wrapPageElement = ({ element }) => {
    const dimensions = useWindowDimensions();
    if (
        process.env.NODE_ENV === "development" ||
        isMobile ||
        dimensions.width < 768
    ) {
        return element
    } else {
        return (
            <>
                {element}
                <Script
                    id="ze-snippet"
                    key="gatsby-plugin-zendesk-chat"
                    strategy={"idle"}
                    async
                    defer
                    src={`https://static.zdassets.com/ekr/snippet.js?key=${ZD_KEY}`}
                />
                <Script
                    id="hs-script-loader"
                    async
                    defer
                    strategy={"idle"}
                    src="//js.hs-scripts.com/8635875.js"
                />
            </>
        )
    }
}

export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
        import(`intersection-observer`)
        console.log(`# IntersectionObserver is polyfilled!`)
    }
}
