import styled from 'styled-components';
import {
    ButtonFilled,
    globalMaxWidth,
    sectionTopBottomPadding,
} from '../../../globalStyles';
import overlayVectorLeft from '../../../images/overlay-vector-left.png';

export const Container = styled.section`
    background-color: #04192b;
    background-image: url(${overlayVectorLeft});
    background-repeat: no-repeat;
    background-position: center -680px;
    width: 100%;
`;

export const Wrapper = styled.div`
    ${globalMaxWidth}
    ${sectionTopBottomPadding}
    
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    color: #5072eb;
    text-transform: uppercase;
    margin: 0;

    span {
        color: #ffffff;
    }
`;

export const Description = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    color: #ffffff;
    margin: 24px 0 60px 0;
    max-width: 720px;
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 1rem;
    }

    @media (max-width: 980px) {
        max-width: 480px;
    }
`;

export const VideoWrapper = styled.div`
    background-color: #5072eb40;
    border: 1px solid #5072eb99;
    border-radius: 24px;
    max-height: calc(560px + 18px + 18px);
    height: 560px;
    width: 80%;
    padding: 18px;
    position: relative;

    @media (max-width: 1024px) {
        width: 100%;
        height: 460px;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 360px;
    }

    @media (max-width: 425px) {
        width: 100%;
        height: 300px;
    }
`;

export const VideoTextAndButton = styled.div`
    font-family: 'Inter', sans-serif;
    position: absolute;
    font-size: 1.5rem;
    line-height: 30px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    color: #ffffff;
    padding: 0 60px;
    text-align: center;

    @media (max-width: 425px) {
        font-size: 0.875rem;
        gap: 16px;
        line-height: 18px;
    }
`;

export const Button = styled(ButtonFilled)`
    padding: 16px 24px;
    gap: 16px;

    @media (max-width: 425px) {
        font-size: 0.875rem;
    }
`;
