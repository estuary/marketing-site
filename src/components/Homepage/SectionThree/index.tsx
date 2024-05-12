import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import useWindowExistence from "../../../hooks/useWindowExistence"
import { Button, Card, CardDescription, CardTitle, Cards, Container, Title, Wrapper } from "./styles"

const SectionThree = () => {
    const hasWindow = useWindowExistence();

    return (
        <Container>
            <Wrapper>
                <Title>
                    CASE STUDIES
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
                        <Button>
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
                        <Button>
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
                        <Button>
                            Read
                        </Button>
                    </Card>
                </Cards>
            </Wrapper>
        </Container>
    )
}

export default SectionThree
