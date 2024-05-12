import { useMediaQuery, useTheme } from '@mui/material';
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { ColoredText, Container, FlowImageWrapper, Header, Step, StepDescription, StepIcon, StepOneIcon, StepThreeIcon, StepTitle, StepTwoIcon, Steps, Subtitle, Title } from "./styles";

const SectionTwo = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
                    data with the only CDC platform built for{" "}
                    <ColoredText>
                        ops
                    </ColoredText>
                    ,{" "}
                    <ColoredText>
                        analytics
                    </ColoredText>
                    , and{" "}
                    <ColoredText>
                        AI
                    </ColoredText>
                </Title>
                <Subtitle>
                    Capture, transform, and materialize in real-time for an exact view of your data and every change that powers analytics and operations.
                </Subtitle>
            </Header>
            <Steps>
                <Step>
                    <StepIcon>
                        <StepOneIcon />
                    </StepIcon>
                    <div>
                        <StepTitle>
                            <span>01</span>Capture
                        </StepTitle>
                        <StepDescription>
                            Use 100s of no-code connectors for streaming CDC, real-time, or batch
                        </StepDescription>
                    </div>
                </Step>

                <Step>
                    <StepIcon>
                        <StepTwoIcon />
                    </StepIcon>
                    <div>
                        <StepTitle>
                            <span>02</span>Stream-store-replay
                        </StepTitle>
                        <StepDescription>
                            Stream and store in your own storage, then replay any time
                        </StepDescription>
                    </div>
                </Step>

                <Step>
                    <StepIcon>
                        <StepThreeIcon />
                    </StepIcon>
                    <div>
                        <StepTitle>
                            <span>03</span>Materialize
                        </StepTitle>
                        <StepDescription>
                            Load data at different speeds into many destinations for analytics, ops, and AI
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
