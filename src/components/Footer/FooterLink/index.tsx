import { Link } from 'gatsby';
import React, { ReactNode } from 'react';
import OutboundLink from '../../LinksAndButtons/OutboundLink';
import { globalFooterRightLink } from '../styles.module.less';

interface FooterLinkProps {
    to: string;
    children: ReactNode;
    ariaLabel?: string;
}

const FooterLink = ({ to, children, ariaLabel }: FooterLinkProps) => {
    const LinkElement: any = to.startsWith('/') ? Link : OutboundLink;
    const linkProps = to.startsWith('/')
        ? { to }
        : { href: to, target: '_blank' };

    return (
        <LinkElement
            {...linkProps}
            className={globalFooterRightLink}
            aria-label={ariaLabel}
        >
            {children}
        </LinkElement>
    );
};

export default FooterLink;
