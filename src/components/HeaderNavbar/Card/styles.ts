import styled from 'styled-components';
import { globalMaxWidth } from '../../../globalStyles';

export const Wrapper = styled.div`
    width: 100%;
    background-color: #04192b;
    flex-direction: column;

    @media (min-width: 1024px) {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        top: 116px;
    }
`;

export const Container = styled.div`
    ${globalMaxWidth};

    font-family: 'Inter', sans-serif;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 38px;
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #04192b;
    width: 100%;

    @media (max-height: 700px) {
        overflow: auto;
        max-height: 85vh;
    }

    @media (max-height: 425px) {
        max-height: 60vh;
    }

    @media (max-width: 1023px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
    }

    @media (max-width: 570px) {
        gap: 8px;
        grid-template-columns: 1fr;
    }
`;

export const Divider = styled.div`
    ${globalMaxWidth};

    background-clip: content-box;
    background-color: #1b3465;
    width: 100%;
    height: 1px;

    @media (max-width: 1024px) {
        margin: 12px 0;
    }

    @media (max-width: 1023px) {
        padding: 0;
    }

    @media (max-width: 570px) {
        display: none;
    }
`;
