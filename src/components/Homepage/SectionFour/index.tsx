import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import useWindowExistence from "../../../hooks/useWindowExistence"
import Checkmark from "../../../svgs/checkmark.svg"
import RealTimeCdc from "../../../svgs/real-time-cdc.svg"
import { Advantage, AdvantageWrapper, AdvantagesList, Button, Container, Description, IconWrapper, LeftColumn, RightColumn, Title, Wrapper } from "./styles"

const SectionFour = () => {
  const hasWindow = useWindowExistence();

  return (
    <Container>
      <Wrapper>
        <LeftColumn>
          <IconWrapper>
            <RealTimeCdc />
          </IconWrapper>
          <Title>
            <span>
              Use the best {" "}
            </span>
            real-time CDC
          </Title>
          <Description>
            Estuary Flow is the most real-time, most reliable change data capture (CDC) available today. It is the only CDC with the:
          </Description>
          <AdvantagesList>
            <AdvantageWrapper>
              <Checkmark width={32} height={32} color="#5072EB" />
              <Advantage>
                Fastest captures, with sub-100ms end-to-end latency
              </Advantage>
            </AdvantageWrapper>
            <AdvantageWrapper>
              <Checkmark width={32} height={32} color="#5072EB" />
              <Advantage>
                Most reliable delivery via stream-store-replay
              </Advantage>
            </AdvantageWrapper>
            <AdvantageWrapper>
              <Checkmark width={32} height={32} color="#5072EB" />
              <Advantage>
                Most flexible materializations that run at your speed of choice
              </Advantage>
            </AdvantageWrapper>
            <AdvantageWrapper>
              <Checkmark width={32} height={32} color="#5072EB" />
              <Advantage>
                Most automated pipelines with schema evolution
              </Advantage>
            </AdvantageWrapper>
            <AdvantageWrapper>
              <Checkmark width={32} height={32} color="#5072EB" />
              <Advantage>
                Most versatile writes that maintain a current view or all change history
              </Advantage>
            </AdvantageWrapper>
            <AdvantageWrapper>
              <Checkmark width={32} height={32} color="#5072EB" />
              <Advantage>
                Most scalable pipelines, with true elastic scaling.
              </Advantage>
            </AdvantageWrapper>
          </AdvantagesList>
          <Button to="/integrations" target="_blank" rel="noopener noreferrer">
            View Connectors
          </Button>
        </LeftColumn>
        <RightColumn>
          <StaticImage
            src="../../../images/real-time-graphic.png"
            alt="Real-time graphic"
            placeholder="none"
            loading="lazy"
            layout="constrained"
            quality={100}
          />
        </RightColumn>
      </Wrapper>
    </Container>
  )
}

export default SectionFour
