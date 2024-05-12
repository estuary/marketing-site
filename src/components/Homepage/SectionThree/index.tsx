import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Button, Card, CardDescription, CardTitle, Cards, Container, Title, Wrapper } from "./styles"

const SectionThree = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    Case Studies
                </Title>
                <Cards>
                    <Card>
                        <StaticImage
                            placeholder="none"
                            alt="connect & go logo"
                            src="../../../images/c&g-logo.png"
                            layout="constrained"
                        />
                        <CardTitle>
                            CONNECT&GO
                        </CardTitle>
                        <CardDescription>
                            Connect&GO lowers MySQL to Snowflake latency up to 180x, improves productivity 4x with Estuary.
                        </CardDescription>
                        <Button to="/customers/casestudy/trueplatform" target="_blank" rel="noopener noreferrer">
                            Read
                        </Button>
                    </Card>
                    <Card>
                        <StaticImage
                            placeholder="none"
                            alt="connect & go logo"
                            src="../../../images/true-logo.png"
                            layout="constrained"
                        />
                        <CardTitle>
                            TRUE PLATFORM
                        </CardTitle>
                        <CardDescription>
                            True Platform reduced its data pipeline spend by &gt;2x and discovered seamless, scalable data movement
                        </CardDescription>
                        <Button to="/customers/casestudy/soli_&_company" target="_blank" rel="noopener noreferrer">
                            Read
                        </Button>
                    </Card>
                    <Card>
                        <StaticImage
                            placeholder="none"
                            alt="connect & go logo"
                            src="../../../images/soli&company-logo.png"
                            layout="constrained"
                        />
                        <CardTitle>
                            SOLI & COMPANY
                        </CardTitle>
                        <CardDescription>
                            Soli & Company trusts Estuary’s approachable pricing and quick setup to deliver change data capture solutions
                        </CardDescription>
                        <Button to="/customers/connectngo" target="_blank" rel="noopener noreferrer">
                            Read
                        </Button>
                    </Card>
                </Cards>
            </Wrapper>
        </Container>
    )
}

export default SectionThree
