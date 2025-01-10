import { forwardRef, HTMLProps } from 'react';
import { handleOutboundLinkClick } from '../utils';
import { underlinedLink } from './styles.module.less';

interface OutboundLinkProps extends HTMLProps<HTMLAnchorElement> {
    hasUnderline?: boolean;
}

const OutboundLink = forwardRef<HTMLAnchorElement, OutboundLinkProps>(
    ({ children, hasUnderline, ...props }, ref) => {
        return (
            <a
                ref={ref}
                className={hasUnderline ? underlinedLink : null}
                {...props}
                onClick={(e) => handleOutboundLinkClick(e, props)}
            >
                {children}
            </a>
        );
    }
);

export default OutboundLink;
