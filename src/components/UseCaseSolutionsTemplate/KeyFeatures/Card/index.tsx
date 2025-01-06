import React, { ReactNode } from 'react';
import Tag from '../../Tag';
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
                <Tag>Key features</Tag>
                <p>{description}</p>
            </div>
            {svg}
        </div>
    );
};

export default Card;
