import FaqAccordions from '../../Faq/FaqAccordions';
import { container } from './styles.module.less';

const Faqs = ({ faqs }) => (
    <div className={container}>
        <h2>FAQ</h2>
        <FaqAccordions faqs={faqs} />
    </div>
);

export default Faqs;
