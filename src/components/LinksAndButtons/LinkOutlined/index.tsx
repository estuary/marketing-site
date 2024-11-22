import React from 'react';
import clsx from 'clsx';
import { CustomProps } from '../shared';
import {
    baseButton,
    buttonOutlined,
    buttonPrimary,
    buttonPrimaryLight,
    buttonPrimaryDark,
    fullWidthStyle,
} from '../styles.module.less';

const LinkOutlined = React.forwardRef<
    HTMLAnchorElement,
    React.AnchorHTMLAttributes<HTMLAnchorElement> & CustomProps
>(
    (
        { children, theme = 'light', fullWidth = false, className, ...props },
        ref
    ) => (
        <a
            ref={ref}
            {...props}
            className={clsx(
                baseButton,
                buttonOutlined,
                buttonPrimary,
                theme === 'light' ? buttonPrimaryLight : buttonPrimaryDark,
                fullWidth ? fullWidthStyle : null,
                className
            )}
        >
            {children}
        </a>
    )
);

export default LinkOutlined;
