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
            <div>
                {icon}
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </li>
    );
};

export default Card;
