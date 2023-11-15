import * as React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const TakeATour = ({ onClose }) => {
    const onClick = () => {
        localStorage.setItem('@estuary/closeTour', "1")
        onClose?.()
    }

    return (
        <div className="take-a-tour">
            <OutboundLink
                target="_blank"
                href="/why"
            >
                Take a Product Tour
            </OutboundLink>
            <IconButton onClick={onClick}>
                <CloseIcon color="inherit" fontSize="small" />
            </IconButton>
        </div>
    )
}

export default TakeATour
