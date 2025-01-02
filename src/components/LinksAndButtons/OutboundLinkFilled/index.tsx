import clsx from 'clsx';
import { forwardRef, HTMLProps } from 'react';
import { handleOutboundLinkClick } from '../utils';
import { baseButton } from '../styles.module.less';

const OutboundLinkFilled = forwardRef<
    HTMLAnchorElement,
    HTMLProps<HTMLAnchorElement>
>(({ children, className, ...props }, ref) => (
    <a
        ref={ref}
        {...props}
        onClick={(e) => handleOutboundLinkClick(e, props)}
        className={clsx(baseButton, className)}
    >
        {children}
    </a>
));

export default OutboundLinkFilled;
