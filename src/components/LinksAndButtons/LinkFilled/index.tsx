import clsx from 'clsx';
import { forwardRef, HTMLProps } from 'react';
import { baseButton } from '../styles.module.less';

const LinkFilled = forwardRef<HTMLAnchorElement, HTMLProps<HTMLAnchorElement>>(
    ({ children, className, ...props }, ref) => (
        <a ref={ref} {...props} className={clsx(baseButton, className)}>
            {children}
        </a>
    )
);

export default LinkFilled;
