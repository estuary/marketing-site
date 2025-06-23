import { container } from './styles.module.less';

interface CardProps {
    title: string;
    description: string;
}

const Card = ({ title, description }: CardProps) => {
    return (
        <li className={container}>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
};

export default Card;
