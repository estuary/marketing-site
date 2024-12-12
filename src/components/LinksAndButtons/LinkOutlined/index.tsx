import React from 'react';
import clsx from 'clsx';
import { CustomProps } from '../shared';
import {
    baseButton,
    buttonOutlined,
    secondaryButton,
    fullWidthStyle,
    lightBorder,
} from '../styles.module.less';

const LinkOutlined = React.forwardRef<
    HTMLAnchorElement,
    React.AnchorHTMLAttributes<HTMLAnchorElement> & CustomProps
>(
    (
        {
            children,
            variant = 'primary',
            fullWidth = false,
            className,
            hasLightBorder = false,
            ...props
        },
        ref
    ) => (
        <a
            ref={ref}
            {...props}
            className={clsx(
                baseButton,
                buttonOutlined,
                variant === 'secondary' ? secondaryButton : null,
                hasLightBorder ? lightBorder : null,
                fullWidth ? fullWidthStyle : null,
                className
            )}
        >
            {children}
        </a>
    )
);

export default LinkOutlined;
