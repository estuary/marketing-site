import React from 'react';
import { buttonFilled } from '../styles.module.less';

const ButtonFilled = ({
    children,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={buttonFilled} {...props}>
            {children}
        </button>
    );
};

export default ButtonFilled;
