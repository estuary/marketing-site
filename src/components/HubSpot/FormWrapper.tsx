import { LinearProgress } from '@mui/material';
import * as React from 'react';
import HubspotForm from 'react-hubspot-form';

const handleSubmit = (event) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'hubspot_form_submitted', {
            'hs-form-guid': event.formId,
        });
    }
};

const handleLoad = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'hubspot_form_loaded');
    }
};

function HubSpotFormWrapper() {
    return (
        <HubspotForm
            loading={<LinearProgress />}
            portalId="8635875"
            formId="698e6716-f38b-4bd5-9105-df9ba220e29b"
            onSubmit={handleSubmit}
            onReady={handleLoad}
        />
    );
}

export default HubSpotFormWrapper;
