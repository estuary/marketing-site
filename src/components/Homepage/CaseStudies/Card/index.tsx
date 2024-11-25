import * as React from 'react';
import LinkOutlined from '../../../LinksAndButtons/LinkOutlined';
import { caseStudyLogoWrapper, container } from './styles.module.less';

type CardProps = {
    href: string;
    title: string;
    description: string;
    image: React.ReactNode;
};

const Card = ({ href, title, description, image }: CardProps) => {
    return (
        <div className={container}>
            <div className={caseStudyLogoWrapper}>{image}</div>
            <p>{description}.</p>
            <LinkOutlined
                href={href}
                rel="noopener"
                aria-label={`Read case study for ${title}`}
            >
                Read
            </LinkOutlined>
        </div>
    );
};

export default Card;
