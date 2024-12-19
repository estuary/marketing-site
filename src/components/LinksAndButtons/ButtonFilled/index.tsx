import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { baseButton } from '../styles.module.less';

const ButtonFilled = ({
    children,
    className,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={clsx(baseButton, className)} {...props}>
            {children}
        </button>
    );
};

export default ButtonFilled;
