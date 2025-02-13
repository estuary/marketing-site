import { ReactNode } from 'react';
import LinkOutlined from '../../../LinksAndButtons/LinkOutlined';
import { successStoryLogoWrapper, container } from './styles.module.less';

type CardProps = {
    href: string;
    title: string;
    description: string;
    image: ReactNode;
};

const Card = ({ href, title, description, image }: CardProps) => {
    return (
        <div className={container}>
            <div className={successStoryLogoWrapper}>{image}</div>
            <p>{description}.</p>
            <LinkOutlined
                id={`read-button-home-page-success-stories-section-${title.replaceAll(' ', '-')}`}
                href={href}
                rel="noopener"
                aria-label={`Read success story for ${title}`}
            >
                Read
            </LinkOutlined>
        </div>
    );
};

export default Card;
