import React from 'react';
import clsx from 'clsx';
import { handleOutboundLinkClick } from '../utils';
import { CustomProps } from '../shared';
import {
    baseButton,
    buttonOutlined,
    secondaryButton,
    fullWidthStyle,
} from '../styles.module.less';

const OutboundLinkOutlined = React.forwardRef<
    HTMLAnchorElement,
    React.AnchorHTMLAttributes<HTMLAnchorElement> & CustomProps
>(
    (
        {
            children,
            variant = 'primary',
            fullWidth = false,
            className,
            ...props
        },
        ref
    ) => (
        <a
            ref={ref}
            {...props}
            onClick={(e) => handleOutboundLinkClick(e, props)}
            className={clsx(
                baseButton,
                buttonOutlined,
                variant === 'secondary' ? secondaryButton : null,
                fullWidth ? fullWidthStyle : null,
                className
            )}
        >
            {children}
        </a>
    )
);

export default OutboundLinkOutlined;
