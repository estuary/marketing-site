import { FC } from 'react';
import { container, cardList } from './styles.module.less';

interface CardsSection {
    title: string;
    description?: string;
}

const CardsSection: FC<CardsSection> = ({ title, description, children }) => (
    <section>
        <div className={container}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className={cardList}>{children}</div>
        </div>
    </section>
);

export default CardsSection;
