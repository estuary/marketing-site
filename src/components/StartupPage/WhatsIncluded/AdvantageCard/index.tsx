import { ReactNode } from 'react';
import { container, iconWrapper } from './styles.module.less';

interface AdvantageCardProps {
    icon: ReactNode;
    title: string;
    description?: ReactNode;
    items?: string[];
}

const AdvantageCard = ({
    icon,
    title,
    description,
    items,
}: AdvantageCardProps) => {
    return (
        <div className={container}>
            <div className={iconWrapper}>{icon}</div>
            <h3>{title}</h3>
            {description ? <p>{description}</p> : null}
            {items && items.length > 0 ? (
                <ul>
                    {items.map((item, index) => (
                        <li key={`advantage-list-item-${index + 1}`}>{item}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default AdvantageCard;
