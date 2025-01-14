import Chevron from '@mui/icons-material/ChevronRight';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { useState, useEffect, ReactNode, HTMLAttributes } from 'react';
import { hideOnMobile, seeAllButton } from '../styles.module.less';
import OutboundLink from '../../LinksAndButtons/OutboundLink';
import {
    cardItem,
    iconWrapper,
    contentWrapper,
    cardTitle,
    content,
    headerChevronIcon,
    contentFooter,
} from './styles.module.less';

interface Item {
    name: string;
    description?: string;
    to: string;
    Image?: () => JSX.Element;
}

const ItemLink = ({ name, description, Image, to }: Item) => {
    const LinkElement: any = to.startsWith('/') ? Link : OutboundLink;
    const linkProps = to.startsWith('/')
        ? { to }
        : { href: to, target: '_blank' };

    return (
        <LinkElement {...linkProps} aria-label={`Read content of ${name}`}>
            <div className={cardItem}>
                {Image ? (
                    <div className={iconWrapper}>
                        <Image />
                    </div>
                ) : null}
                <div className={contentWrapper}>
                    <div>
                        <span>{name}</span>
                        {description ? (
                            <p className={hideOnMobile}>{description}</p>
                        ) : null}
                    </div>
                    <Chevron className={headerChevronIcon} fontSize="small" />
                </div>
            </div>
        </LinkElement>
    );
};

interface HeaderCardItemProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    items?: Item[];
    children?: ReactNode;
    onlyContent?: boolean;
    active?: boolean;
    contentFooterLink?: ReactNode;
    hasSeeMoreButton?: boolean;
    maxNumberOfLinks?: number;
}

const HeaderCardItem = ({
    title,
    items = [],
    children,
    onlyContent,
    active,
    contentFooterLink,
    hasSeeMoreButton = false,
    maxNumberOfLinks = 4,
    ...props
}: HeaderCardItemProps) => {
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        setShowAll(false);
    }, [active]);

    const handleSeeAllButtonClick = () => {
        setShowAll(!showAll);
    };

    return (
        <div {...props}>
            <span
                className={clsx(cardTitle, onlyContent ? hideOnMobile : null)}
            >
                {title}
                {hasSeeMoreButton && items.length > maxNumberOfLinks ? (
                    <button
                        className={seeAllButton}
                        onClick={handleSeeAllButtonClick}
                    >
                        See {showAll ? 'less' : 'more'}
                    </button>
                ) : null}
            </span>
            <div className={content}>
                {items
                    .slice(0, showAll ? items.length : maxNumberOfLinks)
                    .map((item, index) => (
                        <ItemLink key={index} {...item} />
                    ))}
                {children}
                <div className={contentFooter}>{contentFooterLink}</div>
            </div>
        </div>
    );
};

export default HeaderCardItem;
