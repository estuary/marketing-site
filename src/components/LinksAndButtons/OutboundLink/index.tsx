import React from 'react';
import { handleOutboundLinkClick } from '../utils';

const OutboundLink = React.forwardRef<
    HTMLAnchorElement,
    React.HTMLProps<HTMLAnchorElement>
>(({ children, ...props }, ref) => {
    return (
        <a
            ref={ref}
            {...props}
            onClick={(e) => handleOutboundLinkClick(e, props)}
        >
            {children}
        </a>
    );
});

export default OutboundLink;
