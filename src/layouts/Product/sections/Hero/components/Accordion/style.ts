import styled, { css } from 'styled-components';

import PlusSign from '../../../../../../svgs/plus-sign.svg';
import MinusSign from '../../../../../../svgs/minus-sign.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 1280px) {
        gap: 28px;
    }
`;

export const Button: any = styled.div`
    user-select: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    border-top: 1px solid #d7dce5;
    padding-top: 24px;

    ${({ $last }: any) =>
        $last &&
        css`
            padding-bottom: 24px;
            border-bottom: 1px solid #d7dce5;

            @media (min-width: 1280px) {
                padding-bottom: 28px;
            }
        `}

    @media (min-width: 1280px) {
        padding-top: 28px;
    }
`;

export const IconPlus = styled(PlusSign)`
    path {
        fill: #5072eb;
    }

    @media (min-width: 1280px) {
        width: 28px;
        height: 28px;
    }
`;

export const IconMinus = styled(MinusSign)`
    path {
        fill: #5072eb;
    }

    @media (min-width: 1280px) {
        width: 28px;
        height: 28px;
    }
`;

export const Title = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: normal;
    margin: 0;
    color: #47506d;

    @media (min-width: 1280px) {
        font-size: 24px;
        line-height: 30px;
    }
`;

export const Description: any = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #47506d;
    margin: 0;

    @media (min-width: 1280px) {
        font-size: 20px;
        line-height: 30px;
    }
`;

export const ContainerDescription: any = styled.div`
    overflow: hidden;
    margin: 0;
    padding-bottom: 24px;
    flex-direction: column;
    gap: 20px;
    opacity: ${({ open }: any) => (open ? '100' : '0')};
    display: ${({ open }: any) => (open ? 'flex' : 'none')};
`;
