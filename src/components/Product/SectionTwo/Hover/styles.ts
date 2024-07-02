import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import AiIcon from '../../../../svgs/android-brain.svg';
import BatchIcon from '../../../../svgs/batch.svg';
import LatencyIcon from '../../../../svgs/metric-latency.svg';
import SingleDataflowIcon from '../../../../svgs/metric-single-dataflow.svg';
import OpsIcon from '../../../../svgs/ops.svg';
import AnalyticsIcon from '../../../../svgs/pie-chart.svg';
import SaasIcon from '../../../../svgs/saas.svg';

type Slide = {
    $slide: number;
};

const centerHorizontally = `
    left: 50%;
    transform: translateX(-50%);
`;

const baseHoverTextWrapperStyling = `
    position: absolute;
    border: 2px solid;
    border-radius: 100px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px 32px;
    background-color: #FFFFFF;
    max-width: 280px;
    z-index: 1;

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
        grid-template-columns: 1fr 2.5fr;
    `,
    3: css`
        display: flex;
        margin-top: 1%;
    `,
    4: css`
        display: grid;
        grid-template-columns: 2.5fr 1fr;
    `,
};

export const Container = styled.div<Slide>`
    max-width: 1216px;
    ${({ $slide }) => slideStyles[$slide] || null}
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 768px) {
        display: none;
    }
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
    margin-top: ${(props) => (props.$slide === 1 ? '8%' : 0)};
    max-width: ${(props) => (props.$slide === 3 ? '1024px' : '100%')};
`;

export const ConnectorsGroupsLeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: right;
    margin-right: -24%;
`;

export const ConnectorsGroupsRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    margin-left: -24%;
`;

export const ConnectorsGroup = styled.div`
    width: 100%;
    height: 100%;
    max-width: 406px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1.5fr;
    align-items: center;
    justify-content: center;
    gap: 4%;
    padding: 3% 3% 3% 9%;
    border: 2px solid #e5e9f5;
    border-radius: 100px;
    background-color: #fdfdfe;
    z-index: 1;

    @media (max-width: 1280px) {
        max-width: 320px;
    }

    &:not(:first-child) {
        margin-top: 2%;
    }
`;

export const Connector = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    margin-bottom: -40px;

    &:hover {
        transform: translateY(-12px);
    }

    &:hover > div {
        border: 2px solid #7284ff;
    }

    &:hover > span {
        visibility: visible;
        opacity: 1;
    }
`;

export const LogoWrapper = styled.div`
    background-color: #ffffff;
    border: 1px solid #d7dce5;
    border-radius: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 54px;
    min-width: 32px;
    min-height: 32px;
    transition: border-color 0.2s ease-in-out;

    @media (max-width: 1280px) {
        max-width: 42px;
    }

    @media (max-width: 1024px) {
        max-width: 32px;
    }
`;

export const HiddenLogoTitle = styled.span`
    color: #47506d;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 120%;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    min-height: 40px;

    @media (max-width: 1280px) {
        font-size: 0.75rem;
    }

    @media (max-width: 940px) {
        font-size: 0.5rem;
    }
`;

const baseIconStyling = `
    width: 100%;
    height: 100%;
    max-width: 32px;
    max-height: 32px;
    min-width: 16px;
    min-height: 16px;

    @media (max-width: 1024px) {
        max-width: 24px;
        max-height: 24px;
    }
`;

export const SingleDataflowIconComponent = styled(SingleDataflowIcon)`
    ${baseIconStyling};
`;

export const RealTimeIconComponent = styled(LatencyIcon)`
    ${baseIconStyling};
`;

export const BatchIconComponent = styled(BatchIcon)`
    ${baseIconStyling};
`;

export const SaasIconComponent = styled(SaasIcon)`
    ${baseIconStyling};
`;

export const AnalyticsIconComponent = styled(AnalyticsIcon)`
    ${baseIconStyling};
`;

export const OpsIconComponent = styled(OpsIcon)`
    ${baseIconStyling};
`;

export const AiIconComponent = styled(AiIcon)`
    ${baseIconStyling};
`;

export const FeatureWrapper = styled.div`
    min-width: 90px;
    width: 100%;
    max-width: 90px;
    height: 90px;
    border: 2px solid #e5e9f5;
    border-radius: 50%;
    padding: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: auto;

    @media (max-width: 1280px) {
        min-width: 70px;
        max-width: 70px;
        height: 70px;
    }

    @media (max-width: 920px) {
        min-width: 60px;
        height: 60px;
    }

    & > h4 {
        text-align: center;
        color: #5072eb;
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 120%;
        margin: 4% 0 0 0;
        padding: 0 10%;

        @media (max-width: 1024px) {
            font-size: 0.5rem;
        }
    }

    transition: border-color 0.2s ease-in-out;

    &:hover {
        border-color: #5072eb;
    }
`;

export const FlowStepImageWrapper = styled.div<Slide>`
    position: absolute;
    left: ${(props) => (props.$slide === 3 ? '32.96%' : '35.1%')};
    top: 50%;
    transform: translateY(-50%);
    width: ${(props) => (props.$slide === 3 ? '33.88%' : '30.3%')};
    margin-top: ${(props) => (props.$slide === 3 ? '0' : '1.21%')};
`;

export const TooltipTop = styled.div<Slide>`
    ${baseHoverTextWrapperStyling};
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
    ${baseHoverTextWrapperStyling};
    ${darkBlueColor};
    bottom: 60%;
    right: 58%;
`;

export const TooltipRight = styled.div`
    ${baseHoverTextWrapperStyling};
    ${darkBlueColor};
    top: 61%;
    left: 57.5%;
`;

export const TooltipBottom = styled.div<Slide>`
    ${baseHoverTextWrapperStyling};
    ${lightBlueColor};
    ${centerHorizontally};
    top: ${(props) => (props.$slide === 3 ? '79%' : '74%')};
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
