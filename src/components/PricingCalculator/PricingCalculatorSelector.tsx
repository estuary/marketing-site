import { InputLabel } from "@mui/material"
import * as React from "react"
import PlusSign from "../../svgs/plus-sign.svg"
import { PricingCalculatorContext } from "./PricingCalculatorProvider"
import { ButtonMinus, ButtonPlus, ConnectorsCounterWrapper, CountInput, Form } from "./styles"

export const PricingCalculatorSelector = () => {
  const { selectedConnectors, setSelectedConnectors } = React.useContext(PricingCalculatorContext)

  const handleMinusClick = () => setSelectedConnectors(c => Math.max(0, c - 1))
  const handlePlusClick = () => setSelectedConnectors(c => Math.max(0, c + 1))

  return (
    <ConnectorsCounterWrapper>
      <ButtonMinus onClick={handleMinusClick}>
        <svg
          width="15"
          height="2"
          viewBox="0 0 15 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="15"
            height="2"
            rx="1"
            fill="#ffffff"
          />
        </svg>
      </ButtonMinus>
      <Form variant="outlined">
        <InputLabel htmlFor="pricing-calculator-selector-input">Number of connectors</InputLabel>
        <CountInput
          id="pricing-calculator-selector-input"
          label="Number of connectors"
          inputProps={{ style: { textAlign: "center" } }}
          type="number"
          value={selectedConnectors}
          onChange={evt => setSelectedConnectors(+evt.target.value)}
          notched
        />
      </Form>
      <ButtonPlus onClick={handlePlusClick}>
        <PlusSign />
      </ButtonPlus>
    </ConnectorsCounterWrapper>
  )
}
