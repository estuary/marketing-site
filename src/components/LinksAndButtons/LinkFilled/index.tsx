import React from 'react';
import { buttonFilled } from '../styles.module.less';

const LinkFilled = React.forwardRef<
    HTMLAnchorElement,
    React.HTMLProps<HTMLAnchorElement>
>(({ children, ...props }, ref) => (
    <a ref={ref} {...props} className={buttonFilled}>
        {children}
    </a>
));

export default LinkFilled;
