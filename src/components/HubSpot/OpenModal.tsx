import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { ButtonHTMLAttributes } from 'react';
import ButtonOutlinedPrimary from '../LinksAndButtons/ButtonOutlinedPrimary';
import HubSpotFormWrapper from './FormWrapper';

interface OpenHubspotModalProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonLabel: string;
    buttonId: string;
    formId: string;
    theme?: 'light' | 'dark';
}

function OpenHubspotModal({
    buttonLabel,
    buttonId,
    formId,
    theme = 'light',
    ...rest
}: OpenHubspotModalProps) {
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <>
            <ButtonOutlinedPrimary
                id={buttonId}
                onClick={() => {
                    setOpenDialog(true);
                }}
                variant={theme === 'dark' ? 'primary' : 'secondary'}
                {...rest}
            >
                {buttonLabel}
            </ButtonOutlinedPrimary>
            <Dialog open={openDialog} fullWidth style={{ zIndex: 10000 }}>
                <DialogTitle
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    {buttonLabel}
                    <IconButton onClick={() => setOpenDialog(false)}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <HubSpotFormWrapper formId={formId} />
                </DialogContent>
            </Dialog>
        </>
    );
}

export default OpenHubspotModal;
