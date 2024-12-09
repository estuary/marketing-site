import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { container, darkTheme } from './styles.module.less';

interface CardProps {
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    title: string;
    children: string;
    isDarkTheme?: boolean;
    link?: ReactNode;
}

const Card = ({
    Icon,
    title,
    children,
    isDarkTheme = false,
    link,
}: CardProps) => (
    <div className={clsx(container, isDarkTheme ? darkTheme : null)}>
        <div>
            <Icon color="var(--blue)" width={28} />
        </div>
        <h3>{title}</h3>
        <p>{children}</p>
        {link}
    </div>
);

export default Card;
