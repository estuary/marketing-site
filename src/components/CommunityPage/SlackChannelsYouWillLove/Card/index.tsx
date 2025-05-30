import { CardProps } from '../../shared';
import { container } from './styles.module.less';

const Card = ({ title, description }: CardProps) => (
    <li className={container}>
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
);

export default Card;
