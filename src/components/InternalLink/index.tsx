import React, { ReactNode } from 'react';
import { linkStyling } from './styles.module.less';

interface InternalLinkProps {
    href: string;
    children: ReactNode;
}

const InternalLink = ({ children, href }: InternalLinkProps) => {
    return (
        <a href={href} className={linkStyling}>
            {children}
        </a>
    );
};

export default InternalLink;
