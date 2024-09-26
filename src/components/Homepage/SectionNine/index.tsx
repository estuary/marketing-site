import * as React from 'react';
import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import TestimonialsCarousel from '../../TestimonialsCarousel';
import { Wrapper } from './styles';

const SectionNine = () => {
    return (
        <DarkSwoopingLinesLeftDirectionBackground>
            <Wrapper>
                <h2>What Our Customers Are Saying</h2>
                <TestimonialsCarousel />
            </Wrapper>
        </DarkSwoopingLinesLeftDirectionBackground>
    );
};

export default SectionNine;
