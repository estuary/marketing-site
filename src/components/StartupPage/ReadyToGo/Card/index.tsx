import { ReactNode } from 'react';
import ArrowRightIcon from '../../../../svgs/arrow-right-2.svg';
import { container } from './styles.module.less';

interface CardProps {
    image: ReactNode;
    title: string;
    href: string;
}

const Card = ({ image, title, href }: CardProps) => {
    return (
        <a className={container} target="_blank" href={href} rel="noreferrer">
            {image}
            <div>
                <h3>{title}</h3>
                <ArrowRightIcon color="var(--blue)" />
            </div>
        </a>
    );
};

export default Card;
