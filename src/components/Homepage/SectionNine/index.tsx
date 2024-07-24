import * as React from 'react';
import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import TestimonialsCarousel from '../../TestimonialsCarousel';
import { Wrapper } from './styles';

const SectionNine = () => {
    return (
        <DarkSwoopingLinesLeftDirectionBackground backgroundColor="#04192b">
            <Wrapper>
                <TestimonialsCarousel />
            </Wrapper>
        </DarkSwoopingLinesLeftDirectionBackground>
    );
};

export default SectionNine;
