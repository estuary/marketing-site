import {
    AccordionDetails,
    Accordion as AccordionMui,
    AccordionSummary,
} from '@mui/material';
import styled, { css } from 'styled-components';

export const Container = styled.div<{ $isReversed: boolean }>`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 60px;

    @media (min-width: 811px) {
        cursor: default;
        flex-direction: ${(props) =>
            props.$isReversed ? 'row-reverse' : 'row'};
    }
`;

export const Title = styled.h3`
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 28.8px;
    color: #ffffff;
    margin: 0;
    width: 100%;

    @media (min-width: 811px) {
        text-align: center;
    }

    @media (max-width: 810px) {
        font-size: 1.25rem;
    }
`;

export const IconWrapper = styled.div`
    min-width: 51px;
    min-height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background-color: #5072eb99;
    border-radius: 50%;

    @media (max-width: 810px) {
        min-width: 40px;
        min-height: 40px;
    }
`;

export const ChevronIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;

    @media (min-width: 811px) {
        display: none;
    }
`;

const descriptionTextStyle = css`
    color: #ffffff;
    margin: 12px 0 0 0;
    max-width: 252px;
    height: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 120%;

    @media (max-width: 580px) {
        max-width: 100%;
    }
`;

export const FeatureDescription = styled.p`
    ${descriptionTextStyle};
    display: flex;
    flex-direction: column;

    & > ul {
        margin-top: 0;
        margin-bottom: 0;

        & > li {
            ${descriptionTextStyle};
            margin-top: 0;
            margin-bottom: 0;
        }
    }
`;

export const Accordion = styled(AccordionMui)`
    background-color: transparent !important;
    border: 1px solid transparent !important;

    @media (max-width: 810px) {
        background-color: #091f38 !important;
        border: 1px solid #a4b6f41a !important;
        border-radius: 36px !important;
        padding: 20px !important;
        min-height: 100px;

        &.Mui-expanded {
            height: 100% !important;
        }
    }

    &.MuiAccordion-root:before {
        display: none !important;
    }

    &.MuiAccordion-root {
        margin: auto 0 !important;
    }
`;

export const AccordionContent = styled(AccordionDetails)`
    padding: 0 !important;
`;

export const AccordionButton = styled(AccordionSummary)`
    min-height: 0 !important;
    padding: 0 !important;

    &.Mui-expanded {
        min-height: 0 !important;
    }

    & .MuiAccordionSummary-content {
        margin: 0 !important;
    }
`;
