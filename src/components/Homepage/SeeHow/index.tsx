import * as React from 'react';
import { dashboardRegisterUrl, webinarsUrl } from '../../../../shared';
import Container from '../../Container';
import { OutboundLinkFilled, OutboundLinkOutlined } from '../../OutboundLink';
import { LinkOutlined } from '../../../globalStyles';
import {
    buttonsWrapper,
    hubspotButton,
    baseButtonStyling,
    wrapper,
} from './styles.module.less';

const SeeHow = () => {
    return (
        <section className={wrapper}>
            <Container isVertical>
                <h2>
                    <span>SEE HOW </span>
                    <span>ESTUARY CAN WORK FOR YOU AND YOUR DATA</span>
                </h2>
                <div className={buttonsWrapper}>
                    <OutboundLinkFilled
                        href={dashboardRegisterUrl}
                        target="_blank"
                        className={baseButtonStyling}
                    >
                        Try Now
                    </OutboundLinkFilled>
                    <OutboundLinkOutlined href={webinarsUrl} target="_blank">
                        Watch Demo
                    </OutboundLinkOutlined>
                    <LinkOutlined href="/contact-us/" className={hubspotButton}>
                        Contact Us
                    </LinkOutlined>
                </div>
            </Container>
        </section>
    );
};

export default SeeHow;
