import styled from 'styled-components';
import ExtractIcon from "../../../svgs/extract.svg";
import RealTimeDelivery from "../../../svgs/real-time-delivery.svg";
import StoreAndTransformIcon from "../../../svgs/store-and-transform.svg";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: calc(min(9%, 146px));
  padding-right: calc(min(9%, 146px));
  margin: 100px 0;

  @media (max-width: 810px) {
    margin: auto;
    width: 100%;
    padding: 40px 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 810px) {
    margin: 16px;
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 48px;
  text-align: center;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 810px) {
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 33.6px;
    text-align: left;
  }
`

export const ColoredText = styled.span`
  color: #5072eb;
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
  max-width: 75%;
  margin: 24px 0 0 0;

  @media (max-width: 810px) {
    font-size: 1rem;
    text-align: left;
    margin-right: auto;
  }
`

export const Steps = styled.div`
  display: flex;
  gap: 54px;

  & > div:nth-child(2) {
    margin-top: 57px;
  }

  & > div:nth-child(3) {
    margin-right: 32px;
  }

  @media (max-width: 1460px) {
    gap: 64px;
  }

  @media (max-width: 1304px) {
    gap: 74px;
  }

  @media (max-width: 1188px) {
    flex-direction: column;
    margin-right: 24px;
    gap: 17px;

    & > div:nth-child(2) {
      margin-top: 0;
    }
    
    & > div:nth-child(3) {
      margin-right: 0;
    }
  }

  @media (max-width: 810px) {
    margin-right: 32px;
  }

  @media (max-width: 440px) {
    margin-right: 54px;
  }

  @media (max-width: 358px) {
    margin-right: 0;
  }
`

const lineBaseStyling = `
  content: "";
  position: absolute;
  right: -12px;
  height: 64px;
  width: 4px;
  border-right: 4px dotted #D7DCE5;

  @media (max-width: 1830px) {
    right: -14px;
    height: 78px;
  }

  @media (max-width: 1495px) {
    right: -20px;
    height: 92px;
  }

  @media (max-width: 1460px) {
    right: -20px;
    height: 104px;
  }

  @media (max-width: 1276px) {
    right: -26px;
    height: 118px;
  }

  @media (max-width: 1188px) {
    right: -10px;
    height: 60px;
  }

  @media (max-width: 810px) {
    right: -12px;
    height: 62px;
  }

  @media (max-width: 538px) {
    right: -16px;
    height: 77px;
  }

  @media (max-width: 446px) {
    right: -20px;
    height: 88px;
  }

  @media (max-width: 399px) {
    right: -22px;
    height: 98px;
  }

  @media (max-width: 382px) {
    right: -25px;
    height: 119px;
  }

  @media (max-width: 358px) {
    display: none;
  }
`

export const Step = styled.div`
  display: flex;
  gap: 16px;
  width: 33%;
  height: 132px;
  border: 4px dotted #D7DCE5;
  border-radius: 16px;
  padding: 16px;
  padding-right: 2px;
  position: relative;
  border-right: none;

  @media (max-width: 1830px) {
    height: 160px;
  }

  @media (max-width: 1495px) {
    height: 190px;
  }

  @media (max-width: 1460px) {
    height: 210px;
  }

  @media (max-width: 1276px) {
    height: 240px;
  }

  @media (max-width: 1188px) {
    width: 100%;
    height: 128px;
  }

  @media (max-width: 810px) {
    height: 130px;
  }

  @media (max-width: 538px) {
    height: 160px;
  }

  @media (max-width: 446px) {
    height: 180px;
  }

  @media (max-width: 399px) {
    height: 200px;
  }

  @media (max-width: 382px) {
    height: 240px;
  }

  @media (max-width: 358px) {
    height: fit-content;
    border-right: 4px dotted #D7DCE5;
    padding-right: 16px;
  }

  &::after {
    ${lineBaseStyling}
    transform: rotate(-25deg);
    top: 0;
  }

  &::before {
    ${lineBaseStyling}
    transform: rotate(25deg);
    bottom: 0;
  }
`;

export const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 24px;
  color: #47506D;
  text-transform: uppercase;
  margin: 0;

  span {
    color: #625EFF;
    margin-right: 16px;

    @media (max-width: 810px) {
      margin-right: 12px;  
    }
  }

  @media (max-width: 810px) {
    font-size: 1rem;
    line-height: 19.2px;
  }
`;

export const StepDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 30px;
  color: #47506D;
  margin: 12px 0 0 0;
`;

export const StepIcon = styled.div`
  border: 1px solid #D7DCE5;
  border-radius: 8px;
  padding: 12px;
  height: fit-content;
`

const IconBaseStyling = `
  display: block;
`

export const StepOneIcon = styled(ExtractIcon)`
  ${IconBaseStyling}
`

export const StepTwoIcon = styled(StoreAndTransformIcon)`
  ${IconBaseStyling}
`

export const StepThreeIcon = styled(RealTimeDelivery)`
  ${IconBaseStyling}
`

export const FlowImageWrapper = styled.div`
  margin: auto;
`
