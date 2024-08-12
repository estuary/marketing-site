import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';
import CaptureIcon from '../../../svgs/capture.svg';
import RealTimeDelivery from '../../../svgs/real-time-delivery.svg';
import StoreAndTransformIcon from '../../../svgs/store-and-transform.svg';

export const Container = styled.section`
    ${globalMaxWidth}
    ${sectionTopBottomPadding}

    display: flex;
    flex-direction: column;
    gap: 40px;

    .desktop-image {
        @media (max-width: 768px) {
            display: none !important;
        }

        .flow-cycle-middle-image {
            margin-top: 32px;
        }
    }

    .mobile-image {
        @media (min-width: 769px) {
            display: none !important;
        }
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 810px) {
        margin: 16px;
    }
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 48px;
    color: #47506d;

    @media (max-width: 810px) {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 33.6px;
        margin: 0;
    }

    & span:nth-child(odd) {
        color: #5072eb;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    max-width: 75%;
    margin: 24px 0 0 0;
    color: #04192b;

    @media (max-width: 810px) {
        font-size: 1rem;
    }
`;

export const Steps = styled.div`
    display: flex;
    gap: 32px;

    @media (max-width: 1115px) {
        flex-direction: column;
    }
`;

export const Step = styled.div`
    display: flex;
    gap: 16px;
    width: 33%;
    border: 4px dotted #d7dce5;
    border-radius: 16px;
    padding: 16px;
    position: relative;

    @media (max-width: 1115px) {
        width: 100%;
    }
`;

export const StepTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 24px;
    color: #47506d;
    text-transform: uppercase;
    margin: 0;

    span {
        color: #625eff;
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
    color: #47506d;
    margin: 12px 0 0 0;
`;

export const StepIcon = styled.div`
    border: 1px solid #d7dce5;
    border-radius: 8px;
    padding: 12px;
    height: fit-content;
`;

const IconBaseStyling = `
  display: block;
  color: #47506D;
`;

export const StepOneIcon = styled(CaptureIcon)`
    ${IconBaseStyling}
`;

export const StepTwoIcon = styled(StoreAndTransformIcon)`
    ${IconBaseStyling}
`;

export const StepThreeIcon = styled(RealTimeDelivery)`
    ${IconBaseStyling}
`;

export const DesktopDiagramWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr;
    padding: 24px;

    align-items: center;
    justify-content: center;

    .connectors-groups {
        display: flex;
        flex-direction: column;
        z-index: 2;

        @media (max-width: 1280px) {
            max-width: 320px;
        }
    }
`;
