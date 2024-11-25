import * as React from 'react';
import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import TestimonialsCarousel from '../../TestimonialsCarousel';
import Container from '../../Container';
import { title } from './styles.module.less';

const WhatPeopleAreSaying = () => {
    return (
        <DarkSwoopingLinesLeftDirectionBackground>
            <Container isVertical>
                <h2 className={title}>What people are saying</h2>
                <TestimonialsCarousel />
            </Container>
        </DarkSwoopingLinesLeftDirectionBackground>
    );
};

export default WhatPeopleAreSaying;
