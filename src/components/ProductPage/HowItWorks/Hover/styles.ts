import Fade from '@mui/material/Fade';
import styled, { css } from 'styled-components';

type Slide = {
    $slide: number;
};

const centerHorizontally = `
    left: 50%;
    transform: translateX(-50%);
`;

const lightBlueColor = `
    border-color: #6ed5d6;
    color: #6ed5d6;
`;

const darkBlueColor = `
    border-color: #5072eb;
    color: #5072eb;
`;

const baseHoverTitleStyle = `
    font-size: 1rem;
    line-height: 19.2px;
`;

const centralizeHorizontally = `
  left: 50%;
  transform: translateX(-50%);
`;

const slideStyles = {
    1: css`
        display: grid;
        grid-template-columns: 1fr 1.5fr 1fr;
    `,
    2: css`
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        margin-right: 7.5vw;

        .connectors-groups {
            margin-left: 7.5vw;
            max-width: 25vw;

            @media (min-width: 1666px) {
                margin-left: 120px;
                max-width: 406px;
            }
        }

        @media (min-width: 1666px) {
            margin-right: 120px;
        }
    `,
    3: css`
        display: flex;
        margin-top: 1%;
    `,
    4: css`
        display: grid;
        grid-template-columns: 1.8fr 1fr;
        margin-left: 10vw;

        .connectors-groups {
            max-width: 32vw;

            @media (min-width: 1024px) {
                max-width: 320px;
            }
        }

        @media (min-width: 1666px) {
            margin-left: 160px;
        }
    `,
};

export const Container = styled.div<Slide>`
    max-width: 1200px;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 768px) {
        display: none;
    }

    .connectors-groups {
        max-width: 406px;
        display: flex;
        flex-direction: column;
        z-index: 2;
    }

    ${({ $slide }) => slideStyles[$slide] || null}
`;

const baseBlockStyling = `
    position: absolute;
    border-radius: 35%;
    z-index: 3;
`;

export const FlowStepTransformHoverBlock = styled.div<Slide>`
    ${baseBlockStyling};
    ${centralizeHorizontally};
    width: 12%;
    height: 19%;
    top: 23%;
`;

export const FlowStepReplayHoverBlock = styled.div`
    ${baseBlockStyling};
    width: 9%;
    height: 25%;
    left: 54%;
    top: 36.5%;
`;

export const FlowStepStreamHoverBlock = styled.div`
    ${baseBlockStyling};
    width: 8%;
    height: 27%;
    right: 54%;
    top: 35%;
`;

export const FlowStepStoreHoverBlock = styled.div`
    ${baseBlockStyling};
    ${centralizeHorizontally};
    width: 13%;
    height: 18%;
    bottom: 24%;
`;

export const CenterHoverBlock = styled.div`
    ${baseBlockStyling};
    ${centralizeHorizontally};
    width: 8.5%;
    height: 19%;
    top: 39%;
    border-radius: 34%;
`;

export const ImageWrapper = styled.div<Slide>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${(props) => (props.$slide === 1 ? '4.8%' : 0)};
    max-width: ${(props) => (props.$slide === 3 ? '1024px' : '100%')};
    z-index: 1;
`;

export const FlowStepImageWrapper = styled.div<Slide>`
    position: absolute;
    left: ${(props) => (props.$slide === 3 ? '32.96%' : '35.1%')};
    top: 50%;
    transform: translateY(-50%);
    width: ${(props) => (props.$slide === 3 ? '33.88%' : '30.3%')};
    margin-top: ${(props) => (props.$slide === 3 ? '0' : '1.21%')};
`;

export const HoverableBlock = styled.div`
    .tooltip {
        position: absolute;
        border: 2px solid;
        border-radius: 100px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 16px 32px;
        background-color: #ffffff;
        z-index: 1;

        @media (max-width: 1280px) {
            padding: 8px 24px;
            gap: 4px;
        }
    }
`;

export const TooltipTop = styled.div<Slide>`
    ${lightBlueColor};
    ${centerHorizontally};
    bottom: ${(props) => (props.$slide === 3 ? '79.2%' : '76%')};
    max-width: ${(props) => (props.$slide === 3 ? '280px' : '420px')};
    width: 100%;

    @media (max-width: 900px) {
        bottom: 85%;
    }
`;

export const TooltipLeft = styled.div`
    ${darkBlueColor};
    bottom: 60%;
    right: 58%;
    max-width: 280px;
`;

export const TooltipRight = styled.div`
    ${darkBlueColor};
    top: 61%;
    left: 57.5%;
    max-width: 280px;
`;

export const TooltipBottom = styled.div<Slide>`
    ${lightBlueColor};
    ${centerHorizontally};
    top: ${(props) => (props.$slide === 3 ? '79%' : '74%')};
    max-width: 280px;
`;

export const TooltipCenter = styled.div`
    ${darkBlueColor};
    ${centerHorizontally};
    top: 62%;
    max-width: 320px;
`;

export const FlowStepTitle = styled.h4`
    ${baseHoverTitleStyle};
    color: inherit;
    font-size: 1rem;
    font-weight: 600;
    line-height: 19.2px;
    margin: 0;

    @media (max-width: 1280px) {
        font-size: 0.875rem;
        line-height: 15px;
    }
`;

export const FlowStepDescription = styled.p`
    ${baseHoverTitleStyle};
    color: #47506d;
    font-size: 1rem;
    font-weight: 400;
    line-height: 19.2px;
    margin: 0;

    @media (max-width: 1280px) {
        font-size: 0.875rem;
        line-height: 16.2px;
    }
`;

export const FadeTransition = styled(Fade)`
    z-index: 3;
`;
