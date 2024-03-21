import "../OutboundLink/styles.less"

import React from "react"
import clsx from "clsx"

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const ActionLink = ({ onClick, showArrow = false, small = false, children }) => {
    const handleClick = (ev) => {
        ev.preventDefault()
        onClick?.()
    }

    return <a className={clsx('outbound-link', small && 'outbound-link-small')} onClick={handleClick}>{children} {showArrow && <ArrowForwardIcon />}</a>
}

export default ActionLink
