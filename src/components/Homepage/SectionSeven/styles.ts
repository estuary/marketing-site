import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';
import overlayVectorRight from "../../../images/overlay-vector-right.png";

export const Container = styled.section`
  background-color: #04192b;
  background-image: url(${overlayVectorRight});
  background-repeat: no-repeat;
  background-position: center -520px;
  width: 100%;
`;

export const Wrapper = styled.div`
  ${globalMaxWidth}
  ${sectionTopBottomPadding}

  padding-right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 425px) {
    padding-right: 0;
  }
`;

export const Title = styled.h2`
  ${globalMaxWidth}

  padding-left: 0;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 48px;
  color: #5072EB;
  text-transform: uppercase;
  margin: 0;

  span {
    color: #FFFFFF;
  }

  @media (max-width: 425px) {
    padding-left: 0;
    padding-right: 20px;
    font-size: 1.75rem;
    line-height: 33.6px;
  }
`

export const Description = styled.p`
  ${globalMaxWidth}

  padding-left: 0;
  width: 100%;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 30px;
  color: #ffffff;
  margin: 24px 0 60px 0;
  max-width: 940px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    padding-left: 0;
    padding-right: 20px;
    font-size: 1rem;
    line-height: 30px;
    margin: 16px 0 40px 0;
  }
`

export const ConnectorsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 60px;
  overflow-x: auto;
  scroll-behavior: smooth;
  max-width: 100%;
  margin: 0;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    gap: 24px;
  }

  @media (max-width: 1350px) {
      padding-right: 20px;
    }

  @media (min-width: 1350px) {
    margin-right: 100px;
  }

  @media (min-width: 1500px) {
    margin-right: 160px;
  }

`

export const ConnectorIconWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  border: 1px solid #5072EB7A;
  border-radius: 24px;
  background-color: #0E2443;
  min-width: 120px;
  width: 120px;
  height: 120px;
  margin: auto;
`
