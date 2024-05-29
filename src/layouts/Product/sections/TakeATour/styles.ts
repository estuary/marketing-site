import styled from 'styled-components';

import { Link } from 'gatsby';
import { OutboundLink } from '../../../../components/OutboundLink';

import {
    globalMaxWidth,
    sectionTopBottomPadding,
} from '../../../../globalStyles';
import vectorBackgroundImage from '../../../../images/lp-product/Vector.png';

export const Container = styled.section`
    ${sectionTopBottomPadding}

    background-image: url(${vectorBackgroundImage});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    background-color: #f9fafc;
`;

export const Wrapper = styled.div`
    ${globalMaxWidth}

    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        flex-direction: row-reverse;
        align-items: center;
    }
`;

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
`;

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
`;

export const ContainerIcons = styled.div`
    display: none;

    @media (min-width: 1280px) {
        display: flex;
        gap: 60px;
    }
`;

export const Title = styled.p`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    margin: 0;

    @media (min-width: 1280px) {
        font-size: 60px;
        line-height: 72px;
    }
`;

export const ContainerIcon = styled.div`
    padding: 16px;
    border: 1px solid #5072eb80;
    border-radius: 8px;
    background-color: #ffffff;
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    margin: 0;

    @media (min-width: 1280px) {
        font-size: 20px;
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 1280px) {
        gap: 24px;
        flex-direction: row;
        margin-top: 20px;
    }
`;

export const Button = styled(OutboundLink)`
    width: 100%;
    font-weight: 500;
    text-align: center;
    border-radius: 4px;
    padding: 12px 24px;
    border: 2px solid #625eff;
    background-color: #fff;
    color: #04192b;

    @media (min-width: 1280px) {
        width: fit-content;
        padding: 12px 62px;
        font-size: 16px;
    }
`;

export const ActionLink = styled(Link)`
    width: 100%;
    text-align: center;
    border-radius: 4px;
    padding: 12px 16px;
    border: 2px solid #5072eb;
    background-color: #5072eb;
    font-size: 16px;
    font-weight: 500;
    color: #fff;

    @media (min-width: 1024px) {
        width: fit-content;
        padding: 12px 24px;
        font-size: 16px;
    }
`;
