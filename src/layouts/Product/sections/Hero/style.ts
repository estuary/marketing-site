import { Link } from "gatsby"
import styled from "styled-components"
import { OutboundLink } from "../../../../components/OutboundLink"
import { globalMaxWidth, globalSidePadding, sectionTopBottomPadding } from "../../../../globalStyles"

export const Container = styled.section`
    ${globalSidePadding}
    ${sectionTopBottomPadding}
`

export const ContainerHeader = styled.div`
    ${globalMaxWidth}

    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        flex-direction: row;
    }

    @media (min-width: 1280px) {
        padding-bottom: 60px;
    }
`

export const ContainerImage = styled.div`
    position: relative;
    flex: 1;
    max-width: 335px;
    margin: 0 auto;
    
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
    flex: 1;
    gap: 20px;
    max-width: 912px;
    margin-top: 40px;

    @media (min-width: 1280px) {
        margin-top: 0;
        justify-content: center;
    }
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    margin: 0;

    span {
        color: #5072EB;
    }

    @media (min-width: 1280px) {
        font-size: 52px;
        line-height: 72px;

        span {
            display: block;
        }
    }

    @media (min-width: 1550px) {
        font-size: 60px;
    }
`

export const Description = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #47506D;
    margin: 0;
    
    @media (min-width: 1280px) {
        font-size: 20px;
        line-height: 30px;
    }
`

export const ContainerButton = styled.div`
    display: flex;
    gap: 24px;
    max-width: 331px;
    margin-bottom: 28px;

    @media (min-width: 1024px) {
        max-width: 340px;
    }

    @media (min-width: 1280px) {
        margin-bottom: 64px;
    }
`

export const Button = styled(OutboundLink)`
    width: 100%;
    text-align: center;
    border-radius: 4px;
    padding: 12px 16px;
    border: 2px solid #5072EB;
    background-color: #5072EB;
    font-size: 16px;
    font-weight: 500;
    color: #FFF;

    @media (min-width: 1024px) {
        width: fit-content;
        padding: 8px 24px;
        font-size: 16px;
    }
`

export const ActionLink = styled(Link)`
    width: 100%;
    text-align: center;
    border-radius: 4px;
    padding: 12px 16px;
    border: 2px solid #625eff;
    background-color: #FFF;
    font-size: 16px;
    font-weight: 500;
    color: #04192b;

    @media (min-width: 1024px) {
        width: fit-content;
        padding: 8px 24px;
        font-size: 16px;
    }
`