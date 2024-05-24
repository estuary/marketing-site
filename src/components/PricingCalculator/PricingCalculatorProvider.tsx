import * as React from 'react';
import { calculatePrice, scale } from '../../utils';

type PricingCalculatorContextProviderProps = {
    children: React.ReactNode;
};

type Prices = {
    estuary: number;
    fivetran: number;
    confluent: number;
};

type PricingCalculatorContextProps = {
    prices: Prices;
    selectedGbs: number;
    setSelectedGbs: React.Dispatch<React.SetStateAction<number>>;
    selectedConnectors: number;
    setSelectedConnectors: React.Dispatch<React.SetStateAction<number>>;
};

export const PricingCalculatorContext = React.createContext<
    PricingCalculatorContextProps
>({
    prices: {
        estuary: 0,
        fivetran: 0,
        confluent: 0
    },
    selectedGbs: 0,
    setSelectedGbs: () => { },
    selectedConnectors: 0,
    setSelectedConnectors: () => { },
});

export const PricingCalculatorContextProvider = ({
    children,
}: PricingCalculatorContextProviderProps) => {
    const [selectedGbs, setSelectedGbs] = React.useState(1);
    const [selectedConnectors, setSelectedConnectors] = React.useState(2);

    const prices = React.useMemo(
        () => calculatePrice(scale(selectedGbs), selectedConnectors),
        [selectedGbs, selectedConnectors]
    );

    return (
        <PricingCalculatorContext.Provider
            value={{
                prices,
                selectedGbs,
                setSelectedGbs,
                selectedConnectors,
                setSelectedConnectors,
            }}
        >
            {children}
        </PricingCalculatorContext.Provider>
    );
};

export const usePricingCalculator = () => (
    React.useContext<PricingCalculatorContextProps>(PricingCalculatorContext)
)
