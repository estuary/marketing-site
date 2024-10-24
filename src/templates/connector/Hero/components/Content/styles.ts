import styled from 'styled-components';

import { OutboundLinkFilled } from '../../../../../components/OutboundLink';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (min-width: 1024px) {
        width: 50%;
    }
`;

export const ContainerPreTitle = styled.ul`
    margin: 0;
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;

    @media (min-width: 1280px) {
        gap: 24px;
    }
`;

export const Pretitle = styled.p`
    font-weight: 700;
    font-size: 20px;
    margin: 0;
    color: #47506d;
    text-transform: uppercase;

    @media (min-width: 1280px) {
        font-size: 24px;
        line-height: 29px;
    }
`;

export const Title = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    margin: 0;
    color: #04192b;

    span {
        color: #5072eb;
    }

    @media (min-width: 1500px) {
        font-size: 48px;
        line-height: 58px;
    }
`;

export const LineBreak = styled.span`
    @media (min-width: 1024px) {
        display: block;
    }
`;

export const Description = styled.h2`
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #47506d;
    margin: 0;

    @media (min-width: 1500px) {
        font-size: 20px;
        line-height: 30px;
        color: #04192b;
    }
`;

export const Button = styled(OutboundLinkFilled)`
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

export const Topics = styled.ul`
    list-style-type: none;
    margin: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 1300px) {
        flex-direction: row;
    }

    @media (min-width: 1500px) {
        gap: 24px;
    }

    & > li:last-child {
        white-space: nowrap;
    }
`;

export const Topic = styled.li`
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    color: #47506d;
    display: flex;
    align-items: center;
    gap: 6px;
    line-height: 30px;

    @media (min-width: 1500px) {
        font-size: 1rem;
    }

    @media (min-width: 375px) {
        white-space: nowrap;
    }

    @media (max-width: 1440px) {
        font-size: 0.875rem;
    }

    @media (max-width: 1299px) {
        font-size: 1rem;
        line-height: 19.2px;
    }

    span {
        color: #5072eb;
        font-weight: 700;
    }
`;
