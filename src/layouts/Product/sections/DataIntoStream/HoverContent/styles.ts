import styled from 'styled-components';

export const FlowStepTransformHoverBlock = styled.div`
    position: absolute;
    width: 12%;
    height: 16%;
    left: 50%;
    transform: translateX(-50%);
    top: 24%;
    border-radius: 48px;
`;

export const FlowStepReplayHoverBlock = styled.div`
    position: absolute;
    width: 10%;
    height: 24%;
    left: 54%;
    top: 38.5%;
    border-radius: 48px;
`;

export const FlowStepStreamHoverBlock = styled.div`
    position: absolute;
    width: 10%;
    height: 24%;
    right: 54%;
    top: 38.5%;
    border-radius: 48px;
`;

export const FlowStepStoreHoverBlock = styled.div`
    position: absolute;
    width: 12%;
    height: 16%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 24%;
    border-radius: 48px;
`;

export const FlowStepImageWrapper = styled.div`
    position: absolute;
    left: 33%;
    top: 17.1%;
    max-width: 33.8%;
    max-height: 33.8%;
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

export const FlowStepTransformTextWrapper = styled.div`
    ${baseHoverTextWrapperStyling};
    border-color: #6ed5d6;
    color: #6ed5d6;
    left: 50%;
    transform: translateX(-50%);
    bottom: 79%;

    @media (max-width: 900px) {
        bottom: 77%;
    }
`;

export const FlowStepStreamTextWrapper = styled.div`
    ${baseHoverTextWrapperStyling};
    border-color: #5072eb;
    color: #5072eb;
    bottom: 60%;
    right: 58%;
`;

export const FlowStepReplayTextWrapper = styled.div`
    ${baseHoverTextWrapperStyling};
    border-color: #5072eb;
    color: #5072eb;
    top: 61%;
    left: 57.5%;
`;

export const FlowStepStoreTextWrapper = styled.div`
    ${baseHoverTextWrapperStyling};
    border-color: #6ed5d6;
    color: #6ed5d6;
    left: 50%;
    transform: translateX(-50%);
    top: 79%;
`;

const baseHoverTitleStyle = `
    font-size: 1rem;
    line-height: 19.2px;
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
