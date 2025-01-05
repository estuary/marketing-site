import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { tagStyle } from '../styles.module.less';
import { container, darkTheme } from './styles.module.less';

interface CardProps {
    text: string;
    tag: string;
    isDarkTheme?: boolean;
    image?: ReactNode;
}

const Card = ({ text, tag, isDarkTheme = false, image }: CardProps) => {
    return (
        <div className={clsx(container, isDarkTheme ? darkTheme : null)}>
            <span className={tagStyle}>{tag}</span>
            {image}
            <p>{text}</p>
        </div>
    );
};

export default Card;
