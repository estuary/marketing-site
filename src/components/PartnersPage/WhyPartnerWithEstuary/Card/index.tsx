import React, { ReactNode } from 'react';
import { container } from './styles.module.less';

interface CardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

const Card = ({ icon, title, description }: CardProps) => (
    <div className={container}>
        <div>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export default Card;
