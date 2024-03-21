import styled from "styled-components"

import { OutboundLink } from "../../../../components/OutboundLink"

export const Container = styled.div`
    padding: 40px 20px;
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 80px;
        align-items: center;
    }

    @media (min-width: 1280px) {
        padding: 100px 90px;
        max-width: 1920px;
        margin: 0 auto;
    }
`

export const ContainerImage = styled.div`
    position: relative;
    flex: 1;
    max-width: 335px;
    margin: 0 auto;
    margin-bottom: 40px;

    @media (min-width: 1024px) {
        max-width: 100%;

        > div {
            margin-left: 60px;
        }
    }
`

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
`

export const Title = styled.p`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    margin: 0;
    margin-bottom: 20px;

    span {
        color: #5072EB;
    }

    @media (min-width: 1280px) {
        font-size: 60px;
        line-height: 72px;
    }
`

export const ContainerTopics = styled.ul`
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
        font-size: 20px;
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

export const Button = styled(OutboundLink)`
    width: 100%;
    margin-top: 20px;
    text-align: center;
    border-radius: 4px;
    padding: 12px 24px;
    background-color: #5072EB;
    color: #FFF;

    @media (min-width: 1024px) {
        width: fit-content;
        padding: 12px 62px;
        font-size: 16px;
    }
`
