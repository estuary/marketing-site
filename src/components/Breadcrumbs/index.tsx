import * as React from 'react'
import { Container, Crumb, CurrentPageTitle, Divider, Links, PreviousLink } from './styles'

interface Breadcrumb {
  id: string
  title: string
  href?: string
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs = [] }) => {
  return (
    <Container aria-label="breadcrumb">
      <Links>
        {breadcrumbs.map(({ id, title, href }) => (
          <Crumb key={id}>
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
  )
}

export default Breadcrumbs
