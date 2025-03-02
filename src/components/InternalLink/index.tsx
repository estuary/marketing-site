import { ReactNode } from 'react';
import { linkStyling } from './styles.module.less';

interface InternalLinkProps {
    id?: string;
    href: string;
    children: ReactNode;
}

const InternalLink = ({ id, children, href }: InternalLinkProps) => {
    return (
        <a id={id} href={href} className={linkStyling}>
            {children}
        </a>
    );
};

export default InternalLink;
