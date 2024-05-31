import { styled } from 'styled-components';
import { globalMaxWidth } from '../../../globalStyles';

interface ContainerProps {
    show?: boolean;
}

export const Wrapper = styled.div<ContainerProps>`
    width: 100%;
    background-color: #04192b;
    position: fixed;
    top: 116px;
    z-index: 10;
    display: ${(props) => (props.show ? 'flex' : 'none')};
    flex-direction: column;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px 7px 15px 7px rgba(0, 0, 0, 0.07);
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
`;

export const Divider = styled.div`
    ${globalMaxWidth};

    background-clip: content-box;
    background-color: #1b3465;
    width: 100%;
    height: 1px;
`;
