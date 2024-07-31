import styled from 'styled-components';
import { Link } from 'gatsby';

export const ConnectorsGroupsLeftWrapper = styled.div`
    margin-right: -24%;
`;

export const ConnectorsGroupsRightWrapper = styled.div`
    margin-left: -24%;
`;

export const ConnectorsGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4%;
    padding: 3%;
    border: 2px solid #e5e9f5;
    border-radius: 100px;
    background-color: #fdfdfe;

    &.spacing-left {
        padding-left: 9%;
    }

    &.spacing-right {
        padding-right: 9%;
    }

    &:not(:first-child) {
        margin-top: 2%;
    }
`;

export const Connector = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    margin-bottom: -40px !important;
    max-width: 42px;

    &:hover {
        transform: translateY(-12px);
    }

    &:hover > div {
        border: 2px solid #7284ff;
    }

    &:hover > span {
        visibility: visible;
        opacity: 1;
    }
`;

export const LogoWrapper = styled.div`
    background-color: #ffffff;
    border: 1px solid #d7dce5;
    border-radius: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 54px;
    min-width: 32px;
    min-height: 32px;
    transition: border-color 0.2s ease-in-out;

    @media (max-width: 1280px) {
        max-width: 42px;
    }

    @media (max-width: 1024px) {
        max-width: 32px;
    }
`;

export const HiddenLogoTitle = styled.span`
    color: #47506d;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 120%;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    min-height: 40px;

    @media (max-width: 1280px) {
        font-size: 0.75rem;
    }

    @media (max-width: 1024px) {
        font-size: 0.5rem;
    }
`;

export const FeatureWrapper = styled.div<{ $hasTooltips: boolean }>`
    min-width: 90px;
    width: 100%;
    max-width: 90px;
    height: 90px;
    border: 2px solid #e5e9f5;
    border-radius: 50%;
    padding: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1280px) {
        min-width: 70px;
        max-width: 70px;
        height: 70px;
    }

    @media (max-width: 920px) {
        min-width: 60px;
        height: 60px;
    }

    & > h4 {
        text-align: center;
        color: #5072eb;
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 120%;
        margin: 4% 0 0 0;
        padding: 0 10%;

        @media (max-width: 1024px) {
            font-size: 0.5rem;
        }
    }

    transition: border-color 0.2s ease-in-out;

    &:hover {
        border-color: ${({ $hasTooltips }) =>
            $hasTooltips ? '#5072eb' : '#e5e9f5'};
    }

    .icon {
        width: 100%;
        height: 100%;
        max-width: 32px;
        max-height: 32px;
        min-width: 16px;
        min-height: 16px;

        @media (max-width: 1024px) {
            max-width: 24px;
            max-height: 24px;
        }
    }
`;
