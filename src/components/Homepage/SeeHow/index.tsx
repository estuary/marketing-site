import * as React from 'react';
import { dashboardRegisterUrl, webinarsUrl } from '../../../../shared';
import { OutboundLinkOutlined } from '../../OutboundLink';
import Container from '../../Container';
import { ButtonFilled, Buttons, HubspotButton, Title, Wrapper } from './styles';

const SeeHow = () => {
    return (
        <Wrapper>
            <Container isVertical>
                <Title>
                    <span>SEE HOW </span>
                    <span>ESTUARY CAN WORK FOR YOU AND YOUR DATA</span>
                </Title>
                <Buttons>
                    <ButtonFilled href={dashboardRegisterUrl} target="_blank">
                        Try Now
                    </ButtonFilled>
                    <OutboundLinkOutlined href={webinarsUrl} target="_blank">
                        Watch Demo
                    </OutboundLinkOutlined>
                    <HubspotButton href="/contact-us/">
                        Contact Us
                    </HubspotButton>
                </Buttons>
            </Container>
        </Wrapper>
    );
};

export default SeeHow;
