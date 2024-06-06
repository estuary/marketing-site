import { styled } from 'styled-components';
import { globalMaxWidth } from '../../../globalStyles';

interface ContainerProps {
    $show?: boolean;
}

const BaseMenuStyling = `
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
`;

export const MenuBackgroundDesktop = styled.div<ContainerProps>`
    @media (min-width: 1024px) {
        ${BaseMenuStyling};
        width: 100vw;
        height: 100vh;
        top: 116px;
        display: ${(props) => (props.$show ? 'flex' : 'none')};
        background-color: #00000099;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    background-color: #04192b;
    flex-direction: column;

    @media (min-width: 1024px) {
        ${BaseMenuStyling};
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

    @media (max-height: 1024px) {
        margin: 12px 0;
    }

    @media (max-width: 570px) {
        display: none;
    }
`;
