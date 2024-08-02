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
                <HubspotButton
                    buttonLabel="Contact Us"
                    buttonId="section-ten-hubspot"
                />
            </Buttons>
        </Wrapper>
    );
};

export default SectionTen;
