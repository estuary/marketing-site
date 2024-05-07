import styled from "styled-components"
import { globalMaxWidth, globalSidePadding, sectionTopBottomPadding } from "../../../../globalStyles"

export const Container = styled.section`
    ${sectionTopBottomPadding}
    ${globalSidePadding}

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    @media (min-width: 1024px) {
        gap: 36px;
        align-items: normal;
    }
`

export const ContainerContent = styled.div`
    ${globalMaxWidth}

    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 1024px) {
        align-items: center;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 16px;        
    }
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

    @media (min-width: 1024px) {
        color: #04192B;

        .break-line {
            display: block;
        }
    }

    @media (min-width: 1280px) {
        font-size: 60px;
        line-height: 72px;
    }
`

export const Description = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    margin: 0;
`
