import styled from 'styled-components';

import { globalMaxWidth } from '../../../globalStyles';

export const Container = styled.section`
    ${globalMaxWidth};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

export const KeyFeaturesWrapper = styled.div`
    display: flex;
    gap: 32px;
    align-items: center;

    @media (max-width: 810px) {
        flex-direction: column;
    }

    @media (max-width: 520px) {
        width: 100%;
    }
`;

export const ImageWrapper = styled.div`
    max-width: 392px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 810px) {
        max-width: 213px;
        margin-top: 0;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
    margin: 0;
    color: #5072eb;

    @media (max-width: 810px) {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 33.6px;
        margin: 0;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    max-width: 900px;
    margin: 24px 0 0 0;
    color: #ffffff;

    @media (max-width: 810px) {
        font-size: 1rem;
    }
`;

export const baseKeyFeaturesListStyling = `
    display: flex;
    flex-direction: column;
    gap: 62px;
    margin-top: 40px;

    @media (max-width: 810px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 24px; 
        margin-top: 0;
    }

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        width: 100%;
    }
`;

export const KeyFeaturesListLeft = styled.div`
    ${baseKeyFeaturesListStyling};
    align-items: end;

    @media (min-width: 811px) {
        & > div:first-child {
            margin-right: -48px;
        }

        & > div:last-child {
            margin-right: -48px;
        }
    }
`;

export const KeyFeaturesListRight = styled.div`
    ${baseKeyFeaturesListStyling};
    align-items: start;

    @media (min-width: 811px) {
        & > div:first-child {
            margin-left: -48px;
        }

        & > div:last-child {
            margin-left: -48px;
        }
    }
`;