import styled from 'styled-components';

const centralizeHorizontally = `
  left: 50%;
  transform: translateX(-50%);
`;

export const Container = styled.div`
    position: relative;
    z-index: 1;
    max-width: 1216px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const baseBlockStyling = `
    position: absolute;
    border-radius: 48px;
`;

export const FlowStepTransformHoverBlock = styled.div`
    ${baseBlockStyling};
    ${centralizeHorizontally};
    width: 13%;
    height: 19%;
    top: 24%;
`;

export const FlowStepReplayHoverBlock = styled.div`
    ${baseBlockStyling};
    width: 10%;
    height: 24%;
    left: 54%;
    top: 38.5%;
`;

export const FlowStepStreamHoverBlock = styled.div`
    ${baseBlockStyling};
    width: 10%;
    height: 24%;
    right: 54%;
    top: 38.5%;
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
    width: 9%;
    height: 18%;
    top: 41%;
    border-radius: 20%;
`;
