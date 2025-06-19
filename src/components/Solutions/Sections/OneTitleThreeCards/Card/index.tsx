import { container } from './styles.module.less';

interface CardProps {
    title: string;
    description: string;
}

const Card = ({ title, description }: CardProps) => {
    return (
        <div className={container}>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
