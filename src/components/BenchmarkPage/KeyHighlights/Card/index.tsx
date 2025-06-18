import { ReactNode } from 'react';
import { container } from './styles.module.less';

interface CardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

const Card = ({ icon, title, description }: CardProps) => {
    return (
        <li className={container}>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
};

export default Card;
