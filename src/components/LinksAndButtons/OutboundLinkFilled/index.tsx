import clsx from 'clsx';
import { forwardRef, HTMLProps } from 'react';
import { handleOutboundLinkClick } from '../utils';
import { baseButton, secondaryButton } from '../styles.module.less';
import { CustomProps } from '../shared';

const OutboundLinkFilled = forwardRef<
    HTMLAnchorElement,
    HTMLProps<HTMLAnchorElement> & CustomProps
>(({ children, className, variant = 'primary', ...props }, ref) => (
    <a
        ref={ref}
        {...props}
        onClick={(e) => handleOutboundLinkClick(e, props)}
        className={clsx(
            baseButton,
            variant === 'secondary' ? secondaryButton : null,
            className
        )}
    >
        {children}
    </a>
));

export default OutboundLinkFilled;
