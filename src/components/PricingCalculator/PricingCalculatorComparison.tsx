import * as React from "react"
import OpenHubspotModal from "../HubSpot/OpenModal"
import BrandCard from "./BrandCard"
import { usePricingCalculator } from "./PricingCalculatorProvider"
import { ComparisonWrapper } from "./styles"

export const PricingCalculatorComparison = () => {
  const { selectedConnectors, selectedGbs, prices } = usePricingCalculator()

  return (
    <ComparisonWrapper>
      {selectedConnectors === 21 || selectedGbs === 5 ? (
        <OpenHubspotModal
          buttonLabel="Need More?"
          buttonId="section-one-hubspot"
        />
      ) : (
        <>
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
        </>
      )}
    </ComparisonWrapper>
  )
}
