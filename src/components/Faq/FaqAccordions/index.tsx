import { useState, SyntheticEvent, ReactNode } from 'react';
import Accordion from '../Accordion';
import Wrapper from '../Wrapper';

export interface FaqItem {
    question: string;
    answer: ReactNode;
}

interface FaqAccordionsProps {
    faqs: FaqItem[];
}

const FaqAccordions = ({ faqs }: FaqAccordionsProps) => {
    const [expanded, setExpanded] = useState<string | null>(null);

    const handleChange =
        (panel: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : null);
        };

    return (
        <Wrapper>
            {faqs.map(({ question, answer }, index) => {
                if (!answer) {
                    return null;
                }

                const questionNumber = index + 1;

                return (
                    <Accordion
                        key={`question-${questionNumber}-from-faq-section`}
                        questionNumber={questionNumber}
                        question={question}
                        expanded={expanded === `question${questionNumber}`}
                        onChange={handleChange(`question${questionNumber}`)}
                    >
                        {answer}
                    </Accordion>
                );
            })}
        </Wrapper>
    );
};

export default FaqAccordions;
