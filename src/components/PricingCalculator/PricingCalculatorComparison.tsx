import * as React from "react"
import BrandCard from "./BrandCard"
import { PricingCalculatorContext } from "./PricingCalculatorProvider"
import { ComparisonWrapper } from "./styles"

export const PricingCalculatorComparison = () => {
  const { prices } = React.useContext(PricingCalculatorContext)

  return (
    <ComparisonWrapper>
      <BrandCard
        title="ESTUARY"
        price={prices.estuary}
      />
      <BrandCard
        title="Confluent"
        price={prices.confluent}
      />
      <BrandCard
        title="Fivetran"
        price={prices.fivetran}
      />
    </ComparisonWrapper>
  )
}
