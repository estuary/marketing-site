import * as React from 'react';
import { dashboardRegisterUrl, webinarsUrl } from '../../../../shared';
import { OutboundLinkOutlined } from '../../OutboundLink';
import { ButtonFilled, Buttons, HubspotButton, Title, Wrapper } from './styles';

const SeeHow = () => {
    return (
        <Wrapper>
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
                <HubspotButton href="/contact-us" target="_blank">
                    Contact Us
                </HubspotButton>
            </Buttons>
        </Wrapper>
    );
};

export default SeeHow;
