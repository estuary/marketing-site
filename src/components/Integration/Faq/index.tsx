import Container from '../../Container';
import { Connector } from '../../../../shared';
import FaqAccordions from '../../Faq/FaqAccordions';
import { container } from './styles.module.less';
import { faqs } from './faqs';

interface FaqProps {
    sourceConnector: Partial<Connector>;
}

const Faq = ({ sourceConnector }: FaqProps) => {
    return (
        <section style={{ backgroundColor: 'var(--lighter-grey)' }}>
            <Container isVertical className={container}>
                <h2 style={{ color: 'var(--grey)' }}>FAQs</h2>
                <FaqAccordions
                    faqs={faqs(sourceConnector).filter((faq) => faq != null)}
                />
            </Container>
        </section>
    );
};

export default Faq;
