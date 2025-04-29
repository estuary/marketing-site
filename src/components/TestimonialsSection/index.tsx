import { ReactNode } from 'react';
import TestimonialsCarousel from '../TestimonialsCarousel';
import {
    wrapper,
    container,
    sectionTitleWithGlobalMaxWidth,
} from './styles.module.less';

interface TestimonialsSectionProps {
    title?: ReactNode;
}

const TestimonialsSection = ({ title }: TestimonialsSectionProps) => {
    return (
        <section className={wrapper}>
            <div className={container}>
                <h2 className={sectionTitleWithGlobalMaxWidth}>
                    {title ?? (
                        <>
                            What <span>customers</span> are saying
                        </>
                    )}
                </h2>
                <TestimonialsCarousel />
            </div>
        </section>
    );
};

export default TestimonialsSection;
