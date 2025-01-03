import React from 'react';
import clsx from 'clsx';
import { container, darkTheme } from './styles.module.less';

interface CardProps {
    text: string;
    tag: string;
    isDarkTheme?: boolean;
}

const Card = ({ text, tag, isDarkTheme = false }: CardProps) => {
    return (
        <div className={clsx(container, isDarkTheme ? darkTheme : null)}>
            <span>{tag}</span>
            <p>{text}</p>
        </div>
    );
};

export default Card;
