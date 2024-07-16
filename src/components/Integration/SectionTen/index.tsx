import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import OpenHubspotModal from '../../HubSpot/OpenModal';
import { OutboundLinkFilled } from '../../OutboundLink';
import {
    buttonsWrapper,
    container,
    outlinedButton,
    title,
} from './styles.module.less';

const SectionTen = () => {
    return (
        <section className={defaultWrapperGrey}>
            <div className={container}>
                <h2 className={title}>
                    <span>SEE HOW</span> ESTUARY CAN WORK FOR YOU AND YOUR DATA
                </h2>
                <div className={buttonsWrapper}>
                    <OutboundLinkFilled //TODO: move the styles of this button to LESS
                        href="https://dashboard.estuary.dev/register"
                        target="_blank"
                    >
                        Try Now
                    </OutboundLinkFilled>
                    <OpenHubspotModal //TODO: move the styles of this button to LESS
                        buttonLabel="Let Us Show You"
                        buttonId="integration-section-five-hubspot"
                        buttonClass={outlinedButton}
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionTen;
