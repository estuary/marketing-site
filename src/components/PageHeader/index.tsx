import { ReactNode } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import {
    container,
    content,
    rightContent as rightContentClass,
} from './styles.module.less';

interface Breadcrumb {
    title: string;
    href?: string;
}

interface PageHeaderProps {
    breadcrumbs: Breadcrumb[];
    rightContent?: ReactNode;
}

const PageHeader = ({ breadcrumbs, rightContent }: PageHeaderProps) => (
    <div className={container}>
        <div className={content}>
            <Breadcrumbs breadcrumbs={breadcrumbs} isInsidePageHeader={true} />
            {rightContent ? (
                <div className={rightContentClass}>{rightContent}</div>
            ) : null}
        </div>
    </div>
);

export default PageHeader;
