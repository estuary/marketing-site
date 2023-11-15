import * as React from "react"

import HubspotForm from "react-hubspot-form"
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const HubspotModal = ({ open, onClose, portalId, formId }) => {
    return (
        <Dialog
            open={open}
            onClose={() => onClose()}
            keepMounted
            fullWidth
            className="hubspot-modal-container"
        >
            <DialogTitle style={{ display: 'flex', justifyContent: 'end' }}>
                <IconButton onClick={() => onClose()}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <HubspotForm portalId={portalId} formId={formId} />
            </DialogContent>
        </Dialog>
    )
}

export default HubspotModal
