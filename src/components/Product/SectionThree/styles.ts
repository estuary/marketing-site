import styled from 'styled-components';

import { globalMaxWidth } from '../../../globalStyles';
import { OutboundLink } from '../../OutboundLink';

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
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 580px) {
        width: 100%;
    }

    .key-features-list {
        display: flex;
        flex-direction: column;
        gap: 62px;
        margin-top: 40px;

        @media (max-width: 1024px) {
            gap: 32px;
        }

        @media (max-width: 810px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, auto);
            gap: 24px;
            margin-top: 0;
            align-items: stretch;
        }

        @media (max-width: 580px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            width: 100%;
        }
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

const keyFeatureOffset = '-84px';
const middleKeyFeatureOffset = '24px';

export const KeyFeaturesListLeft = styled.div`
    @media (min-width: 811px) {
        & > div:first-child {
            margin-right: ${keyFeatureOffset};
        }

        & > div:nth-child(3) {
            margin-right: ${middleKeyFeatureOffset};
        }

        & > div:last-child {
            margin-right: ${keyFeatureOffset};
        }
    }
`;

export const KeyFeaturesListRight = styled.div`
    @media (min-width: 811px) {
        & > div:first-child {
            margin-left: ${keyFeatureOffset};
        }

        & > div:nth-child(3) {
            margin-left: ${middleKeyFeatureOffset};
        }

        & > div:last-child {
            margin-left: ${keyFeatureOffset};
        }
    }
`;

export const TooltipLink = styled(OutboundLink)`
    text-decoration: none;
    color: #b7c6dd;

    &:hover {
        text-underline-offset: 4px;
        text-decoration: underline;
    }
`;
