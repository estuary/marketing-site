import {
  IconButton
} from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { webinarsUrl } from "../../../shared"
import EstuaryLogo from "../../svgs/colored-logo.svg"
import { CloseButtonWrapper, Container, LeftColumn, NoThanksButton, RightColumn, Subtitle, TitleWrapper, WatchNowLink, WebinarTitle, XIcon } from "./styles"

function BlogPostPopupModal() {
  const [openDialog, setOpenDialog] = React.useState(false);

  const hasOpened = React.useRef(false);

  const handleExitIntent = React.useCallback((e: MouseEvent) => {
    if (!hasOpened.current && e.clientY <= 0) {
      setOpenDialog(true);
      hasOpened.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('mouseout', handleExitIntent);

    return () => {
      window.removeEventListener('mouseout', handleExitIntent);
    };
  }, [handleExitIntent]);

  function handlePopupClose() {
    setOpenDialog(false);
  }

  return (
    <Container open={openDialog} fullWidth>
      <CloseButtonWrapper>
        <IconButton onClick={handlePopupClose}>
          <XIcon fontSize="large" />
        </IconButton>
      </CloseButtonWrapper>
      <LeftColumn>
        <TitleWrapper>
          <span>
            Webinar:
          </span>
          <WebinarTitle>
            Change Data Capture 101
          </WebinarTitle>
        </TitleWrapper>
        <StaticImage src="../../images/blog-post-popup-image.png" alt="Change data capture webinar" placeholder="none" loading="eager" />
      </LeftColumn>
      <RightColumn>
        <EstuaryLogo width={38} />
        <Subtitle>
          Learn how to stand up no-code real-time CDC pipelines in minutes with Estuary
        </Subtitle>
        <WatchNowLink href={webinarsUrl} target="_blank">
          Watch now
        </WatchNowLink>
        <NoThanksButton onClick={handlePopupClose}>
          No, thanks
        </NoThanksButton>
      </RightColumn>
    </Container>
  )
}

export default BlogPostPopupModal
