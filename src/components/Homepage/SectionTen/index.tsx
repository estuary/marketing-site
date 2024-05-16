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
                    <span>
                        ESTUARY CAN WORK FOR YOU AND YOUR DATA
                    </span>
                </Title>
                <Buttons>
                    <HubspotButton
                        buttonLabel="Contact Us"
                        buttonId="section-ten-hubspot"
                    />
                    <Button
                        href="https://dashboard.estuary.dev/register"
                        target="_blank"
                    >
                        Try Now
                    </Button>
                    <Button
                        href={webinarsUrl}
                        target="_blank"
                    >
                        Watch Demo
                    </Button>
                </Buttons>
            </Wrapper>
        </Container>
    )
}

export default SectionSix
