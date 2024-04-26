import { Dialog } from "@mui/material";
import styled from "styled-components";
import VectorImage from "../../images/blog-post-popup-background-image.png";

export const Popup = styled(Dialog)`
  & .MuiPaper-root {
    box-shadow: none !important;
    border-radius: 16px !important;
    max-width: 1280px !important;
    width: 70% !important;
    background-color: transparent !important;

    @media (max-width: 1024px) {
      width: 90% !important;
    }
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
  border-radius: 16px;
  gap: 19px;
  width: 100%;
  padding: 0 !important;
  font-family: "Inter", sans-serif;
  background-color: #5072eb;
  background-image: url(${VectorImage});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: cover;
  color: #ffffff;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
`

export const LeftColumn = styled.div`
  margin: auto;
  padding-bottom: 10%;

  @media (max-width: 1024px) {
    padding-bottom: 32px;
  }
`

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 132px 57px 132px 0;

  @media (max-width: 768px) {
    padding: 57px;
    padding-top: 0;
    height: fit-content;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`

export const Title = styled.span`
  font-size: 2rem;
  line-height: 38.4px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 1280px) {
    font-size: 1.5rem;
    line-height: 28px;
  }
`

export const Subtitle = styled.span`
  font-size: 1rem;
  font-weight: 400;
  line-height: 19.2px;
  text-align: center;
  margin: 24px 0 35px 0;

  @media (max-width: 1280px) {
    font-size: 0.875rem;
  }
`

export const WatchNowLink = styled.a`
  color: #5072eb;
  background-color: #fff;
  padding: 16px 24px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 16px;
  text-align: center;
  cursor: pointer;
`

export const WatchLaterButton = styled.button`
  color: #fff;
  background-color: transparent;
  padding: 16px 24px;
  width: 100%;
  border: 2px solid #fff;
  border-radius: 4px;
  cursor: pointer;
`

export const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 27px;
  top: 27px;

  @media (max-width: 768px) {
    right: 12px;
    top: 12px;
  }
`
