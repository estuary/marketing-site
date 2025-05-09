import { ReactNode } from 'react';
import ArrowRightIcon from '../../../../svgs/arrow-right-2.svg';
import { container } from './styles.module.less';

interface CardProps {
    linkId: string;
    image: ReactNode;
    title: string;
    href: string;
}

const Card = ({ linkId, image, title, href }: CardProps) => {
    return (
        <a
            id={linkId}
            className={container}
            target="_blank"
            href={href}
            rel="noreferrer"
        >
            {image}
            <div>
                <h3>{title}</h3>
                <ArrowRightIcon color="var(--blue)" />
            </div>
        </a>
    );
};

export default Card;
