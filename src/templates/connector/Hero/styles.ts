import styled, { CSSProperties } from 'styled-components';

import { ConnectorType } from '../../../../shared';
import { globalMaxWidth } from '../../../globalStyles';

export const Container = styled.div`
    ${globalMaxWidth}

    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const ContainerImage = styled.div`
    position: relative;
    margin: 0 auto;
    flex: 1;
`;

export const LogoContainer = styled.div<{ $connectorType: ConnectorType }>`
    position: absolute;
    z-index: 1;
    top: ${({ $connectorType }) =>
        $connectorType === 'capture' ? '33%' : '31%'};
    right: ${({ $connectorType }) =>
        $connectorType === 'capture' ? '77%' : '11%'};
    width: 12%;
    max-width: 90px;
    height: auto;

    @media (max-width: 1023px) {
        width: 10%;
        top: ${({ $connectorType }) =>
            $connectorType === 'capture' ? '29%' : '27%'};
        right: ${({ $connectorType }) =>
            $connectorType === 'capture' ? '78.5%' : '12%'};
    }
`;

export const FrameContainer = styled.div`
    position: relative;
    flex: 1;

    @media (max-width: 1023px) {
        padding-bottom: 10%;
    }
`;

export const logoImageStyle: CSSProperties = {
    width: '100%',
    height: 'auto',
};

const TextBaseStyling = styled.span`
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;
    line-height: 19.2px;
    position: absolute;
    z-index: 1;
    text-align: center;
    color: #47506d;
    width: 100%;
    max-width: 150px;
    height: auto;

    span {
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 700;
        color: #5072eb;

        @media (max-width: 1280px) {
            font-size: 0.75rem;
        }

        @media (max-width: 1023px) {
            font-size: 0.75rem;
        }
    }

    @media (max-width: 1280px) {
        max-width: 140px;
        font-size: 0.75rem;
    }

    @media (max-width: 1024px) {
        max-width: 100px;
        font-size: 0.75rem;
        line-height: 16px;
    }
`;

export const FlowStepOne = styled(TextBaseStyling)`
    top: 100%;
    left: 3%;

    @media (max-width: 1180px) {
        left: 0;
    }

    @media (max-width: 1023px) {
        top: 80%;
        left: 11%;
    }

    @media (max-width: 768px) {
        left: 9%;
    }

    @media (max-width: 520px) {
        left: 6%;
    }

    @media (max-width: 424px) {
        left: -1%;
    }
`;

export const FlowStepTwo = styled(TextBaseStyling)`
    top: 105%;
    left: 37%;

    @media (max-width: 1180px) {
        left: 34%;
    }

    @media (max-width: 1023px) {
        top: 85%;
        left: 44%;
    }

    @media (max-width: 768px) {
        left: 42%;
    }

    @media (max-width: 520px) {
        left: 39%;
    }

    @media (max-width: 425px) {
        left: 35%;
    }
`;

export const FlowStepThree = styled(TextBaseStyling)`
    top: 97%;
    left: 70%;

    @media (max-width: 1180px) {
        left: 68%;
    }

    @media (max-width: 1023px) {
        top: 78%;
        left: 77.5%;
    }

    @media (max-width: 768px) {
        left: 75.5%;
    }

    @media (max-width: 520px) {
        left: 72%;
    }

    @media (max-width: 425px) {
        left: 70%;
    }
`;
