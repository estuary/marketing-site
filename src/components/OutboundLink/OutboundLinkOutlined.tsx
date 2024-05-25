import PropTypes from 'prop-types';
import React from 'react';
import { AnchorOutlined } from './styles';
import { handleOutboundLinkClick } from './utils';

const OutboundLinkOutlined = React.forwardRef<
    HTMLAnchorElement,
    React.HTMLProps<HTMLAnchorElement>
>(({ children, ...props }, ref) => (
    <AnchorOutlined
        ref={ref}
        {...props}
        onClick={(e) => handleOutboundLinkClick(e, props)}
    >
        {children}
    </AnchorOutlined>
));

OutboundLinkOutlined.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export { OutboundLinkOutlined };

