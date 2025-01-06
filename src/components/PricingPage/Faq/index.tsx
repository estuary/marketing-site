import { useState, SyntheticEvent } from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import { title, questionsList } from './styles.module.less';
import FaqAccordion from './FaqAccordion';
import { faqs } from './faqs';

const Faq = () => {
    const [expanded, setExpanded] = useState<string | null>(null);

    const handleChange =
        (panel: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : null);
        };

    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical>
                <h2 className={title}>FAQ</h2>
                <ol className={questionsList}>
                    {faqs.map(({ questionNumber, question, content }) => (
                        <FaqAccordion
                            key={questionNumber}
                            questionNumber={questionNumber}
                            question={question}
                            expanded={expanded === `question${questionNumber}`}
                            onChange={handleChange(`question${questionNumber}`)}
                        >
                            {content}
                        </FaqAccordion>
                    ))}
                </ol>
            </Container>
        </section>
    );
};

export default Faq;
