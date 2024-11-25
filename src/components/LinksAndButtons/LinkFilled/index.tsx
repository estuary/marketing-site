import React from 'react';
import clsx from 'clsx';
import { baseButton } from '../styles.module.less';

const LinkFilled = React.forwardRef<
    HTMLAnchorElement,
    React.HTMLProps<HTMLAnchorElement>
>(({ children, className, ...props }, ref) => (
    <a ref={ref} {...props} className={clsx(baseButton, className)}>
        {children}
    </a>
));

export default LinkFilled;
