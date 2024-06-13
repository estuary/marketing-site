import styled, { css } from 'styled-components';

export const Container: any = styled.div<{ $isActive: boolean }>`
    display: flex;
    gap: 32px;
    align-items: center;
    width: 100%;
    background-color: #5072eb33;
    color: #ffffff;
    padding: 24px;
    border: 1px solid #5072eb33;
    border-radius: 24px;

    ${({ $isActive }: any) =>
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

const iconSize = '80px';

export const IconWrapper = styled.div`
    min-width: ${iconSize};
    min-height: ${iconSize};
    max-width: ${iconSize};
    max-height: ${iconSize};
    border-radius: 100%;
    background-color: #ffffff1a;
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
