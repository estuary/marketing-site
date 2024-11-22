import React from 'react';
import { handleOutboundLinkClick } from '../utils';
import { buttonFilled } from '../styles.module.less';

const OutboundLinkFilled = React.forwardRef<
    HTMLAnchorElement,
    React.HTMLProps<HTMLAnchorElement>
>(({ children, ...props }, ref) => (
    <a
        ref={ref}
        {...props}
        onClick={(e) => handleOutboundLinkClick(e, props)}
        className={buttonFilled}
    >
        {children}
    </a>
));

export default OutboundLinkFilled;
