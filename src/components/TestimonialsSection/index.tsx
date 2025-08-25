import { ReactNode } from 'react';
import clsx from 'clsx';
import TestimonialsCarousel from '../TestimonialsCarousel';
import {
    wrapper,
    container,
    sectionTitleWithGlobalMaxWidth,
    lightTheme,
} from './styles.module.less';

interface TestimonialsSectionProps {
    title?: ReactNode;
    isDarkTheme?: boolean;
}

const TestimonialsSection = ({
    title,
    isDarkTheme = false,
}: TestimonialsSectionProps) => {
    return (
        <section className={clsx(wrapper, !isDarkTheme && lightTheme)}>
            <div className={container}>
                <h2 className={sectionTitleWithGlobalMaxWidth}>
                    {title ?? (
                        <>
                            What <span>customers</span> are saying
                        </>
                    )}
                </h2>
                <TestimonialsCarousel theme={isDarkTheme ? 'dark' : 'light'} />
            </div>
        </section>
    );
};

export default TestimonialsSection;
