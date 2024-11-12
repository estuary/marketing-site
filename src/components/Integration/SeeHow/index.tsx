import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import OpenHubspotModal from '../../HubSpot/OpenModal';
import { OutboundLinkFilled } from '../../OutboundLink';
import { dashboardRegisterUrl } from '../../../../shared';
import { buttonsWrapper, container, title } from './styles.module.less';

const SeeHow = () => {
    return (
        <section className={defaultWrapperGrey}>
            <div className={container}>
                <h2 className={title}>
                    <span>SEE HOW</span> ESTUARY CAN WORK FOR YOU AND YOUR DATA
                </h2>
                <div className={buttonsWrapper}>
                    <OutboundLinkFilled //TODO: move the styles of this button to LESS
                        href={dashboardRegisterUrl}
                        target="_blank"
                    >
                        Try Now
                    </OutboundLinkFilled>
                    <OpenHubspotModal //TODO: move the styles of this button to LESS
                        buttonLabel="Let Us Show You"
                        buttonId="integration-section-five-hubspot"
                        formId="698e6716-f38b-4bd5-9105-df9ba220e29b"
                    />
                </div>
            </div>
        </section>
    );
};

export default SeeHow;
