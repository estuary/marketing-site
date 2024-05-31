import PropTypes from 'prop-types';
import React from 'react';
import { AnchorOutlined } from './styles';
import { handleOutboundLinkClick } from './utils';

type OutboundLinkOutlinedProps =
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        theme?: 'light' | 'dark';
    };

const OutboundLinkOutlined = React.forwardRef<
    HTMLAnchorElement,
    OutboundLinkOutlinedProps
>(({ children, theme = 'light', ...props }, ref) => (
    <AnchorOutlined
        ref={ref}
        {...props}
        onClick={(e) => handleOutboundLinkClick(e, props)}
        theme={theme}
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
