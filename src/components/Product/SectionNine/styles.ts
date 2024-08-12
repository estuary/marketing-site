import styled, { css } from 'styled-components';

const sharedHeaderStyles = css`
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 43.2px;
    margin: 0;

    @media (min-width: 769px) and (max-width: 1500px), (max-width: 600px) {
        font-size: 1.25rem;
        line-height: 23.2px;
    }

    @media (min-width: 769px) and (max-width: 1320px), (max-width: 480px) {
        font-size: 1rem;
        line-height: 18.2px;
    }
`;

const sharedParagraphStyles = css`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    margin: 0;

    @media (min-width: 769px) and (max-width: 1500px), (max-width: 600px) {
        font-size: 1.125rem;
        line-height: 20px;
    }

    @media (min-width: 769px) and (max-width: 1320px), (max-width: 480px) {
        font-size: 0.875rem;
        line-height: 16px;
    }
`;

export const Metrics = styled.div`
    position: relative;
    min-width: 260px;

    .metric {
        position: absolute;
        border: 1px solid #5072eb4d;
        border-radius: 24px;
        display: flex;
        gap: 24px;
        align-items: center;
        padding: 16px;

        @media (min-width: 769px) and (max-width: 1320px), (max-width: 480px) {
            gap: 16px;
            padding: 8px;
            border-radius: 16px;
        }
    }
`;

export const SingleDataFlowMetric = styled.div`
    left: 50%;
    transform: translateX(-50%);
    top: 20px;
    background-color: #5072eb;

    h3 {
        ${sharedHeaderStyles}
        color: #ffffff;
    }

    p {
        ${sharedParagraphStyles}
        color: #ffffff;
    }
`;

export const ActiveUsersMetric = styled.div`
    bottom: 96px;
    background-color: #eef1fd;

    @media (min-width: 769px) and (max-width: 1500px), (max-width: 600px) {
        bottom: 48px;
    }

    @media (min-width: 769px) and (max-width: 1320px), (max-width: 480px) {
        bottom: 32px;
    }

    h3 {
        ${sharedHeaderStyles}
        color: #5072EB;
    }

    p {
        ${sharedParagraphStyles}
        color: #47506D;
    }
`;

export const LatencyMetric = styled.div`
    bottom: 0;
    right: 0;
    background-color: #eef1fd;

    h3 {
        ${sharedHeaderStyles}
        color: #5072EB;
    }

    p {
        ${sharedParagraphStyles}
        color: #47506D;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const LogoWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 102px;
    height: 102px;

    @media (min-width: 769px) and (max-width: 1500px), (max-width: 600px) {
        width: 84px;
        height: 84px;
    }

    @media (min-width: 769px) and (max-width: 1320px), (max-width: 480px) {
        width: 64px;
        height: 64px;
    }

    @media (min-width: 769px) and (max-width: 1190px) {
        width: 44px;
        height: 44px;
    }
`;

export const IconWrapper = styled.div`
    width: 49px;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 769px) and (max-width: 1320px), (max-width: 480px) {
        width: 32px;
        height: 32px;
    }

    @media (min-width: 769px) and (max-width: 1160px), (max-width: 480px) {
        width: 24px;
        height: 24px;
    }
`;
