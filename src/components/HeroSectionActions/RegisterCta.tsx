import React from 'react';
import { OutboundLinkFilled } from '../OutboundLink';
import { dashboardRegisterUrl } from '../../../shared';

function RegisterCta() {
    return (
        <OutboundLinkFilled href={dashboardRegisterUrl} target="_blank">
            Build a Pipeline
        </OutboundLinkFilled>
    );
}

export default RegisterCta;
