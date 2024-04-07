import styled from 'styled-components';

import Vector from '../../../../../../images/lp-big-query/change-data/background.png';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 219px;
  margin: 0 auto;
  max-width: 450px;
  flex: 1;

  background-image: url(${Vector});
  background-position: center 67%;
  background-size: 80%;
  background-repeat: no-repeat;

  @media (min-width: 1280px) {
    background-size: 50%;
  }

  @media (min-width: 1024px) {
    max-width: 100%;
    flex-direction: column-reverse;
    gap: 100px;
  }

  @media (min-width: 1280px) {
    gap: 120px;
  }

  @media (min-width: 1400px) {
    gap: 158px;
    background-position: center center;
  }
`;

export const ContainerCards: any = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: ${({ $reverseDesktop }: any) => ($reverseDesktop ? 'column' : 'row')};
    justify-content: space-around;

    > div:nth-child(2) {
      position: relative;
      top: 50px;
    }
  }
`;
