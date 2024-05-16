import * as React from "react"
import { Button, CardContainer, CardDescription, CardTitle } from "./styles"

type CardProps = {
  href: string
  title: string
  description: string
  image: React.ReactNode
}

export const Card = ({ href, title, description, image }: CardProps) => {
  return (
    <CardContainer>
      {image}
      <CardTitle>
        {title}
      </CardTitle>
      <CardDescription>
        {description}
      </CardDescription>
      <Button to={href} target="_blank" rel="noopener noreferrer">
        Read
      </Button>
    </CardContainer>
  )
}

export default Card
