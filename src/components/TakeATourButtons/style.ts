import { Link } from 'gatsby';
import styled from 'styled-components';

import { OutboundLink } from '../../components/OutboundLink';

export const Button = styled(OutboundLink)`
  width: fit-content;
  text-align: center;
  padding: 16px 24px;
  border: 2px solid #625eff;
  border-radius: 4px;
  background-color: #fff;
  color: #04192b;
  font-weight: 500;
  line-height: 20px;
  font-size: 1rem;
  white-space: nowrap;
  
  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const ActionLink = styled<any>(Link)`
  width: fit-content;
  text-align: center;
  padding: 16px 24px;
  border: 2px solid #5072eb;
  border-radius: 4px;
  background-color: #5072eb;
  color: #fff;
  font-weight: 500;
  line-height: 20px;
  font-size: 1rem;
  white-space: nowrap;

  @media (max-width: 1280px) {
    width: 100%;
  }
`;
