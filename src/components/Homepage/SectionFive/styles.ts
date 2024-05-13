import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';
import overlayVectorLeft from "../../../images/overlay-vector-left.png";
import { OutboundLink } from '../../OutboundLink';

export const Container = styled.section`
  background-color: #04192b;
  background-image: url(${overlayVectorLeft});
  background-repeat: no-repeat;
  background-position: center -680px;
  width: 100%;
`;

export const Wrapper = styled.div`
  ${globalMaxWidth}
  ${sectionTopBottomPadding}
    
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
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
`

export const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 30px;
  color: #ffffff;
  margin: 24px 0 60px 0;
  max-width: 720px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 980px) {
    max-width: 480px;
  }
`

export const VideoWrapper = styled.div`
  padding: 18px;
  background-color: #5072EB40;
  border: 1px solid #5072EB99;
  border-radius: 24px;
  max-height: calc(523px + 18px + 18px);
  height: 100%;
  width: auto;
  position: relative;
`

export const VideoTextAndButton = styled.div`
  font-family: "Inter", sans-serif;
  position: absolute;
  font-size: 1.5rem;
  line-height: 30px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  color: #FFFFFF;
  padding: 0 60px;
  text-align: center;
  
  @media (max-width: 425px) {
    font-size: 0.875rem;
    gap: 16px;
    line-height: 18px;
  }
`

export const Button = styled(OutboundLink)`
  background-color: #5072EB;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 20px;
  color: #FFFFFF;
  border-radius: 4px;

  @media (max-width: 425px) {
    font-size: 0.875rem;
  }
`
