import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { LinkOutlined } from '../../../globalStyles';
import { DefaultWrapperDark } from '../../../styles/wrappers';
import CalendarIcon from '../../../svgs/product-page/section-fourteen/calendar.svg';
import LoginIcon from '../../../svgs/product-page/section-fourteen/login.svg';
import { OutboundLinkOutlined } from '../../OutboundLink';
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
                                <BoxTitle>BUILD A PIPELINE</BoxTitle>
                                <BoxDescription>
                                    Try out Estuary free, and build a new
                                    pipeline in minutes.
                                </BoxDescription>
                            </TextWrapper>
                            <OutboundLinkOutlined
                                href="https://dashboard.estuary.dev/register"
                                target="_blank"
                            >
                                <IconWrapper>
                                    <LoginIcon color="#5072EB" />
                                </IconWrapper>
                                GET STARTED
                            </OutboundLinkOutlined>
                        </GetStartedBox>
                        <ContactUsBox>
                            <TextWrapper>
                                <BoxTitle>SET UP AN APPOINTMENT</BoxTitle>
                                <BoxDescription>
                                    Set up an appointment to get a personalized
                                    overview.
                                </BoxDescription>
                            </TextWrapper>
                            <LinkOutlined to="/about#contact-us">
                                <IconWrapper>
                                    <CalendarIcon color="#5072EB" />
                                </IconWrapper>
                                CONTACT US
                            </LinkOutlined>
                        </ContactUsBox>
                    </Boxes>
                    <ImageWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Rocket image"
                            src="../../../images/product-page/section-fourteen/rocket.png"
                            layout="constrained"
                        />
                    </ImageWrapper>
                </Columns>
            </Container>
        </DefaultWrapperDark>
    );
};

export default SectionFourteen;
