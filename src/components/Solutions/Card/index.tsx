import clsx from 'clsx';
import { container, darkTheme } from './styles.module.less';
import CardImage from './CardImage';

interface CardProps {
    text: string;
    isDarkTheme?: boolean;
    imageIndex?: number;
}

const Card = ({ text, isDarkTheme = false, imageIndex }: CardProps) => {
    return (
        <div className={clsx(container, isDarkTheme ? darkTheme : null)}>
            {imageIndex ? (
                <CardImage imageIndex={imageIndex} altText={text} />
            ) : null}
            <p>{text}</p>
        </div>
    );
};

export default Card;
