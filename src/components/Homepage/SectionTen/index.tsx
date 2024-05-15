import * as React from "react"
import { webinarsUrl } from "../../../../shared"
import { Button, Buttons, Container, HubspotButton, Title, Wrapper } from "./styles"

const SectionSix = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    <span>
                        SEE HOW {" "}
                    </span>
                    ESTUARY CAN WORK FOR YOU AND YOUR DATA
                </Title>
                <Buttons>
                    <HubspotButton
                        buttonLabel="Contact Us"
                        buttonId="section-one-hubspot"
                    />
                    <Button
                        href="https://dashboard.estuary.dev/register"
                        target="_blank"
                    >
                        Try now
                    </Button>
                    <Button
                        href={webinarsUrl}
                        target="_blank"
                    >
                        Watch demo
                    </Button>
                </Buttons>
            </Wrapper>
        </Container>
    )
}

export default SectionSix
