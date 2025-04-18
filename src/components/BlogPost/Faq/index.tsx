import { useState, SyntheticEvent } from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import Accordion from '../../Faq/Accordion';
import Wrapper from '../../Faq/Wrapper';

const Faq = ({ faqs }) => {
    const [expanded, setExpanded] = useState<string | null>(null);

    const handleChange =
        (panel: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : null);
        };

    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical>
                <h2>FAQ</h2>
                <Wrapper>
                    {faqs.map(({ question, content }, index) => {
                        const questionNumber = index + 1;
                        return (
                            <Accordion
                                key={questionNumber}
                                questionNumber={questionNumber}
                                question={question}
                                expanded={
                                    expanded === `question${questionNumber}`
                                }
                                onChange={handleChange(
                                    `question${questionNumber}`
                                )}
                            >
                                {content}
                            </Accordion>
                        );
                    })}
                </Wrapper>
            </Container>
        </section>
    );
};

export default Faq;
