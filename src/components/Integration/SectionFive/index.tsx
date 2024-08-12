import React from 'react';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import FlowDemoVideo from '../../FlowDemoVideo';
import { OutboundLinkFilled } from '../../OutboundLink';
import { LinkOutlined } from '../../../globalStyles';
import {
    buttonsWrapper,
    container,
    description,
    title,
} from './styles.module.less';

const SectionFive = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <div className={container}>
                <h2 className={title}>
                    <span>ESTUARY FLOW</span> IN ACTION
                </h2>
                <p className={description}>
                    See how to build end-to-end pipelines using no-code
                    connectors in minutes. Estuary Flow does the rest.
                </p>
                <FlowDemoVideo />
                <div className={buttonsWrapper}>
                    <OutboundLinkFilled //TODO: move the styles of this button to LESS
                        href="https://dashboard.estuary.dev/register"
                        target="_blank"
                    >
                        Try Now
                    </OutboundLinkFilled>
                    <LinkOutlined href="/contact-us" theme="dark">
                        Contact Us
                    </LinkOutlined>
                </div>
            </div>
        </section>
    );
};

export default SectionFive;
