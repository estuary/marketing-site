import styled from 'styled-components';
import { globalMaxWidth } from '../../../globalStyles';

export const Container = styled.div`
    ${globalMaxWidth};
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
    color: #5072eb;
    margin: 0 0 12px 0;

    @media (max-width: 810px) {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 33.6px;
    }
`;

export const Slide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0;
    height: 100%;

    @media (max-width: 900px) {
        padding: 32px 0;
    }
`;

export const SlideTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 28.8px;
    text-align: center;
    text-transform: uppercase;
    margin: 2% 48px 16px 48px;
    color: #5072eb;
`;

export const SlideDescription = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    margin: 0;
    max-width: 980px;
    color: #04192b;

    @media (max-width: 810px) {
        font-size: 1rem;
    }
`;

export const TabletImageWrapper = styled.div`
    margin-top: 4.5%;

    @media (max-width: 425px), (min-width: 811px) {
        display: none;
    }
`;

export const DesktopImageWrapper = styled.div`
    @media (max-width: 810px) {
        display: none;
    }
`;

export const MobileImageWrapper = styled.div`
    @media (min-width: 426px) {
        display: none;
    }
`;
