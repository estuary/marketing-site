import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';
import OpenHubspotModal from '../../HubSpot/OpenModal';
import { OutboundLinkFilled } from '../../OutboundLink';

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

  @media (min-width: 1025px) {
    & > :first-child {
      width: 415px;
      height: 381px;
    }
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
`;

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
`;

export const HomepageHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0;
`;

export const HomepageTitle = styled.h1`
    color: #ffffff;
    margin: 0;
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: var(--fontSize-8);
    }

    & span:nth-child(2n) {
        color: #5072eb;
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
`;

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
`;

export const HomepageHeadingButtons = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 36px;

    & button,
    a {
        white-space: nowrap;
    }

    @media (max-width: 810px) {
        margin: 0;
    }
`;

export const PrimaryButton = styled(OutboundLinkFilled)`
    padding: 16px 24px !important;

    @media (max-width: 810px) {
        width: 50%;
        padding-left: 0;
        padding-right: 0;
    }
`;

export const SecondaryButton = styled(OpenHubspotModal)`
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #5072eb;
    padding: 16px 24px;

    @media (max-width: 810px) {
        width: 50%;
        padding-left: 0;
        padding-right: 0;
    }
`;

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
`;

export const FlowAnimationPlaceholderContainer = styled.div`
    ${AnimationBaseStyling}
`;

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
`;
