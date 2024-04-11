import CloseIcon from "@mui/icons-material/Close"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton
} from "@mui/material"
import * as React from "react"
import HubSpotFormWrapper from "./FormWrapper"

interface OpenHubspotModalProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonLabel: string
    buttonClass?: string
    buttonId: string
}

function OpenHubspotModal({
    buttonLabel,
    buttonClass,
    buttonId,
    ...rest
}: OpenHubspotModalProps) {
    const [openDialog, setOpenDialog] = React.useState(false)

    return (
        <>
            <button
                id={buttonId}
                className={buttonClass}
                onClick={() => {
                    setOpenDialog(true)
                }}
                {...rest}
            >
                {buttonLabel}
            </button>
            <Dialog open={openDialog} fullWidth style={{ zIndex: 10000 }}>
                <DialogTitle
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    {buttonLabel}
                    <IconButton onClick={() => setOpenDialog(false)}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <HubSpotFormWrapper />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default OpenHubspotModal
