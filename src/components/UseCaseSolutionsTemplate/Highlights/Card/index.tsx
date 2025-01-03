import React from 'react';
import { container } from './styles.module.less';

interface CardProps {
    highlight: string;
}

const Card = ({ highlight }: CardProps) => {
    return (
        <div className={container}>
            <span>Highlights</span>
            <p>{highlight}</p>
        </div>
    );
};

export default Card;
