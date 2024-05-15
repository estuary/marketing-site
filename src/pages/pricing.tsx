import "../layouts/Pricing/style.less"

import React from "react"

import Header from "../layouts/Pricing/Head"
import Wrapper from "../layouts/Pricing/Wrapper"

import { PricingCalculator } from "../components/PricingCalculator"
import CostCalculator from "../layouts/Pricing/Sections/CostCalculator"
import FrequentlyQuestions from "../layouts/Pricing/Sections/FrequentlyQuestions"
import Hero from "../layouts/Pricing/Sections/Hero"
import Plans from "../layouts/Pricing/Sections/Plans"
import PricingComparison from "../layouts/Pricing/Sections/PricingComparison"

const PricingPage = () => {
    return (
        <Wrapper>
            <Hero />
            <Plans />
            <PricingCalculator.Provider>
                <CostCalculator />
            </PricingCalculator.Provider>
            <PricingComparison />
            <FrequentlyQuestions />
        </Wrapper >
    )
}

export const Head = Header

export default PricingPage
