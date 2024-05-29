import styled, { css } from 'styled-components';
import { globalMaxWidth } from '../../../../../../globalStyles';

export const Container = styled.div`
    ${globalMaxWidth}

    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 20px;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const Card: any = styled.div`
    width: 100%;
    border: 2px solid #d7dce5;
    background-color: #5072eb20;
    color: #47506d;
    text-decoration: none;
    border-radius: 8px;
    padding: 24px 20px;

    ${({ $active }: any) =>
        $active &&
        css`
            background-color: #5072eb;
            border: 2px solid #5072eb;

            p {
                color: #fff;
            }

            div {
                background-color: #d7dce550;
            }
        `}

    @media (min-width: 1280px) {
        padding: 32px 24px;
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color: #5072eb50;

    @media (min-width: 1280px) {
        width: 40%;
    }
`;

export const Title = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    color: #47506d;
    padding-bottom: 16px;

    span {
        color: #5072eb;
    }

    @media (min-width: 1280px) {
        font-size: 36px;
        line-height: 43px;
    }
`;

export const Description = styled.p`
    margin: 0;
    padding-top: 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #47506d;

    @media (min-width: 1280px) {
        font-size: 20px;
        line-height: 30px;
    }
`;
