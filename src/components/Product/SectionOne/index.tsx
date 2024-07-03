import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { webinarsUrl } from '../../../../shared';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import Card from './Card';
import {
    ButtonsContainer,
    Cards,
    Container,
    ContainerContent,
    Description,
    Header,
    ImageWrapper,
    PrimaryButton,
    SecondaryButton,
    Title,
} from './styles';

const SectionOne = () => {
    return (
        <DefaultWrapperDarkBlue style={{ paddingTop: '50px' }}>
            <Container>
                <Header>
                    <ContainerContent>
                        <Title>ESTUARY FLOW</Title>
                        <Description>
                            Estuary Flow is the only platform purpose-built for
                            real-time ETL and ELT data pipelines. Batch-load for
                            analytics, and stream for ops and AI - all set up in
                            minutes, with millisecond latency.
                        </Description>
                        <ButtonsContainer>
                            <PrimaryButton
                                target="_blank"
                                href="https://dashboard.estuary.dev/register"
                            >
                                Build a Pipeline
                            </PrimaryButton>
                            <SecondaryButton
                                buttonLabel="Contact Us"
                                buttonId="product-page-section-one-hubspot"
                            />
                        </ButtonsContainer>
                    </ContainerContent>
                    <ImageWrapper>
                        <StaticImage
                            src="../../../images/real-time-graphic.png"
                            alt="Real-time graphic"
                            placeholder="none"
                            loading="eager"
                            layout="constrained"
                        />
                    </ImageWrapper>
                </Header>
                <Cards>
                    <Card
                        title="SEE OVERVIEW"
                        description="Learn how to build a pipeline in minutes."
                        isActive
                        href={webinarsUrl}
                        icon={
                            <StaticImage
                                src="../../../svgs/product-page/section-one/record-outlined.svg"
                                alt="Watch a video to build a pipeline in minutes"
                                loading="eager"
                            />
                        }
                    />
                    <Card
                        title="QUICKSTART"
                        description="Create a free account and use a tutorial for a pipeline."
                        href="https://docs.estuary.dev/getting-started/installation/"
                        icon={
                            <StaticImage
                                src="../../../svgs/product-page/section-one/sign-up-outlined.svg"
                                alt="Register now and learn how to create a pipeline with our tutorial"
                                loading="eager"
                            />
                        }
                    />
                    <Card
                        title="JOIN COMMUNITY"
                        description="Connect with others, and ask the experts."
                        href="https://estuary-dev.slack.com/join/shared_invite/zt-86nal6yr-VPbv~YfZE9Q~6Zl~gmZdFQ#/shared-invite/email"
                        icon={
                            <StaticImage
                                src="../../../svgs/product-page/section-one/slack-outlined.svg"
                                alt="Join the Estuary community and receive support from experts"
                                style={{ color: '#5072EB' }}
                                loading="eager"
                            />
                        }
                    />
                </Cards>
            </Container>
        </DefaultWrapperDarkBlue>
    );
};

export default SectionOne;
