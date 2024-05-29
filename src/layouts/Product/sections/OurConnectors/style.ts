import styled from 'styled-components';

import { Link } from 'gatsby';
import { globalMaxWidth } from '../../../../globalStyles';

export const Wrapper = styled.div`
    ${globalMaxWidth}

    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const ContainerImage = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px) {
        .desktop-image {
            display: none !important;
        }
    }

    @media (min-width: 701px) {
        .mobile-image {
            display: none !important;
        }
    }
`;

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
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

export const PrimaryTextColor = styled.span`
    color: #5072eb;
`;

export const SecondaryTextColor = styled.span`
    color: #47506d;
`;

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
`;

export const Topic = styled.li`
    padding-left: 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    color: #47506d;

    @media (min-width: 1280px) {
        font-size: 20px;
        line-height: 30px;
    }

    &::before {
        position: absolute;
        left: 0;
        content: '✓';
        color: #5072eb;
        font-size: 20px;
        font-weight: 700;

        @media (min-width: 1280px) {
            font-size: 24px;
        }
    }
`;

export const Button = styled(Link)`
    width: 100%;
    margin-top: 20px;
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
