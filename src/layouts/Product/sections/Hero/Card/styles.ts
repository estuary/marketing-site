import styled, { css } from 'styled-components';
import { OutboundLink } from '../../../../../components/OutboundLink';

export const Container = styled(OutboundLink)<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #ffffff05;
    color: #ffffff;
    padding: 16px;
    border: 1px solid #5072eb33;
    border-radius: 24px;

    @media (max-width: 1160px) {
        flex-direction: column;
        align-items: start;
    }

    @media (max-width: 670px) {
        flex-direction: row;
        align-items: center;
        padding: 16px;
    }

    @media (max-width: 360px) {
        flex-direction: column;
        align-items: start;
    }

    &:hover {
        border-color: #5072eb;
        background-color: #5072eb33;
    }

    &:active {
        border-color: #5072eb80;
        background-color: #5072eb26;
    }

    ${({ $isActive }) =>
        $isActive &&
        css`
            background-color: #5072eb80;
            border-color: #5072eb40;

            &:hover {
                border-color: #5072eb;
                background-color: #5072eb99;
            }
        `}
`;

export const Title = styled.h3`
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 24px;
    margin: 0;
    color: #ffffff;

    @media (max-width: 1160px) {
        font-size: 1rem;
    }

    @media (max-width: 670px) {
        font-size: 1.25rem;
    }
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 1rem;
    line-height: 30px;
    margin: 0;
`;

const iconWrapperSizeDesktop = '80px';
const iconWrapperSizeMobile = '60px';

export const IconWrapper = styled.div<{ $isActive: boolean }>`
    min-width: ${iconWrapperSizeDesktop};
    min-height: ${iconWrapperSizeDesktop};
    max-width: ${iconWrapperSizeDesktop};
    max-height: ${iconWrapperSizeDesktop};
    border-radius: 100%;
    background-color: ${(props) =>
        props.$isActive ? '#FFFFFF1A' : '#5072EB1A'};
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1280px) {
        min-width: ${iconWrapperSizeMobile};
        min-height: ${iconWrapperSizeMobile};
        max-width: ${iconWrapperSizeMobile};
        max-height: ${iconWrapperSizeMobile};
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0 30px 0 16px;

    @media (max-width: 1160px) {
        margin: 16px 0 30px 0;
    }

    @media (max-width: 670px) {
        margin: 0 30px 0 16px;
    }

    @media (max-width: 360px) {
        margin: 16px 0 30px 0;
    }
`;

export const ChevronIconWrapper = styled.div`
    @media (max-width: 1160px) {
        margin-top: auto;
    }

    @media (max-width: 670px) {
        margin: auto;
    }

    @media (max-width: 360px) {
        margin: 0 auto 0 0;
    }
`;
