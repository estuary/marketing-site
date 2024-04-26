import CloseIcon from "@mui/icons-material/Close"
import {
  IconButton
} from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { CloseButtonWrapper, Container, LeftColumn, Popup, RightColumn, Subtitle, Title, WatchLaterButton, WatchNowLink } from "./styles"

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
    }, 1000) // Should be 60000
  }, []);

  return (
    <Popup open={openDialog} fullWidth>
      <Container>
        <CloseButtonWrapper>
          <IconButton onClick={() => setOpenDialog(false)}>
            <CloseIcon htmlColor="#ffffff" fontSize="large" />
          </IconButton>
        </CloseButtonWrapper>
        <LeftColumn>
          <StaticImage src="../../images/blog-post-popup-image.png" alt="Blog post popup image" placeholder="none" loading="eager" />
        </LeftColumn>
        <RightColumn>
          <Title>
            Webinar: Change Data Capture 101
          </Title>
          <Subtitle>
            Learn to stand up real-time CDC in minutes
          </Subtitle>
          <WatchNowLink>
            Watch now
          </WatchNowLink>
          <WatchLaterButton>
            Watch later
          </WatchLaterButton>
        </RightColumn>
      </Container>
    </Popup>
  )
}

export default BlogPostPopupModal
