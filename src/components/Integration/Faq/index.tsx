import { SyntheticEvent, useState } from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import Accordion from '../../Faq/Accordion';
import Wrapper from '../../Faq/Wrapper';
import { Connector } from '../shared';
import { container } from './styles.module.less';
import { faqs } from './faqs';

interface FaqProps {
    sourceConnector: Partial<Connector>;
}

const Faq = ({ sourceConnector }: FaqProps) => {
    const [expanded, setExpanded] = useState<string | null>(null);

    const handleChange =
        (panel: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : null);
        };

    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical className={container}>
                <h2>FAQ</h2>
                <Wrapper>
                    {faqs(sourceConnector).map(
                        ({ question, content }, index) => {
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
                        }
                    )}
                </Wrapper>
            </Container>
        </section>
    );
};

export default Faq;
