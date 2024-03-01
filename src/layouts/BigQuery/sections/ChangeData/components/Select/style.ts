import styled from "styled-components"
import { FormControl, MenuItem } from "@mui/material"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 1080px){
        flex-direction: row;
    }
`

export const Form = styled(FormControl)`
    width: 262px;
    height: 52px;
`

export const Menu = styled(MenuItem)`
    align-items: start;
`

export const Image = styled(GatsbyImage)`
    width: 20px;
    margin-right: 15px;
    vertical-align: middle;
`

export const Button = styled(Link)`
    display: block;
    width: 100%;
    text-align: center;
    border-radius: 4px;
    padding: 12px 24px;
    background-color: #5072EB;
    color: #FFF;

    @media (min-width: 1024px) {
        padding: 16px 24px;
        max-width: 100px;
        font-size: 16px;
    }
`

