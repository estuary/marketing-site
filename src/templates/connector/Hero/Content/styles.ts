import styled from 'styled-components';

import { OutboundLinkFilled } from '../../../../components/OutboundLink';

export const Container = styled.div`
    h1 {
        span:nth-of-type(2n) {
            color: #04192b;
        }

        span:nth-of-type(2n + 1) {
            color: #625eff;
        }
    }

    p:first-of-type {
        color: #47506d;
        margin: 0;
    }
`;

export const ContainerPreTitle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    margin-bottom: 32px;

    span {
        font-weight: 700;
        font-size: 1.25rem;
        margin: 0;
        color: #47506d;
        text-transform: uppercase;

        @media (min-width: 1280px) {
            font-size: 1.5rem;
            line-height: 29px;
        }
    }
`;

export const LineBreak = styled.span`
    @media (min-width: 1024px) {
        display: block;
    }
`;

export const Button = styled(OutboundLinkFilled)`
    @media (min-width: 1024px) {
        max-width: 240px;
    }
`;

export const Topics = styled.ul`
    list-style-type: none;
    margin: 32px 0;
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
