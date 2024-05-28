import styled from 'styled-components';

import { OutboundLink } from '../OutboundLink';

export const Container = styled.div`
  background-color: #5072eb;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 700;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const Link = styled(OutboundLink)`
  font-size: 12px;
  text-decoration-line: underline;
  color: #fff;
`;
