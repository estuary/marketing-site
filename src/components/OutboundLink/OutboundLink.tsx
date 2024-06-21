import PropTypes from 'prop-types';
import React from 'react';
import { TextAnchor } from './styles';
import { handleOutboundLinkClick } from './utils';

const OutboundLink = React.forwardRef<
    HTMLAnchorElement,
    React.HTMLProps<HTMLAnchorElement>
>(({ children, ...props }, ref) => {
    const Component = typeof children === 'string' ? TextAnchor : 'a';

    return (
        <Component
            ref={ref}
            {...props}
            onClick={(e) => handleOutboundLinkClick(e, props)}
        >
            {children}
        </Component>
    );
});

OutboundLink.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export { OutboundLink };
