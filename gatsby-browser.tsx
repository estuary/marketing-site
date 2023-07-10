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
import { useState } from "react"

const ZD_KEY = "3271265c-16a8-4e0d-b1ab-72ed8fbe7e5a"

export const wrapPageElement = ({ element }) => {
    const [dimensions,setDimensions] = useState({width:0,height:0})
    React.useEffect(() => {
        const subscriber = ()=>setDimensions({width: window.innerWidth, height: window.innerHeight})
        window.addEventListener('load',subscriber)
        return () => window.removeEventListener('load', subscriber)
    }, [])
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
