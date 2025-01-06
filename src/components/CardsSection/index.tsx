import { FC } from 'react';
import { defaultWrapperGrey } from '../../globalStyles/wrappers.module.less';
import { container, cardList } from './styles.module.less';

interface CardsSection {
    title: string;
    description?: string;
}

const CardsSection: FC<CardsSection> = ({ title, description, children }) => (
    <section className={defaultWrapperGrey}>
        <div className={container}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className={cardList}>{children}</div>
        </div>
    </section>
);

export default CardsSection;
