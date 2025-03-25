import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';

const Faq = () => {
    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical>
                <h2>FAQ</h2>
                {/* PUT THE QUESTIONs AND ANSWERS HERE - REUSE THE COMPONENT FROM PRICING PAGE */}
            </Container>
        </section>
    );
};

export default Faq;
