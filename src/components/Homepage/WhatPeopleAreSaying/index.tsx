import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import TestimonialsCarousel from '../../TestimonialsCarousel';
import Container from '../../Container';
import { container } from './styles.module.less';

const WhatPeopleAreSaying = () => {
    return (
        <DarkSwoopingLinesLeftDirectionBackground>
            <Container isVertical isDarkTheme className={container}>
                <h2>What people are saying</h2>
                <TestimonialsCarousel />
            </Container>
        </DarkSwoopingLinesLeftDirectionBackground>
    );
};

export default WhatPeopleAreSaying;
