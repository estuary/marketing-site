import { Link } from 'gatsby';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px 20px 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (min-width: 1280px) {
    gap: 36px;
    padding: 100px 90px;
    max-width: 1920px;
    margin: 0 auto;
  }
`;

export const LineBreak = styled.span`
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  margin: 0;
  color: #47506d;
  text-align: center;

  span {
    color: #5072eb;
  }

  @media (min-width: 1280px) {
    color: #04192b;
    font-size: 60px;
    line-height: 72px;
  }
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #47506d;
  margin: 0;
  text-align: center;

  @media (min-width: 1280px) {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
  }
`;
export const Button = styled<any>(Link)`
  width: 100%;
  text-align: center;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: #5072eb;
  color: #fff;

  @media (min-width: 1024px) {
    width: fit-content;
    padding: 12px 62px;
    font-size: 16px;
  }
`;
