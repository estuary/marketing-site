import * as React from 'react';
import { LinearProgress } from '@mui/material';
import HubspotForm from 'react-hubspot-form';

function HubSpotFormWrapper() {
    return (
        <HubspotForm
            loading={<LinearProgress />}
            portalId="8635875"
            formId="698e6716-f38b-4bd5-9105-df9ba220e29b"
            onSubmit={() => {}} //This is blank on purpose. Just here so an error is not thrown
        />
    );
}

export default HubSpotFormWrapper;
