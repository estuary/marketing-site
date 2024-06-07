import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { styled } from 'styled-components';

export const ImageWrapper = styled.div`
    padding: 8px;
    background-color: #5072eb40;
    border: 1px solid #5072eb80;
    border-radius: 12px;
    max-width: 400px;
`;

export const ColumnWithTwoRows = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        gap: 38px;
    }

    @media (max-height: 1024px) {
        gap: 12px;
    }
`;

export const Slide = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    margin: 0;
`;

export const MenuAccordion = styled(Accordion)`
    background: transparent !important;

    &.MuiAccordion-root:before {
        display: none !important;
    }

    &.MuiAccordion-root {
        margin: auto 0 !important;
    }
`;

export const MenuAccordionButton = styled(AccordionSummary)`
    min-height: 0 !important;
    padding: 0 !important;

    &.Mui-expanded {
        min-height: 0 !important;
    }

    & .MuiAccordionSummary-content {
        margin: 0 !important;
    }
`;

export const MenuAccordionContent = styled(AccordionDetails)`
    padding: 0 !important;
`;

export const MenuBackground = styled.div<{ $isMenuOpen?: boolean }>`
    @media (min-width: 1024px) {
        position: fixed;
        top: 116px;
        left: 50%;
        transform: translateX(-50%);
        width: 100vw;
        height: 100vh;
        display: ${({ $isMenuOpen }) => ($isMenuOpen ? 'flex' : 'none')};
        background-color: rgba(0, 0, 0, 0.6);
    }
`;
