import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    useMediaQuery,
    AccordionDetails,
    Accordion,
    AccordionSummary,
} from '@mui/material';
import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import {
    reversed,
    chevronIconWrapper,
    container,
    iconWrapper,
    accordionDetails,
} from './styles.module.less';

type KeyFeatureContentProps = {
    title: string;
    description: ReactNode;
    icon: ReactNode;
    isReversed?: boolean;
};

const accordionStyles = {
    'backgroundColor': 'transparent !important',
    'border': '1px solid transparent !important',
    '&.MuiAccordion-root:before': {
        display: 'none !important',
    },
    '&.MuiAccordion-root': {
        margin: 'auto 0 !important',
    },
    '@media (max-width: 810px)': {
        'backgroundColor': '#091f38 !important',
        'border': '1px solid var(--violet300-10-opacity) !important',
        'borderRadius': '36px !important',
        'padding': '20px !important',
        'minHeight': '100px',
        '&.Mui-expanded': {
            height: '100% !important',
        },
    },
};

const accordionSummaryStyles = {
    'minHeight': '0 !important',
    'padding': '0 !important',
    '&.Mui-expanded': {
        minHeight: '0 !important',
    },
    '& .MuiAccordionSummary-content': {
        margin: '0 !important',
        display: 'block',
    },
};

const KeyFeatureContent = ({
    title,
    description,
    icon,
    isReversed = false,
}: KeyFeatureContentProps) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const isMobile = useMediaQuery('(max-width:810px)');

    const handleAccordionOpen = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <Accordion
            elevation={0}
            expanded={isMobile ? isAccordionOpen : false}
            sx={accordionStyles}
        >
            <AccordionSummary
                onClick={handleAccordionOpen}
                expandIcon={
                    <div className={chevronIconWrapper}>
                        <ExpandMoreIcon width={24} htmlColor="var(--white)" />
                    </div>
                }
                sx={accordionSummaryStyles}
            >
                <div className={clsx(container, isReversed ? reversed : null)}>
                    <div className={iconWrapper}>{icon}</div>
                    <h3>{title}</h3>
                </div>
            </AccordionSummary>
            <AccordionDetails className={accordionDetails}>
                {description}
            </AccordionDetails>
        </Accordion>
    );
};

export default KeyFeatureContent;
