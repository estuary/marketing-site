import * as React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const TakeATour = () => {
    return (
        <div className="take-a-tour">
            <OutboundLink
                target="_blank"
                href="/why"
            >
                Take a Product Tour
            </OutboundLink>
        </div>
    )
}

export default TakeATour
