import { LinearProgress } from '@mui/material';
import * as React from 'react';
import HubspotForm from 'react-hubspot-form';

function HubSpotFormWrapper() {
    const handleSubmit = (event) => {
        window.dataLayer?.push({
            'event': 'hubspot_modal_form',
            'hs-form-guid': event.formId,
        });
    };

    return (
        <HubspotForm
            loading={<LinearProgress />}
            portalId="8635875"
            formId="698e6716-f38b-4bd5-9105-df9ba220e29b"
            onSubmit={handleSubmit}
        />
    );
}

export default HubSpotFormWrapper;
