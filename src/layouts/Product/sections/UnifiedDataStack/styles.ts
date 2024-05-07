import styled from "styled-components"

import { OutboundLink } from "../../../../components/OutboundLink"
import { globalMaxWidth, globalSidePadding, sectionTopBottomPadding } from "../../../../globalStyles"

export const Container = styled.section`
    ${sectionTopBottomPadding}
    ${globalSidePadding}

    background-color: #F9FAFC;
`

export const Wrapper = styled.div`
    ${globalMaxWidth}

    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
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
            margin-right: 60px;
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
    color: #47506D;

    span {
        color: #5072EB;
    }

    @media (min-width: 1280px) {
        font-size: 60px;
        line-height: 72px;
    }
`

export const Description = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 30px;
    color: #47506D;
    margin: 0;

    @media (min-width: 1280px) {
        font-size: 24px;
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
