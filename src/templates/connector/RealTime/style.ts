import styled from 'styled-components';

import { OutboundLink } from '../../../components/OutboundLink';

import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';
import vectorBackgroundImage from '../../../images/lp-connector/real-time/Vector.png';

export const Wrapper = styled.section`
  ${sectionTopBottomPadding}
  ${globalMaxWidth}
`;

export const Container = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 24px;
  background-image: url(${vectorBackgroundImage});
  background-size: cover;
  background-position: top right -150px;
  background-repeat: no-repeat;
  background-color: #04192b;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    min-height: 400px;
  }

  @media (max-width: 1024px) {
    background-position: top right -1000px;
  }

  @media (min-width: 1280px) {
    padding: 48px 90px;
  }

  @media (max-width: 425px) {
    background-position: top right -1400px;
  }
`;

export const ContainerImage = styled.div`
  position: relative;
  flex: 1;
  max-width: 335px;
  margin: 0 auto;
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    max-width: 100%;

    > div {
      margin-left: 60px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  flex: 1;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  margin: 0;
  color: #fff;

  span {
    color: #5072eb;
  }

  @media (min-width: 1280px) {
    font-size: 60px;
    line-height: 72px;
  }
`;

export const Button = styled(OutboundLink)`
  width: 100%;
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
  padding: 12px 24px;
  border: 2px solid #625eff;
  background-color: #5072eb;
  color: #fff;

  @media (min-width: 1280px) {
    width: 189px;
    font-size: 16px;
  }
`;
