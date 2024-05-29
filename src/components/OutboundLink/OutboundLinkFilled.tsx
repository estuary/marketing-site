import PropTypes from 'prop-types';
import React from 'react';
import { AnchorFilled } from './styles';
import { handleOutboundLinkClick } from './utils';

const OutboundLinkFilled = React.forwardRef<
    HTMLLinkElement,
    React.HTMLProps<HTMLLinkElement>
>(({ children, ...props }, ref) => (
    <AnchorFilled
        ref={ref}
        {...props}
        onClick={(e) => handleOutboundLinkClick(e, props)}
    >
        {children}
    </AnchorFilled>
));

OutboundLinkFilled.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export { OutboundLinkFilled };
