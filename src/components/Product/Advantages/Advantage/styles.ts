import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    gap: 20px;
`;

export const IconWrapper = styled.div`
    width: 32px;
    height: 32px;
`;

export const Title = styled.p<{ $isDarkTheme: boolean }>`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    color: ${(props) => (props.$isDarkTheme ? '#FFFFFF' : '#47506d')};
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    & > a {
        color: #5072eb;
        font-weight: 500;

        &:hover {
            color: #5072eb;
            text-underline-offset: 4px;
            text-decoration: underline;
        }
    }
`;
