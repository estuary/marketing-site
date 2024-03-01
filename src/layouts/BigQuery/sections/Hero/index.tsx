import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Content from "./components/Content"

import { Wrapper, Container, ContainerImage } from "./style"

const Hero = () => {
    return (
        <Wrapper>
            <Container>
                <Content />
                <ContainerImage>
                    <StaticImage
                        placeholder="none"
                        alt="take a tour"
                        src="../../../../images/lp-big-query/hero/Frame.png"
                        layout="constrained"
                    />
                </ContainerImage>
            </Container>
        </Wrapper>
    )
};

export default Hero