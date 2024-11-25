import * as React from 'react';
import { Link } from 'gatsby';
import { globalMaxWidth } from '../../globalStyles/sections.module.less';
import { links, crumbTitle, divider } from './styles.module.less';

interface Breadcrumb {
    title: string;
    href?: string;
}

interface BreadcrumbsProps {
    breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs = [] }) => (
    <nav aria-label="breadcrumb" className={globalMaxWidth}>
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
