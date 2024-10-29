import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';

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
