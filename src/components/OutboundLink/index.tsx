import "./styles.less"

import React from "react"
import { OutboundLink as Outbound } from "gatsby-plugin-google-gtag"
import clsx from "clsx"

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const OutboundLink = ({ target = "_blank", href, showArrow = false, small = false, children, neutral = false, button = false }) => {
    return <Outbound className={clsx(button ? 'outbound-link-button' : 'outbound-link', neutral && 'outbound-link-neutral', small && 'outbound-link-small')} target={target} href={href}>{children} {showArrow && <ArrowForwardIcon />}</Outbound>
}

export default OutboundLink
