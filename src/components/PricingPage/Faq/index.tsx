import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import FaqAccordions from '../../Faq/FaqAccordions';
import { title } from './styles.module.less';
import { faqs } from './faqs';

const Faq = () => {
    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical>
                <h2 className={title}>FAQs</h2>
                <FaqAccordions faqs={faqs} />
            </Container>
        </section>
    );
};

export default Faq;
