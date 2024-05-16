import PropTypes from "prop-types"
import React from "react"
import { ButtonStyleVariants } from "../../../shared"
import { OutboundLinkFilled, OutboundLinkOutlinedPrimary, OutboundLinkOutlinedSecondary } from "./styles"
import { handleOutboundLinkClick } from "./utils"

interface LinkProps extends React.HTMLProps<HTMLLinkElement> {
    variant?: ButtonStyleVariants
}

const OutboundLink = React.forwardRef<HTMLLinkElement, LinkProps>(({ children, variant, ...props }, ref) => {
    switch (variant) {
        case "filled":
            return (
                <OutboundLinkFilled ref={ref} {...props} onClick={(e) => handleOutboundLinkClick(e, props)}>
                    {children}
                </OutboundLinkFilled>
            );

        case "outlinedPrimary":
            return (
                <OutboundLinkOutlinedPrimary ref={ref} {...props} onClick={(e) => handleOutboundLinkClick(e, props)}>
                    {children}
                </OutboundLinkOutlinedPrimary>
            );
        case "outlinedSecondary":
            return (
                <OutboundLinkOutlinedSecondary ref={ref} {...props} onClick={(e) => handleOutboundLinkClick(e, props)}>
                    {children}
                </OutboundLinkOutlinedSecondary>
            );
        default:
            return (
                <a ref={ref} {...props} onClick={(e) => handleOutboundLinkClick(e, props)}>
                    {children}
                </a>
            );
    }
}
);

OutboundLink.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['filled', 'outlinedPrimary', 'outlinedSecondary']),
    children: PropTypes.node.isRequired,
}

export { OutboundLink }

