import {
    Accordion as MuiAccordion,
    AccordionDetails,
    AccordionProps as MuiAccordionProps,
    AccordionSummary,
} from '@mui/material';
import clsx from 'clsx';
import PlusSign from '../../../svgs/plus-sign.svg';
import MinusSign from '../../../svgs/minus-sign.svg';
import {
    answerWrapper,
    accordion,
    questionWrapper,
    expandIconWrapper,
    questionTextStyle,
    isExpandedStyle,
} from './styles.module.less';

interface AccordionProps extends MuiAccordionProps {
    question: string;
    questionNumber: number;
}

const Accordion = ({
    questionNumber,
    question,
    children,
    expanded,
    ...rest
}: AccordionProps) => {
    return (
        <MuiAccordion
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
                            <MinusSign
                                color="var(--blue)"
                                width={21}
                                height={21}
                            />
                        ) : (
                            <PlusSign
                                color="var(--grey)"
                                width={21}
                                height={21}
                            />
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
        </MuiAccordion>
    );
};

export default Accordion;
