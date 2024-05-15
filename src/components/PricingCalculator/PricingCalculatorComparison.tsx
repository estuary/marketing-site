import * as React from "react"
import { currencyFormatter } from "../../utils"
import { PricingCalculatorContext } from "./PricingCalculatorProvider"
import { BrandName, BrandPrice, BrandWrapper, ComparisionWrapper } from "./styles"

export const PricingCalculatorComparison = () => {
  const { prices } = React.useContext(PricingCalculatorContext)

  return (
    <ComparisionWrapper>
      <BrandWrapper>
        <BrandName style={{ color: "#5072EB" }}>
          ESTUARY
        </BrandName>
        <BrandPrice style={{ fontWeight: 700, color: "#47506D" }}>
          {currencyFormatter.format(prices.estuary)}
        </BrandPrice>
      </BrandWrapper>
      <BrandWrapper>
        <BrandName>
          Confluent
        </BrandName>
        <BrandPrice>
          {currencyFormatter.format(prices.confluent)}
        </BrandPrice>
      </BrandWrapper>
      <BrandWrapper>
        <BrandName>
          Fivetran
        </BrandName>
        <BrandPrice>
          {currencyFormatter.format(prices.fivetran)}
        </BrandPrice>
      </BrandWrapper>
    </ComparisionWrapper>
  )
}
