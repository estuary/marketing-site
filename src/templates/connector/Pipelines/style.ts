import styled from 'styled-components';
import { AnchorFilled } from '../../../components/OutboundLink/styles';

export const LineBreak = styled.span`
    @media (min-width: 1024px) {
        display: block;
    }
`;

export const Title = styled.h2`
    font-weight: 600;
    font-size: 2.25rem;
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

export const Description = styled.h3`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #47506d;
    margin: 0;
    text-align: center;

    @media (min-width: 1280px) {
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
    }
`;

export const Button = styled<any>(AnchorFilled)`
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
`;
