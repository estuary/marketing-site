import styled, { css } from 'styled-components';
import { OutboundLink } from '../../../../../components/OutboundLink';

export const Container = styled(OutboundLink)<{ $isActive: boolean }>`
    display: flex;
    gap: 32px;
    align-items: center;
    width: 100%;
    background-color: #ffffff05;
    color: #ffffff;
    padding: 24px;
    border: 1px solid #5072eb33;
    border-radius: 24px;

    ${({ $isActive }) =>
        $isActive &&
        css`
            background-color: #5072eb80;
            border-color: #5072eb40;
        `}
`;

export const Title = styled.p`
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 24px;
    margin: 0;
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 1rem;
    line-height: 30px;
    margin: 0;
`;

const iconWrapperSize = '80px';

export const IconWrapper = styled.div<{ $isActive: boolean }>`
    min-width: ${iconWrapperSize};
    min-height: ${iconWrapperSize};
    max-width: ${iconWrapperSize};
    max-height: ${iconWrapperSize};
    border-radius: 100%;
    background-color: ${(props) =>
        props.$isActive ? '#FFFFFF1A' : '#5072EB1A'};
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
