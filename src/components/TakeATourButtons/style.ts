import { Link } from 'gatsby';
import styled from 'styled-components';

import { OutboundLink } from '../../components/OutboundLink';

export const Button = styled(OutboundLink)`
  width: 100%;
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
  padding: 12px 24px;
  border: 2px solid #625eff;
  background-color: #fff;
  color: #04192b;

  @media (min-width: 1280px) {
    width: fit-content;
    padding: 12px 62px;
    font-size: 16px;
  }
`;

export const ActionLink = styled<any>(Link)`
  width: 100%;
  text-align: center;
  border-radius: 4px;
  padding: 12px 16px;
  border: 2px solid #5072eb;
  background-color: #5072eb;
  font-size: 16px;
  font-weight: 500;
  color: #fff;

  @media (min-width: 1024px) {
    width: fit-content;
    padding: 12px 24px;
    font-size: 16px;
  }
`;
