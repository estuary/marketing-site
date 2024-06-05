import CircleIcon from '@mui/icons-material/Circle';
import styled from 'styled-components';

export const Container = styled.div`
    ul,
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;

export const Viewport = styled.ul`
    display: flex;
    align-items: center;
    gap: 48px;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
`;

export const Slide = styled.li`
    position: relative;
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
    counter-increment: item;
    margin: 0 100px;
    scroll-snap-align: center;
`;

export const Navigation = styled.div`
    text-align: center;
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
`;

export const Dots = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0;
`;

export const DotWrapper = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0;
`;

export const Dot = styled(CircleIcon)`
    cursor: pointer;
`;

export const Arrow = styled.button`
    background-color: transparent;
    border: 2px solid #5072eb;
    border-radius: 4px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:disabled {
        border-color: #5072eb80;
    }
`;
