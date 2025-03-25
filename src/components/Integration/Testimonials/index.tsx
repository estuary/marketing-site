import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import TestimonialsCarousel from '../../TestimonialsCarousel';
import { container, title } from './styles.module.less';

const Testimonials = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <div className={container}>
                <h2 className={title}>
                    WHAT <span>CUSTOMERS</span> ARE SAYING
                </h2>
                <TestimonialsCarousel />
            </div>
        </section>
    );
};

export default Testimonials;
