import { Link } from 'gatsby';
import styled from 'styled-components';
import { globalMaxWidth } from '../../../../globalStyles';

export const Wrapper = styled.div`
    ${globalMaxWidth}

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    @media (min-width: 1280px) {
        gap: 36px;
    }
`;

export const LineBreak = styled.span`
    @media (min-width: 1024px) {
        display: block;
    }
`;

export const Title = styled.p`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    margin: 0;
    color: #47506d;
    text-align: center;

    span {
        color: #5072eb;
    }

    @media (min-width: 1280px) {
        color: #04192b;
        font-size: 60px;
        line-height: 72px;
    }
`;

export const Description = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #47506d;
    margin: 0;
    text-align: center;

    @media (min-width: 1280px) {
        font-size: 36px;
        line-height: 43px;
    }
`;
export const Button = styled(Link)`
    width: 100%;
    text-align: center;
    border-radius: 4px;
    padding: 12px 24px;
    background-color: #5072eb;
    color: #fff;

    @media (min-width: 1024px) {
        width: fit-content;
        padding: 12px 62px;
        font-size: 16px;
    }
`;