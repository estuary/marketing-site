import React from 'react';
import { handleOutboundLinkClick } from '../utils';
import { CustomProps, customStyles } from '../shared';

const OutboundLinkOutlined = React.forwardRef<
    HTMLAnchorElement,
    React.AnchorHTMLAttributes<HTMLAnchorElement> & CustomProps
>(({ children, theme = 'light', fullWidth = false, ...props }, ref) => (
    <a
        ref={ref}
        {...props}
        onClick={(e) => handleOutboundLinkClick(e, props)}
        className={customStyles(theme, fullWidth)}
    >
        {children}
    </a>
));

export default OutboundLinkOutlined;
