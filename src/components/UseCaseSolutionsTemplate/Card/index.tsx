import clsx from 'clsx';
import Tag from '../Tag';
import { container, darkTheme } from './styles.module.less';
import CardImage from './CardImage';

interface CardProps {
    text: string;
    tag: string;
    isDarkTheme?: boolean;
    imageIndex?: number;
}

const Card = ({ text, tag, isDarkTheme = false, imageIndex }: CardProps) => {
    return (
        <div className={clsx(container, isDarkTheme ? darkTheme : null)}>
            <Tag>{tag}</Tag>
            {imageIndex ? <CardImage imageIndex={imageIndex} /> : null}
            <p>{text}</p>
        </div>
    );
};

export default Card;
