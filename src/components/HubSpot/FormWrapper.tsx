import { LinearProgress } from '@mui/material';
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

interface HubSpotFormWrapperProps {
    formId: string;
}

function HubSpotFormWrapper({ formId }: HubSpotFormWrapperProps) {
    return (
        <HubspotForm
            loading={<LinearProgress />}
            portalId="8635875"
            formId={formId}
            onSubmit={handleSubmit}
            onReady={handleLoad}
        />
    );
}

export default HubSpotFormWrapper;
