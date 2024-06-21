import styled from 'styled-components';
import { globalMaxWidth } from '../../../../globalStyles';

export const Container = styled.section`
    ${globalMaxWidth}

    display: flex;
    align-items: center;
    gap: 60px;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 40px;
    }
`;

export const IconWrapper = styled.div`
    width: 90px;
    height: 90px;
    border: 1px solid #d7dce5;
    border-radius: 8px;
    padding: 25px 18px;
    background-color: #ffffff;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 620px;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    margin: 0;
    color: #47506d;

    @media (max-width: 768px) {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 33.6px;
        margin: 0;
    }

    & > span {
        color: #5072eb;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    color: #47506d;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const Advantages = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
`;

export const ImageWrapper = styled.div`
    max-width: 536px;
    width: 100%;
`;
