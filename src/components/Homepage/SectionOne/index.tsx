import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import Marquee from "react-fast-marquee"
import AnimFallback from "./AnimFallback"
import AnimatedHero from "./AnimatedHero"
import {
    Container,
    FlowAnimationContainer,
    HomepageDescription,
    HomepageHeader,
    HomepageHeadingButtons,
    HomepageTitle,
    MainContent,
    MarqueeWrapper,
    PrimaryButton,
    SecondaryButton,
    VanityLogo
} from "./styles"

const SectionOne = () => {
    const logos = useStaticQuery(graphql`
        {
            allStrapiVanityLogo(
                sort: { SortOrder: DESC }
                filter: { Enabled: { eq: true } }
            ) {
                nodes {
                    id
                    enabled: Enabled
                    logo: Logo {
                        localFile {
                            svg {
                                content
                            }
                            name
                            internal {
                                mediaType
                            }
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FIXED
                                    width: 140
                                    placeholder: NONE
                                )
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <Container>
            <MainContent>
                <HomepageHeader>
                    <HomepageTitle>
                        <span>
                            Real-time ETL & CDC,
                        </span>
                        {" "}
                        <br />
                        <span>
                            up in minutes.
                        </span>
                    </HomepageTitle>
                    <HomepageDescription>
                        Stream, replicate, and transform data in &#60;100ms using no-code connectors custom built for high-throughput and low-latency CDC & ETL.
                    </HomepageDescription>
                    <HomepageHeadingButtons>
                        <PrimaryButton
                            target="_blank"
                            href="https://dashboard.estuary.dev/register"
                        >
                            Build a Pipeline
                        </PrimaryButton>
                        <SecondaryButton
                            buttonLabel="Contact Us"
                            buttonId="section-one-hubspot"
                        />
                    </HomepageHeadingButtons>
                </HomepageHeader>
                <FlowAnimationContainer>
                    <React.Suspense fallback={AnimFallback}>
                        <AnimatedHero />
                    </React.Suspense>
                </FlowAnimationContainer>
            </MainContent>
            <MarqueeWrapper>
                <Marquee>
                    {logos.allStrapiVanityLogo.nodes?.map(logo =>
                        logo.logo.localFile.internal.mediaType ===
                            "image/svg+xml" ? (
                            <VanityLogo key={logo.id}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: logo.logo.localFile.svg.content,
                                    }}
                                />
                            </VanityLogo>
                        ) : (
                            <VanityLogo key={logo.id}>
                                <GatsbyImage
                                    alt={`logo`}
                                    loading="eager"
                                    image={
                                        logo.logo.localFile.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </VanityLogo>
                        )
                    )}
                </Marquee>
            </MarqueeWrapper>
        </Container>
    )
}

export default SectionOne
