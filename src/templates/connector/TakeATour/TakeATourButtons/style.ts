import { Link } from 'gatsby';
import styled from 'styled-components';

import { OutboundLink } from '../../../../components/OutboundLink';

const BaseStyling = `
  width: fit-content;
  text-align: center;
  padding: 16px 24px;
  border-radius: 4px;
  font-weight: 500;
  line-height: 20px;
  font-size: 1rem;
  white-space: nowrap;
  
  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const Button = styled(OutboundLink)`
    ${BaseStyling}
    border: 2px solid #625eff;
    background-color: #fff;
    color: #04192b;
`;

export const ActionLink = styled<any>(Link)`
    ${BaseStyling}
    border: 2px solid #5072eb;
    background-color: #5072eb;
    color: #fff;
`;
