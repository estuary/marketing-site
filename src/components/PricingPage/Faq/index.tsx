import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import { container, title, questionsList } from './styles.module.less';
import FaqAccordion from './FaqAccordion';
import { faqs } from './faqs';

const Faq = () => {
    const [expanded, setExpanded] = React.useState<string | null>(null);

    const handleChange =
        (panel: string) =>
        (_event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : null);
        };

    return (
        <section className={defaultWrapperGrey}>
            <div className={container}>
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
            </div>
        </section>
    );
};

export default Faq;
