import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';
import VectorImage from '../../../images/lp-connector/take-a-tour/background.png';

export const Wrapper = styled.section`
    ${sectionTopBottomPadding}
    background-color: #f9fafc;
`;

export const Container = styled.div`
    ${globalMaxWidth}

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const ContainerLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-image: url(${VectorImage});
    background-position: center center;
    background-repeat: no-repeat;
    max-width: 100%;
    height: auto;
    width: 100%;
    padding: 80px 0;
`;

export const EstuaryProductVideo = styled(ReactPlayer)`
    max-height: 325px;
    max-width: 547px;
`;

export const VideoPreviewContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 547px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    gap: 40px;
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
`;
