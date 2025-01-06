import { ReactNode } from 'react';
import ChevronRightIcon from '../../../../svgs/chevron-right.svg';
import OutboundLink from '../../../LinksAndButtons/OutboundLink';
import { container, iconWrapper } from './styles.module.less';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    link: {
        title: string;
        href: string;
    };
}

const FeatureCard = ({ icon, title, description, link }: FeatureCardProps) => {
    return (
        <li className={container}>
            <div className={iconWrapper}>{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <OutboundLink href={link.href}>
                {link.title}
                <ChevronRightIcon height={16} />
            </OutboundLink>
        </li>
    );
};

export default FeatureCard;
