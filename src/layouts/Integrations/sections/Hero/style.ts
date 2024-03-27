import styled from 'styled-components';

import Vector from '../../../../images/lp-big-query/hero/Vector.png';

export const Wrapper = styled.div`
  background-color: #f9fafc;

  @media (min-width: 1024px) {
    background-image: url(${Vector});
    background-size: cover;
    background-position: top right;
    background-repeat: no-repeat;
  }
`;

export const Container = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1280px) {
    padding: 100px 90px;
    max-width: 1580px;
    margin: 0 auto;
  }
`;

export const ContainerImage = styled.div`
  position: relative;
  margin: 0 auto;
  flex: 1;

  @media (min-width: 1024px) {
    max-width: 100%;

    > div {
      margin-left: 60px;
    }
  }
`;
