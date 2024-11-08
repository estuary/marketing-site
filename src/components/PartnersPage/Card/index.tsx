import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { container, darkTheme } from './styles.module.less';

interface CardProps {
    icon: ReactNode;
    title: string;
    children: string;
    isDarkTheme?: boolean;
    link?: ReactNode;
}

const Card = ({
    icon,
    title,
    children,
    isDarkTheme = false,
    link,
}: CardProps) => (
    <div className={clsx(container, isDarkTheme ? darkTheme : null)}>
        <div>{icon}</div>
        <h3>{title}</h3>
        <p>{children}</p>
        {link}
    </div>
);

export default Card;
