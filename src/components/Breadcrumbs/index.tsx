import { Link } from 'gatsby';
import { FC } from 'react';
import { links, crumbTitle, divider, container } from './styles.module.less';

interface Breadcrumb {
    title: string;
    href?: string;
}

interface BreadcrumbsProps {
    breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs = [] }) => (
    <nav aria-label="breadcrumb" className={container}>
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
