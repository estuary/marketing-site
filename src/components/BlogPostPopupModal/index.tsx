import {
  IconButton
} from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { webinarsUrl } from "../../../shared"
import EstuaryLogo from "../../svgs/colored-logo.svg"
import { CloseButtonWrapper, Container, LeftColumn, NoThanksButton, RightColumn, Subtitle, Title, WatchNowLink, XIcon } from "./styles"

function BlogPostPopupModal() {
  const [openDialog, setOpenDialog] = React.useState(false);

  React.useEffect(() => {
    let hasOpened = false;

    const handleExitIntent = (e) => {
      if (!hasOpened && e.clientY <= 0) {
        setOpenDialog(true);
        hasOpened = true;
      }
    };

    window.addEventListener('mouseout', handleExitIntent);

    return () => {
      window.removeEventListener('mouseout', handleExitIntent);
    };
  }, []);

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
        <Title>
          <span>
            Webinar:
          </span>
          <span>
            Change Data Capture 101
          </span>
        </Title>
        <StaticImage src="../../images/blog-post-popup-image.png" alt="Blog post popup image" placeholder="none" loading="eager" />
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
