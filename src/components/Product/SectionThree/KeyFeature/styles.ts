import styled from 'styled-components';

export const Container = styled.div<{ $isReversed: boolean }>`
    display: flex;
    gap: 16px;
    align-items: center;

    @media (min-width: 811px) {
        flex-direction: ${(props) =>
            props.$isReversed ? 'row-reverse' : 'row'};
    }

    @media (max-width: 810px) {
        border: 1px solid #a4b6f41a;
        background-color: #091f38;
        border-radius: 36px;
        padding: 20px;
        min-height: 100px;
    }

    @media (max-width: 520px) {
        width: 100%;
    }
`;

export const Title = styled.h3`
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 28.8px;
    color: #ffffff;
    margin: 0;

    @media (min-width: 811px) {
        text-align: center;
    }

    @media (max-width: 810px) {
        font-size: 1.25rem;
    }
`;

export const IconWrapper = styled.div`
    min-width: 51px;
    min-height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background-color: #5072eb99;
    border-radius: 50%;

    @media (max-width: 810px) {
        min-width: 40px;
        min-height: 40px;
    }
`;
