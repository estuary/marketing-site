import * as React from "react"
import { currencyFormatter } from "../../utils"
import { BrandName, BrandPrice, BrandWrapper } from "./styles"

type BrandCardProps = {
  title: string
  price: number
}

export const BrandCard = ({ title, price }: BrandCardProps) => {
  return (
    <BrandWrapper>
      <BrandName>
        {title}
      </BrandName>
      <BrandPrice>
        <span>{currencyFormatter.format(price)}</span> / month
      </BrandPrice>
    </BrandWrapper>
  )
}

export default BrandCard
