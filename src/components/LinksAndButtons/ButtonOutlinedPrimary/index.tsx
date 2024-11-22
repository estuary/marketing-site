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

const ButtonOutlinedPrimary: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement> & CustomProps
> = ({ fullWidth, theme = 'light', children, className, ...props }) => {
    return (
        <button
            className={clsx(
                baseButton,
                buttonOutlined,
                buttonPrimary,
                theme === 'light' ? buttonPrimaryLight : buttonPrimaryDark,
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
