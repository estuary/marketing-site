import styled from 'styled-components';

const connectorsGroupText = `
    position: absolute;
    font-size: 1rem;
    line-height: 18px;
    font-weight: 400;
    max-width: 406px;
    background-color: #FFFFFF;
    border-radius: 100px;
    padding: 16px 16px 16px 40px;
`;

const baseConnectorsHoverBlockStyling = `
  background-color: transparent;
  width: 100%;
  min-height: 22%;
  max-width: 33.5%;
`;

export const StreamingCDCConnectorsHoverBlock = styled.div`
    ${connectorsGroupText};
    ${baseConnectorsHoverBlockStyling};
    top: 0.05%;
    left: -0.1%;
`;

export const RealTimeConnectorsHoverBlock = styled.div`
    ${connectorsGroupText};
    ${baseConnectorsHoverBlockStyling};
    top: 25.5%;
    left: -0.15%;
`;

export const BatchConnectorsHoverBlock = styled.div`
    ${connectorsGroupText};
    ${baseConnectorsHoverBlockStyling};
    top: 51.3%;
    left: -0.15%;
`;

export const SaasConnectorsHoverBlock = styled.div`
    ${connectorsGroupText};
    ${baseConnectorsHoverBlockStyling};
    top: 77.3%;
    left: 0;
`;

export const AnalyticsConnectorsHoverBlock = styled.div`
    ${connectorsGroupText};
    ${baseConnectorsHoverBlockStyling};
    top: 11.9%;
    left: 66.5%;
`;

export const OpsConnectorsHoverBlock = styled.div`
    ${connectorsGroupText};
    ${baseConnectorsHoverBlockStyling};
    top: 38.8%;
    left: 66.5%;
`;

export const AiConnectorsHoverBlock = styled.div`
    ${connectorsGroupText};
    ${baseConnectorsHoverBlockStyling};
    top: 65.2%;
    left: 66.5%;
`;

export const ConnectorsGroupImageWrapper = styled.div`
    position: absolute;
    top: 0.2%;
    left: 0.3%;
`;
