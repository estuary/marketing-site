import { Link } from 'gatsby';
import { ReactNode } from 'react';
import OutboundLink from '../../LinksAndButtons/OutboundLink';
import { globalFooterRightLink } from '../styles.module.less';

interface FooterLinkProps {
    to: string;
    children: ReactNode;
    ariaLabel?: string;
    id: string | undefined; // Only the `data-request` links should use undefined
}

const FooterLink = ({ to, children, ariaLabel, id }: FooterLinkProps) => {
    const LinkElement: any = to.startsWith('/') ? Link : OutboundLink;
    const linkProps = to.startsWith('/')
        ? { to }
        : { href: to, target: '_blank' };

    return (
        <LinkElement
            id={id}
            {...linkProps}
            className={globalFooterRightLink}
            aria-label={ariaLabel}
        >
            {children}
        </LinkElement>
    );
};

export default FooterLink;
