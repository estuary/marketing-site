import Container from '../../Container';
import FaqAccordions from '../../Faq/FaqAccordions';
import { title } from './styles.module.less';
import { faqs } from './faqs';

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
