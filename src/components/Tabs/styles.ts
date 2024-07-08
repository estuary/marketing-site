import styled from 'styled-components';

export const TabContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TabList = styled.div`
    display: flex;
    cursor: pointer;
`;

export const Tab = styled.div<{ $isActive: boolean }>`
    padding: 10px 20px;
    background-color: transparent;
    border-bottom: ${({ $isActive }) =>
        $isActive ? '2px solid #5072EB' : '2px solid #D7DCE5'};
    transition: border 150ms ease-in-out;
    width: 100%;
    text-align: center;

    & > span {
        font-family: 'Inter', sans-serif;
        color: ${({ $isActive }) => ($isActive ? '#5072EB' : '#D7DCE5')};
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 24px;
    }
`;
