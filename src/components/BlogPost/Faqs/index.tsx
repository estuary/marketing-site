import { useState, SyntheticEvent } from 'react';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import Accordion from '../../Faq/Accordion';
import Wrapper from '../../Faq/Wrapper';
import { sectionTitle } from './styles.module.less';

const Faqs = ({ faqs }) => {
    const [expanded, setExpanded] = useState<string | null>(null);

    const handleChange =
        (panel: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : null);
        };

    return (
        <section className={defaultWrapperDark}>
            <Container isVertical>
                <h2 className={sectionTitle}>FAQ</h2>
                <Wrapper>
                    {faqs.map(({ question, answer }, index) => {
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
                                {answer}
                            </Accordion>
                        );
                    })}
                </Wrapper>
            </Container>
        </section>
    );
};

export default Faqs;
