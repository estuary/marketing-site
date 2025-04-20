import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import FaqAccordions from '../../Faq/FaqAccordions';
import { sectionTitle } from './styles.module.less';

const Faqs = ({ faqs }) => {
    return (
        <section className={defaultWrapperDark}>
            <Container isVertical>
                <h2 className={sectionTitle}>FAQ</h2>
                <FaqAccordions faqs={faqs} />
            </Container>
        </section>
    );
};

export default Faqs;
