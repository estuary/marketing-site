import { MouseEvent } from 'react';

export const accordionStyles = {
    'background': 'transparent !important',
    '&.MuiAccordion-root:before': {
        display: 'none !important',
    },
    '&.MuiAccordion-root': {
        'margin': 'auto 0 !important',
        '@media (max-width: 1142px)': {
            margin: '0 !important',
        },
    },
};

export const accordionSummaryStyles = {
    'minHeight': '0 !important',
    'padding': '0 !important',
    '&.Mui-expanded': {
        minHeight: '0 !important',
    },
    '& .MuiAccordionSummary-content': {
        margin: '0 !important',
    },
};

export type MenuEvent = MouseEvent<HTMLDivElement>;

export interface MenuCardItem {
    name: string;
    description?: string;
    to: string;
    Image?: () => JSX.Element;
    linkId: string;
}

export const getMenuLinkId = (linkName: string) => `${linkName}-menu-link`;
