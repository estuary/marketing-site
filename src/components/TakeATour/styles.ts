import styled from 'styled-components';

import { OutboundLink } from '../OutboundLink';

export const Container = styled.div`
  background-color: #5072eb;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999;
  display: none;
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
