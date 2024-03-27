import styled from 'styled-components';

import VectorImage from '../../../../images/lp-big-query/take-a-tour/background.png';

export const Wrapper = styled.div`
  background-color: #f9fafc;
`;

export const Container = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1280px) {
    padding: 100px 90px;
    max-width: 1920px;
    margin: 0 auto;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-image: url(${VectorImage});
  background-position: center center;
  background-repeat: no-repeat;

  @media (min-width: 1024px) {
    height: 480px;
  }
`;

export const ContainerImage = styled.div``;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  @media (min-width: 1280px) {
    display: flex;
    justify-content: left;
    gap: 60px;
  }
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  margin: 0;

  @media (min-width: 1280px) {
    font-size: 60px;
    line-height: 72px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  margin: 0;

  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1280px) {
    gap: 24px;
    flex-direction: row;
    margin-top: 20px;
  }
`;
