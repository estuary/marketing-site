import * as React from 'react';
import { Container, Crumb, CurrentPageTitle, Divider, Links, PreviousLink } from './styles';

interface BreadcrumbsProps {
  breadcrumbs: {
    id: string
    title: string
    href?: string
  }[]
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <Container aria-label="breadcrumb">
      <Links>
        {breadcrumbs?.map((breadcrumb) => (
          <Crumb key={breadcrumb.id}>
            {breadcrumb?.href ? (
              <>
                <PreviousLink to={breadcrumb.href}>
                  {breadcrumb.title}
                </PreviousLink>
                <Divider> / </Divider>
              </>
            ) : (
              <CurrentPageTitle>{breadcrumb.title}</CurrentPageTitle>
            )}
          </Crumb>
        ))}
      </Links>
    </Container>
  )
}

export default Breadcrumbs
