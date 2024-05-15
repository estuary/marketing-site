import * as React from "react"
import { currencyFormatter } from "../../utils"
import { PricingCalculatorContext } from "./PricingCalculatorProvider"
import { BrandName, BrandPrice, BrandWrapper, ComparisonWrapper } from "./styles"

export const PricingCalculatorComparison = () => {
  const { prices } = React.useContext(PricingCalculatorContext)

  return (
    <ComparisonWrapper>
      <BrandWrapper>
        <BrandName>
          ESTUARY
        </BrandName>
        <BrandPrice>
          <span>{currencyFormatter.format(prices.estuary)}</span> / month
        </BrandPrice>
      </BrandWrapper>
      <BrandWrapper>
        <BrandName>
          Confluent
        </BrandName>
        <BrandPrice>
          <span>{currencyFormatter.format(prices.confluent)}</span> / month
        </BrandPrice>
      </BrandWrapper>
      <BrandWrapper>
        <BrandName>
          Fivetran
        </BrandName>
        <BrandPrice>
          <span>{currencyFormatter.format(prices.fivetran)}</span> / month
        </BrandPrice>
      </BrandWrapper>
    </ComparisonWrapper>
  )
}
