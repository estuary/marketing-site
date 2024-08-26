import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';
import { AnchorFilled } from '../../../components/OutboundLink/styles';

export const Wrapper = styled.section`
    ${sectionTopBottomPadding}
`;

export const Container = styled.div`
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
    width: 100%;

    @media (min-width: 1024px) {
        width: fit-content;
        padding: 12px 62px;
    }
`;
