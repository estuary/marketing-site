import CloseIcon from "@mui/icons-material/Close";
import { Dialog } from "@mui/material";
import styled from "styled-components";
import VectorImage from "../../images/blog-post-popup-background-image.png";

export const Container = styled(Dialog)`
  & .MuiPaper-root {
    box-shadow: none !important;
    border-radius: 16px !important;
    max-width: 1280px !important;
    width: 70% !important;
    display: grid;
    grid-template-columns: 0.6fr 0.4fr;
    padding: 0 !important;
    font-family: "Inter", sans-serif;
    color: #ffffff;

    @media (max-width: 1024px) {
      width: 90% !important;
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
`

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 132px 37px;
  background-color: #ffffff;

  @media (max-width: 780px) {
    padding: 24px;
  }
`

export const Title = styled.span`
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 50px 96px 0 96px;
  margin-bottom: -54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;

  & > span:nth-child(2) {
    font-size: 1.25rem;
  }

  @media (max-width: 1280px) {
    font-size: 1.5rem;

    & > span:nth-child(2) {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    margin: 64px 72px 0 72px;
    margin-bottom: -32px;
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
