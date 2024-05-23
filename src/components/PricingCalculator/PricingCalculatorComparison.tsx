import * as React from 'react';
import BrandCard from './BrandCard';
import { PricingCalculatorContext } from './PricingCalculatorProvider';
import { ComparisonWrapper } from './styles';

export const PricingCalculatorComparison = () => {
    const pricingCalculator = React.useContext(PricingCalculatorContext);

    return (
        <ComparisonWrapper>
            <BrandCard
                title="ESTUARY"
                price={pricingCalculator?.prices.estuary ?? 0}
            />
            <BrandCard
                title="Confluent"
                price={pricingCalculator?.prices.confluent ?? 0}
            />
            <BrandCard
                title="Fivetran"
                price={pricingCalculator?.prices.fivetran ?? 0}
            />
        </ComparisonWrapper>
    );
};
