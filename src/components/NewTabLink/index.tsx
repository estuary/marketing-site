import React, { ReactNode } from 'react';
import { linkStyling } from './styles.module.less';

interface NewTabLinkProps {
    href: string;
    children: ReactNode;
}

const NewTabLink = ({ children, href }: NewTabLinkProps) => {
    return (
        <a href={href} target="_blank" rel="noreferrer" className={linkStyling}>
            {children}
        </a>
    );
};

export default NewTabLink;
