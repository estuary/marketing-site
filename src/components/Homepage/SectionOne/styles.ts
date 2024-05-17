import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';
import OpenHubspotModal from '../../HubSpot/OpenModal';
import { OutboundLink } from '../../OutboundLink';

export const AnimationBaseStyling = `
  width: 100%;

  & > :first-child {
      overflow: visible;
      max-height: 80vh;
      width: 100%;
      height: 100%;
  }

  & > :not(:first-child) {
      display: none;
  }

  @media (max-width: 810px) {
    margin-left: 0px;

    & > :first-child {
        overflow: visible;
        min-height: 14rem;
        left: unset;
        object-fit: contain !important;

        & img {
            object-fit: contain !important;
            object-position: right center;
        }
    }

    & > :not(:first-child) {
        display: none;
    }
  }
`

export const Container = styled.section`
  ${sectionTopBottomPadding}

  padding-top: 100px;
  display: flex;
  flex-direction: column;
  background-color: #04192b;
  width: 100%;

  @media (max-width: 1024px) {
    padding-top: 52px;
  }

  @media (max-width: 425px) {
    min-height: 500px;
    padding-top: 16px;
  }
`;

export const MainContent = styled.div`
  ${globalMaxWidth}

  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 1536px) {
      margin-right: 0;
      padding-right: 0;
  }

  @media (max-width: 1024px) {
      ${globalMaxWidth}
      flex-direction: column-reverse;
  }
`
export const MarqueeWrapper = styled.div`
  ${globalMaxWidth}

  height: 74px;
  width: 100%;
  display: flex;

  @media (max-width: 425px) {
      padding: 0;
      margin-top: 48px;
      margin-bottom: 40px;
  }

  .slick-slider {
      @media (min-width: 801px) {
          padding-right: 100px;
      }
      @media (max-width: 800px) {
          padding-right: 20px;
      }
  }
  .slick-slide {
      margin: 0px 10px;
      overflow: visible !important;
      max-width: 190px !important;
  }
  .slick-track {
      overflow: visible !important;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .slick-list {
      height: 80px;
  }
  .gatsby-image-wrapper {
      height: 60px !important;
      display: flex !important;
      align-items: center;
      justify-content: space-between;
  }
  .rfm-marquee,
  .rfm-initial-child-container {
      display: flex;
      align-items: center;
      gap: 120px;

      @media (max-width: 810px) {
          gap: 42px;
      }
  }
  .rfm-initial-child-container {
      padding-right: 60px;
  }
`

export const HomepageHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`

export const HomepageTitle = styled.h1`
  color: #ffffff;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: var(--fontSize-8);
  }

  & span:nth-child(2n) {
    color: #5072EB;
  }

  & span {
      line-height: 72px;
      font-weight: 600;
      font-size: 4.5rem;

      @media (max-width: 768px) {
          line-height: 43.2px;
          font-size: 2.25rem;
      }
  }
`

export const HomepageDescription = styled.p`
  margin-top: 24px;
  margin-bottom: 0;

  color: #b7c6dd;
  line-height: 30px;

  @media (min-width: 768px) {
      font-size: var(--fontSize-2);
  }

  @media (max-width: 768px) {
      margin: 20px 0;
  }
`

export const HomepageHeadingButtons = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 36px;

  & button, a {
    white-space: nowrap;
  }

  @media (max-width: 810px) {
      margin: 0;
  }
`

export const PrimaryButton = styled(OutboundLink)`
  padding: 16px 24px !important;

  @media (max-width: 810px) {
    width: 50%;
    padding-left: 0;
    padding-right: 0;
  }
`

export const SecondaryButton = styled(OpenHubspotModal)`
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #5072EB;
  padding: 16px 24px;
  
  @media (max-width: 810px) {
      width: 50%;
      padding-left: 0;
      padding-right: 0;
  }
`

export const FlowAnimationContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
  min-width: 26rem;

  @media (max-width: 1024px) {
    min-width: 20rem;
    max-width: 100%;
  }

  @media (max-width: 810px) {
    display: none;
  }
`

export const VanityLogo = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: space-between;

  div {
      height: 60px;
  }
  
  img,
  svg {
      width: 100%;
      max-width: 140px;
      height: 60px;
      opacity: 1;
      visibility: visible;
      object-fit: contain !important;
  }

  .slick-slide {
      width: 130px !important;
  }
`

export const FlowAnimationPlaceholderContainer = styled.div`
  ${AnimationBaseStyling}
`

export const MetricCardsList = styled.ul`
  ${globalMaxWidth}
  ${sectionTopBottomPadding}

  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  display: flex;
  gap: 24px;

  @media (max-width: 1116px) {
    flex-direction: column;
  }
`

export const MetricCard = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 24px;
  border: 1px solid #5072EB4D;
  border-radius: 24px;
  background-color: #0E2443;
  margin-bottom: 0;

  @media (max-width: 1116px) {
    flex-direction: row;
    justify-content: left;
  }

  @media (max-width: 345px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const MetricIconWrapper = styled.div`
  border: 2px solid #2A4589;
  border-radius: 100%;
  padding: 12px;
  height: 80px;
  max-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center
`

export const MetricsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  @media (max-width: 1116px) {
    align-items: flex-start;
  }

  @media (max-width: 345px) {
    align-items: center;
  }
`

export const MetricValue = styled.span`
  color: #625EFF;
  font-size: 2rem;
  font-weight: 700;
  line-height: 43.2px;
`

export const MetricLabel = styled.span`
  color: #FFFFFF;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 30px;
`
