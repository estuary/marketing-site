import { Link } from 'gatsby';
import { FC } from 'react';
import clsx from 'clsx';
import {
    links,
    crumbTitle,
    divider,
    container,
    containerInsidePageHeader,
} from './styles.module.less';

interface Breadcrumb {
    title: string;
    href?: string;
}

interface BreadcrumbsProps {
    breadcrumbs: Breadcrumb[];
    isInsidePageHeader?: boolean;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({
    breadcrumbs = [],
    isInsidePageHeader = false,
}) => (
    <nav
        aria-label="breadcrumb"
        className={clsx(
            isInsidePageHeader ? containerInsidePageHeader : container
        )}
    >
        <ol className={links}>
            {breadcrumbs.map(({ title, href }) => (
                <li key={`breadCrumb_${href ?? title}`}>
                    {href ? (
                        <>
                            <Link to={href}>{title}</Link>
                            <span className={divider}> / </span>
                        </>
                    ) : (
                        <span className={crumbTitle}>{title}</span>
                    )}
                </li>
            ))}
        </ol>
    </nav>
);

export default Breadcrumbs;
