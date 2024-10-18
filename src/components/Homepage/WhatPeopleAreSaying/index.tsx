import * as React from 'react';
import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import TestimonialsCarousel from '../../TestimonialsCarousel';
import { Wrapper } from './styles';

const WhatPeopleAreSaying = () => {
    return (
        <DarkSwoopingLinesLeftDirectionBackground>
            <Wrapper>
                <h2>What people are saying</h2>
                <TestimonialsCarousel />
            </Wrapper>
        </DarkSwoopingLinesLeftDirectionBackground>
    );
};

export default WhatPeopleAreSaying;
