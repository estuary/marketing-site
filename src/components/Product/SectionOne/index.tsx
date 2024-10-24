import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import {
    dashboardRegisterUrl,
    docsPageUrl,
    slackUrl,
    webinarsUrl,
} from '../../../../shared';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import { sectionOneImageWrapper } from '../../../globalStyles/sections.module.less';
import SubscriptionBenefits from '../../SubscriptionBenefits';
import RecordIcon from '../../../svgs/record-outlined.svg';
import Card from './Card';
import {
    ButtonsContainer,
    Cards,
    Container,
    ContainerContent,
    Description,
    Header,
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
                                href={dashboardRegisterUrl}
                            >
                                Build a Pipeline
                            </PrimaryButton>
                            <SecondaryButton href="/contact-us" target="_blank">
                                Contact Us
                            </SecondaryButton>
                        </ButtonsContainer>
                        <SubscriptionBenefits />
                    </ContainerContent>
                    <div className={sectionOneImageWrapper}>
                        <StaticImage
                            src="../../../images/real-time-graphic.png"
                            alt="Real-time ETL with Estuary Flow: Seamlessly move data from source to destination for immediate analysis and actionable insights."
                            placeholder="none"
                            loading="eager"
                        />
                    </div>
                </Header>
                <Cards>
                    <Card
                        title="SEE OVERVIEW"
                        description="Learn how to build a pipeline in minutes."
                        isActive
                        href={webinarsUrl}
                        icon={<RecordIcon color="#fff" />}
                    />
                    <Card
                        title="QUICKSTART"
                        description="Create a free account and use a tutorial for a pipeline."
                        href={`${docsPageUrl}/getting-started/installation/`}
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
                        href={slackUrl}
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
