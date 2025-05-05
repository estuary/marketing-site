import { ReactNode } from 'react';
import { container } from './styles.module.less';

interface CardProps {
    image: ReactNode;
    title: string;
    description: string;
}

const Card = ({ image, title, description }: CardProps) => {
    return (
        <div className={container}>
            {image}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
