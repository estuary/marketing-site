import React from 'react';
import { OutboundLink } from '../../OutboundLink';
import InternalLink from '../../InternalLink';
import ChevronRightIcon from '../../../svgs/chevron-right.svg';

interface LinkProps {
    children: string;
    href: string;
    isExternal?: boolean;
}

const Link = ({ children, href, isExternal = false }: LinkProps) =>
    isExternal ? (
        <OutboundLink target="_blank" href={href}>
            {children}
            <ChevronRightIcon color="#5072EB" />
        </OutboundLink>
    ) : (
        <InternalLink href={href}>
            {children}
            <ChevronRightIcon color="#5072EB" />
        </InternalLink>
    );

export default Link;
