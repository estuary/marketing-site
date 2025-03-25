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

    const modifiedFaqs =
        sourceConnector.longDescription ?? sourceConnector.shortDescription
            ? [
                  faqs[0],
                  {
                      questionNumber: 2,
                      question: `What is ${sourceConnector.title}?`,
                      content: (
                          <p>
                              {sourceConnector.longDescription ??
                                  sourceConnector.shortDescription}
                          </p>
                      ),
                  },
                  ...faqs.slice(1),
              ]
            : faqs;

    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical className={container}>
                <h2>FAQ</h2>
                <Wrapper>
                    {modifiedFaqs.map(({ question, content }, index) => (
                        <Accordion
                            key={index + 1}
                            questionNumber={index + 1}
                            question={question}
                            expanded={expanded === `question${index + 1}`}
                            onChange={handleChange(`question${index + 1}`)}
                        >
                            {content}
                        </Accordion>
                    ))}
                </Wrapper>
            </Container>
        </section>
    );
};

export default Faq;
