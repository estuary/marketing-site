import styled from 'styled-components';

const centerHorizontally = `
    left: 50%;
    transform: translateX(-50%);
`;

const baseHoverTextWrapperStyling = `
    position: absolute;
    z-index: 2;
    border: 2px solid;
    border-radius: 100px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px 32px;
    background-color: #FFFFFF;
    max-width: 280px;

    @media (max-width: 1280px) {
        padding: 8px 24px;
        gap: 4px;
    }
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

export const FlowStepImageWrapper = styled.div<{ $slide: number }>`
    position: absolute;
    left: ${(props) => (props.$slide === 2 ? '33%' : '30.06%')};
    top: ${(props) => (props.$slide === 2 ? '17.1%' : '11.05%')};
    max-width: ${(props) => (props.$slide === 2 ? '33.8%' : '40%')};
    max-height: ${(props) => (props.$slide === 2 ? '33.8%' : '40%')};
`;

export const TooltipTop = styled.div<{ $slide: number }>`
    ${baseHoverTextWrapperStyling};
    ${lightBlueColor};
    ${centerHorizontally};
    bottom: 79%;
    max-width: ${(props) => (props.$slide === 2 ? '280px' : '420px')};
    width: 100%;

    @media (max-width: 900px) {
        bottom: 77%;
    }
`;

export const TooltipLeft = styled.div<{ $slide: number }>`
    ${baseHoverTextWrapperStyling};
    ${darkBlueColor};
    bottom: 60%;
    right: ${(props) => (props.$slide === 2 ? '58%' : '60.5%')};
`;

export const TooltipRight = styled.div`
    ${baseHoverTextWrapperStyling};
    ${darkBlueColor};
    top: 61%;
    left: 57.5%;
`;

export const TooltipBottom = styled.div`
    ${baseHoverTextWrapperStyling};
    ${lightBlueColor};
    ${centerHorizontally};
    top: 79%;
`;

export const TooltipCenter = styled.div`
    ${baseHoverTextWrapperStyling};
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
