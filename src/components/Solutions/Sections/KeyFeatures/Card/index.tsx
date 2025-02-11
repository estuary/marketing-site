import { ReactNode } from 'react';
import { container } from './styles.module.less';

interface CardProps {
    description: string;
    svg: ReactNode;
    backgroundColor: string;
    borderColor: string;
}

const Card = ({
    description,
    svg,
    backgroundColor,
    borderColor,
}: CardProps) => {
    return (
        <div className={container} style={{ backgroundColor, borderColor }}>
            <div>
                <p>{description}</p>
            </div>
            {svg}
        </div>
    );
};

export default Card;
