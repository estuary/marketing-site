import { FormControl, OutlinedInput, Slider, styled as muiStyled } from "@mui/material"
import styled from "styled-components"
import { ButtonFilled } from "../../globalStyles"

export const PricingSlider = muiStyled(Slider)({
  color: "#5272EB",
  width: "100%",
  paddingTop: "18px !important",
  borderRadius: 3,
  boxSizing: "border-box",

  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    backgroundColor: "#5272EB",
    boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.25)",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.25)",
    },
    "&:before": {
      display: "none",
    },
  },
  '& .MuiSlider-track': {
    height: 8,
  },
  '& .MuiSlider-rail': {
    color: '#B9C7F7',
    opacity: 1,
    height: 8,
    width: '101%',
    borderRadius: 3,
    left: 0,
  },
  '& .MuiSlider-mark': {
    color: '#D9D9D9',
    backgroundColor: '#D9D9D9 !important',
    height: '15px',
    width: '3px',
    top: '6%',
  },
  '& .MuiSlider-markLabel': {
    top: "-32px",
    fontSize: "1.25rem",
    fontWeight: 500,
    color: "#47506D",
    fontFamily: "Inter, sans-serif",

    '@media (max-width: 425px)': {
      fontSize: '0.875rem',
    }
  }
})

export const CalculatorTitle = styled.h3`
  color: #5072EB;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`

export const CalculatorSubtitle = styled.p`
  color: #47506D;
  margin: 0;
  padding: 8px 0 60px 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
`

export const SliderWrapper = styled.div`
  width: 100%;

  @media (max-width: 525px) {
    padding: 0 20px;
  }
`

export const ComparisonWrapper = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 32px;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: 525px) {
    gap: 32px;
    padding: 0;
  }

  @media (max-width: 325px) {
    gap: 16px;
    padding: 0;
  }
`

export const BrandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 180px;

  &:first-child {
    background-color: #5072EB12;
    border: 1px solid #5072EB;
    border-radius: 16px;
    padding: 16px 32px;
    color: #5072EB;

    span {
      color: #04192B;
      
      &:first-child {
        font-size: 1.5rem;
        font-weight: 700;
      }
    }

    h4 {
      color: #5072EB;
    }
  }

  @media (max-width: 525px) {
    gap: 4px;
  }
`

export const BrandName = styled.h4`
  color: #04192B;
  font-weight: 700;
  line-height: 22px;
  font-size: 1rem;
  margin: 0;

  @media (max-width: 425px) {
    font-size: 0.875rem;
  }
`

export const BrandPrice = styled.span`
  color: #47506D;
  font-size: 1rem;
  font-weight: 400;
  line-height: 22px;
  display: inline-block;
  white-space: nowrap;
  text-align: center;

  span {
    font-weight: 700;
    color: #04192B;
  }

  @media (max-width: 425px) {
    font-size: 0.875rem;
  }
`

export const ConnectorsCounterWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`

export const CountInputWrapper = styled.div`
  display: flex;
`

const BaseButtonsStyling = `
  width: 52px;
  height: 52px;
  padding: 0;
`

export const ButtonMinus = styled(ButtonFilled)`
  ${BaseButtonsStyling}
`

export const ButtonPlus = styled(ButtonFilled)`
  ${BaseButtonsStyling}
`

export const Form = styled(FormControl)`
  & > .MuiInputLabel-outlined {
    color: #04192B;
    width: 100%;
    text-align: center;
    left: 4.5%;
  };
`

export const CountInput = styled(OutlinedInput)`
  max-width: 185px;
  height: 52px;
  border: 0;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  box-shadow: none;

  & > .MuiOutlinedInput-notchedOutline {
    border-color: #D7DCE5;
    text-align: center;
    padding: 0 8%;

    @media (min-width: 425px) {
      padding: 0 24px;
    }
  }
`
