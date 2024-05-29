import './style.less';

import React from 'react';

import Header from './Head';
import Wrapper from './Wrapper';

import Hero from './Sections/Hero';
import Plans from './Sections/Plans';
import CostCalculator from './Sections/CostCalculator';
import PricingComparison from './Sections/PricingComparison';
import FrequentlyQuestions from './Sections/FrequentlyQuestions';

const PricingPage = () => {
    return (
        <Wrapper>
            <Hero />
            <Plans />
            <CostCalculator />
            <PricingComparison />
            <FrequentlyQuestions />
        </Wrapper>
    );
};

export const Head = Header;

export default PricingPage;
