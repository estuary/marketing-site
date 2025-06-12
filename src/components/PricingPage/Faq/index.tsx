import Container from '../../Container';
import FaqAccordions from '../../Faq/FaqAccordions';
import { faqs } from './faqs';
import { title } from './styles.module.less';

const Faq = () => {
    return (
        <section>
            <Container isVertical>
                <h2 className={title}>FAQs</h2>
                <FaqAccordions faqs={faqs} />
            </Container>
        </section>
    );
};

export default Faq;
