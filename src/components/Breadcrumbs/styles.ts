import { Link } from 'gatsby';
import styled from 'styled-components';

export const Container = styled.nav``

export const Links = styled.ol`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  line-height: 28.8px;
  list-style-type: none;
  margin: 0;

  li {
    display: inline-block;
    margin: 0;
  }
`

export const PreviousLink = styled(Link)`
  color: #47506D;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`

export const CurrentPageTitle = styled.span`
  color: #5072EB;
  font-weight: 600;
`

export const Divider = styled.span`
  margin: 0 16px;
`

export const Crumb = styled.li`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 160px);
`
