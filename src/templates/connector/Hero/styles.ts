import styled, { CSSProperties } from 'styled-components';

import { ConnectorType } from '../../../../shared';
import Vector from '../../../images/lp-connector/hero/Vector.png';

export const Wrapper = styled.section`
  background-color: #f9fafc;

  @media (min-width: 1024px) {
    background-image: url(${Vector});
    background-size: cover;
    background-position: top -32px right;
    background-repeat: no-repeat;
  }
`;

export const Container = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 60px;

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
`;

export const LogoContainer = styled.div<{ $connectorType: ConnectorType }>`
  position: absolute;
  z-index: 1;
  top: ${({ $connectorType }) => $connectorType === "capture" ? "33%" : "31%"};
  right: ${({ $connectorType }) => $connectorType === "capture" ? "77%" : "11%"};
  width: 12%;
  max-width: 90px;
  height: auto;

  @media (max-width: 1023px) {
    width: 10%;
    top: ${({ $connectorType }) => $connectorType === "capture" ? "29%" : "27%"};
    right: ${({ $connectorType }) => $connectorType === "capture" ? "78.5%" : "12%"};
  }
`;

export const FrameContainer = styled.div`
  position: relative;
  flex: 1;

  @media (max-width: 1023px) {
    padding-bottom: 10%;
  }
`;

export const logoImageStyle: CSSProperties = {
  width: '100%',
  height: 'auto',
}

const TextBaseStyling = styled.span`
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  line-height: 19.2px;
  position: absolute;
  z-index: 1;
  text-align: center;
  color: #47506D;
  width: 100%;
  max-width: 150px;
  height: auto;

  span {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    color: #5072EB;

    @media (max-width: 1280px) {
      font-size: 0.875rem;
    }
  
    @media (max-width: 1023px) {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 1280px) {
    max-width: 140px;
    font-size: 0.875rem;
  }

  @media (max-width: 1024px) {
    max-width: 100px;
    font-size: 0.75rem;
    line-height: 16px;
  }
`

export const FlowStepOne = styled(TextBaseStyling)`
  top: 100%;
  left: 5%;

  @media (max-width: 1180px) {
    left: 2%;
  }

  @media (max-width: 1023px) {
    top: 80%;
    left: 11%;
  }

  @media (max-width: 768px) {
    left: 9%;
  }

  @media (max-width: 520px) {
    left: 6%;
  }

  @media (max-width: 424px) {
    left: -1%;
  }
`

export const FlowStepTwo = styled(TextBaseStyling)`
  top: 105%;
  left: 39%;

  @media (max-width: 1180px) {
    left: 36%;
  }

  @media (max-width: 1023px) {
    top: 85%;
    left: 44%;
  }

  @media (max-width: 768px) {
    left: 42%;
  }

  @media (max-width: 520px) {
    left: 39%;
  }

  @media (max-width: 425px) {
    left: 35%;
  }
`

export const FlowStepThree = styled(TextBaseStyling)`
  top: 97%;
  left: 72%;

  @media (max-width: 1180px) {
    left: 70%;
  }

  @media (max-width: 1023px) {
    top: 78%;
    left: 77.5%;
  }

  @media (max-width: 768px) {
    left: 75.5%;
  }

  @media (max-width: 520px) {
    left: 72%;
  }

  @media (max-width: 425px) {
    left: 70%;
  }
`;
