import CloseIcon from "@mui/icons-material/Close";
import { Dialog } from "@mui/material";
import styled from "styled-components";
import VectorImage from "../../images/blog-post-popup-background-image.png";

export const Container = styled(Dialog)`
  & .MuiPaper-root {
    box-shadow: none;
    border-radius: 16px;
    max-width: 1280px;
    width: 70%;
    display: grid;
    grid-template-columns: 0.6fr 0.4fr;
    padding: 0;
    font-family: "Inter", sans-serif;
    color: #ffffff;
    margin-top: 124px;
    max-height: calc(100% - 160px);
    min-height: 100px;

    @media (max-width: 1024px) {
      width: 90%;
    }

    @media (max-width: 780px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;
    }
  }
`

export const LeftColumn = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;
  background-color: #5072eb;
  background-image: url(${VectorImage});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  @media (max-width: 1024px) {
    padding-bottom: 32px;
  }

  @media (max-width: 425px) {
    padding-bottom: 0;
  }
`

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 37px;
  background-color: #ffffff;

  @media (max-width: 780px) {
    padding: 24px;
  }
`

export const TitleWrapper = styled.span`
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 50px 96px -54px 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    margin: 64px 48px 0 48px;
    margin-bottom: -32px;
  }
`

export const WebinarTitle = styled.span`
  font-size: 1.25rem;

  @media (max-width: 1280px) {
    font-size: 1rem;
  }
`

export const Subtitle = styled.span`
  font-size: 1rem;
  font-weight: 400;
  line-height: 19.2px;
  text-align: center;
  margin: 32px 0;
  color: #47506d;

  @media (max-width: 1280px) {
    font-size: 0.875rem;
  }

  @media (max-width: 425px) {
    margin: 16px 0;
  }
`

export const WatchNowLink = styled.a`
  color: #ffffff;
  background-color: #5072eb;
  padding: 16px 24px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 16px;
  text-align: center;
  cursor: pointer;
`

export const NoThanksButton = styled.button`
  color: #47506d;
  background-color: transparent;
  padding: 16px 24px;
  width: 100%;
  border: 2px solid #5072eb;
  border-radius: 4px;
  cursor: pointer;
`

export const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
  fill: red;

  @media (max-width: 780px) {
    right: 12px;
    top: 12px;
  }
`

export const XIcon = styled(CloseIcon)`
  color: #04192b;

  @media (max-width: 780px) {
    color: #ffffff;
  }
`
