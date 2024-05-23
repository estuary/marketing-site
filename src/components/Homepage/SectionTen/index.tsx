import * as React from 'react';
import { webinarsUrl } from '../../../../shared';
import {
    ButtonFilled,
    ButtonOutlined,
    Buttons,
    Container,
    HubspotButton,
    Title,
    Wrapper,
} from './styles';

const SectionTen = () => {
    return (
        <Container>
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
                    <ButtonOutlined href={webinarsUrl} target="_blank">
                        Watch Demo
                    </ButtonOutlined>
                    <HubspotButton
                        buttonLabel="Contact Us"
                        buttonId="section-ten-hubspot"
                    />
                </Buttons>
            </Wrapper>
        </Container>
    );
};

export default SectionTen;
