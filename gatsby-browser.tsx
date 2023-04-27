// custom typefaces
import * as ReactDOM from "react-dom/client"
import * as React from "react";
import { loadableReady } from "@loadable/component"
import "@fontsource/montserrat/variable.css"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.less"
import "./src/highlighting-atom-one-dark.css"

// Highlighting for code blocks
// import "prismjs/themes/prism.css"

import { Script, ScriptStrategy } from "gatsby"

const ZD_KEY = "3271265c-16a8-4e0d-b1ab-72ed8fbe7e5a"

export const wrapPageElement = ({ element }) => {
    if (
        process.env.NODE_ENV === "development" ||
        (window?.innerWidth ?? 9999) < 768
    ) {
        return element
    } else {
        return (
            <>
                {element}
                <Script
                    id="ze-snippet"
                    key="gatsby-plugin-zendesk-chat"
                    strategy={ScriptStrategy.idle}
                    src={`https://static.zdassets.com/ekr/snippet.js?key=${ZD_KEY}`}
                />
            </>
        )
    }
}