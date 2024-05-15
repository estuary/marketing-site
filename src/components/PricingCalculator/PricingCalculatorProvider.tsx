import * as React from "react";
import { calculatePrice, scale } from "../../utils";

interface PricingCalculatorContextProviderProps {
  children: React.ReactNode
}

interface PricingCalculatorContextProps {
  prices: {
    estuary: number;
    fivetran: number;
    confluent: number;
  };
  selectedGbs: number;
  setSelectedGbs: React.Dispatch<React.SetStateAction<number>>;
  selectedConnectors: number;
  setSelectedConnectors: React.Dispatch<React.SetStateAction<number>>;
}

export const PricingCalculatorContext = React.createContext<PricingCalculatorContextProps | undefined>(undefined)

export const PricingCalculatorContextProvider = ({ children }: PricingCalculatorContextProviderProps) => {
  const [selectedGbs, setSelectedGbs] = React.useState(1);
  const [selectedConnectors, setSelectedConnectors] = React.useState(2);

  const prices = React.useMemo(() => calculatePrice(scale(selectedGbs), selectedConnectors), [selectedGbs, selectedConnectors])

  return (
    <PricingCalculatorContext.Provider value={{
      prices,
      selectedGbs,
      setSelectedGbs,
      selectedConnectors,
      setSelectedConnectors,
    }}>
      {children}
    </PricingCalculatorContext.Provider>
  )
}
