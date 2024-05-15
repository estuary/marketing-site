import * as React from "react"
import DatabaseSavingWithLowPrice from "../../../svgs/database-saving-with-low-price.svg"
import { PricingCalculator } from "../../PricingCalculator"
import { Button, Container, Description, IconWrapper, LeftColumn, RightColumn, Title, Wrapper } from "./styles"

const SectionEight = () => {
  return (
    <Container>
      <Wrapper>
        <LeftColumn>
          <IconWrapper>
            <DatabaseSavingWithLowPrice color="#5072EB" />
          </IconWrapper>
          <Title>
            <span>
              DO {" "}
            </span>
            4X MORE {" "}
            <span>
              WITH 2-5X LESS
            </span>
          </Title>
          <Description>
            Estuary customers aren’t just benefitting from being more real-time. They are 4x more productive. They deliver new projects in days, not months. And they spend 2-5x less on Estuary than on batch ELT.
          </Description>
          <Button
            to="/pricing"
            target="_blank"
          >
            Calculate your savings
          </Button>
        </LeftColumn>
        <RightColumn>
          <PricingCalculator.Provider>
            <PricingCalculator.Slider title="Pricing Calculator" />
            <PricingCalculator.Selector />
            <PricingCalculator.Comparison />
          </PricingCalculator.Provider>
        </RightColumn>
      </Wrapper>
    </Container>
  )
}

export default SectionEight
