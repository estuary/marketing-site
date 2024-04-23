import { useMediaQuery, useTheme } from '@mui/material';
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { isMobile as isRealMobile } from 'react-device-detect';
import { ColoredText, Container, FlowImageWrapper, Header, Step, StepDescription, StepIcon, StepOneIcon, StepThreeIcon, StepTitle, StepTwoIcon, Steps, Subtitle, Title } from "./styles";

const SectionTwo = () => {
    const theme = useTheme();
    const isMobile = isRealMobile || useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container>
            <Header>
                <Title>
                    <ColoredText>
                        Move
                    </ColoredText>{" "}
                    and{" "}
                    <ColoredText>
                        transform{" "}
                    </ColoredText>
                    your data across{" "}
                    <ColoredText>
                        apps, analytics, and AI{" "}
                    </ColoredText>
                    with the only{" "}
                    <ColoredText>
                        unified data pipeline
                    </ColoredText>
                </Title>
                <Subtitle>
                    Capture from Clouds, Databases and SaaS apps, create real-time transformations and materialized views, for a consistent, exact copy of your data powering both analytics and operations.
                </Subtitle>
            </Header>
            <Steps>
                <Step>
                    <StepIcon>
                        <StepOneIcon />
                    </StepIcon>
                    <div>
                        <StepTitle>
                            <span>01</span>Extract at &#62;50mb/s
                        </StepTitle>
                        <StepDescription>
                            Access 300+ performance connectors. Choose from Estuary CDC, bring your own, or import AirByte/Stich.
                        </StepDescription>
                    </div>
                </Step>

                <Step>
                    <StepIcon>
                        <StepTwoIcon />
                    </StepIcon>
                    <div>
                        <StepTitle>
                            <span>02</span>Store and Transform
                        </StepTitle>
                        <StepDescription>
                            Deliver data exactly-once, exactly how it’s needed with SQL or Typescript using own cloud data lake.
                        </StepDescription>
                    </div>
                </Step>

                <Step>
                    <StepIcon>
                        <StepThreeIcon />
                    </StepIcon>
                    <div>
                        <StepTitle>
                            <span>03</span>Real-time Delivery
                        </StepTitle>
                        <StepDescription>
                            Real-time or batch refreshes of your data, cleaned, verified, de-duped, and ready for decisioning.
                        </StepDescription>
                    </div>
                </Step>
            </Steps>
            <FlowImageWrapper>
                {isMobile ? (
                    <StaticImage
                        placeholder="none"
                        alt="dataflow graphic"
                        src="../../../images/flow-mobile.png"
                        layout="constrained"
                        quality={100}
                    />
                ) : (
                    <StaticImage
                        placeholder="none"
                        alt="dataflow graphic"
                        src="../../../images/flow-desktop.png"
                        layout="constrained"
                        quality={100}
                    />
                )}
            </FlowImageWrapper>
        </Container>
    )
}

export default SectionTwo
