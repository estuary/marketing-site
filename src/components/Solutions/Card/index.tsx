import clsx from 'clsx';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { container, darkTheme } from './styles.module.less';

interface CardProps {
    text: string;
    isDarkTheme?: boolean;
    image?: IGatsbyImageData;
}

const Card = ({ text, isDarkTheme = false, image }: CardProps) => {
    return (
        <div className={clsx(container, isDarkTheme ? darkTheme : null)}>
            {image ? <GatsbyImage image={image} alt={text} /> : null}
            <p>{text}</p>
        </div>
    );
};

export default Card;
