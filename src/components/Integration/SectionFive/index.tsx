import React from 'react';
import { outlinedButton } from '../../../globalStyles/buttons.module.less';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import FlowDemoVideo from '../../FlowDemoVideo';
import OpenHubspotModal from '../../HubSpot/OpenModal';
import { OutboundLinkFilled } from '../../OutboundLink';
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
                    <OpenHubspotModal
                        buttonLabel="Contact Us"
                        buttonId="integration-section-five-hubspot"
                        buttonClass={outlinedButton}
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionFive;
