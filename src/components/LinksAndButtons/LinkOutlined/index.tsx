import React from 'react';
import { CustomProps, customStyles } from '../shared';

const LinkOutlined = React.forwardRef<
    HTMLAnchorElement,
    React.AnchorHTMLAttributes<HTMLAnchorElement> & CustomProps
>(({ children, theme = 'light', fullWidth = false, ...props }, ref) => (
    <a ref={ref} {...props} className={customStyles(theme, fullWidth)}>
        {children}
    </a>
));

export default LinkOutlined;
