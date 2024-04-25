import styled from 'styled-components';

import BackgroundImage from '../../../../../images/lp-product/TheAutomation/the-automation-bg.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 250px;
  max-width: 450px;
  flex: 1;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  @media (min-width: 1024px) {
    max-width: 100%;
    flex-direction: row;
    background-size: 700px 700px;
    gap: 100px;

    > div:first-of-type {
      align-items: end;

      > div:nth-child(2) {
        margin-right: 60px;
      }
    }

    > div:last-of-type {
      align-items: start;

      > div:nth-child(2) {
        margin-left: 60px;
      }
    }
  }

  @media (min-width: 1280px) {
    gap: 120px;

    > div:first-of-type {
      align-items: end;

      > div:nth-child(2) {
        margin-right: 120px;
      }
    }

    > div:last-of-type {
      align-items: start;

      > div:nth-child(2) {
        margin-left: 120px;
      }
    }
  }

  @media (min-width: 1400px) {
    background-size: 800px 800px;
    gap: 320px;

    > div:first-of-type {
      align-items: end;

      > div:nth-child(2) {
        margin-right: 120px;
      }
    }

    > div:last-of-type {
      align-items: start;

      > div:nth-child(2) {
        margin-left: 120px;
      }
    }
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 800px;
  flex: 1;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;
