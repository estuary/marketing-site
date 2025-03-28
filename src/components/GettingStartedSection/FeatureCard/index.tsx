import { ReactNode } from 'react';
import clsx from 'clsx';
import ChevronRightIcon from '../../../svgs/chevron-right.svg';
import OutboundLink from '../../LinksAndButtons/OutboundLink';
import { container, darkContainer, iconWrapper } from './styles.module.less';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    link: {
        id: string;
        title: string;
        href: string;
    };
    isDarkTheme?: boolean;
}

const FeatureCard = ({
    icon,
    title,
    description,
    link,
    isDarkTheme = false,
}: FeatureCardProps) => {
    return (
        <li className={clsx(container, isDarkTheme ? darkContainer : null)}>
            <div className={iconWrapper}>{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <OutboundLink id={link.id} href={link.href}>
                {link.title}
                <ChevronRightIcon height={16} />
            </OutboundLink>
        </li>
    );
};

export default FeatureCard;
