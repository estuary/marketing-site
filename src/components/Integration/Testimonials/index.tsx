import clsx from 'clsx';
import TestimonialsCarousel from '../../TestimonialsCarousel';
import { sectionTitle } from '../styles.module.less';
import {
    wrapper,
    container,
    sectionTitleWithGlobalMaxWidth,
} from './styles.module.less';

const Testimonials = () => {
    return (
        <section className={wrapper}>
            <div className={container}>
                <h2
                    className={clsx(
                        sectionTitle,
                        sectionTitleWithGlobalMaxWidth
                    )}
                >
                    What <span>customers</span> are saying
                </h2>
                <TestimonialsCarousel />
            </div>
        </section>
    );
};

export default Testimonials;
