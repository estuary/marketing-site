import { PricingCalculatorComparison } from './PricingCalculatorComparison';
import { PricingCalculatorContextProvider } from './PricingCalculatorProvider';
import { PricingCalculatorSelector } from './PricingCalculatorSelector';
import { PricingCalculatorSlider } from './PricingCalculatorSlider';

export const PricingCalculator = {
    Provider: PricingCalculatorContextProvider,
    Slider: PricingCalculatorSlider,
    Comparison: PricingCalculatorComparison,
    Selector: PricingCalculatorSelector,
};
