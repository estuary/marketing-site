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

export const MenuBackground = styled.div<ContainerProps>`
    ${BaseMenuStyling};
    width: 100vw;
    height: 100vh;
    background-color: #00000099;
    top: 116px;
    display: ${(props) => (props.$show ? 'flex' : 'none')};
`;

export const Wrapper = styled.div`
    ${BaseMenuStyling};
    width: 100%;
    background-color: #04192b;
    z-index: 10;
    flex-direction: column;
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

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 630px) {
        grid-template-columns: 1fr;
    }
`;

export const Divider = styled.div`
    ${globalMaxWidth};

    background-clip: content-box;
    background-color: #1b3465;
    width: 100%;
    height: 1px;
`;
