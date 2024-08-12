import * as React from 'react';
import { webinarsUrl } from '../../../../shared';
import { OutboundLinkOutlined } from '../../OutboundLink';
import { ButtonFilled, Buttons, HubspotButton, Title, Wrapper } from './styles';

const SectionTen = () => {
    return (
        <Wrapper>
            <Title>
                <span>SEE HOW </span>
                <span>ESTUARY CAN WORK FOR YOU AND YOUR DATA</span>
            </Title>
            <Buttons>
                <ButtonFilled
                    href="https://dashboard.estuary.dev/register"
                    target="_blank"
                >
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

export default SectionTen;
