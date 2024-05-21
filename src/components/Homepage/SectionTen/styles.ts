import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';
import overlayVectorRightWhite from "../../../images/overlay-vector-right-white.png";
import OpenHubspotModal from "../../HubSpot/OpenModal";
import { OutboundLinkFilled, OutboundLinkOutlined } from "../../OutboundLink";

export const Container = styled.section`
  background-color: #FDFDFE;
  background-image: url(${overlayVectorRightWhite});
  background-repeat: no-repeat;
  background-position: center;
`;

export const Wrapper = styled.div`
  ${globalMaxWidth}
  ${sectionTopBottomPadding}
    
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 48px;

  @media (max-width: 1024px) {
    flex-direction: column; 
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    gap: 24px;
  }

  @media (max-width: 425px) {
    gap: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  line-height: 89.6px;
  margin: 0;
  text-transform: uppercase;
  max-width: 1072px;
  text-align: center;
  color: #47506D;
  
  & span:nth-child(odd) {
    color: #5072EB;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
    line-height: 43.2px;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
    line-height: 36px;
  }
`

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100%;
  }
`

const BaseButtonStyling = `
  min-width: 176px;
  width: 100%;
  padding: 16px 24px;
`

export const ButtonFilled = styled(OutboundLinkFilled)`
  ${BaseButtonStyling}
`

export const ButtonOutlined = styled(OutboundLinkOutlined)`
  ${BaseButtonStyling}
`

export const HubspotButton = styled(OpenHubspotModal)`
  ${BaseButtonStyling}
`
