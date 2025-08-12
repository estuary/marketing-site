import Container from '../../Container';
import { Connector } from '../../../../shared';
import FaqAccordions from '../../Faq/FaqAccordions';
import { faqs } from './faqs';
import { container } from './styles.module.less';

interface FaqProps {
    sourceConnector: Partial<Connector>;
}

const Faq = ({ sourceConnector }: FaqProps) => {
    return (
        <section>
            <Container isVertical className={container}>
                <h2>FAQs</h2>
                <FaqAccordions
                    faqs={faqs(sourceConnector).filter((faq) => faq != null)}
                />
            </Container>
        </section>
    );
};

export default Faq;
