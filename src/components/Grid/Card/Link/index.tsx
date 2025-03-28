import { ReactNode } from 'react';
import { Link } from 'gatsby';
import { CardProps } from '../shared';

interface LinkProps {
    children: ReactNode;
    target?: string;
    data: CardProps['data'];
    commonLinkProps: {
        id: string;
        className: string;
    };
}

const CardLink = ({ children, target, data, commonLinkProps }: LinkProps) => {
    if (target === '_blank') {
        return (
            <a href={data.slug} target={target} {...commonLinkProps}>
                {children}
            </a>
        );
    }

    return (
        <Link to={data.slug} {...commonLinkProps}>
            {children}
        </Link>
    );
};

export default CardLink;
