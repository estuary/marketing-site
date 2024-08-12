import * as React from 'react';
import {
    Container,
    Crumb,
    CurrentPageTitle,
    Divider,
    Links,
    PreviousLink,
} from './styles';

interface Breadcrumb {
    title: string;
    href?: string;
}

interface BreadcrumbsProps {
    breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs = [] }) => {
    return (
        <Container aria-label="breadcrumb">
            <Links>
                {breadcrumbs.map(({ title, href }) => (
                    <Crumb key={`breadCrumb_${href ?? title}`}>
                        {href ? (
                            <>
                                <PreviousLink to={href}>{title}</PreviousLink>
                                <Divider> / </Divider>
                            </>
                        ) : (
                            <CurrentPageTitle>{title}</CurrentPageTitle>
                        )}
                    </Crumb>
                ))}
            </Links>
        </Container>
    );
};

export default Breadcrumbs;
