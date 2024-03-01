import styled from "styled-components"

import { OutboundLink } from "../../../../components/OutboundLink"

import VectorImage from "../../../../images/lp-product/Vector.png"

export const Wrapper = styled.div`
    padding: 40px 20px;
    
    @media (min-width: 1280px){
        padding: 90px 100px;
    }
`

export const Container = styled.div`
    padding: 40px 20px;
    display: flex;
    flex-direction: column-reverse;
    margin: 0 auto;
    border-radius: 24px;
    background-image: url(${VectorImage});
    background-size: cover;
    background-position: top right;
    background-repeat: no-repeat;
    background-color: #04192B;

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
        min-height: 400px;
    }

    @media (min-width: 1280px) {
        max-width: 1580px;
        padding: 48px 90px;
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
    gap: 16px;
    flex: 1;
`

export const Title = styled.p`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    margin: 0;
    margin-bottom: 36px;
    color: #fff;

    span {
        color: #5072EB;
    }

    @media (min-width: 1280px) {
        font-size: 60px;
        line-height: 72px;
    }
`

export const Button = styled(OutboundLink)`
    width: 100%;
    font-weight: 500;
    text-align: center;
    border-radius: 4px;
    padding: 12px 24px;
    border: 2px solid #625eff;
    background-color: #5072EB;
    color: #fff;

    @media (min-width: 1280px) {
        width: 189px;
        font-size: 16px;
    }
`