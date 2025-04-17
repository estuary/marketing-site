import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import TestimonialsCarousel from '../../TestimonialsCarousel';
import { sectionTitle } from '../styles.module.less';
import { container } from './styles.module.less';

const Testimonials = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <div className={container}>
                <h2 className={sectionTitle}>
                    What <span>customers</span> are saying
                </h2>
                <TestimonialsCarousel />
            </div>
        </section>
    );
};

export default Testimonials;
