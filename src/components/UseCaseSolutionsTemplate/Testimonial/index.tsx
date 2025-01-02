import React from 'react';
import Container from '../../Container';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import { TestimonialSectionContent } from '../../../templates/use-case-solutions';
import { container, quoteBox } from './styles.module.less';

interface TestimonialProps {
    data: TestimonialSectionContent;
}

const Testimonial = ({ data }: TestimonialProps) => {
    return (
        <section className={defaultWrapperGrey}>
            <Container className={container}>
                <div className={quoteBox}>
                    <div>
                        <h3>{data.quote.author.name}</h3>
                        <span>{data.quote.author.role}</span>
                        <p>{data.quote.text}</p>
                    </div>
                </div>
                <div>
                    <h2>
                        <span>{data.title.highlightedText}</span>{' '}
                        {data.title.normalText}
                    </h2>
                    <p>{data.description}</p>
                </div>
            </Container>
        </section>
    );
};

export default Testimonial;
