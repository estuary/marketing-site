import styled from 'styled-components';

export const Container = styled.div`
    height: 74px;
    width: 100%;
    display: flex;
    overflow-y: hidden;

    @media (max-width: 425px) {
        padding: 0;
        margin-top: 48px;
        margin-bottom: 40px;
    }

    .slick-slider {
        @media (min-width: 801px) {
            padding-right: 100px;
        }
        @media (max-width: 800px) {
            padding-right: 20px;
        }
    }
    .slick-slide {
        margin: 0px 10px;
        overflow: visible !important;
        max-width: 190px !important;
    }
    .slick-track {
        overflow: visible !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .slick-list {
        height: 80px;
    }
    .gatsby-image-wrapper {
        height: 60px !important;
        display: flex !important;
        align-items: center;
        justify-content: space-between;
    }
    .rfm-marquee,
    .rfm-initial-child-container {
        display: flex;
        align-items: center;
        gap: 120px;
        overflow-y: hidden;

        @media (max-width: 810px) {
            gap: 42px;
        }
    }
    .rfm-marquee-container {
        overflow-y: hidden;
    }
    .rfm-marquee:first-child {
        margin-right: 100px;
    }
    .rfm-initial-child-container {
        padding-right: 60px;
    }
`;

export const VanityLogo = styled.div`
    display: flex !important;
    align-items: center;
    justify-content: space-between;

    div {
        height: 60px;
    }

    img,
    svg {
        width: 100%;
        max-width: 140px;
        height: 60px;
        opacity: 1;
        visibility: visible;
        object-fit: contain !important;
    }

    .slick-slide {
        width: 130px !important;
    }
`;