import { FormControl, MenuItem } from '@mui/material';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1080px) {
    flex-direction: row;
  }

  @media (max-width: 734px) {
    width: 100%;
  }
`;

export const Form = styled(FormControl)`
  width: 262px;
  height: 52px;

  @media (max-width: 734px) {
    width: 100%;
  }
`;

export const Menu = styled(MenuItem)`
  align-items: start;
`;

export const Image = styled(GatsbyImage)`
  width: 20px;
  margin-right: 15px;
  vertical-align: middle;
`;

export const Button = styled<any>(Link)`
  display: block;
  width: 100%;
  text-align: center;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: #5072eb;
  color: #fff;

  @media (min-width: 1024px) {
    padding: 16px 24px;
    max-width: 100px;
    font-size: 16px;
  }
`;
