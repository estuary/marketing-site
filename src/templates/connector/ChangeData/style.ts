import styled from 'styled-components';
import { globalMaxWidth, globalSidePadding, sectionTopBottomPadding } from '../../../globalStyles';

export const Wrapper = styled.section`
  ${globalSidePadding}
  ${sectionTopBottomPadding}
`

export const Container = styled.div`
  ${globalMaxWidth}

  display: flex;
  flex-direction: column-reverse;
  gap: 40px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1280px) {
    gap: 60px;
  }
`;

export const ContainerImage = styled.div`
  flex: 1;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  @media (min-width: 1280px) {
    gap: 40px;
  }

  @media (max-width: 1280px) {
    flex: 0.7;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  margin: 0;
  color: #04192b;

  span {
    color: #5072eb;
  }

  @media (min-width: 1280px) {
    font-weight: 700;
    font-size: 36px;
    line-height: 50px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #47506d;
  margin: 0;

  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const Observation = styled.p`
  display: none;
  font-weight: 400;
  font-size: 16px;
  color: #47506d;
  line-height: 30px;
  text-underline-offset: 5px;
  margin: 0;

  a {
    color: #5072eb;
    font-weight: 500;
    text-decoration: underline;
  }

  @media (min-width: 425px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 8px;
    font-size: 16px;
  }
`;

export const Topics = styled.ul`
  list-style-type: none;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1280px) {
    gap: 24px;
  }
`;

export const Topic = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  margin: 0;
  color: #47506d;
  display: flex;
  align-items: start;
  gap: 20px;

  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

export const LineBreak = styled.span`
  @media (min-width: 1024px) {
    display: block;
  }
`;
