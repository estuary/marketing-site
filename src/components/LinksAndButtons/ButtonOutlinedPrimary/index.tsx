import React from 'react';
import clsx from 'clsx';
import { CustomProps } from '../shared';
import {
    baseButton,
    buttonOutlined,
    secondaryButton,
    fullWidthStyle,
} from '../styles.module.less';

const ButtonOutlinedPrimary: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement> & CustomProps
> = ({ fullWidth, variant = 'primary', children, className, ...props }) => {
    return (
        <button
            className={clsx(
                baseButton,
                buttonOutlined,
                variant === 'secondary' ? secondaryButton : null,
                fullWidth ? fullWidthStyle : null,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default ButtonOutlinedPrimary;
