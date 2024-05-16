import { InputLabel } from "@mui/material"
import * as React from "react"
import MinusSign from "../../svgs/minus-sign.svg"
import PlusSign from "../../svgs/plus-sign.svg"
import { PricingCalculatorContext } from "./PricingCalculatorProvider"
import { ButtonMinus, ButtonPlus, ConnectorsCounterWrapper, CountInput, Form } from "./styles"

export const PricingCalculatorSelector = () => {
  const { selectedConnectors, setSelectedConnectors } = React.useContext(PricingCalculatorContext)

  const handleMinusClick = () => {
    setSelectedConnectors(c => Math.max(2, c - 1));
  }

  const handlePlusClick = () => setSelectedConnectors(c => Math.max(0, c + 1))

  const handleCountInputChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = parseInt(evt.target.value)
    setSelectedConnectors(value >= 2 ? value : 2)
  }

  return (
    <ConnectorsCounterWrapper>
      <ButtonMinus onClick={handleMinusClick}>
        <MinusSign />
      </ButtonMinus>
      <Form variant="outlined">
        <InputLabel htmlFor="pricing-calculator-selector-input">Number of connectors</InputLabel>
        <CountInput
          id="pricing-calculator-selector-input"
          label="Number of connectors"
          inputProps={{
            style: { textAlign: "center" },
            min: 2
          }}
          type="number"
          value={selectedConnectors}
          onChange={handleCountInputChange}
          notched
        />
      </Form>
      <ButtonPlus onClick={handlePlusClick}>
        <PlusSign />
      </ButtonPlus>
    </ConnectorsCounterWrapper>
  )
}
