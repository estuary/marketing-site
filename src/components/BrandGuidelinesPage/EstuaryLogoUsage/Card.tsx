import { ReactNode } from 'react';
import ArrowRightIcon from '../../../svgs/arrow-right-2.svg';
import { card, imageWrapper, detailsWrapper } from './styles.module.less';

interface CardProps {
    image: ReactNode;
    title: string;
    description: string;
    link: {
        id: string;
        imagePath: string;
        fileName: string;
    };
}

const Card = ({ image, title, description, link }: CardProps) => {
    return (
        <li id={link.id} className={card}>
            <div className={imageWrapper}>{image}</div>
            <div className={detailsWrapper}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                    <a href={link.imagePath} download={link.fileName}>
                        Download Estuary logo
                    </a>
                    <ArrowRightIcon color="var(--blue)" />
                </div>
            </div>
        </li>
    );
};

export default Card;
