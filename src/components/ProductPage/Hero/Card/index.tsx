import clsx from 'clsx';
import { ReactNode } from 'react';
import ChevronRightIcon from '../../../../svgs/chevron-right.svg';
import OutboundLink from '../../../LinksAndButtons/OutboundLink';
import {
    container,
    textWrapper,
    activeCard,
    iconWrapper,
    activeIconWrapper,
    chevronIconWrapper,
} from './styles.module.less';

type CardProps = {
    title: string;
    description: string;
    icon: ReactNode;
    href: string;
    isActive?: boolean;
    buttonId: string;
};

const Card = ({
    title,
    description,
    icon,
    href,
    isActive = false,
    buttonId,
}: CardProps) => (
    <OutboundLink
        id={buttonId}
        href={href}
        target="_blank"
        className={clsx(container, isActive ? activeCard : null)}
    >
        <div className={clsx(iconWrapper, isActive ? activeIconWrapper : null)}>
            {icon}
        </div>
        <div className={textWrapper}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className={chevronIconWrapper}>
            <ChevronRightIcon width={32} color="var(--white)" />
        </div>
    </OutboundLink>
);

export default Card;
