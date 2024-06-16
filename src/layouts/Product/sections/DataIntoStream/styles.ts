import styled from 'styled-components';
import { globalMaxWidth } from '../../../../globalStyles';

export const Container = styled.section`
    ${globalMaxWidth};
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 810px) {
        margin: 16px;
    }
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 48px;
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
    color: #04192b;

    @media (max-width: 810px) {
        font-size: 1rem;
    }
`;

export const Slide = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
`;

export const SlideImageWrapper = styled.div`
    max-width: 1216px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const SlideImageWrapperRelative = styled(SlideImageWrapper)`
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const SlideTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 28.8px;
    text-align: center;
    text-transform: uppercase;
    margin: 40px 48px 16px 48px;
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

export const FlowStepTransformHoverBlock = styled.div`
    position: absolute;
    width: 12%;
    height: 16%;
    left: 50%;
    transform: translateX(-50%);
    top: 24%;
    border-radius: 48px;
`;

export const FlowStepReplayHoverBlock = styled.div`
    position: absolute;
    width: 10%;
    height: 24%;
    left: 54%;
    top: 38.5%;
    border-radius: 48px;
`;

export const FlowStepStreamHoverBlock = styled.div`
    position: absolute;
    width: 10%;
    height: 24%;
    right: 54%;
    top: 38.5%;
    border-radius: 48px;
`;

export const FlowStepStoreHoverBlock = styled.div`
    position: absolute;
    width: 12%;
    height: 16%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 24%;
    border-radius: 48px;
`;
