import { ReactNode } from 'react';
import clsx from 'clsx';
import Tag from '../Tag';
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
            <Tag>{tag}</Tag>
            {image}
            <p>{text}</p>
        </div>
    );
};

export default Card;
