import ReactPlayer from 'react-player';
import styled from 'styled-components';
import BubblesCircleBackground from '../../../components/BackgroundImages/BubblesCircleBackground';

export const ContainerLeft = styled(BubblesCircleBackground)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0;
`;

export const EstuaryProductVideo = styled(ReactPlayer)`
    max-height: 325px;
    max-width: 547px;

    div {
        position: relative;
        z-index: 1;
    }
`;

export const VideoPreviewContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 547px;
    display: flex;
    justify-content: center;
    align-items: center;

    .estuary-product-video-thumbnail {
        width: auto;
        height: 100%;
    }
`;

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
`;

export const ContainerIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 8%;
    margin-bottom: 16px;

    @media (min-width: 1280px) {
        gap: 60px;
    }

    @media (min-width: 1024px) {
        display: flex;
        justify-content: left;
    }
`;

export const Title = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    margin: 0;

    @media (min-width: 1280px) {
        font-size: 60px;
        line-height: 72px;
    }
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    margin: 0;

    @media (min-width: 1280px) {
        font-size: 20px;
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 1280px) {
        gap: 24px;
        flex-direction: row;
        margin-top: 20px;
    }

    .take-a-tour-button {
        white-space: nowrap;

        @media (max-width: 1280px) {
            width: 100%;
        }

        @media (max-width: 425px) {
            white-space: wrap;
        }
    }
`;
