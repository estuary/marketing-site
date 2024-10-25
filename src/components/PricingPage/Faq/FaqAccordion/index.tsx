import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionProps,
    AccordionSummary,
} from '@mui/material';
import clsx from 'clsx';
import PlusSign from '../../../../svgs/plus-sign.svg';
import MinusSign from '../../../../svgs/minus-sign.svg';
import {
    answerWrapper,
    accordion,
    questionWrapper,
    expandIconWrapper,
    questionTextStyle,
    isExpandedStyle,
} from './styles.module.less';

interface FaqAccordion extends AccordionProps {
    question: string;
    questionNumber: number;
}

const FaqAccordion = ({
    questionNumber,
    question,
    children,
    expanded,
    ...rest
}: FaqAccordion) => {
    return (
        <Accordion
            key={questionNumber}
            elevation={0}
            className={accordion}
            expanded={expanded}
            {...rest}
        >
            <AccordionSummary
                id={`question${questionNumber}-header`}
                aria-controls={`question${questionNumber}-content`}
                expandIcon={
                    <div
                        className={clsx(
                            expandIconWrapper,
                            expanded ? isExpandedStyle : null
                        )}
                    >
                        {expanded ? (
                            <MinusSign color="#5072EB" width={21} height={21} />
                        ) : (
                            <PlusSign color="#47506D" width={21} height={21} />
                        )}
                    </div>
                }
                className={questionWrapper}
            >
                <h3
                    className={clsx(
                        questionTextStyle,
                        expanded ? isExpandedStyle : null
                    )}
                >
                    {questionNumber}. {question}
                </h3>
            </AccordionSummary>
            <AccordionDetails className={answerWrapper}>
                {children}
            </AccordionDetails>
        </Accordion>
    );
};

export default FaqAccordion;
