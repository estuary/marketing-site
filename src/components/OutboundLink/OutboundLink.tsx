import PropTypes from "prop-types";
import React from "react";
import { handleOutboundLinkClick } from "./utils";

const OutboundLink = React.forwardRef<HTMLLinkElement, React.HTMLProps<HTMLLinkElement>>(({ children, ...props }, ref) => (
    <a ref={ref} {...props} onClick={(e) => handleOutboundLinkClick(e, props)}>
        {children}
    </a>
));

OutboundLink.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export { OutboundLink };

