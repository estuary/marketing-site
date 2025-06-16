import { ReactNode } from 'react';
import Card from './Card';
import { container } from './styles.module.less';

interface CtaCardData {
    image: ReactNode;
    title: string;
    href: string;
    linkId: string;
}

export interface CtaCardsProps {
    cards: CtaCardData[];
}

const CtaCards = ({ cards }: CtaCardsProps) => (
    <div className={container}>
        {cards.map(({ image, title, href, linkId }) => (
            <Card
                key={linkId}
                image={image}
                title={title}
                href={href}
                linkId={linkId}
            />
        ))}
    </div>
);

export default CtaCards;
