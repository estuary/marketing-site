import Chevron from '@mui/icons-material/ChevronRight';
import { Link } from 'gatsby';
import * as React from 'react';
import clsx from 'clsx';
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

const ItemLink = ({ name, description, Image, to }) => {
    const LinkElement: any = to[0] === '/' ? Link : OutboundLink;
    const linkProps = to[0] === '/' ? { to } : { href: to, target: '_blank' };

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

const HeaderCardItem = ({
    title,
    items = [],
    children,
    onlyContent,
    active,
    contentFooterLink,
    ...props
}: any) => {
    const [showAll, setShowAll] = React.useState(false);

    React.useEffect(() => {
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
                {items.length > 4 ? (
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
                    .slice(0, showAll ? items.length : 4)
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
