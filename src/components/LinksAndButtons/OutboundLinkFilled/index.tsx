import React from 'react';
import clsx from 'clsx';
import { handleOutboundLinkClick } from '../utils';
import { baseButton, buttonFilled } from '../styles.module.less';

const OutboundLinkFilled = React.forwardRef<
    HTMLAnchorElement,
    React.HTMLProps<HTMLAnchorElement>
>(({ children, className, ...props }, ref) => (
    <a
        ref={ref}
        {...props}
        onClick={(e) => handleOutboundLinkClick(e, props)}
        className={clsx(baseButton, buttonFilled, className)}
    >
        {children}
    </a>
));

export default OutboundLinkFilled;
