import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import TestimonialsCarousel from '../../TestimonialsCarousel';
import { container, title } from './styles.module.less';

const Testimonials = () => {
    return (
        <section className={defaultWrapperGrey}>
            <div className={container}>
                <h2 className={title}>
                    WHAT <span>CUSTOMERS</span> ARE SAYING
                </h2>
                <TestimonialsCarousel theme="dark" />
            </div>
        </section>
    );
};

export default Testimonials;
