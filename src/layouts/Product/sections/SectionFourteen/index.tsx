import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { LinkOutlined } from '../../../../globalStyles';
import { DefaultWrapperDark } from '../../../../styles/wrappers';
import CalendarIcon from '../../../../svgs/product-page/section-fourteen/calendar.svg';
import LoginIcon from '../../../../svgs/product-page/section-fourteen/login.svg';
import {
    BoxDescription,
    BoxTitle,
    Boxes,
    Columns,
    ContactUsBox,
    Container,
    GetStartedBox,
    IconWrapper,
    ImageWrapper,
    TextWrapper,
    Title,
} from './styles';

const SectionFourteen = () => {
    return (
        <DefaultWrapperDark>
            <Container>
                <Title>READY TO START?</Title>
                <Columns>
                    <Boxes>
                        <GetStartedBox>
                            <TextWrapper>
                                <BoxTitle>GET STARTED</BoxTitle>
                                <BoxDescription>
                                    Try out Estuary free, and build a new
                                    pipeline in minutes.
                                </BoxDescription>
                            </TextWrapper>
                            <LinkOutlined to="https://dashboard.estuary.dev/register">
                                <IconWrapper>
                                    <LoginIcon color="#5072EB" />
                                </IconWrapper>
                                Register page
                            </LinkOutlined>
                        </GetStartedBox>
                        <ContactUsBox>
                            <TextWrapper>
                                <BoxTitle>CONTACT US</BoxTitle>
                                <BoxDescription>
                                    Set up an appointment to get a personalized
                                    overview.
                                </BoxDescription>
                            </TextWrapper>
                            <LinkOutlined to="/about#contact-us">
                                <IconWrapper>
                                    <CalendarIcon color="#5072EB" />
                                </IconWrapper>
                                Set up an appointment
                            </LinkOutlined>
                        </ContactUsBox>
                    </Boxes>
                    <ImageWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Rocket image"
                            src="../../../../images/product-page/section-fourteen/rocket.png"
                            layout="constrained"
                            loading="lazy"
                        />
                    </ImageWrapper>
                </Columns>
            </Container>
        </DefaultWrapperDark>
    );
};

export default SectionFourteen;
