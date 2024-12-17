import * as React from 'react';
import { caseStudyLogoWrapper, container } from './styles.module.less';

type CardProps = {
    name: string;
    description: string;
    avatar: React.ReactNode;
};

const Card = ({ name, description, avatar }: CardProps) => {
    return (
        <div className={container}>
            <div className={caseStudyLogoWrapper}>{avatar}</div>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
