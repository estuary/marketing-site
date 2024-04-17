import CloseIcon from "@mui/icons-material/Close"
import {
  Dialog,
  DialogContent,
  IconButton
} from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import HubSpotFormWrapper from "./HubSpot/FormWrapper"

function BlogPostPopupModal({
  buttonLabel,
  buttonClass,
  buttonId,
}: {
  buttonLabel: string
  buttonClass: string
  buttonId: string
}) {
  const [openDialog, setOpenDialog] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setOpenDialog(true);
    }, 60000)
  }, []);

  return (
    <Dialog open={openDialog} fullWidth style={{ zIndex: 10000 }} PaperProps={{ className: "blog-post-popup-modal" }}>
      <DialogContent className="blog-post-popup-modal-content">
        <div className="popup-left-column">
          <span>
            How to deploy change data capture (CDC) & streaming ETL in minutes using Estuary flow
          </span>
          <StaticImage src="../images/blog-post-popup-img.svg" alt="Blog post popup image" />
        </div>
        <div className="popup-right-column">
          <IconButton onClick={() => setOpenDialog(false)}>
            <CloseIcon htmlColor="#04192B" fontSize="large" />
          </IconButton>
          {/* TODO: Implement the form in the HubSpot */}
          <HubSpotFormWrapper />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BlogPostPopupModal
