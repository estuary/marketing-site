import * as React from 'react';
import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import TestimonialsCarousel from '../../TestimonialsCarousel';
import Container from '../../Container';
import { Title } from './styles';

const WhatPeopleAreSaying = () => {
    return (
        <DarkSwoopingLinesLeftDirectionBackground>
            <Container isVertical>
                <Title>What people are saying</Title>
                <TestimonialsCarousel />
            </Container>
        </DarkSwoopingLinesLeftDirectionBackground>
    );
};

export default WhatPeopleAreSaying;
