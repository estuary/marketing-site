import {
    FormControl,
    OutlinedInput,
    Slider,
    styled as muiStyled,
} from '@mui/material';
import styled from 'styled-components';
import { ButtonFilled } from '../../globalStyles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    border: 1px solid #d5ddf8;
    border-radius: 16px;
    padding: 28px;
    background-color: #fff;
    min-height: 697px;

    .sub-section-title {
        font-size: 1rem;
        font-weight: 700;
        line-height: 19.2px;
        color: #47506d;
    }

    .highlighted-card {
        background-color: #5072eb12;
        border: 1px solid #5072eb;
        border-radius: 16px;
        padding: 16px 32px;
        color: #5072eb;
        display: flex;
        flex-direction: column;
    }
`;

export const PricingSlider = muiStyled(Slider)(() => {
    return {
        'color': '#5272EB',
        'width': '100%',
        'borderRadius': 3,
        'boxSizing': 'border-box',

        '& .MuiSlider-thumb': {
            'height': 28,
            'width': 28,
            'backgroundColor': '#5272EB',
            'boxShadow': '0px 2px 7px rgba(0, 0, 0, 0.25)',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: '0px 2px 7px rgba(0, 0, 0, 0.25)',
            },
            '&:before': {
                display: 'none',
            },
        },
        '& .MuiSlider-track': {
            height: 6,
        },
        '& .MuiSlider-rail': {
            color: '#B9C7F7',
            opacity: 1,
            height: 6,
            width: '101%',
            borderRadius: 3,
            left: 0,
        },
        '& .MuiSlider-markLabel': {
            'fontFamily': '"Inter", sans-serif',
            'top': '-60px',
            'fontSize': '1.25rem',
            'fontWeight': 500,
            'color': '#47506D',

            '@media (max-width: 1200px)': {
                fontSize: '1rem',
            },

            '@media (max-width: 540px)': {
                fontSize: '0.875rem',
            },

            '@media (max-width: 400px)': {
                fontSize: '0.75rem',
            },
        },
        '& > .MuiSlider-mark': {
            color: '#5072EB50',
            backgroundColor: '#5072EB50 !important',
            height: '15px',
            width: '2.5px',
            top: '-12px',
        },
        '& > .MuiSlider-mark:nth-of-type(5n + 3)': {
            height: '24px',
            top: '-17px',
        },
    };
});

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
    padding: 8px 0 60px 0;

    @media (max-width: 425px) {
        flex-direction: column;
        gap: 16px;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 333px;
`;

export const GbInput = styled(OutlinedInput)`
    font-family: var(--font-family);
    color: #47506d;
    font-weight: 500;
    height: 52px;
    max-width: 119px;
    border: 1px solid #d7dce5;
    border-radius: 4px;

    @media (max-width: 425px) {
        max-width: 100%;
        width: 100%;
    }
`;

export const Description = styled.p`
    color: '#47506d';
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
`;

export const SliderWrapper = styled.div`
    width: 100%;
    max-height: 32px;
    max-width: 90%;
    margin: 0 auto;
`;

export const EstuaryPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    gap: 24px;
    min-height: 169px;

    @media (max-width: 1024px) {
        flex-wrap: wrap;
    }

    @media (max-width: 525px) {
        gap: 32px;
        padding: 0;
    }

    @media (max-width: 325px) {
        gap: 16px;
        padding: 0;
    }
`;

export const PriceComparisons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Comparisons = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) or ((min-width: 1025px) and (max-width: 1400px)) {
        flex-wrap: wrap;
        gap: 8px;
    }
`;

export const BrandWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    flex-wrap: wrap;

    @media (max-width: 525px) {
        gap: 4px;
        max-width: 100%;
    }

    .highlighted-brand-price {
        font-size: 1.25rem;

        span {
            font-weight: 600;
            font-size: 2rem;
            line-height: 38.4px;
        }
    }
`;

export const BrandName = styled.span`
    color: '#04192b';
    font-weight: 400;
    font-size: 1rem;

    @media (max-width: 425px) {
        font-size: 0.875rem;
    }
`;

export const BrandPrice = styled.span`
    color: #47506d;
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
    display: inline-block;
    white-space: nowrap;
    text-align: center;

    span {
        color: #04192b;
    }

    @media (max-width: 425px) {
        font-size: 0.875rem;
    }
`;

export const BrandDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const Detail = styled.div`
    font-size: 0.875rem;
    color: #47506d;
    line-height: 16.8px;

    span {
        font-weight: 600;
    }
`;

export const ConnectorsCounter = styled.div`
    display: flex;
    gap: 28px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 425px) {
        flex-direction: column;
    }
`;

export const Selector = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
`;

export const CountInputWrapper = styled.div`
    display: flex;
`;

const BaseButtonsStyling = `
  width: 52px;
  height: 52px;
  padding: 0;

  @media (max-width: 425px) {
        min-width: 52px;
        min-height: 52px;
    }
`;

export const ButtonMinus = styled(ButtonFilled)`
    ${BaseButtonsStyling}
`;

export const ButtonPlus = styled(ButtonFilled)`
    ${BaseButtonsStyling}
`;

export const Form = styled(FormControl)`
    max-width: 85px;

    @media (max-width: 425px) {
        max-width: 100%;
    }
`;

export const CountInput = styled(OutlinedInput)`
    font-family: var(--font-family);
    max-width: 85px;
    height: 52px;
    border: 0;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    box-shadow: none;

    @media (max-width: 1280px) {
        font-size: 1rem;
    }

    @media (max-width: 425px) {
        max-width: 100%;
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    border: 1px solid #d5ddf8;
`;
