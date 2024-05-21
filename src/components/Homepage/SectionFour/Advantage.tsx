import React from "react"
import Checkmark from "../../../svgs/checkmark.svg"
import { AdvantageContainer, AdvantageTitle } from "./styles"

type AdvantageProps = {
  title: string
}

const Advantage = ({ title }: AdvantageProps) => {
  return (
    <AdvantageContainer>
      <Checkmark width={32} height={32} color="#5072EB" />
      <AdvantageTitle>
        {title}
      </AdvantageTitle>
    </AdvantageContainer>
  )
}

export default Advantage
