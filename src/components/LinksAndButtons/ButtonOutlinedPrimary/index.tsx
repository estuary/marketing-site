import React from 'react';
import { CustomProps, customStyles } from '../shared';

const ButtonOutlinedPrimary: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement> & CustomProps
> = ({ fullWidth, theme = 'light', children, ...props }) => {
    return (
        <button className={customStyles(theme, fullWidth)} {...props}>
            {children}
        </button>
    );
};

export default ButtonOutlinedPrimary;
