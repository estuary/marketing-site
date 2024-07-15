import * as React from 'react';
import { calculatePrice, scale } from '../../utils';

type PricingCalculatorContextProviderProps = {
    children: React.ReactNode;
    isDarkTheme?: boolean;
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
    isDarkTheme: boolean;
};

export const PricingCalculatorContext =
    React.createContext<PricingCalculatorContextProps>({
        prices: {
            estuary: 0,
            fivetran: 0,
            confluent: 0,
        },
        selectedGbs: 0,
        setSelectedGbs: () => {},
        selectedConnectors: 0,
        setSelectedConnectors: () => {},
        isDarkTheme: false,
    });

export const PricingCalculatorContextProvider = ({
    children,
    isDarkTheme = false,
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
                isDarkTheme,
            }}
        >
            {children}
        </PricingCalculatorContext.Provider>
    );
};

export const usePricingCalculator = () =>
    React.useContext<PricingCalculatorContextProps>(PricingCalculatorContext);
