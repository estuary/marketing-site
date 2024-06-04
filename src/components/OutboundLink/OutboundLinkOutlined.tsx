import PropTypes from 'prop-types';
import React from 'react';
import { AnchorOutlined } from './styles';
import { handleOutboundLinkClick } from './utils';

type OutboundLinkOutlinedProps =
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        theme?: 'light' | 'dark';
        fullWidth?: boolean;
    };

const OutboundLinkOutlined = React.forwardRef<
    HTMLAnchorElement,
    OutboundLinkOutlinedProps
>(({ children, theme = 'light', fullWidth = false, ...props }, ref) => (
    <AnchorOutlined
        ref={ref}
        {...props}
        onClick={(e) => handleOutboundLinkClick(e, props)}
        theme={theme}
        $fullWidth={fullWidth}
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
