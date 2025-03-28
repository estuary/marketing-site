import { ReactNode, AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';
import { linkStyling } from './styles.module.less';

interface InternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
}

const InternalLink = ({ children, className, ...rest }: InternalLinkProps) => {
    return (
        <a className={clsx(linkStyling, className)} {...rest}>
            {children}
        </a>
    );
};

export default InternalLink;
