import styled from "styled-components"

import { OutboundLink } from "../../../../components/OutboundLink"

export const Container = styled.div`
    padding: 40px 20px;
    display: flex;
    flex-direction: column-reverse;
    gap: 40px;

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
    }

    @media (min-width: 1280px) {
        padding: 100px 90px;
        max-width: 1920px;
        margin: 0 auto;
        gap: 60px;
    }
`

export const ContainerImage = styled.div`
    flex: 1;
`

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;

    @media (min-width: 1280px) {
        gap: 40px;
    }
`

export const Title = styled.p`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    margin: 0;
    color: #04192B;

    span {
        color: #5072EB;
    }

    @media (min-width: 1280px) {
        font-weight: 700;
        font-size: 36px;
        line-height: 50px;
    }
`

export const Description = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #47506D;
    margin: 0;
    
    @media (min-width: 1280px) {
        font-size: 20px;
        line-height: 30px;
    }
`

export const Observation = styled.p`
    display: none;
    font-weight: 400;
    font-size: 16px;
    color: #47506D;
    line-height: 30px;
    margin: 0;

    a {
        color: #5072EB;
        font-weight: 500;
        text-decoration: underline;
    }
    
    @media (min-width: 1280px) {
        display: block;
        font-size: 16px;
    }
`

export const Topics = styled.ul`
    list-style-type: none;
    margin: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 1280px) {
        gap: 24px;
    }
`

export const Topic = styled.li`
    padding-left: 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    color: #47506D;

    @media (min-width: 1280px) {
        font-size: 16px;
        line-height: 30px;
    }

    &::before {
        position: absolute;
        left: 0;
        content: '✓';
        color: #5072EB;
        font-size: 20px;
        font-weight: 700;

        @media (min-width: 1280px) {
            font-size: 24px;
        }
    }
`

export const LineBreak = styled.span`
    @media (min-width: 1024px) {
        display: block;
    }
`
